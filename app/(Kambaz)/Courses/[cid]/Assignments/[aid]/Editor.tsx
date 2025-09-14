export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name">
        <strong>Assignment Name</strong>
      </label>
      <br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" />
      <br />
      <br />
      <textarea
        id="wd-description"
        defaultValue={
          "The assignment is available online Submit a link to the landing page of"
        }
      />
      <br />
      <table>
        <tbody>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-points">Points</label>
            </td>
            <td>
              <input id="wd-points" defaultValue={100} />
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
              <select className="wd-group">
                <option>Assignments</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-display-grade-as">Display Grade as </label>
            </td>
            <td>
              <select className="wd-display-grade-as">
                <option>Percentage</option>
              </select>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
              <select className="wd-submission-type">
                <option>Online</option>
              </select>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-online-entry-options">
                Online Entry Options
              </label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" id="wd-text-entry" />
              <label htmlFor="wd-text-entry">Text Entry</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" id="wd-website-url" />
              <label htmlFor="wd-website-url">Website URL</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" id="wd-media-recordings" />
              <label htmlFor="wd-media-recordings">Media Recordings</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" id="wd-student-annotation" />
              <label htmlFor="wd-student-annotation">Student Annotation</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input type="checkbox" id="wd-file-upload" />
              <label htmlFor="wd-file-upload">File Uploads</label>
            </td>
          </tr>
          <tr>
            <td align="right" valign="top">
              <label>Assign</label>
            </td>
            <td>
              <label htmlFor="wd-assign-to">Assign to</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input id="wd-assign-to" defaultValue={"Everyone"} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <label htmlFor="wd-due-date">Due</label>
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <input id="wd-due-date" type="date" defaultValue={"2024-05-13"} />
            </td>
          </tr>
          <tr>
            <td></td>
            <td>
              <table>
                <tbody>
                  <tr>
                    <td align="left" width={100}>
                      <label htmlFor="wd-available-from">Available from</label>
                    </td>
                    <td align="right" width={100}>
                      <label htmlFor="wd-available-until">Until</label>
                    </td>
                  </tr>
                  <tr>
                    <td>
                      <input
                        id="wd-available-from"
                        type="date"
                        defaultValue={"2024-05-06"}
                      />
                    </td>
                    <td>
                      <input
                        id="wd-available-until"
                        type="date"
                        defaultValue={"2024-05-20"}
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}
