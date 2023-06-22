
import React from "react";
import { styles } from "@/styles/style";
import MessageReceived from "@/components/chat/MessageReceived";
import MessageSend from "@/components/chat/MessageSend";
import { motion } from "framer-motion";

const ChatAnime = () => {
  const divVariants1 = {
    hidden1: { opacity: 0 },
    visible1: { opacity: 1, transition: { duration: 1 } },
  };
  const divVariants2 = {
    hidden2: { opacity: 0 },
    visible2: { opacity: 1, transition: { duration: 2 } },
  };
  const divVariants3 = {
    hidden3: { opacity: 0 },
    visible3: { opacity: 1, transition: { duration: 3 } },
  };
  const divVariants4 = {
    hidden4: { opacity: 0 },
    visible4: { opacity: 1, transition: { duration: 4 } },
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



// import React from 'react';
// import { motion, AnimatePresence } from 'framer-motion';

// const ChatAnime = () => {
//   const divVariants = {
//     hidden: { opacity: 0, y: -20 },
//     visible: { opacity: 1, y: 0 }
//   };

//   const containerVariants = {
//     visible: { transition: { staggerChildren: 0.5 } }
//   };

//   return (
//     <div>
//       <AnimatePresence initial={false}>
//         <motion.div
//           variants={containerVariants}
//           initial="hidden"
//           animate="visible"
//         >
//           <motion.div
//             key={1}
//             variants={divVariants}
//           >
//             <p>Div 1</p>
//           </motion.div>
//           <motion.div
//             key={2}
//             variants={divVariants}
//           >
//             <p>Div 2</p>
//           </motion.div>
//           <motion.div
//             key={3}
//             variants={divVariants}
//           >
//             <p>Div 3</p>
//           </motion.div>
//           <motion.div
//             key={4}
//             variants={divVariants}
//           >
//             <p>Div 4</p>
//           </motion.div>
//         </motion.div>
//       </AnimatePresence>
//     </div>
//   );
// };

// export default ChatAnime;

