package net.yorksolutions.followerbe;

import com.fasterxml.jackson.annotation.JsonProperty;


import javax.persistence.*;
import java.util.Objects;

@Entity
public class Response {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    Long id;

    @JsonProperty
    Long processId;

    @JsonProperty
    Long stageId;

    @JsonProperty
    String processTitle;

    @JsonProperty
    String prompt;

    @JsonProperty
    String response;

    public Response() {

    }

    public Response(Long id, Long processId, Long stageId, String processTitle, String prompt, String response) {
        this.id = id;
        this.processId = processId;
        this.stageId = stageId;
        this.processTitle = processTitle;
        this.prompt = prompt;
        this.response = response;
    }

    public Response(Long processId, Long stageId, String processTitle, String prompt, String response) {
        this.processId = processId;
        this.stageId = stageId;
        this.processTitle = processTitle;
        this.prompt = prompt;
        this.response = response;
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Response that = (Response) o;
        return Objects.equals(id, that.id)
                && Objects.equals(processId, that.processId)
                && Objects.equals(stageId, that.stageId)
                && Objects.equals(processTitle, that.processTitle)
                && Objects.equals(prompt, that.prompt)
                && Objects.equals(response, that.response);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, processId, stageId, processTitle, prompt, response);
    }


    @Override
    public String toString() {
        return "Response{" +
                "id=" + id +
                ", processId=" + processId +
                ", stageId=" + stageId +
                ", processTitle='" + processTitle + '\'' +
                ", prompt='" + prompt + '\'' +
                ", response='" + response + '\'' +
                '}';
    }
}
