package net.yorksolutions.editorbe;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.lang.NonNull;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;

@Service
public class ProcessService {

    private ProcessRepository repository;
    private final RestTemplate rest;

    @Autowired
    public ProcessService(@NonNull ProcessRepository repository) {
        this.repository = repository;
        rest = new RestTemplate();
    }

    public ProcessService(ProcessRepository repository,
                          RestTemplate rest) {
        this.repository = repository;
        this.rest = rest;
    }

    public Process createProcess(String title) {
        if (repository.findProcessByTitle(title).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }

        return repository.save(new Process(title));
    }

    public Iterable<Process> getProcessList() {
        return repository.findAll();
    }

    public void deleteProcess(String title) {
        if (repository.findProcessByTitle(title).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Process process = repository.findProcessByTitle(title).get();
        repository.delete(process);
    }

    //TODO edit functionality
    public Process editProcess(String title, String edit) {
        if (repository.findProcessByTitle(title).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        }
        Process process = repository.findProcessByTitle(title).get();
        process.title = edit;
        return repository.save(process);
    }

}
