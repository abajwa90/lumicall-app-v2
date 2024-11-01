"use client";
import { useState } from "react";
import { FaLink, FaVideo } from "react-icons/fa";
import { motion } from "framer-motion";
import Image from 'next/image';
import InstantMeeting from "@/app/modals/InstantMeeting";
import UpcomingMeeting from "@/app/modals/UpcomingMeeting";
import CreateLink from "@/app/modals/CreateLink";
import JoinMeeting from "@/app/modals/JoinMeeting";
import BlobAnimation from "./animatedbg"; 
import styles from './page.module.css';

const glowVariants = {
  initial: { textShadow: "0px 0px 10px rgba(0, 255, 150, 0.8)" },
  animate: {
    textShadow: [
      "0px 0px 10px rgba(0, 255, 150, 0.8)",
      "0px 0px 20px rgba(0, 255, 150, 1)",
      "0px 0px 10px rgba(0, 255, 150, 0.8)"
    ],
    transition: { duration: 1.5, repeat: Infinity, ease: "easeInOut" }
  },
};
 
export default function Home() {
  const [startInstantMeeting, setStartInstantMeeting] = useState(false);
  const [joinMeeting, setJoinMeeting] = useState(false);
  const [showUpcomingMeetings, setShowUpcomingMeetings] = useState(false);
  const [showCreateLink, setShowCreateLink] = useState(false);

  return (
    <>
	  {/* Background Animation */}
      <BlobAnimation />
      <main className='relative z-10 flex flex-col items-center justify-center h-screen'>
        <motion.h1
          className='text-4xl font-bold text-center'
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Welcome to{" "}
          <motion.span
            className="glow-text"
            variants={glowVariants}
            initial="initial"
            animate="animate"
          >
            LumiCall
          </motion.span>
        </motion.h1>
        <p className='text-lg text-gray-600 text-center mt-2'>
          Video conferencing made simple.
        </p>

        {/* Buttons */}
        <div className='flex items-center justify-center space-x-4 mt-8'>
          <motion.button
            className='btn-purple px-4 w-[200px] py-3 flex flex-col items-center'
            onClick={() => setShowCreateLink(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaLink className='mb-1 text-gray-300' />
            Create Link
          </motion.button>
          <motion.button
            className='btn-green px-4 w-[200px] py-3 flex flex-col items-center'
            onClick={() => setStartInstantMeeting(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaVideo className='mb-1 text-white' />
            New Meeting
          </motion.button>
          <motion.button
            className='btn-blue px-4 w-[200px] py-3 flex flex-col items-center'
            onClick={() => setJoinMeeting(true)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaVideo className='mb-1 text-white' />
            Join Meeting
          </motion.button>
        </div>

        {/* Upcoming Meetings Link */}
        <div className='mt-6'>
          <button
            className='text-green-500 underline text-sm'
            onClick={() => setShowUpcomingMeetings(true)}
          >
            View Upcoming Meetings
          </button>
        </div>

        {/* Footer */}
        <div className='mt-10 flex items-center justify-center'>
          <p className='text-sm text-gray-600 mr-2'>Powered by</p>
          <a href="https://getstream.io" target="_blank" rel="noopener noreferrer">
            <Image src="/stream-logo.png" alt="Stream Logo" width={80} height={20} />
          </a>
        </div>
      </main>

      {/* Modals */}
      {startInstantMeeting && (
        <InstantMeeting enable={startInstantMeeting} setEnable={setStartInstantMeeting} />
      )}
      {showUpcomingMeetings && (
        <UpcomingMeeting enable={showUpcomingMeetings} setEnable={setShowUpcomingMeetings} />
      )}
      {showCreateLink && (
        <CreateLink enable={showCreateLink} setEnable={setShowCreateLink} />
      )}
      {joinMeeting && (
        <JoinMeeting enable={joinMeeting} setEnable={setJoinMeeting} />
      )}
    </>
  );
}
