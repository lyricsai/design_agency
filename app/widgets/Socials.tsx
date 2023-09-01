import Link from "next/link";

const links = [
  { id: 1, href: "https://dribbble.com", title: "Dribbble" },
  { id: 2, href: "https://instagram.com", title: "Instagram" },
  { id: 3, href: "https://behance.com", title: "Behance" },
];

export const Socials = () => {
  return (
    <ul className="self-end">
      {links.map((link) => {
        return (
          <li key={link.id}>
            <Link href={link.href}>{link.title}</Link>
          </li>
        );
      })}
    </ul>
  );
};
