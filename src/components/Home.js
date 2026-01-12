import featImg from "../assets/img-main.png";

export default function Home({ title }) {
  return (
    <div className="container">
      <img
        className="img-feat"
        src={featImg}
        alt="Red30 Tech conference attendees on a laptop"
      />

      <h1>{title}</h1>
      <p>
       
        <a
          href="https://www.linkedin.com/feed/"
          target="_blank"
          rel="noreferrer noopener"
        >
         
        </a>
        School of Infocomm (SOI) provides industry-relevant IT education focused on software development, digital design, and emerging technologies, preparing students for the evolving digital economy through hands-on, project-based learning.
      </p>
    </div>
  );
}
