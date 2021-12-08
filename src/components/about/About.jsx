import "./about.css";

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img
            src="https://media.giphy.com/media/i1JHRZSXO9LZZDHqii/giphy.gif"
            alt=""
            className="a-img"
          />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
            A passionate Competitive Programmer, Front-end Developer, and Sophomore B.Tech(IT) Undergrad at MAIT,
            Delhi.
        </p>
        <p className="a-desc">
             I am Proficient in C/C++,JavaScript, ReactJS and having experience in AngularJS. A Good Problem Solver and Quick Learner.
        </p>
      </div>
    </div>
  );
};

export default About;
