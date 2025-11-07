"use client";

import { Assignment } from "@/app/(Kambaz)/Database";
import { AppRootState } from "@/app/(Kambaz)/store";
import { useParams } from "next/navigation";
import { useSelector } from "react-redux";
import { Container, Row, Col } from "react-bootstrap";

export default function AssignmentDisplay() {
    const { cid, aid } = useParams();
    const { assignments } = useSelector((state: AppRootState) => state.assignmentReducer);
    const assignmentId = Array.isArray(aid) ? aid[0] : aid;
    const assignment = assignments.find((assign: Assignment) => assign._id === assignmentId);

    const formatDate = (dateString: string) => {
        if (!dateString) return "Not set";
        const date = new Date(dateString);
        return date.toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric"
        });
    };

    if (!assignment) {
        return (
            <Container className="mt-4">
                <h3>Assignment not found</h3>
            </Container>
        );
    }

    return (
        <Container className="mt-4">
            <Row className="mb-4">
                <Col>
                    <h2>{assignment.title}</h2>
                </Col>
            </Row>
            
            <Row className="mb-3">
                <Col>
                    <h5>Description</h5>
                    <p>{assignment.description}</p>
                </Col>
            </Row>

            <hr />

            <Row className="mb-3">
                <Col md={6}>
                    <h6 className="fw-bold">Points</h6>
                    <p>{assignment.points}</p>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h6 className="fw-bold">Available From</h6>
                    <p>{formatDate(assignment.availableFrom)}</p>
                </Col>
                <Col md={6}>
                    <h6 className="fw-bold">Due Date</h6>
                    <p>{formatDate(assignment.dueDate)}</p>
                </Col>
            </Row>

            <Row className="mb-3">
                <Col md={6}>
                    <h6 className="fw-bold">Available Until</h6>
                    <p>{formatDate(assignment.availableTill)}</p>
                </Col>
            </Row>
        </Container>
    );
}