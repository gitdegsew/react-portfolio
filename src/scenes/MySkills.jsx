import LineGradient from "../components/LineGradient";
import useMediaQuery from "../hooks/useMediaQuery";
import { motion } from "framer-motion";

const MySkills = () => {
  const isAboveLarge = useMediaQuery("(min-width: 1060px)");
  return (
    <section id="skills" className="pt-10 pb-24">
      {/* HEADER AND IMAGE SECTION */}
      <div className="md:flex md:justify-between md:gap-16 mt-32">
        <motion.div
          className="md:w-1/3"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="font-playfair font-semibold text-4xl mb-5">
            MY <span className="text-red">SKILLS</span>
          </p>
          <LineGradient width="w-1/3" />
          <p className="mt-10 mb-7 text-[18px] font-popins">
            As a web and mobile application developer, I hava worked with the following frontend and backend  thechnologies.
          </p>
        </motion.div>

        <div className="mt-16 md:mt-0">
          {isAboveLarge ? (
            <div
              className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10
              before:w-full before:h-full before:border-2 before:border-blue before:z-[-1]"
            >
              <img
                alt="skills"
                className="z-10"
                src="assets/skills-image.png"
              />
            </div>
          ) : (
            <img alt="skills" className="z-10" src="assets/skills-image.png" />
          )}
        </div>
      </div>
      <div className="flex flex-col mt-20 text-center  " >
        <h2 className="text-3xl font-playfair " >Techinical Skills</h2>
        <div className="text-start" >
          <h1 className="text-3xl text-[#8af17e] font-semibold font-opensans" >Frontend</h1>
          <div className="flex justify-around flex-wrap  gap-20 my-10  p-10 " >
            
          
          
          <img  height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" />
          
          
         
          
          
          
          
          
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg" />
          
          
          
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" />
          
          
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" />
          
          
          
         
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original.svg" />
          

          
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-plain.svg" />
          
          
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flutter/flutter-original.svg" />
          
          
          
          
          
          </div>
        </div>
        <div className="text-start" >
          <h1 className="text-3xl text-[#ffae19] font-semibold font-opensans" >Backend</h1>
          <div className="flex justify-around gap-20 my-10  rounded-md flex-wrap p-10 " >
        
          <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" />
          
          
         
          
          
         <div className="bg-white w-[100px] h-[100px] flex flex-col justify-center items-center p-10 ">
         <img  className="w-[80px] h-[80px]" src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/express/express-original.svg" />
         <span className="text-black">express</span>
         </div>
          
          
          
          
          
          
          
         <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" />
          
          
          
         <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" />
          
          
         <img height='80px' width='80px' src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg" />
          
          
          
          
         
          
          
          
          
          
          
          </div>
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
              <p className="font-playfair font-semibold text-3xl relative mt-3 z-10">
                Experience
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-blue absolute right-0 top-0 z-1" />
          </div>
          <p className="mt-5">
           More than two years of experience in  full stack web and mobile application development(mern stack and flutter)
          </p>
        </motion.div>

        {/* INNOVATIVE */}
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
              <p className="font-playfair font-semibold text-5xl">02</p>
              <p className="font-playfair font-semibold text-3xl relative mt-3 z-10">
                Innovative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-red absolute right-0 top-0 z-1" />
          </div>
          <p className="mt-5">
          Not afraid to take risks and try new things. I am willing to take chances and experiment with different approaches. 
          </p>
        </motion.div>
        {/* IMAGINATIVE */}
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
              <p className="font-playfair font-semibold text-5xl">03</p>
              <p className="font-playfair font-semibold text-3xl relative mt-3 z-10">
                Imaginative
              </p>
            </div>
            <div className="w-1/2 md:w-3/4 h-32 bg-yellow absolute right-0 top-0 z-1" />
          </div>
          <p className="mt-5">
          Open-minded and willing to consider different perspectives and ideas. I'm not set in my  ways and am always looking for new ways to approach problems.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default MySkills;
