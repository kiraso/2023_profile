import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const Project = ({ title ,gitLink}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  return (
    <motion.div variants={projectVariant} className="relative">
      <div >
      <div className={overlayStyles}>
        <p className="text-2xl font-playfair">{title}</p>
       {gitLink && <a className="text-2xl font-opensans underline text-bold text-purple mt-2" href={gitLink}  target="_blank"> SourceCode</a>} 
      </div>
      <img src={`../assets/${projectTitle}.png`} alt={projectTitle} />
      </div>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
          I do my project on my free time to catch up new tech stack
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
         
          <Project title="Project 1" gitLink= "https://dl.acm.org/doi/10.1145/3123024.3124413" />
          <Project title="Project 2" />
          <Project title="Project 3" gitLink= "https://github.com/kiraso/server-scraping"/>

          {/* ROW 2 */}
        
          <Project title="Project 4" gitLink= "https://github.com/kiraso/FlutterEShopApp"/>
          <Project title="Project 5" gitLink= "https://github.com/kiraso/movieweb"/>
          <Project title="Project 6" gitLink= "https://github.com/kiraso/Covid-Tracker_BI"/>

          
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
