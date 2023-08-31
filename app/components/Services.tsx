import { SectionTop } from "../shared/ui/SectionTop/SectionTop";

const services = [
    {
        id: 1,
        title: "Mobile App Development",
        description: `With years of experience in mobile development, we possess the knowledge to design robust architectures and create customized native applications for both Apple iOS and Google Android platforms.`,
        tools: ["React Native", "FlutterJS", "Swift", "Kotlin"],
    },
    {
        id: 2,
        title: "Solid Design Solutions",
        description: `We are fueled by a user-centered design approach that enhances productivity and drives revenue. Our exceptional expertise and creativity constantly push us to surpass our previous accomplishments.`,
        tools: [
            "Figma",
            "Adobe AfterEffects",
            "Adobe Illustator",
            "Blender",
            "Cinema 4D",
        ],
    },
    {
        id: 3,
        title: "Web Development",
        description: `Our adaptive design components are meticulously crafted using well-structured and easily readable code. We ensure that our development solutions are optimized and seamlessly function across various devices and browsers.`,
        tools: ["ReactJS", "VueJS", "NodeJS", "Webflow"],
    },
];

export const Services = () => {
    return (
        <section id="services">
            <SectionTop order={1} title={"Our Services"} />
            <p>
                At our core, we are a close-knit team of experts dedicated to
                crafting impactful websites, digital experiences, and native
                apps that leave a lasting impression.
            </p>

            {services.map((service) => {
                return (
                    <div className="services__card" key={service.id}>
                        <h2>{service.title}</h2>
                        <div>
                            <p>{service.description}</p>
                            <hr />
                            <div>
                                {service.tools.map((tool) => {
                                    return (
                                        <span
                                            className="services__tools"
                                            key={tool}
                                        >
                                            {tool}
                                        </span>
                                    );
                                })}
                            </div>
                        </div>
                    </div>
                );
            })}
        </section>
    );
};
