"use client";

import { Button, Col, Container, Form, Row } from "react-bootstrap";

export default function AssignmentEditor() {
  return (
    <div className="ms-5" style={{ width: "600px" }}>
      <Container>
        <Form>
          <Row className="mb-3">
            <Form.Group>
              <Form.Label htmlFor="wd-name">Assignment Name</Form.Label>
              <Form.Control defaultValue="A1 - ENV + HTMLx" id="wd-name" />
            </Form.Group>
          </Row>
          <Row className="mb-3">
            <Form.Group>
              <Form.Control
                as="textarea"
                className="w-100"
                style={{ height: "400px" }}
                defaultValue="The assignment is available online Submit a link to the landing page of your website"
              />
            </Form.Group>
          </Row>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              column
              htmlFor="wd-points"
              className="pt-2 fs-6 text-end"
            >
              Points
            </Form.Label>
            <Col sm={8}>
              <Form.Control defaultValue={100} id="wd-points" />
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as={Col}
              className="pt-2 fs-6 text-end"
              htmlFor="wd-group"
            >
              Assignment Group
            </Form.Label>
            <Col xs={8}>
              <Form.Select defaultValue="ASSIGNMENTS" id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Form.Group as={Row} className="mb-3">
            <Form.Label
              as={Col}
              className="pt-2 fs-6 text-end"
              htmlFor="wd-display-grade-as"
            >
              Display Grade as
            </Form.Label>
            <Col xs="8">
              <Form.Select id="wd-display-grade-as">
                <option>Percentage</option>
              </Form.Select>
            </Col>
          </Form.Group>
          <Row className="mb-3">
            <Col className="text-end">
              <span>Submission Type</span>
            </Col>
            <Col xs={8}>
              <div className="d-flex flex-column border p-3">
                <Form.Group className="mb-4">
                  <Form.Select defaultValue="Online">
                    <option value="Online">Online</option>
                  </Form.Select>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="fw-bold">
                    Online Entry Options
                  </Form.Label>
                  <Form.Check
                    type="radio"
                    // label="Text Entry"
                    className="mb-2"
                    name="1"
                  />Text Entry
                  <Form.Check
                    type="radio"
                    label="Website URL"
                    className="mb-2"
                    name="1"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Media Recordings"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="Student Annotation"
                    className="mb-2"
                  />
                  <Form.Check
                    type="checkbox"
                    label="File Uploads"
                    className="mb-2"
                  />
                </Form.Group>
              </div>
            </Col>
          </Row>
          <Row className="mb-3">
            <Col className="text-end">
              <span>Assign</span>
            </Col>
            <Col xs={8}>
              <div className="d-flex flex-column border p-3">
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Assign to</Form.Label>
                  <Form.Control defaultValue="Everyone"/>
                </Form.Group>
                <Form.Group className="mb-4">
                  <Form.Label className="fw-bold">Due</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
                <div className="d-flex justify-content-between">
                <Form.Group>
                  <Form.Label className="fw-bold">Available from</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
                <Form.Group>
                  <Form.Label className="fw-bold">Until</Form.Label>
                  <Form.Control type="date"/>
                </Form.Group>
                </div>
              </div>
            </Col>
          </Row>
        </Form>
      </Container>
      <br />
      <hr />
      <Button variant="danger" className="float-end p-2 fs-5">Save</Button>
      <Button variant="secondary" className="float-end p-2 fs-5 me-2">Cancel</Button>
    </div>
    // <div id="wd-assignments-editor">
    //   <label htmlFor="wd-name">
    //     <strong>Assignment Name</strong>
    //   </label>
    //   <br />
    //   <input id="wd-name" defaultValue="A1 - ENV + HTML" />
    //   <br />
    //   <br />
    //   <textarea
    //     id="wd-description"
    //     defaultValue={
    //       "The assignment is available online Submit a link to the landing page of"
    //     }
    //   />
    //   <br />
    //   <table>
    //     <tbody>
    //       <tr>
    //         <td align="right" valign="top">
    //           <label htmlFor="wd-points">Points</label>
    //         </td>
    //         <td>
    //           <input id="wd-points" defaultValue={100} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td align="right" valign="top">
    //           <label htmlFor="wd-group">Assignment Group</label>
    //         </td>
    //         <td>
    //           <select className="wd-group">
    //             <option>Assignments</option>
    //           </select>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td align="right" valign="top">
    //           <label htmlFor="wd-display-grade-as">Display Grade as </label>
    //         </td>
    //         <td>
    //           <select className="wd-display-grade-as">
    //             <option>Percentage</option>
    //           </select>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td align="right" valign="top">
    //           <label htmlFor="wd-submission-type">Submission Type</label>
    //         </td>
    //         <td>
    //           <select className="wd-submission-type">
    //             <option>Online</option>
    //           </select>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <label htmlFor="wd-online-entry-options">
    //             Online Entry Options
    //           </label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input type="checkbox" id="wd-text-entry" />
    //           <label htmlFor="wd-text-entry">Text Entry</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input type="checkbox" id="wd-website-url" />
    //           <label htmlFor="wd-website-url">Website URL</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input type="checkbox" id="wd-media-recordings" />
    //           <label htmlFor="wd-media-recordings">Media Recordings</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input type="checkbox" id="wd-student-annotation" />
    //           <label htmlFor="wd-student-annotation">Student Annotation</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input type="checkbox" id="wd-file-upload" />
    //           <label htmlFor="wd-file-upload">File Uploads</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td align="right" valign="top">
    //           <label>Assign</label>
    //         </td>
    //         <td>
    //           <label htmlFor="wd-assign-to">Assign to</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input id="wd-assign-to" defaultValue={"Everyone"} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <label htmlFor="wd-due-date">Due</label>
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <input id="wd-due-date" type="date" defaultValue={"2024-05-13"} />
    //         </td>
    //       </tr>
    //       <tr>
    //         <td></td>
    //         <td>
    //           <table>
    //             <tbody>
    //               <tr>
    //                 <td align="left" width={100}>
    //                   <label htmlFor="wd-available-from">Available from</label>
    //                 </td>
    //                 <td align="right" width={100}>
    //                   <label htmlFor="wd-available-until">Until</label>
    //                 </td>
    //               </tr>
    //               <tr>
    //                 <td>
    //                   <input
    //                     id="wd-available-from"
    //                     type="date"
    //                     defaultValue={"2024-05-06"}
    //                   />
    //                 </td>
    //                 <td>
    //                   <input
    //                     id="wd-available-until"
    //                     type="date"
    //                     defaultValue={"2024-05-20"}
    //                   />
    //                 </td>
    //               </tr>
    //             </tbody>
    //           </table>
    //         </td>
    //       </tr>
    //     </tbody>
    //   </table>
    // </div>
  );
}
