"use client";

import Image from "next/image";
import logo from "../../../public/img/logo.png";
import Link from "next/link";
import { Link as ScrollLink } from "react-scroll";
import Icon from "../Icon/Icon";
import styles from "./header.module.scss";

const Header = () => {
  return (
    <header className="header fixed h-screen pl-[55px] py-10 flex flex-col gap-y-[110px]">
      <Image
        className="min-h-[50px] pl-[9px]"
        src={logo}
        alt="Логотип"
        priority
      />

      <div className="flex flex-col justify-between h-full gap-7">
        <nav>
          <ul className="inline-flex flex-col gap-7">
            <li>
              <Link
                className={`header__nav-link w-[54px] h-[54px] inline-flex p-[5px] ${styles["header__nav-link"]}`}
                href="#"
              >
                <Icon
                  id="search"
                  className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__nav-link-image"]}`}
                />
              </Link>
            </li>
            <li>
              <Link
                className={`header__nav-link w-[54px] h-[54px] inline-flex p-[5px] ${styles["header__nav-link"]}`}
                href="#"
              >
                <Icon
                  id="home"
                  className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__nav-link-image"]}`}
                />
              </Link>
            </li>
            <li>
              <Link
                className={`header__nav-link w-[54px] h-[54px] inline-flex p-[5px] ${styles["header__nav-link"]}`}
                href="#"
              >
                <Icon
                  id="media"
                  className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__nav-link-image"]}`}
                />
              </Link>
            </li>
            <li>
              <Link
                className={`header__nav-link w-[54px] h-[54px] inline-flex p-[5px] ${styles["header__nav-link"]}`}
                href="#"
              >
                <Icon
                  id="tv"
                  className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__nav-link-image"]}`}
                />
              </Link>
            </li>
            <li>
              <Link
                className={`header__nav-link w-[54px] h-[54px] inline-flex p-[5px] ${styles["header__nav-link"]}`}
                href="#"
              >
                <Icon
                  id="like"
                  className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__nav-link-image"]}`}
                />
              </Link>
            </li>
            <li>
              <Link
                className={`header__nav-link w-[54px] h-[54px] inline-flex p-[5px] ${styles["header__nav-link"]}`}
                href="#"
              >
                <Icon
                  id="profile"
                  className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__nav-link-image"]}`}
                />
              </Link>
            </li>
          </ul>
        </nav>

        <ScrollLink
          className={`w-[54px] h-[54px] flex items-center justify-center p-[5px] ${styles["header__link"]}`}
          to="main"
          spy={true}
          smooth={true}
          offset={0}
          duration={500}
        >
          <Icon
            id="arrowUp"
            className={`w-11 h-11 transition-colors duration-300 ease-in-out ${styles["header__link-up"]}`}
          />
        </ScrollLink>
      </div>
    </header>
  );
};

export default Header;
