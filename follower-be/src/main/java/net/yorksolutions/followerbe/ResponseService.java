package net.yorksolutions.followerbe;

import net.yorksolutions.editorbe.Process;
import net.yorksolutions.editorbe.ProcessRepository;
import net.yorksolutions.editorbe.Stages;
import net.yorksolutions.editorbe.StagesRepository;
import org.springframework.boot.autoconfigure.AutoConfigurationPackage;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import java.util.Optional;


@Configuration
@AutoConfigurationPackage
@ComponentScan("net.yorksolutions.followerbe")

@Service
public class ResponseService {

    final ResponseRepository responseRepository;
    final ProcessRepository processRepository;

    final StagesRepository stagesRepository;

    public ResponseService(ResponseRepository responseRepository, ProcessRepository processRepository,
                           StagesRepository stagesRepository) {
        this.responseRepository = responseRepository;
        this.processRepository = processRepository;
        this.stagesRepository = stagesRepository;
    }

    public Response addResponse(Long processId, Long stageId, String processTitle, String prompt, String response) {
        Optional<Process> processOp = processRepository.findProcessById(processId);
        Optional<Stages> stagesOp = stagesRepository.findStagesById(stageId);
        if (processRepository.findProcessById(processId).isEmpty()) {
            throw new ResponseStatusException(HttpStatus.BAD_REQUEST);
        } else if (stagesRepository.findStagesById(stageId).isPresent()) {
            throw new ResponseStatusException(HttpStatus.CONFLICT);
        }
        else {
            Process process = processOp.get();
            stages
        }

    }


}
