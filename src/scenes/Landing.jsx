import useMediaQuery from "../hooks/useMediaQuery";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";
import SocialMediaIcons from "../components/SocialMediaIcons";

const Landing = ({ setSelectedPage }) => {
  const isAboveMediumScreen = useMediaQuery("(min-width:1060px)");
  return (
    <section
      id="home"
      className="md:flex md:justify-between md:items-center  md:h-full gap-16 py-10"
    >
      {/* image section */}
      <div className="md:order-2 flex justify-center basis-3/5 z-10 mt-16 md:mt-32">
        {isAboveMediumScreen ? (
          <div className="relative z-0 ml-20 before:absolute before:-top-10 before:-left-10 before:rounded-t-[400px] before:w-full before:max-w-[400px] before:h-full before:border-2 before:border-blue before:z-[-1]">
            <img
              alt="profile "
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[300px]"
              src="assets/profile-image.png"
            />
          </div>
        ) : (
          <div>
            <img
              alt="profile "
              className="hover:filter hover:saturate-200 transition duration-500 z-10 w-full max-w-[200px] md:max-w-[300px]"
              src="assets/profile-image.png"
            />
          </div>
        )}
      </div>

      {/* Main section */}
      <div className="z-30 basis-2/5 mt-12 md:mt-32">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <p className="text-5xl font-playfair z-10 text-center md:text-start">
            Degsew{" "}
            <span className=" xs:relative xs:text-deep-blue xs:font-semibold before:z-[-1] before:absolute z-20 xs:before:content-brush before:-left-[25px] before:-top-[70px]">
              Abebaw
            </span>
          </p>
          <p className=" mb-7 mt-20 text-lg text-center md:text:start">
          <span  className="text-[#e34c62] " >Hi there!</span> My name is Degsew Abebaw and I am a web developer with a focus on creating clean and user-friendly websites.
          </p>
        </motion.div>
        {/* Call to actions */}
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <AnchorLink
            className="bg-gradient-rainblue text-deep-blue rounded-sm py-3 px-7 font-semibold hover:bg-blue hover:text-white transition duration-500"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            Contact Me
          </AnchorLink>
          <AnchorLink
            className="rounded-r-sm bg-gradient-rainblue py-0.5 pr-0.5"
            onClick={() => setSelectedPage("contact")}
            href="#contact"
          >
            <div className="bg-deep-blue hover:text-red transition duration-500 w-full h-full flex items-center justify-center font-playfair px-10">
              Lets talk
            </div>
          </AnchorLink>
        </motion.div>
        <motion.div
          className="flex mt-5 justify-center md:justify-start"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ delay: 0.4, duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <SocialMediaIcons />
        </motion.div>
      </div>
    </section>
  );
};

export default Landing;
