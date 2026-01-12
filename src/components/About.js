import chairImg from "../assets/PC.jpg";

export default function About() {
  return (
    <div className="container about-page">
      <h1 className="about-title">🏫 School of Infocomm</h1>

      <p className="about-intro">
        The <strong>School of Infocomm (SOI)</strong> at Republic Polytechnic is where
        technology meets innovation. It equips students with strong foundations in
        information technology and applied computing, preparing them for the
        fast-changing digital world.
      </p>

      <p>
        Through <strong>hands-on, project-based learning</strong>, students gain
        practical experience in areas such as <strong>software development</strong>,
        <strong> UI/UX design</strong>, <strong>data analytics</strong>, and
        <strong> financial technology</strong>. This approach allows students to
        apply what they learn to real-world scenarios.
      </p>

      <p>
        Beyond technical knowledge, SOI emphasises
        <strong> problem-solving</strong>, <strong>teamwork</strong>, and
        <strong> adaptability</strong>, preparing graduates for further studies or
        careers in the digital economy.
      </p>

      {/* Programme Chair Section */}
      <div className="chair-section">
        <img
          src={chairImg}
          alt="Programme Chair"
          className="chair-photo"
        />

        <div className="chair-text">
          <h3>Message from the Programme Chair, Digital Design & Development</h3>
          <p className="chair-quote">
            “At the School of Infocomm, we are committed to nurturing students through
            experiential learning and industry-relevant education. The Digital Design
            & Development programme is designed to equip learners with strong technical
            competencies, creative thinking skills, and a user-centric mindset to
            prepare them for the evolving digital landscape.”
          </p>
          <p className="chair-name">
            — Jason Lim, Programme Chair, Digital Design & Development
          </p>
        </div>

      </div>

      <div className="about-link">
        <p>
          Learn more about the School of Infocomm on the{" "}
          <a
            href="https://www.rp.edu.sg/schools-of-study/school-of-infocomm"
            target="_blank"
            rel="noreferrer noopener"
          >
            official website
          </a>.
        </p>
      </div>
    </div>
  );
}
