import "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBlackTie } from "@fortawesome/free-brands-svg-icons";
import { faPeopleGroup } from "@fortawesome/free-solid-svg-icons";
import "../assets/styles/Expertise.scss";
import npccImage from "../assets/images/AboutMe/npcc.png";
import studentcouncilImage from "../assets/images/AboutMe/studentcouncil.jpg";

function MyProfile() {
  return (
    <div className="container" id="aboutme">
      <div className="skills-container">
        <h1>About Me</h1>
        <p
          style={{
            backgroundColor: "rgba(127, 127, 127, 0.2)",
            padding: 20,
            borderRadius: 20,
            marginTop: -10,
            marginBottom: 30,
          }}
        >
          Hi! I am Haziqah, a student from Yuhua Secondary School, who is
          passionate to learn about technology, data and AI. I also enjoy
          solving problems, and growing from new challenges. Through this
          portfolio, I hope to show my strengths and why I'm applying for Data
          Science at NP!
        </p>
        <div className="skills-grid">
          <div className="skill">
            <FontAwesomeIcon icon={faBlackTie} size="3x" />
            <h3>Student Councillor</h3>
            <p>
              As a Student Council member, I took on responsilibities like
              organising Teacher's Day, Open House, and alumni events.
            </p>
            <p>
              <strong>Skills:</strong> These experiences helped me grow in areas
              like planning, decision-making, and public speaking. I also
              learned how to manage tasks, work with different groups of people
              and stay adaptable when things don't go as planned.
            </p>
            <img
              src={studentcouncilImage}
              style={{ marginTop: 20 }}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </div>

          <div className="skill">
            <FontAwesomeIcon icon={faPeopleGroup} size="3x" />
            <h3>NPCC</h3>
            <p>
              Being part of NPCC taught me the importance of discipline,
              responsibility, and perserverance. Through regular drills,
              trainings, and group activities, I learned to stay focused.
            </p>
            <p>
              <strong>Skills:</strong> These experiences developed my ability to
              follow instructions carefully and perform under pressure which is
              useful when analysing data or handling complex problems in the
              tech field.
            </p>
            <img
              src={npccImage}
              style={{ marginTop: 20 }}
              className="zoom"
              alt="thumbnail"
              width="100%"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default MyProfile;
