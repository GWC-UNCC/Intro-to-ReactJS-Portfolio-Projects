import { Appbar } from "../components/Appbar";
import { Heading } from "../components/Heading";
import { ProjectCard } from "../components/ProjectCard";
import { ExperienceAccordion } from "../components/ExperienceAccordion";
import "./App.css";

export function App() {
  return (
    <>
      <Appbar />
      <main id="Home">
        <section id="landing">
          <h1 className="headline">
            We are&nbsp;
            <a
              href="https://linktr.ee/girlswhocode_uncc"
              rel="noreferrer"
              target="_blank"
            >
              <span>Girls Who Code at UNCC</span>
            </a>
            , and we love to learn!
          </h1>
          <img
            alt="Software engineer illustration"
            src="/assets/GWC-UNCC-LOGO.png"
            width="90%"
          />
          <article className="about-me">
            <Heading id="About">About Us</Heading>
            <p>
              <a
                href="https://github.com/mattwells19"
                rel="noreferrer"
                target="_blank"
                class="no-line-link"
              >
                <strong>Matt Wells</strong>
              </a>{" "}
              created and taught this Intro to ReactJS workshop for GWC where we
              each got to create our own single-page portfolio templates with
              ReactJS. We also learned to deploy our projects with Vercel! Check
              out the workshop recording&nbsp;
              <a
                href="https://youtu.be/ePn7nQjiJEg"
                rel="noreferrer"
                target="_blank"
                class="no-line-link"
              >
                <strong>here</strong>
              </a>
              <br />
              <br />
              The following week we had a Portfolio Social event where we
              customized our pages. We wanted to share some of the awesome
              creations from our members below!
            </p>
          </article>
        </section>
        <section className="projects-section">
          <div className="blue-box" aria-hidden="true" />
          <Heading id="Projects">Projects</Heading>
          <div className="project-cards">
            <ProjectCard
              title="Portfolio Template"
              description="The original template by Matt Wells."
              imgSrc="/assets/MattWells.png"
              link="https://codesandbox.io/s/gwc-react-portfolio-workshop-final-8cr05"
            />
            <ProjectCard
              title="Student Portfolio 1"
              description="A customized portfolio by Zaina Shawar."
              imgSrc="/assets/ZainaShawar.png"
              link="https://gwc-react-portfolio-zshawar.vercel.app/"
            />
            <ProjectCard
              title="Student Portfolio 2"
              description="A customized portfolio by Ashley Harmon."
              imgSrc="/assets/AshleyHarmon.png"
              link="https://gwc-react-portfolio-omega.vercel.app/"
            />
            <ProjectCard
              title="Student Portfolio 3"
              description="A customized portfolio by Michelle Camacho."
              imgSrc="/assets/MichelleCamacho.png"
              link="https://gwc-react-portfolio-michecamacho.vercel.app/"
            />
          </div>
        </section>
        <section>
          Check out more GWC events on our website or NinerEngage&nbsp;
          <a
            href="https://linktr.ee/girlswhocode_uncc"
            rel="noreferrer"
            target="_blank"
          >
            <strong>here!</strong>
          </a>
        </section>
      </main>
    </>
  );
}
