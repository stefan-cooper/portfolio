import React from "react";
import { Heading } from "@chakra-ui/react";
import { motion } from "framer-motion";

export const SmallPortfolio = ({ image, tags, role, index }) => {
  return (
    <motion.button whileHover={{ scale: 1.1 }} whileTap={{ scale: 0.9 }} key={index}>
      <div className="h-40 m-12 self-center flex flex-col justify-center items-center -z-10 max-lg:m-0 max-lg:h-32 max-lg:pr-12 max-lg:w-full">
        <img
          alt="Experience Logo"
          className="max-w-[80%] h-auto max-h-[90%]"
          src={require(`../images/${image}`)}
        />
      </div>
      <div className="text-white text-base w-[20vw] whitespace-pre-wrap m-4">
        <div className="flex flex-wrap justify-center flex-col">
          <Heading size="lg" className="m-2">
            {role}
          </Heading>
        </div>
      </div>
    </motion.button>
  );
};
