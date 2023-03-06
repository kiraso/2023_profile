import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-2/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5 text-[#dcfd93]">
            MY <span className="text-[#c0b3f2]">SKILLS</span>
          </p>

          <p className="mt-10 mb-7">
            I'm super! enjoy with
            <br />
            <a
              href="https://reactjs.org/"
              className="underline text-[#dcfd93] hover:text-[#c0b3f2] font-bold pr-2"
            >
              React.js
            </a>
            |
            <a
              href="https://tailwindcss.com/"
              className="underline text-[#c0b3f2] hover:text-[#dcfd93] font-bold px-2"
            >
              TailWind Css
            </a>
            |
            <a
              href="https://www.typescriptlang.org/"
              className="underline text-[#dcfd93] hover:text-[#c0b3f2] font-bold px-2"
            >
              Typscript
            </a>
            |
            <a
              href="https://nodejs.org/en/"
              className="underline text-[#c0b3f2] hover:text-[#dcfd93] font-bold px-2"
            >
              Node.js
            </a>
            |
            <a
              href="https://expressjs.com/"
              className="underline text-[#dcfd93] hover:text-[#c0b3f2] font-bold px-2"
            >
              {" "}
              Express.js
            </a>{" "}
            <br />
            and I'm working on my mini project for design and data science
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img alt="skills" className="z-10" src="assets/tech-stack.gif" />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/tech-stack.gif" />
          )}
        </div>
      </div>

      {/* SKILLS */}
      <div className="md:flex md:justify-between mt-16 gap-32">
        {/* EXPERIENCE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">01</p>
              <p className="font-sansopen font-semibold text-3xl mt-3">
                Educational
              </p>
              <div className={`h-0.5 w-full bg-gradient-rainblue`} />
            </div>
          </div>
          <div className="mt-5 flex flex-col">
            <div>
              <strong>Chiang Mai University</strong>
              <p className="pt-1">
                Bachelor of Computer Engineering, Faculty of Engineering 2017
              </p>
            </div>
          </div>
        </motion.div>

        {/* INNOVATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Innovative
              </p>
            </div>
            <div className={`h-0.5 w-full bg-gradient-rainblue`} />
          </div>
          <div className="py-3 flex-col">
              <strong>International Publication</strong>
              <p className="pt-1">
                PURBA 2017 The 6th International Workshop on Pervasive Urban
                Applications, In conjunction with ACM UbiComp 2017, 11 September
                2017, Maui, Hawaii, USA
              </p>
              <a className="underline text-[#dcfd93]" href="https://dl.acm.org/doi/10.1145/3123024.3124413">
              Wi-Crowd: sensing and visualizing 
              </a>
            </div>
        </motion.div>
        {/* IMAGINATIVE */}
        <motion.div
          className="md:w-1/3 mt-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, y: 50 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <div className="relative h-32">
            <div className="z-10">
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl mt-3">
                Imaginative
              </p>
            </div>
            <div className={`h-0.5 w-full bg-gradient-rainblue`} />
          </div>
          <p className="mt-5">
            I love to be Frontend but for my passion is be Developer who is have many experience for finding solution and use Data for analysis/visualized solved
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
