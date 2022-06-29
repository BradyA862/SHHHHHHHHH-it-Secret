package net.yorksolutions.editorbe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class ProcessController {
    public ProcessService service;

    @Autowired
    public ProcessController(@NonNull ProcessService service) {
        this.service = service;
    }

    @GetMapping("/createProcess")
    @CrossOrigin
    Process createProcess(@RequestParam String title) {
        return service.createProcess(title);
    }

    @GetMapping("/getList")
    @CrossOrigin
    Iterable<Process> getList() {
        return service.getProcessList();
    }

    @GetMapping("/deleteProcess")
    @CrossOrigin
    void deleteProcess(@RequestParam Long id) {service.deleteProcess(id);}

    @GetMapping("/editProcess")
    @CrossOrigin
    Process editProc(@RequestParam Long id, @RequestParam String edit) {
        return service.editProcess(id, edit);
    }

    @GetMapping("/addTextStage")
    @CrossOrigin
    void addTextStage(@RequestParam Long id, @RequestParam String textQuestion) {
        service.addTextStage(id, textQuestion);
    }

    @GetMapping("/addBooleanStage")
    @CrossOrigin
    void addBooleanStage(@RequestParam Long id, @RequestParam String booleanQuestion, @RequestParam String answer1,
                         @RequestParam String answer2) {
        service.addBooleanStage(id, booleanQuestion, answer1, answer2);
    }

    @GetMapping("/addMultStage")
    @CrossOrigin
    void addStage(@RequestParam Long id, @RequestParam String multChoiceQuestion, @RequestParam String answer1,
                  @RequestParam String answer2, @RequestParam String answer3) {
        service.addMultStage(id, multChoiceQuestion, answer1, answer2, answer3);
    }

    @GetMapping("/editBooleanStage")
    @CrossOrigin
    Stages editBooleanStage(@RequestParam Long id, @RequestParam String editPrompt,
                            @RequestParam String editAnswer1, @RequestParam String editAnswer2) {
        return service.editBooleanStage(id, editPrompt, editAnswer1, editAnswer2);
    }

    @GetMapping("/editMultStage")
    @CrossOrigin
    Stages editMultStage(@RequestParam Long id, @RequestParam String editPrompt, @RequestParam String editAnswer1,
                         @RequestParam String editAnswer2, @RequestParam String editAnswer3) {
        return service.editMultStage(id, editPrompt, editAnswer1, editAnswer2, editAnswer3);
    }

    @GetMapping("/deleteStage")
    @CrossOrigin
    void deleteStage(@RequestParam Long id) {service.deleteStage(id);}

    public void setService(ProcessService service) {
        this.service = service;
    }
}
