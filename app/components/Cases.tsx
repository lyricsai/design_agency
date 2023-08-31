import { AppButton } from "../shared/ui/AppButton/AppButton";
import { SectionTop } from "../shared/ui/SectionTop/SectionTop";
import { Development } from "./Development";

const cases = [
    {
        id: 1,
        img: "https://www.awsmd.com/img/cases/spinapp.png",
        title: "P.App",
        description: `Web Development for a Web3 Gaming Platform that incorporates community-driven assets, a decentralized economy, and a gamified experience.`,
    },
    {
        id: 2,
        img: "https://www.awsmd.com/img/cases/spinapp.png",
        title: "Two",
        description: `Web Development for 
Web3 Gaming Platform with community-driven assets, decentralized economy and gamified experience`,
    },
    {
        id: 3,
        img: "https://www.awsmd.com/img/cases/spinapp.png",
        title: "Three",
        description: `Web Development for 
Web3 Gaming Platform with community-driven assets, decentralized economy and gamified experience`,
    },
    {
        id: 4,
        img: "https://www.awsmd.com/img/cases/spinapp.png",
        title: "Four",
        description: `Web Development for 
Web3 Gaming Platform with community-driven assets, decentralized economy and gamified experience`,
    },
    {
        id: 5,
        img: "https://www.awsmd.com/img/cases/spinapp.png",
        title: "Five",
        description: `Web Development for 
Web3 Gaming Platform with community-driven assets, decentralized economy and gamified experience`,
    },
];

export const Cases = () => {
    return (
        <section id="cases">
            <SectionTop order={3} title={"Our Cases"} />
            <h3>We do user friendly solutions</h3>
            <ul className="grid gap-1 grid-cols-2 lg:grid-cols-3">
                {cases.map((c, index) => {
                    return (
                        <li
                            key={c.id}
                            className={`p-2 h-full rounded-lg bg-slate-500 ${
                                index === 2 || index === 3 ? "w-sm" : "w-xl"
                            }`}
                        >
                            <div
                                className="flex flex-col items-end h-[100%] justify-end gap-2
                            "
                            >
                                <h3>{c.title}</h3>
                                <p className="text-sm">{c.description}</p>
                                <AppButton text={""}>
                                    <svg
                                        viewBox="0 0 19 12"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            d="M0.09375 6.229H17.4467M17.4467 6.229L12.4467 1.229M17.4467 6.229L12.4467 11.229"
                                            data-stroke="true"
                                        ></path>
                                    </svg>
                                </AppButton>
                            </div>
                        </li>
                    );
                })}
            </ul>
            <Development />
        </section>
    );
};
