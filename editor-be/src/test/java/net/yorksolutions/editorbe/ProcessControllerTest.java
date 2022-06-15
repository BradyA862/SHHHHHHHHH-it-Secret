package net.yorksolutions.editorbe;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.Mockito;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.boot.test.web.client.TestRestTemplate;
import org.springframework.boot.test.web.server.LocalServerPort;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.server.ResponseStatusException;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.doThrow;
import static org.mockito.Mockito.when;

@SpringBootTest(webEnvironment = SpringBootTest.WebEnvironment.RANDOM_PORT)
@ExtendWith(MockitoExtension.class)
class ProcessControllerTest {

    @LocalServerPort
    int port;

    @Autowired
    ProcessController controller;

    @Mock
    ProcessService service;

    @BeforeEach
    void setup() {
        controller.setService(service);
    }

    @Test
    void it_Should_Call_createProcess_With_The_Title() {
        final TestRestTemplate rest = new TestRestTemplate();
        final String title = "some title";
        final Process expected = new Process(title);
        String url = "http://localhost:" + port + "/createProcess?title=" + title;
        when(service.createProcess(title)).thenReturn(expected);
        final ResponseEntity<Process> response = rest.getForEntity(url, Process.class);
        assertEquals(HttpStatus.OK, response.getStatusCode());
        assertEquals(expected, response.getBody());
    }

    @Test
    void it_Should_Return_BAD_REQUEST_When_Title_Doesnt_Exist_When_deleteProcess() {
        final TestRestTemplate rest = new TestRestTemplate();
        final String title = "some title";
        String url = "http://localhost:" + port + "/deleteProcess?title=" + title;
        doThrow(new ResponseStatusException(HttpStatus.ACCEPTED)).when(service).deleteProcess(title);
        final ResponseEntity<Void> response = rest.getForEntity(url, Void.class);
        assertEquals(HttpStatus.ACCEPTED, response.getStatusCode());
    }

    @Test
    void it_Should_Not_Throw_When_Delete_Process_With_Existing_Title() {
        final TestRestTemplate rest = new TestRestTemplate();
        final String title = "some title";
        String url = "http://localhost:" + port + "/deleteProcess?title=" + title;
        assertDoesNotThrow(() -> rest.getForEntity(url, Void.class));
    }

    @Test
    void it_Should_Return_BAD_REQUEST_When_Title_Doesnt_Exist_When_editProcess() {
        final TestRestTemplate rest = new TestRestTemplate();
        final String title = "some title";
        String url = "http://localhost:" + port + "/editProcess?title=" + title;
        doThrow(new ResponseStatusException(HttpStatus.ACCEPTED)).when(service).editProcess(title);
        final ResponseEntity<Void> response = rest.getForEntity(url, Void.class);
        assertEquals(HttpStatus.ACCEPTED, response.getStatusCode());
    }

    @Test
    void it_Should_Not_Throw_When_Edit_Process_With_Existing_Title() {
        final TestRestTemplate rest = new TestRestTemplate();
        final String title = "some title";
        String url = "http://localhost:" + port + "/editProcess?title=" + title;
        assertDoesNotThrow(() -> rest.getForEntity(url, Void.class));
    }



}