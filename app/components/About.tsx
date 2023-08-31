import { SectionTop } from "../shared/ui/SectionTop/SectionTop";

const achievements = [
    { id: 1, number: "100+", description: "Successfully comleted projects" },
    {
        id: 2,
        number: "10K",
        description: "Reviews from our clients and their users",
    },
    { id: 3, number: "5+", description: "Years of experience" },
    { id: 4, number: "100+", description: "Members of the team" },
];

export const About = () => {
    return (
        <section id="about">
            <SectionTop order={2} title={"About Us"} />
            <h2>We Strive to Innovate</h2>
            <hr />
            <div>
                <p>
                    <strong>Solid Strategy</strong> aligned with business needs
                    and robust data analysis are fundamental ingredients to
                    extract actionable insights
                </p>
                <div>
                    <h3>
                        <strong>Some Number About Us</strong>
                    </h3>
                    <div></div>
                </div>
            </div>
        </section>
    );
};
