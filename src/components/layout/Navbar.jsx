import { FaGithub } from "react-icons/fa";

function Navbar() {
  return (
    <div className="flex justify-between items-center bg-gray-800 p-4">
      <div className="flex flex-row items-center justify-center">
        <h3 className="text-gray-300 text-2xl px-3 ">
          <FaGithub />
        </h3>
        <p className="text-gray-300">Github Finder</p>
      </div>
      <nav className="flex items-center justify-between text-gray-300 text-sm font-medium gap-3">
        <ul className="flex items-center justify-center">
          <li className="flex items-center gap-3 uppercase weigth-medium">
            <a href="/" className=" hover:bg-slate-400 p-2 rounded-md">
              Home
            </a>
            <a className=" hover:bg-slate-400 p-2 rounded-md" href="/about">
              About
            </a>
            <a className=" hover:bg-slate-400 p-2 rounded-md" href="/contact">
              Contact
            </a>
            <a className=" hover:bg-slate-400 p-2 rounded-md" href="/blog">
              Blog
            </a>
            <a className=" hover:bg-slate-400 p-2 rounded-md" href="/movies">
              Movies
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
