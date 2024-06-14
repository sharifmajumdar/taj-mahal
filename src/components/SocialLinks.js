import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { MdMenuBook } from "react-icons/md";

const SocialLinks = () => {
  const links = [
    {
      id: 3,
      child: (
        <>
          Feedback <HiOutlineMail size={30} />
        </>
      ),
      href: "mailto:tajmahaljoensuu@gmail.com",
    },
    {
      id: 4,
      child: (
        <>
          Menu <MdMenuBook size={30} />
        </>
      ),
      href: "/menu_light.pdf",
      style: "rounded-br-md",
      download: true,
    },
  ];
  return (
    <div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
      <ul>
        {links.map(({ id, child, href, style, download }) => (
          <li
            key={id}
            className={`flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-500 ${style}`}
          >
            <a
              href={href}
              className="flex justify-between items-center w-full text-white"
              download={download}
              target="_blank"
              rel="noreferrer"
            >
              {child}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SocialLinks;
