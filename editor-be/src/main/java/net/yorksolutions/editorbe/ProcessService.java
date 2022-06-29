package net.yorksolutions.editorbe;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.List;
import java.util.Optional;

@Service
public class ProcessService {

    private final ProcessRepository repository;
    private final StagesRepository stagesRepository;


    @Autowired
    public ProcessService(@NonNull ProcessRepository repository, StagesRepository stagesRepository) {
        this.repository = repository;
        this.stagesRepository = stagesRepository;
    }

    public Process createProcess(String title) {
        return repository.save(new Process(title));
    }

    public Iterable<Process> getProcessList() {
        return repository.findAll();
    }

    public void deleteProcess(Long id) {
        if (repository.findProcessById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Process process = repository.findProcessById(id).get();
        repository.delete(process);
    }

    public Process editProcess(Long id, String edit) {
        if (repository.findProcessById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Process process = repository.findProcessById(id).get();
        process.title = edit;
        repository.save(process);
        return process;
    }

    public void addTextStage(Long id, String textQuestion) {
        Optional<Process> process = repository.findProcessById(id);
        if (repository.findProcessById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        } else {
            Process process1 = process.get();
            process1.addStage(new Stages(textQuestion));
            repository.save(process1);
        }
    }

    public void addBooleanStage(Long id, String booleanQuestion, String answer1, String answer2) {
        Optional<Process> process = repository.findProcessById(id);
        //repository = processRepository
        if (repository.findProcessById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        } else {
            Process process1 = process.get();
            process1.addStage(new Stages(booleanQuestion, answer1, answer2));
            repository.save(process1);
        }
    }

    public void addMultStage(Long id, String multChoiceQuestion, String answer1, String answer2, String answer3) {
        Optional<Process> process = repository.findProcessById(id);
        if (repository.findProcessById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        } else {
            Process process1 = process.get();
            process1.addStage(new Stages(multChoiceQuestion, answer1, answer2, answer3));
            repository.save(process1);
        }
    }

    public Stages editBooleanStage(Long id, String editPrompt, String editAnswer1, String editAnswer2) {
        Optional<Stages> stage = stagesRepository.findStagesById(id);
        if (stagesRepository.findStagesById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Stages editStage = stage.get();
        editStage.booleanQuestion = editPrompt;
        editStage.answer1 = editAnswer1;
        editStage.answer2 = editAnswer2;
        stagesRepository.save(editStage);
        return editStage;
    }

    public Stages editMultStage(Long id, String editPrompt, String editAnswer1,
                                String editAnswer2, String editAnswer3) {
        Optional<Stages> stage = stagesRepository.findStagesById(id);
        if (stagesRepository.findStagesById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Stages editStage = stage.get();
        editStage.multipleChoiceQuestion = editPrompt;
        editStage.answer1 = editAnswer1;
        editStage.answer2 = editAnswer2;
        editStage.answer3 = editAnswer3;
        stagesRepository.save(editStage); 
        return editStage;
    }

    public void deleteStage(Long id) {
        Optional<Stages> stagesOptional = stagesRepository.findStagesById(id);
        Optional<Process> processOptional = repository.findProcessByStagesId(id);
        if (stagesRepository.findStagesById(id).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Process process = processOptional.get();
        Stages stage = stagesOptional.get();
        process.getStages().remove(stage);
        repository.save(process);
        stagesRepository.delete(stage);
    }


}
