/* eslint-disable react/jsx-key */

import Social from "../asets/social/Social";
import { motion } from "framer-motion";
import  Button  from "./rive/Button";
import Section from "./Section_animation";

const Footer = () => {
  return (
      <footer className="relative bg-accent p-5">
          <div className="max-w-6xl mx-auto text-center">
              <div className="hidden sm:block">
                  <Button />
              </div>

              <div className="flex flex-col  items-center text-text sm:flex-row justify-between -mt-8">
                  <div className="mb-5">
                      <h3 className="text-lg font-semibold">About Us</h3>
                      <p className="text-gray-800">Learn more about our mission and values.</p>
                  </div>
                  <div className=" h-20 border-gray-100/30 border-r w-1"></div>
                  <div className="mb-5">
                      <h3 className="text-lg font-semibold">Contact</h3>
                      <p className="text-gray-800">salah.driwa.job@gmail.com
                      </p>
                  </div>
                  <div className=" h-20 border-gray-100/30 border-r w-1"></div>
                  <div className="mb-5">
                      <h3 className="text-lg  font-semibold">Follow Us</h3>
                      <div className="flex sm:gap-6 justify-center gap-4 my-3">
  {Social.map((social, index) => (
    <Section x={-100} delay={index * 0.2} key={index}>
      <motion.div whileHover={{ scale: 1.1 }} className="h-10 w-10">
        <a
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer" 
        >
          <img src={social.img} alt="" className="bg-gray-700 p-2 rounded-full" />
        </a>
      </motion.div>
    </Section>
  ))}
</div>




                  </div>

              </div>

              <div className="mt-10 border-t border-gray-100/50 pt-5 sm:mb-0 mb-40">
                  <p className="text-gray-800 text-sm">&copy; {new Date().getFullYear()}. All rights reserved.</p>
              </div>
          </div>
      </footer>
  );
};

export default Footer;

