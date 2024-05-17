import React from "react";
import { footerLinks } from "../constants";

const Footer = () => {
  return (
    <footer className="py-5 sm:px-10 px-5">
      <div className="screen-max-width">
        <div className="">
          <p className="font-semibold text-gray text-xs">
            More ways to shop:{" "}
            <span className="underline text-blue cursor-pointer">
              Find an Apple Store
            </span>{" "}
            or{" "}
            <span className="underline text-blue cursor-pointer">
              other retailers
            </span>{" "}
            near you.
          </p>
          <p className="font-semibold text-gray text-xs">
            Or call 1-800-MY-APPLE.
          </p>
        </div>

        <div className="bg-neutral-700 my-5 h-[1px] w-full" />

        <div className="flex md:flex-row flex-col md:items-center justify-between">
          <p className="font-semibold text-gray text-xs">
            Copyright © 2021 Apple Inc. All rights reserved.
          </p>
          <div className="flex">
            {footerLinks.map((link, index) => (
              <p
                key={link}
                className="font-semibold text-gray sm:text-xs cursor-pointer text-[10px]"
              >
                {link}{" "}
                {index !== footerLinks.length - 1 && (
                  <span className="md:mx-2 mx-2">|</span>
                )}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
