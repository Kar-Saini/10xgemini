"use client";
import { Anta, Pacifico } from "next/font/google";
import React from "react";
import { motion } from "framer-motion";
import { BsStars } from "react-icons/bs";
import { useRouter } from "next/navigation";

const pacifico = Pacifico({
  subsets: ["latin"],
  weight: "400",
});

const LandingPage = () => {
  const router = useRouter();
  return (
    <div className="flex justify-center items-center min-h-screen w-full">
      <motion.div
        initial={{ x: 0, y: 100, opacity: 0 }}
        animate={{ x: 0, y: 0, opacity: 100 }}
        transition={{ duration: 3, ease: "backInOut" }}
        className={` flex flex-col gap-y-10 p-10 `}
      >
        <div className="flex flex-col gap-y-2">
          <div className="text-4xl font-extrabold text-neutral-400 flex">
            <div className=" flex flex-col justify-between items-end">
              <BsStars size={30} className="text-right" />
              <span>10X</span>
            </div>
            <span className={`text-9xl ${pacifico.className} mx-1`}>
              Gemini
            </span>
          </div>
          <p className="text-neutral-600 text-right text-lg">
            Beacuse 1x {`ain't`} enough
          </p>
        </div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 1, ease: "backInOut" }}
          className="p-3 bg-gradient-to-br from-bule-950 via-pink-950 to-slate-900 rounded-lg text-lg font-semibold text-neutral-400/70 hover:cursor-pointer"
          onClick={() => router.push("/auth")}
        >
          Unleash 10X
        </motion.button>
      </motion.div>
    </div>
  );
};

export default LandingPage;
