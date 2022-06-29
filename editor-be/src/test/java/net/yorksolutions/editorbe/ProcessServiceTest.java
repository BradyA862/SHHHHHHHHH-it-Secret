package net.yorksolutions.editorbe;

import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.HttpStatus;
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
    StagesRepository stagesRepository;

    @Mock
    RestTemplate rest;

    @Test
    void it_Should_Save_New_Process_When_Title_Is_Not_Taken() {
        final String title = "some title";
        ArgumentCaptor<Process> captor = ArgumentCaptor.forClass(Process.class);
        when(repository.save(captor.capture())).thenReturn(new Process(title));
        assertDoesNotThrow(() -> service.createProcess(title));
        assertEquals(new Process(title), captor.getValue());

    }

    @Test
    void it_Should_Not_Throw_When_deleteProcess_With_Exisisting_Title() {
        final Long id = 8675309L;
        when(repository.findProcessById(id)).thenReturn(Optional.of(new Process()));
        assertDoesNotThrow(() -> service.deleteProcess(id));
    }

    @Test
    void it_Should_Throw_On_editProcess_If_Process_Does_Not_Exist() {
        final Long id = 8675309L;
        final String edit = "some edit";
        when(repository.findProcessById(id)).thenReturn(Optional.empty());
        final ResponseStatusException exception = assertThrows(ResponseStatusException.class,
                () -> service.editProcess(id, edit));
        assertEquals(HttpStatus.BAD_REQUEST, exception.getStatus());
    }

    @Test
    void it_Should_Not_Throw_On_editProcess_If_Process_Exists() {
        final Long id = 8675309L;
        final String edit = "some edit";
        when(repository.findProcessById(id)).thenReturn(Optional.of(new Process()));
        assertDoesNotThrow(() -> service.editProcess(id, edit));
    }

    @Test
    void it_Should_Save_Changes_On_Edit() {
        final Long id = 8675309L;
        final String edit = "some edit";
        final Process expected = new Process();
        expected.id = id;
        when(repository.findProcessById(id)).thenReturn(Optional.of(expected));
        final var process = service.editProcess(id, edit);
        assertEquals(process, expected);

    }

    @Test
    void it_Should_Save_New_Text_Stage_When_Process_Title_Found() {
        final Long id = 8675309L;
        final String textQuestion = "something";
        final Process process = new Process("mad");
        when(repository.findProcessById(id)).thenReturn(Optional.of((process)));
        ArgumentCaptor<Process> captor = ArgumentCaptor.forClass(Process.class);
        when(repository.save(captor.capture())).thenReturn(process);
        assertDoesNotThrow(() -> service.addTextStage(id, textQuestion));
        assertEquals(process, captor.getValue());

    }

    @Test
    void it_Should_Save_New_Boolean_Stage_When_Process_Title_Found() {
        final Long id = 8675309L;
        final String booleanQuestion = "something";
        final String answer1 = "a";
        final String answer2 = "b";
        final Process process = new Process("mad");
        when(repository.findProcessById(id)).thenReturn(Optional.of((process)));
        ArgumentCaptor<Process> captor = ArgumentCaptor.forClass(Process.class);
        when(repository.save(captor.capture())).thenReturn(process);
        assertDoesNotThrow(() -> service.addBooleanStage(id, booleanQuestion, answer1, answer2));
        assertEquals(process, captor.getValue());

    }

    @Test
    void it_Should_Save_New_Mult_Choice_Stage_When_Process_Title_Found() {
        final Long id = 8675309L;
        final String multChoiceQuestion = "something";
        final String answer1 = "a";
        final String answer2 = "b";
        final String answer3 = "c";
        final Process process = new Process("mad");
        when(repository.findProcessById(id)).thenReturn(Optional.of((process)));
        ArgumentCaptor<Process> captor = ArgumentCaptor.forClass(Process.class);
        when(repository.save(captor.capture())).thenReturn(process);
        assertDoesNotThrow(() -> service.addMultStage(id, multChoiceQuestion, answer1, answer2, answer3));
        assertEquals(process, captor.getValue());
    }

    @Test
    void it_Should_Not_Throw_When_deleteStage_With_Exisisting_id() {
        final Long id = 8675309L;
        when(stagesRepository.findStagesById(id)).thenReturn(Optional.of(new Stages()));
        assertDoesNotThrow(() -> service.deleteStage(id));
    }

    @Test
    void it_Should_Throw_When_deleteStage_Without_Exisisting_id() {
        final Long id = 8675309L;
        when(stagesRepository.findStagesById(id)).thenReturn(Optional.empty());
        assertThrows(ResponseStatusException.class, () -> service.deleteStage(id));
    }



}