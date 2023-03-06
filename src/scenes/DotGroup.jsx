import AnchorLink from "react-anchor-link-smooth-scroll";

const DotGroup = ({ selectedPage, setSelectedPage }) => {
  const selectedStyles = `relative bg-[#dcfd93] before:absolute before:w-6 before:h-6 before:rounded-full
    before:border-2 before:border-[#dcfd93] before:left-[-50%] before:top-[-50%]`;

  return (
    <div className="flex flex-col gap-6 fixed top-[60%] right-7">
      <AnchorLink
        href="#home"
        className={`${
          selectedPage === "home" ? selectedStyles : "bg-[#c0b3f2]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("home")}
      />

      <AnchorLink
        href="#skills"
        className={`${
          selectedPage === "skills" ? selectedStyles : "bg-[#c0b3f2]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("skills")}
      />

      <AnchorLink
        href="#projects"
        className={`${
          selectedPage === "projects" ? selectedStyles : "bg-[#c0b3f2]"
        } w-3 h-3 rounded-full`}
        onClick={() => setSelectedPage("projects")}
      />
    </div>
  );
};

export default DotGroup;
