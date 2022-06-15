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
    void deleteProcess(@RequestParam String title) {service.deleteProcess(title);}

    @GetMapping("/editProcess")
    @CrossOrigin
    void editProcess(@RequestParam String title, @RequestParam String edit) {service.editProcess(title, edit);}

    public void setService(ProcessService service) {
        this.service = service;
    }
}
