import React, { useEffect, useRef, useState } from 'react'
import {motion} from 'framer-motion'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock } from '@fortawesome/free-regular-svg-icons';
import Progress from '../../data/enums';
import useStore from "../../hooks/useStore";


const Spin = ({play})=>{

  const { updateProgress } = useStore()
  const [icon, setIcon] = useState(faHandRock);
  const [timeLeft, setTimeLeft] = useState(10);
  const intervalRef = useRef();

  useEffect(() => {

    intervalRef.current = setInterval(() => {
      setTimeLeft((t) => t - 0.5);
      const random = [
        faHandRock, faHandPaper, faHandScissors, faHandLizard, faHandSpock
      ]
  
      const item = random[Math.floor(Math.random()*random.length)];
      updateProgress(Progress.Playing)
      setIcon(item);
    }, 100);

    return () => clearInterval(intervalRef.current);
  }, [play]);

  useEffect(() => {
    if (timeLeft <= 0) {
      updateProgress(Progress.Finished)
    }
  }, [timeLeft]);

  return(
    <motion.div
      initial={{ opacity: 0.1 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1 }}
    >
      <div className="mt-10">
        <FontAwesomeIcon icon={icon} size="4x"/>
      </div>

    </motion.div>
  )
}




export default Spin