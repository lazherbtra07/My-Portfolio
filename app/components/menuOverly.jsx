import NavLink from "./NavLink";

export const MenuOverly = ({ links }) => {
  return (
    <ul className="flex flex-col py-4 items-center ">
      {links.map((link, index) => (
        <li>
          <NavLink onClick={close} href={`#${link.path}`} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
