import {Card, Col, Row} from "react-bootstrap";

export default function StaticResponse({
                                           staticResponse,
                                       }) {

    return <Card style={{borderWidth: 1, width: 1000}} className={"mb-3"}>
        <Card.Header>
            <Row>
                <Col className="text-start">
                    {staticResponse.id}
                </Col>
                <Col className="text-end">
                    {staticResponse.processTitle}
                </Col>
            </Row>
        </Card.Header>

        <Card.Body>
            <Row>
                <Col>
                    {staticResponse.prompt}
                </Col>
                <Col>
                    {staticResponse.response}
                </Col>
            </Row>
        </Card.Body>
    </Card>

}