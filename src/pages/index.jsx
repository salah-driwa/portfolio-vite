// src/pages/index.jsx
//import React from 'react';
import { motion } from "framer-motion";
import Home from "../Home";
const Index = () => {
  return (
    <motion.div
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ duration: 0.5 }}
    className=" w-full"  
  > 
  <Home />
  </motion.div>
  );
};

export default Index;
