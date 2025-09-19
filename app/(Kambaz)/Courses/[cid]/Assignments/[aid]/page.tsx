export default function AssignmentEditor() {
  return (
    <div id="wd-assignments-editor">
      <label htmlFor="wd-name"><b>Assignment Name</b></label> <br /><br />
      <input id="wd-name" defaultValue="A1 - ENV + HTML" /><br /><br />
      <textarea id="wd-description" cols={50} rows = {10}>
        The assignment is available online Submit a link to the landing page of
      </textarea>
      <br /> <br />
      <table>
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-points">Points</label>
          </td>
          <td>
            <input id="wd-points" defaultValue={100} />
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-group">Assignment Group</label>
            </td>
            <td>
            <select id="wd-group">
                <option value="ASSIGNMENTS">ASSIGNMENTS</option>
                <option value="QUIZZES">QUIZZES</option>
                <option value="EXAMS">EXAMS</option>
                <option value="PROJECT">PROJECT</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-display-grade-as">Display Grade as</label>
            </td>
            <td>
            <select id="wd-display-grade-as">
                <option value="PERCENTAGE">PERCENTAGE</option>
                <option value="LETTER">LETTER</option>
                <option value="POINTS">POINTS</option>
            </select>
          </td>
        </tr>
        <br />
        <tr>
          <td align="right" valign="top">
            <label htmlFor="wd-submission-type">Submission Type</label>
            </td>
            <td>
            <select id="wd-submission-type">
                <option value="Online">Online</option>
                <option value="In-Person">In-Person</option>
            </select>
            <br /><br />
            <label>Online Entry Options</label> <br />
            <input type="checkbox" name="entry-option" id="wd-text-entry"/>
            <label htmlFor="wd-text-entry">Text Entry</label><br/>

            <input type="checkbox" name="entry-option" id="wd-website-url"/>
            <label htmlFor="wd-website-url">Website URL</label><br/>

            <input type="checkbox" name="entry-option" id="wd-media-recordings"/>
            <label htmlFor="wd-media-recordings">Media Recordings</label><br/>

            <input type="checkbox" name="entry-option" id="wd-student-annotation"/>
            <label htmlFor="wd-student-annotation">Student Annotation</label><br/>

            <input type="checkbox" name="entry-option" id="wd-file-upload"/>
            <label htmlFor="wd-file-upload">File Uploads</label><br/>

            <br /><br />
            <label htmlFor="wd-assign-to">Assign To</label><br />
            <input placeholder="Everyone" id="wd-assign-to" /> <br />
          
            <br />
            <label htmlFor="wd-due-date">Due</label><br/>
            <input type="date"
            defaultValue="2024-05-13"
            id="wd-due-date"/><br/>

            <br />
            <table>
            <tr>
                <td>
                <label htmlFor="wd-available-from">Available from</label><br/>
                <input type="date"
                        defaultValue="2024-05-06"
                        id="wd-available-from"/>
                </td>
                <td style={{ paddingLeft: '1px' }}>
                <label htmlFor="wd-available-until">Until</label><br/>
                <input type="date"
                        defaultValue="2024-05-20"
                        id="wd-available-until"/>
                </td>
            </tr>
            </table>
          </td> 
        </tr>
      </table>
      <hr />
      <table align="right">
            <tr>
                <td>
                    <button>Cancel</button>
                </td>
                <td>
                    <button>Save</button>
                </td>
            </tr>
        </table>
    </div>
);}
