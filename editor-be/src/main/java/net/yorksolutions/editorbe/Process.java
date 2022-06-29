package net.yorksolutions.editorbe;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;
import java.util.Objects;

import static javax.persistence.CascadeType.ALL;
@Entity
public class Process {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    @JsonProperty
    Long id;
    @JsonProperty
    String title;




    @OneToMany(cascade = ALL, orphanRemoval = true)
    @JsonProperty
    List<Stages> stages;

    public Process(String title) {
        this.title = title;
        this.stages = new ArrayList<>();
    }
    public Process() {
    }
    public void addStage(Stages stage) {
        stages.add(stage);
    }

    @Override
    public boolean equals(Object o) {
        if (this == o) {
            return true;
        }
        if (o == null || getClass() != o.getClass()) {
            return false;
        }
        Process that = (Process) o;
        return Objects.equals(id, that.id)
                && Objects.equals(title, that.title)
                && Objects.equals(stages, that.stages);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, title, stages);
    }

    @Override
    public String toString() {
        return "Process{" +
                "id=" + id +
                ", title=" + title +
                ", stages=" + stages +
                '\'' + '}';

    }

    public void setTitle(String title) {
        this.title = title;
    }
    public List<Stages> getStages() {
        return stages;
    }
    public void setStages(List<Stages> stages) {
        this.stages = stages;
    }

}
