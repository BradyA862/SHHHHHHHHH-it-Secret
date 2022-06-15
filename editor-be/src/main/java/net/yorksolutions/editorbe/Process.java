package net.yorksolutions.editorbe;

import com.fasterxml.jackson.annotation.JsonProperty;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Objects;

@Entity
public class Process {
    @Id
    @JsonProperty
    String title;

    public Process(String title) {
        this.title = title;
    }

    public Process() {

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
        return Objects.equals(title, that.title);
    }

    @Override
    public int hashCode(){return Objects.hash(title);}

    @Override
    public String toString() {
        return "Process{" +
                "title=" + title + '\'' +
                '}';

    }

    public void setTitle(String title) {
        this.title = title;
    }
}
