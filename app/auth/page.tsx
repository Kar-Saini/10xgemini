"use client";
import React, { ChangeEvent, useEffect, useRef, useState } from "react";
import { AiOutlineLoading } from "react-icons/ai";
import { SignUpSchema } from "../_utils/zodSchem";

const AuthenticationPage = () => {
  const [authState, setAuthState] = useState<"signup" | "login">("signup");
  const [otpSent, setOtpSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [otpVerified, setOtpVerified] = useState(false);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  function handleAuthStateChange(state: "signup" | "login") {
    setAuthState(state);
    setEmail("");
    setPassword("");
  }

  function handleLogin() {}
  function handleSignup() {
    const validateSchema = SignUpSchema.safeParse({ email });
  }

  return (
    <div className="flex justify-center items-center min-h-screen text-neutral-700">
      <div
        className="p-8 w-full max-w-md rounded-lg shadow-xl 
      border border-neutral-700 text-neutral-300"
      >
        <h1
          className="text-5xl text-center font-bold text-neutral-500 border-b
         border-neutral-600 pb-3 mb-6"
        >
          10xGemini
        </h1>

        <div className="flex justify-center gap-8 mb-6 text-lg font-medium">
          <button
            onClick={() => handleAuthStateChange("login")}
            className={`transition-colors ${
              authState === "login"
                ? "text-white border-b-2 border-blue-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Login
          </button>
          <span className="text-neutral-500">|</span>
          <button
            onClick={() => handleAuthStateChange("signup")}
            className={`transition-colors ${
              authState === "signup"
                ? "text-white border-b-2 border-blue-500"
                : "text-neutral-400 hover:text-white"
            }`}
          >
            Signup
          </button>
        </div>

        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <label htmlFor="email" className="text-sm text-neutral-400">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email"
              className="p-3 rounded-lg bg-neutral-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          {authState === "login" && (
            <div className="flex flex-col gap-1">
              <label htmlFor="password" className="text-sm text-neutral-400">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="p-3 rounded-lg bg-neutral-800 text-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
          <button
            type="submit"
            className="mt-4 p-3 rounded-lg bg-blue-500  text-white font-medium transition-colors hover:cursor-pointer disabled:cursor-not-allowed"
            disabled={otpSent}
          >
            {loading ? (
              <AiOutlineLoading
                size={20}
                className="text-center animate-spin duration-500 w-full"
              />
            ) : authState === "login" ? (
              "Login"
            ) : otpSent ? (
              "OTP Sent"
            ) : (
              "Send OTP"
            )}
          </button>
          {otpSent && <OTPComponent />}
          {otpVerified && (
            <div className="flex flex-col gap-1">
              <label htmlFor="email" className="text-sm text-neutral-400">
                Password
              </label>
              <input
                id="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                type="password"
                placeholder="Enter your password"
                className="p-3 rounded-lg bg-neutral-800  focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

function OTPComponent() {
  const OTP_DIGITS = 4;
  const otpRefs = useRef<HTMLInputElement[]>([]);
  const [enteredOTP, setEnteredOTP] = useState<string[]>(
    Array(OTP_DIGITS).fill("")
  );

  useEffect(() => {
    if (otpRefs.current[0]) {
      otpRefs.current[0]?.focus();
    }
  }, []);

  function handleChange(e: ChangeEvent<HTMLInputElement>, idx: number) {
    const value = e.target.value.replace(/\D/, "");
    if (!value) {
      otpRefs.current[idx].value = "";
      return;
    }

    const newOtpArr = [...enteredOTP];
    newOtpArr[idx] = value[0];
    setEnteredOTP(newOtpArr);
    if (idx < OTP_DIGITS - 1) {
      otpRefs.current[idx + 1]?.focus();
    }
  }
  function handleKeyDown(e: KeyboardEvent, idx: number) {
    if (e.key === "Backspace") {
      const newInputArr = [...enteredOTP];
      if (enteredOTP[idx]) {
        newInputArr[idx] = "";
        setEnteredOTP(newInputArr);
      } else if (idx > 0) {
        newInputArr[idx - 1] = "";
        setEnteredOTP(newInputArr);
        otpRefs.current[idx - 1]?.focus();
      }
    }
  }
  return (
    <div className="flex justify-between flex-col gap-y-4">
      <h1>Enter the OTP below</h1>
      <div className="flex justify-center gap-4">
        {Array(OTP_DIGITS)
          .fill("")
          .map((_, idx) => (
            <input
              key={idx}
              maxLength={1}
              type="text"
              ref={(ele) => (otpRefs.current[idx] = ele as HTMLInputElement)}
              className="w-10 h-10 border-neutral-400 border-2 outline-none text-center"
              onChange={(e) => handleChange(e, idx)}
              onKeyDown={(e) => handleKeyDown(e, idx)}
            />
          ))}
      </div>
    </div>
  );
}

export default AuthenticationPage;
