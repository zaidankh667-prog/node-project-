"use client";

import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface LogoProps {
  showText?: boolean;
}

const Logo = ({ showText = true }: LogoProps) => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };
    
    checkIfMobile();
    window.addEventListener('resize', checkIfMobile);
    
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  return (
    <Link href="/" className="font-bold text-gray-800 dark:text-white flex items-center group">
      <div className="relative flex items-center justify-center">
        <motion.div 
          whileHover={{ rotate: 5, scale: 1.05 }}
          transition={{ type: "spring", stiffness: 400, damping: 10 }}
          className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg shadow-md overflow-hidden hover:shadow-lg"
        >
          <Image
            src="/icons/logo.png"
            alt="Site logo"
            width={40}
            height={40}
            className="w-full h-full object-cover"
            priority
          />
        </motion.div>
      </div>
      {showText && !isMobile && (
        <motion.div 
          initial={{ opacity: 0, x: -5 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
          className="ml-3 flex flex-col"
        >
          <span className="text-lg font-bold tracking-tight">Zaidan Khan</span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">Web Developer</span>
        </motion.div>
      )}
    </Link>
  );
};

export default Logo; 
