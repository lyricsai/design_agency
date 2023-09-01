import { SectionTop } from "../shared/ui/SectionTop/SectionTop";

const achievements = [
  { id: 1, title: "100+", description: "Successfully comleted projects" },
  {
    id: 2,
    title: "10K",
    description: "Reviews from our clients and their users",
  },
  { id: 3, title: "5+", description: "Years of experience" },
  { id: 4, title: "100+", description: "Members of the team" },
];

export const About = () => {
  return (
    <section id="about">
      <SectionTop order={2} title={"About Us"} />
      <h2>We Strive to Innovate</h2>
      <hr />
      <div>
        <p>
          <strong>Solid Strategy</strong> aligned with business needs and robust
          data analysis are fundamental ingredients to extract actionable
          insights
        </p>
        <div>
          <h3>
            <strong>Some Number About Us</strong>
          </h3>
          <ul className="achivements">
            {achievements.map((a) => {
              return (
                <li key={a.id}>
                  <div>
                    <h2>{a.title}</h2>
                    <p>{a.description}</p>
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
      <div className="about__partners"></div>
    </section>
  );
};
