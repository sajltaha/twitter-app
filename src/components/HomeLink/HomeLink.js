import { Link } from "react-router-dom";
import style from "./HomeLink.module.css";
import { useState } from "react";

export default function HomeLink() {
  const [homeLinkHover, setHomeLinkHover] = useState(false);

  return (
    <Link
      className={style.navbar_link}
      to="/"
      onMouseEnter={() => setHomeLinkHover(true)}
      onMouseLeave={() => setHomeLinkHover(false)}
    >
      <img
        src={homeLinkHover ? "images/home-blue.svg" : "images/home-black.svg"}
        alt="home-link"
      />
      <p style={{ color: homeLinkHover ? "#1DA1F2" : "black" }}>Home</p>
    </Link>
  );
}
