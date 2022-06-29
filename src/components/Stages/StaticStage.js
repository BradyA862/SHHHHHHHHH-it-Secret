import {Card, Row} from "react-bootstrap";

export default function StaticStage({
                                        staticStage,
                                    }) {

    if (staticStage.booleanQuestion) {
        return <Card>
            <Card.Header>Prompt: {staticStage.booleanQuestion}</Card.Header>
            <Card.Body>
                <Row>
                Option 1: {staticStage.answer1}
                </Row>
                <Row>
                Option 2: {staticStage.answer2}
                </Row>
            </Card.Body>
        </Card>
    }
    else if (staticStage.multipleChoiceQuestion) {
        return <Card>
            <Card.Header>Prompt: {staticStage.multipleChoiceQuestion}</Card.Header>
            <Card.Body>
                <Row>
                    Option 1: {staticStage.answer1}
                </Row>
                <Row>
                    Option 2: {staticStage.answer2}
                </Row>
                <Row>
                    Option 3: {staticStage.answer3}
                </Row>
            </Card.Body>
        </Card>
    }
    else if (staticStage.textQuestion) {
        return <Card>
            <Card.Header>Prompt: {staticStage.textQuestion}</Card.Header>
        </Card>
    }
}