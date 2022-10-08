import React from "react";
import { MdOutlineAccountCircle } from "react-icons/md";
import {
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaYoutubeSquare,
} from "react-icons/fa";

function Address() {
  return (
    <div className="flex justify-center">
      <div className="bg-primary rounded-3xl flex-col space-y-10 p-10 text-white">
        <h1 className="text-3xl font-semibold">Get In Touch</h1>
        <p className="text-2xl">I will get back to you as soon as possible.</p>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12  p-2 rounded">
            <i className="ri-map-pin-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Visit US</h1>
            <p>England</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12  p-2 rounded">
            <i className="ri-mail-line text-3xl text-secondary"></i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">Mail US</h1>
            <p>example@gmail.com</p>
          </div>
        </div>

        <div className="flex space-x-5 items-center">
          <div className="h-12 w-12  p-2 rounded">
            <i className="text-3xl text-secondary">
              <MdOutlineAccountCircle />
            </i>
          </div>
          <div>
            <h1 className="font-semibold text-xl">My Social media accounts</h1>
            <ul className="flex flex-row mx-2 mt-4">
              <li className=" text-4xl text-secondary mx-3 ">
                <a
                  href="https://www.facebook.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaFacebook />
                </a>
              </li>
              <li className=" text-4xl text-secondary mx-3 ">
                <a
                  href="https://www.instagram.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaInstagram />
                </a>
              </li>
              <li className=" text-4xl text-secondary mx-3 ">
                <a
                  href="https://github.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaGithub />
                </a>
              </li>
              <li className=" text-4xl text-secondary mx-3 ">
                <a
                  href="https://www.youtube.com"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  <FaYoutubeSquare />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Address;
