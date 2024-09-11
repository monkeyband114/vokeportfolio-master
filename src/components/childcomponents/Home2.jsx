import { useState, useEffect } from "react";
import { arrrowright, contrasticon, menu, close } from "../../assets/icons";
import { michael } from "../../assets";
import useDarkmode from "../../hooks/useDarkmode";
import { Link } from "react-router-dom";
const Home2 = () => {
  const [toggle, settoggle] = useState(false);

  const [colorTheme, setTheme] = useDarkmode();

  return (
    <section className="py-3">
      <nav className="flex md:hidden  flex-row justify-end">
        <div
          onClick={() => setTheme(colorTheme)}
          className="mr-2 cursor-pointer shadow-lg">
          <img src={contrasticon} alt="contrasticon" />
        </div>
        <div>
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] animate__icon h-[28px] object-contain cursor-pointer"
            onClick={() => settoggle((prev) => !prev)}
          />
        </div>
        {/* toggle menu */}
        <div
          className={`${
            toggle ? "flex" : "hidden"
          } bg-primary dark:bg-fullBlack absolute top-[3rem] right-2 mx-4 border border-brightyellow my-2 min-w-[140px] rounded-xl animate__menu`}>
          <ul className="list-none flex-col justify-end items-center flex-1">
            <Link to="/">
              <li className="font-inter font-normal cursor-pointer text-center text-[16px] mt-2 mb-2">
                <a href="">Home</a>
              </li>
            </Link>
            <Link to="/projects">
              <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
                <a href="">Projects</a>
              </li>
            </Link>
            <Link to="/services">
              <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
                <a href="">Tools</a>
              </li>
            </Link>
            <Link to="/">
              <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
                <a href="">Education</a>
              </li>
            </Link>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="">Contact</a>
            </li>
            <li className="font-inter font-normal cursor-pointer text-center text-[16px] mb-2">
              <a href="">Blog</a>
            </li>
          </ul>
        </div>
      </nav>
    </section>
  );
};

export default Home2;
