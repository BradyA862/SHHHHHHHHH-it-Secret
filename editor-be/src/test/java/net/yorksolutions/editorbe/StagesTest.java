package net.yorksolutions.editorbe;

import com.fasterxml.jackson.core.JsonProcessingException;
import com.fasterxml.jackson.databind.ObjectMapper;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.*;

class StagesTest {

    Stages stages = new Stages();

    @Test
    void it_Should_Call_Second_Constructor_With_Correct_Values() {
        String textQuestion = "textQuestion";
        String booleanQuestion = "booleanQuestion";
        String multipleChoiceQuestion = "multipleChoiceQuestion";
        String answer1 = "answer1";
        String answer2 = "answer2";
        String answer3 = "answer3";
        Stages stage = new Stages(booleanQuestion, multipleChoiceQuestion, textQuestion,
                answer1, answer2, answer3);
        assertEquals(stage.booleanQuestion, "booleanQuestion");
        assertEquals(stage.multipleChoiceQuestion, "multipleChoiceQuestion");
        assertEquals(stage.textQuestion, "textQuestion");
        assertEquals(stage.answer1, "answer1");
        assertEquals(stage.answer2, "answer2");
        assertEquals(stage.answer3, "answer3");
    }

    @Test
    void it_Should_Return_Data_As_String() throws JsonProcessingException {
        String textQuestion = "text";
        String booleanQuestion = "boolean";
        String multipleChoiceQuestion = "multiple";
        String answer1 = "apple1";
        String answer2 = "banana2";
        String answer3 = "orange3";
        Stages stage = new Stages(booleanQuestion, multipleChoiceQuestion, textQuestion,
                answer1, answer2, answer3);
        ObjectMapper mapper = new ObjectMapper();
        String stagesJsonFormat = mapper.writeValueAsString(stage);
        assertEquals("{\"id\":null,\"booleanQuestion\":\"boolean\",\"multipleChoiceQuestion\":\"multiple\"" +
                ",\"textQuestion\":\"text\",\"answer1\":\"apple1\",\"answer2\":\"banana2\",\"answer3\":\"orange3\"}", stagesJsonFormat);
    }

}