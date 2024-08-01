import React, { useState } from 'react';
import ScrollDialog from "../components/ScrollDialog"; 

function Feedback() {
  const [formSubmitted, setFormSubmitted] = useState(false);

  const handleFormSubmit = (event) => {
    event.preventDefault(); 

    const form = event.target;

    if (form.checkValidity() === false) {
      setFormSubmitted(false);
    } else {
      setFormSubmitted(true);
      alert("Form submitted successfully!");
    }
  };

  return (
    <div>
      <ScrollDialog
        title="Feedback Form"
        buttonText="Give Feedback" 
      >
        <form onSubmit={handleFormSubmit}>
          <p style={{color:"black"}}>1. How would you rate the overall quality and relevance of the course content,
            and how well did it meet your learning expectations?</p><br />
          <input type="radio" name="question1" value="Excellent" required /><label style={{color:"black"}}> Excellent, Exceeded Expectations</label>  <br />
          <input type="radio" name="question1" value="Good" /><label style={{color:"black"}}> Good, Met Expectations</label>  <br />
          <input type="radio" name="question1" value="Fair" /><label style={{color:"black"}}> Fair, Somewhat Relevant</label> <br />
          <input type="radio" name="question1" value="Poor" /><label style={{color:"black"}}> Poor, Not Relevant or Did Not Meet Expectations</label> <br /><br />

          <p style={{color:"black"}}>2. How would you rate the instructor’s knowledge,
            engagement with the class, and ability to explain concepts effectively?</p><br />
          <input type="radio" name="question2" value="Excellent" required /><label style={{color:"black"}}> Excellent, Very Engaging</label> <br />
          <input type="radio" name="question2" value="Good" /><label style={{color:"black"}}> Good, Often Engaging</label> <br />
          <input type="radio" name="question2" value="Fair" /><label style={{color:"black"}}> Fair, Sometimes Engaging</label> <br />
          <input type="radio" name="question2" value="Poor" /><label style={{color:"black"}}> Poor, Rarely Engaging</label> <br /><br />

          <p style={{color:"black"}}>3. How would you rate the overall learning experience, including the balance between
            theory and practical application, and the helpfulness of course materials?</p><br />
          <input type="radio" name="question3" value="Excellent" required /><label style={{color:"black"}}> Excellent, Very Balanced and Helpful </label><br />
          <input type="radio" name="question3" value="Good" /><label style={{color:"black"}}> Good, Balanced and Helpful</label> <br />
          <input type="radio" name="question3" value="Fair" /><label style={{color:"black"}}> Fair, Somewhat Balanced and Helpful</label> <br />
          <input type="radio" name="question3" value="Poor" /><label style={{color:"black"}}> Poor, Unbalanced and Not Helpful</label> <br /><br />

          <p style={{color:"black"}}>4. Did the course help you develop new skills and prepare you for real-world scenarios?</p><br />
          <input type="radio" name="question4" value="YesSignificantly" required /><label style={{color:"black"}}> Yes, Significantly </label><br />
          <input type="radio" name="question4" value="YesSomewhat" /><label style={{color:"black"}}> Yes, Somewhat</label> <br />
          <input type="radio" name="question4" value="Neutral" /><label style={{color:"black"}}> Neutral </label><br />
          <input type="radio" name="question4" value="NoNotMuch" /><label style={{color:"black"}}> No, Not Much </label><br />
          <input type="radio" name="question4" value="NoNotAtAll" /><label style={{color:"black"}}> No, Not At All</label> <br /><br />

          <p style={{color:"black"}}>5. Need your suggestions</p><br />
          <textarea
            name="suggestions"
            id="suggestions"
            required
            style={{
              width: "100%",
              padding: '10px',
              border: "2px solid black" 
            }}
          ></textarea>

          <button
            type="submit"
            style={{
              marginTop: "20px",
              padding: "10px 20px",
              background: "linear-gradient(135deg, rgba(8, 145, 178, 1), rgba(22, 163, 74,1))",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontWeight:"bold"
            }}
          >
            Submit
          </button>
        </form>
        {formSubmitted}
      </ScrollDialog>
    </div>
  );
}

export default Feedback;
