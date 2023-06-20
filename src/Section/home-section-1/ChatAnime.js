import React from "react";
import { styles } from "@/styles/style";
import MessageReceived from "@/components/chat/MessageReceived";
import MessageSend from "@/components/chat/MessageSend";
import { motion } from "framer-motion";

const ChatAnime = () => {
  const divVariants1 = {
    hidden1: { opacity: 0 },
    visible1: { opacity: 0.9, transition: { duration: 1 } },
  };
  const divVariants2 = {
    hidden2: { opacity: 0 },
    visible2: { opacity: 0.9, transition: { duration: 3 } },
  };
  const divVariants3 = {
    hidden3: { opacity: 0 },
    visible3: { opacity: 0.9, transition: { duration: 5 } },
  };
  const divVariants4 = {
    hidden4: { opacity: 0 },
    visible4: { opacity: 0.9, transition: { duration: 7 } },
  };

  return (
    <div>
      <motion.div variants={divVariants1} initial="hidden1" animate="visible1">
        <MessageReceived
          className="col-12 col-lg-8 d-flex justify-content-end align-items-center cssanimation fadeInBottom"
          style={styles.element1}
          title="
                    Hi there, Sarah! Are you ready for a fun day of learning? 😄"
        />
      </motion.div>
      <motion.div variants={divVariants2} initial="hidden2" animate="visible2">
        <MessageSend
          title="Yes, I'm excited! "
          className="col-12 col-lg-8 d-flex justify-content-center align-items-end flex-column cssanimation2 fadeInBottom2"
          style={styles.element2}
        />
      </motion.div>
      <motion.div variants={divVariants3} initial="hidden3" animate="visible3">
        <MessageReceived
          className="col-12 col-lg-8 d-flex justify-content-end align-items-center cssanimation3 fadeInBottom3"
          style={styles.element3}
          title="
                    That's great! Today, we'll explore the world of animals. 🐾 What's your 
favorite animal?"
        />
      </motion.div>
      <motion.div variants={divVariants4} initial="hidden4" animate="visible4">
        <MessageSend
          title="I love elephants! 🐘"
          style={styles.element4}
          className="col-12 col-lg-8 d-flex justify-content-center align-items-end flex-column cssanimation4 fadeInBottom4"
        />
      </motion.div>
    </div>
  );
};

export default ChatAnime;
