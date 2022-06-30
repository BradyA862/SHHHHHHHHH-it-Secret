package net.yorksolutions.followerbe;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;






@Service
public class ResponseService {

    final ResponseRepository responseRepository;


    @Autowired
    public ResponseService(ResponseRepository responseRepository) {
        this.responseRepository = responseRepository;
    }

    public void addResponse(Long processId, Long stageId, String processTitle, String prompt, String response) {
        responseRepository.save(new Response(processId, stageId, processTitle, prompt, response));
    }

    public Iterable<Response> getAllResponses() {
        return responseRepository.findAll();
    }


}
