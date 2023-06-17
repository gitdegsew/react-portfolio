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

const Project = ({ title ,description,link}) => {
  const overlayStyles = `absolute h-full w-full opacity-0 hover:opacity-90 transition duration-500
    bg-grey z-30 flex flex-col justify-center items-center text-center p-16 text-deep-blue`;
  const projectTitle = title;

  return (
    <motion.div variants={projectVariant} className="relative cursor-pointer ">
      <a href={link} target="_blank" >
      <div className={`${overlayStyles} rounded-md `}  >
        <p className="text-2xl  font-playfair ">{title}</p>
        <p className="mt-7">
         {description}
        </p>
      </div>
      <img src={`assets/${projectTitle}.png`}  className=" h-[100%] w-auto  rounded-md "  alt={projectTitle} />
      </a>
    </motion.div>
  );
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center "
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
        <p className="mt-10 mb-10 text-[18px] font-popins">
          These are some of my project. clike on them to see live demo
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex flex-wrap justify-around">
        <motion.div
          className="sm:grid sm:grid-cols-3 gap-3 flex-wrap"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
         
          <div
            className="flex justify-center text-center items-center rounded-md p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>
          <Project title="Socipedia" description ="A socipedia is a social media app to share pictures with friends. built using MERN stack" link="https://social-client-cyan.vercel.app/" />
          <Project title="Chat-app" description="real time chat app built MERN stack and socket.io with audio and video call functionality" link="https://chat-client-theta.vercel.app/" />
          <Project title="fitness-app" description="An app for searching exercises and watch instructional youtube videos " link="https://fitness-app-kappa-five.vercel.app/" />

          {/* ROW 2 */}
          <Project title="E-commerce" description="E-commerce app built using react node and mongodb" link="https://ecom-client-nine.vercel.app/"  />
          <Project title="You-tube-Clone" description="an app for wathcing youtube vidoes built using react" link="https://you-tube-clone-mu.vercel.app/" />
          <Project title="Dashboard" description="An admin dashboard for managing users and orders " link="https://dashboard-ochre-sigma.vercel.app/" />

          {/* ROW 3 */}
          
          <Project title="Food-recipe" description="A react app for seaching recipes of foods" link="https://react-foodrecipe-app.vercel.app/" />
          
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
