import React from "react";
import "./Navbar.css";
import { AiOutlineHome } from "react-icons/ai";
import { AiOutlineUser } from "react-icons/ai";
import { RiToolsFill } from "react-icons/ri";
import { AiOutlineFundProjectionScreen } from "react-icons/ai";
import { RiWechatLine } from "react-icons/ri";
import { useState } from "react";
const Navbar = () => {
  const [activeNav, setactiveNav] = useState("#");
  return (
    <nav>
      <a
        href="#"
        onClick={() => setactiveNav("#")}
        className={activeNav === "#" ? "active" : ""}
      >
        <AiOutlineHome />
      </a>
      <a
        href="#about"
        onClick={() => setactiveNav("#about")}
        className={activeNav === "#about" ? "active" : ""}
      >
        <AiOutlineUser />
      </a>
      <a
        href="#experience"
        onClick={() => setactiveNav("#experience")}
        className={activeNav === "#experience" ? "active" : ""}
      >
        <RiToolsFill />
      </a>
      <a
        href="#projects"
        onClick={() => setactiveNav("#projects")}
        className={activeNav === "#projects" ? "active" : ""}
      >
        <AiOutlineFundProjectionScreen />
      </a>
      <a
        href="#contact"
        onClick={() => setactiveNav("#contact")}
        className={activeNav === "#contact" ? "active" : ""}
      >
        <RiWechatLine />
      </a>
    </nav>
  );
};

export default Navbar;
