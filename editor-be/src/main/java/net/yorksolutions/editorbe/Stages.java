package net.yorksolutions.editorbe;

import com.fasterxml.jackson.annotation.JsonProperty;


import javax.persistence.*;
import java.util.Objects;



@Entity
public class Stages {

    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    @JsonProperty
    Long id;
    @JsonProperty
    String booleanQuestion;
    @JsonProperty
    String multipleChoiceQuestion;
    @JsonProperty
    String textQuestion;
    @JsonProperty
    String answer1;
    @JsonProperty
    String answer2;
    @JsonProperty
    String answer3;

    @ManyToOne
    @JoinColumn(name = "stages_id")
    Process process;

    public Stages() {

    }

    public Stages(String booleanQuestion, String multipleChoiceQuestion, String textQuestion,
                  String answer1, String answer2, String answer3) {
        this.multipleChoiceQuestion = multipleChoiceQuestion;
        this.booleanQuestion = booleanQuestion;
        this.textQuestion = textQuestion;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
    }

    public Stages(String booleanQuestion, String answer1, String answer2) {
        this.booleanQuestion = booleanQuestion;
        this.answer1 = answer1;
        this.answer2 = answer2;
    }

    public Stages(String textQuestion) {
        this.textQuestion = textQuestion;
    }

    public Stages(String multChoiceQuestion, String answer1, String answer2, String answer3) {
        this.multipleChoiceQuestion = multChoiceQuestion;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;
    }


    @Override
    public boolean equals(Object o) {
        if (this == o) return true;
        if (o == null || getClass() != o.getClass()) return false;
        Stages that = (Stages) o;
        return Objects.equals(id, that.id)
                && Objects.equals(booleanQuestion, that.booleanQuestion)
                && Objects.equals(multipleChoiceQuestion, that.multipleChoiceQuestion)
                && Objects.equals(textQuestion, that.textQuestion)
                && Objects.equals(answer1, that.answer1)
                && Objects.equals(answer2, that.answer2)
                && Objects.equals(answer3, that.answer3);
    }

    @Override
    public int hashCode() {
        return Objects.hash(id, booleanQuestion, multipleChoiceQuestion, textQuestion,
                answer1, answer2, answer3);
    }

    @Override
    public String toString() {
        return "Stages{" +
                "id=" + id +
                ", booleanQuestion='" + booleanQuestion + '\'' +
                ", multipleChoiceQuestion='" + multipleChoiceQuestion + '\'' +
                ", textQuestion='" + textQuestion + '\'' +
                ", answer1='" + answer1 + '\'' +
                ", answer2='" + answer2 + '\'' +
                ", answer3='" + answer3 + '\'' +
                '}';
    }
}
