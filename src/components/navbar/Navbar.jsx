import { Link } from "react-router-dom";
import Button from "../ui/Button";

const Navbar = () => {
  const links = [
    {
      name: "Home",
      to: "/",
    },
    {
      name: "About",
      to: "/about",
    },
    {
      name: "Roadmap",
      to: "/roadmap",
    },
    {
      name: "Courses",
      to: "/courses",
    },
    {
      name: "Contact",
      to: "/contact",
    },
  ];

  return (
    <nav className="bg-indigo-500 flex w-full px-2 py-4 items-center justify-between">
      <div className="container mx-auto flex items-center justify-between">
        <h2 className="text-3xl lg:text-4xl font-semibold text-white">
          CODing ERA
        </h2>
        <div className=" hidden lg:flex gap-8 ">
          {links.map((link) => (
            <Link
              key={link.name}
              className="text-white font-light "
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
        <div className="flex gap-4 items-center">
          <Button text={"Login"} classname={" border-white border-[1px] "} />
          <Button
            text={"Get Started"}
            classname={"bg-indigo-600 hidden md:block"}
          />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
