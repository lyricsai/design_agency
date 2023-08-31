import Link from "next/link";

const links = [
    { id: 1, href: "#home", title: "Home" },
    { id: 2, href: "#services", title: "Services" },
    { id: 3, href: "#about", title: "About Us" },
    { id: 4, href: "#cases", title: "Cases" },
    { id: 5, href: "#reviews", title: "Reviews" },
    { id: 6, href: "#contacts", title: "Contact Us" },
];

interface NavbarProps {
    isOpen: boolean;
    bgColor?: string;
}

export const Navbar = ({ isOpen, bgColor }: NavbarProps) => {
    return (
        <>
            {isOpen ? (
                <nav className={bgColor}>
                    <ul>
                        {links.map((link) => {
                            return (
                                <li key={link.id}>
                                    <Link href={link.href}>{link.title}</Link>
                                </li>
                            );
                        })}
                    </ul>
                </nav>
            ) : null}
        </>
    );
};
