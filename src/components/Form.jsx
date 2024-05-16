import React from "react";
import logo from "../assets/Logo.png";
import userIconSVG from "../assets/user.svg";
import mailIconSVG from "../assets/mail-02.svg";
import passwordIconSVG from "../assets/lock.svg";
import googleIcon from "../assets/google-icon.png";
import facebookIcon from "../assets/facebook-icon.png";
import appleIcon from "../assets/apple-icon.png";
import clipArtImage from "../assets/Autumn-amico 1.png";
const Form = () => {
  return (
    <div className="w-full md:w-[50%] h-full bg-white p-2 md:p-16 md:rounded-tl-3xl md:rounded-bl-3xl md:drop-shadow-2xl flex items-center justify-center">
      <div className="form flex flex-col items-center w-full">
        <div className="logo h-fit flex flex-col items-center w-full md:gap-y-5">
          <img src={logo} alt="Logo" className="h-[30px] md:h-[40px]" />
          <img src={clipArtImage} alt="clipart" className="w-[60%] md:hidden" />
          <h2 className="text-[5vw] md:text-[1.7vw] font-medium">
            Create Account
          </h2>
        </div>
        <div className="form-fields flex flex-col items-center w-full gap-y-1 mt-3 md:gap-y-4 md:mt-8">
          <div class="w-[90%]">
            <label
              for="full_name"
              class="block text-gray-700 text-[4vw] font-medium md:font-normal md:text-[1vw]  mb-1"
            >
              Full Name
            </label>
            <div className="relative h-fit text-[#a8a8ab] ">
              <img
                src={userIconSVG}
                alt="icon"
                className="absolute inset-y-0 left-0 md:px-7 px-6 my-[10px] md:my-3 h-[50%] md:h-[50%]"
              />
              <input
                type="text"
                id="full_name"
                name="full_name"
                class="block w-full px-12 py-[4px] md:px-14 md:py-2 placeholder:text-[4vw] text-[4vw] md:placeholder:text-[1.1vw] md:text-[1.1vw] rounded-3xl border-2 border-[#a5a5a7] focus:outline-none placeholder:text-[#a8a8ab]"
                placeholder="Enter Full Name"
              />
            </div>
          </div>
          <div class="w-[90%]">
            <label
              for="email"
              class="block text-gray-700 text-[4vw] font-medium md:font-normal md:text-[1vw]  mb-1"
            >
              Email
            </label>
            <div className="relative h-fit text-[#a8a8ab] ">
              <img
                src={mailIconSVG}
                alt="icon"
                className="absolute inset-y-0 left-0 md:px-7 px-6 my-[10px] md:my-3 h-[50%] md:h-[50%]"
              />
              <input
                type="text"
                id="email"
                name="email"
                class="block w-full px-12 py-[4px] md:px-14 md:py-2 placeholder:text-[4vw] text-[4vw] md:placeholder:text-[1.1vw] md:text-[1.1vw] rounded-3xl border-2 border-[#a5a5a7] focus:outline-none placeholder:text-[#a8a8ab]"
                placeholder="Enter Your Email"
              />
            </div>
          </div>
          <div class="w-[90%]">
            <label
              for="password"
              class="block text-gray-700 text-[4vw] font-medium md:font-normal md:text-[1vw]  mb-1"
            >
              Password
            </label>
            <div className="relative h-fit text-[#a8a8ab] ">
              <img
                src={passwordIconSVG}
                alt="icon"
                className="absolute inset-y-0 left-0 md:px-7 px-6 my-[10px] md:my-3 h-[50%] md:h-[50%]"
              />
              <input
                type="text"
                id="password"
                name="password"
                class="block w-full px-12 py-[4px] md:px-14 md:py-2 placeholder:text-[4vw] text-[4vw] md:placeholder:text-[1.1vw] md:text-[1.1vw] rounded-3xl border-2 border-[#a5a5a7] focus:outline-none placeholder:text-[#a8a8ab]"
                placeholder="Enter Your Password"
              />
            </div>
          </div>
          <button className="bg-[#73895D] w-[90%] md:py-3 py-1 text-white rounded-3xl  md:mt-8 mt-4">
            Sign-Up
          </button>
        </div>
        <div className="or my-4 text-[4vw] md:text-[1.2vw] text-[#B0BAC3]">
          - OR -
        </div>
        <div className="social-sign-up flex gap-6">
          <div className="icon w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] border-[1px] border-gray-400 rounded-full flex items-center justify-center p-[6px] md:p-2 cursor-pointer">
            <img
              src={googleIcon}
              alt="icon"
              className="object-contain h-full"
            />
          </div>
          <div className="icon w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] border-[1px] border-gray-400 rounded-full flex items-center justify-center p-[6px] md:p-2 cursor-pointer">
            <img
              src={facebookIcon}
              alt="icon"
              className="object-contain h-full"
            />
          </div>
          <div className="icon w-[10vw] h-[10vw] md:w-[3vw] md:h-[3vw] border-[1px] border-gray-400 rounded-full flex items-center justify-center p-[6px] md:p-2 cursor-pointer">
            <img src={appleIcon} alt="icon" className="object-contain h-full" />
          </div>
        </div>
        <p className="mt-4 text-[4vw] md:text-[1vw]">
          Already have an account?{" "}
          <span className="font-semibold text-[#73895D]">Login</span>
        </p>
      </div>
    </div>
  );
};

export default Form;
