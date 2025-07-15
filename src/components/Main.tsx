import "../assets/styles/Main.scss";
import profileImage from "../assets/images/profile.png";

function Main() {
  return (
    <div className="container">
      <div className="about-section">
        <div className="image-wrapper">
          <img src={profileImage} alt="Avatar" />
        </div>
        <div className="content">
          <h1>Noor Haziqah</h1>
          <p>Tech enthusiast and student from Yuhua Secondary School</p>
        </div>
      </div>
    </div>
  );
}

export default Main;
