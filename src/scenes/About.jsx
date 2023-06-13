import LineGradient from "../components/LineGradient";
import { motion } from "framer-motion";

const About = () => {
  return (
    <section id="about" className="pt-32 pb-16">
      {/* HEADING */}
      <motion.div
        className="md:w-2/3 text-center md:text-left"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 },
        }}
      >
        <p className="font-playfair font-semibold text-4xl mb-5 text-red">
          ABOUT ME
        </p>
       
        <LineGradient width="mx-auto " />
        <p  className=" mt-8 text-[18px] font-popins " >
        As a software engineer, I am a highly analytical and detail-oriented individual with a passion for developing innovative software solutions. I have a strong understanding of programming languages such as JavaScript, Python, Java, Dart and C++, and am familiar with software development methodologies such as Agile and Waterfall. I have more than 2 years of experience on developing web and mobile application development. I have excellent problem-solving skills and am able to work collaboratively in a team environment. I am always eager to learn new technologies and techniques to further enhance my skills and knowledge in the field of software engineering.
        </p>
        <div className="flex flex-col  gap-4 mt-8 text-2xl font-popins" >
            <div className="flex gap-8" >
                <span>Name :</span>
                <span className="text-[#c1c1c1]" >DEGSEW ABEBAW</span>
            </div>
            <div className="flex gap-5" >
                <span>email </span>
                <span className="text-[#c1c1c1]">abebawdegsew@gmail.com</span>
            </div>
            <div className="flex gap-5" >
                <span>Date of Birth :</span>
                <span className="text-[#c1c1c1]">May 20,2000</span>
            </div>
           
            <div className="flex gap-5" >
                <span>Address :</span>
                <span className="text-[#c1c1c1]">Addis Ababa, Ethiopia</span>
            </div>
            <div className="flex gap-5" >
                <span>Zip code :</span>
                <span className="text-[#c1c1c1]">1000</span>
            </div>
            <div className="flex gap-5" >
                <span>Github </span>
                <a href="https://github.com/gitdegsew"  className="hover:text-[#82aa9a] text-[#c68686]" target="_blank">https://github.com/gitdegsew</a>
            </div>
        </div>
      </motion.div>

      
    </section>
  );
};

export default About;
