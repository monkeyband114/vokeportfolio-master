import { useState, useEffect } from "react";
import { arrrowright, contrasticon, menu, close } from "../../assets/icons";
import { michael } from "../../assets";
import useDarkmode from "../../hooks/useDarkmode";
import { Link } from "react-router-dom";
const Home = () => {
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
      <div className="flex sm:flex-row flex-col-reverse justify-between">
        <div className="flex flex-col justify-between py-6">
          <h1 className="font-inter font-bold text-[36px] leading-[123.6%]">
            I’m Michael Adawaren <br className="sm:block hidden" />
            <span className="text-brightyellow mr-2">A Full-Stack</span>
            Developer
          </h1>
          <p className="font-inter mb-4 font-normal text-slate-500  text-[14px] leading-[24px]">
            Hello, I’m Michael Adawaren a Proficient software Engineer and
            software developer who has worked on over 50 innovative projects on
            IoT Fullstack web applications and ML softwares
          </p>
          <a
            href="mailto:dinstack23@gmail.com"
            className="bg-brightyellow w-[150px] h-[51px] rounded-[5px] flex flex-row justify-center
      p-2 pt-4">
            <p className="font-inter font-medium text-[14px] leading-[19px]">
              HIRE ME
            </p>
            <img
              src={arrrowright}
              alt="arrrowright"
              className=" p-1 pt-1 pl-1"
            />
          </a>
        </div>
        <div>
          <img src={michael} alt="michael" className="w-[600px] h-[390px]" />
        </div>
      </div>
    </section>
  );
};

export default Home;
