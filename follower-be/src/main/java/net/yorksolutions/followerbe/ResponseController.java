package net.yorksolutions.followerbe;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.lang.NonNull;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/")
public class ResponseController {

    private ResponseService service;

    @Autowired
    public ResponseController(@NonNull ResponseService service) {
        this.service = service;
    }

    public void setService(ResponseService service) {
        this.service = service;
    }

    @GetMapping("/addResponse")
    @CrossOrigin
    public void addResponse(@RequestParam Long processId,@RequestParam Long stageId,@RequestParam String processTitle,
                            @RequestParam String prompt,@RequestParam String response) {
        service.addResponse(processId, stageId, processTitle, prompt, response);
    }

    @GetMapping("/getResponses")
    @CrossOrigin
    public Iterable<Response> getResponses() {
        return service.getAllResponses();
    }
}
