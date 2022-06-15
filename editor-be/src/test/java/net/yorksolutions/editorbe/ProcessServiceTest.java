package net.yorksolutions.editorbe;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.when;

@ExtendWith(MockitoExtension.class)
class ProcessServiceTest {

    @InjectMocks
    @Spy
    ProcessService service;

    @Mock
    ProcessRepository repository;

    @Mock
    RestTemplate rest;

    @Test
    void it_Should_Save_New_Process_When_Title_Is_Not_Taken() {
        final String title = "some title";
        when(repository.findProcessByTitle(title)).thenReturn(Optional.empty());
        ArgumentCaptor<Process> captor = ArgumentCaptor.forClass(Process.class);
        when(repository.save(captor.capture())).thenReturn(new Process(title));
        assertDoesNotThrow(() -> service.createProcess(title));
        assertEquals(new Process(title), captor.getValue());
    }

    @Test
    void it_Should_Throw_When_Title_Is_Taken(){
        final String title = "some title";
        when(repository.findProcessByTitle(title)).thenReturn(Optional.of(new Process()));
        assertThrows(ResponseStatusException.class, () -> service.createProcess(title));
    }

    @Test
    void it_Should_Not_Throw_When_deleteProcess_With_Exisisting_Title() {
        final String title = "some title";
        when(repository.findProcessByTitle(title)).thenReturn(Optional.of(new Process(title)));
        assertDoesNotThrow(() -> service.deleteProcess(title));
    }

    @Test
    void it_Should_Not_Throw_When_editProcess_With_Exisisting_Title() {
        final String title = "some title";
        when(repository.findProcessByTitle(title)).thenReturn(Optional.of(new Process(title)));
        assertDoesNotThrow(() -> service.editProcess(title));
    }


}