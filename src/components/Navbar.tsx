import Link from "next/link";
import React from "react";

const Navbar: React.FC = () => {
  return (
    <header className="z-50 py-5 px-10 flex justify-between items-center gap-5 sticky top-0">
      <div>
        <h1 className="text-2xl text-white font-bold">Pulse</h1>
      </div>
      <div className="w-[18%] max-lg:hidden">
        <ul className="flex gap-10">
          {[
            { id: 1, title: "Overview", href: "" },
            { id: 2, title: "Explore", href: "" },
            { id: 3, title: "Features", href: "" },
            { id: 4, title: "Price", href: "" },
          ].map((item) => (
            <li key={item.id}>
              <Link
                className="text-white font-light transition hover:text-blue-700"
                href={item.href}
              >
                {item.title}
              </Link>
            </li>
          ))}
        </ul>
      </div>
      <div className="max-lg:hidden">
        <button className="py-2 px-10 rounded-full bg-blue-700 text-white">
          Buy
        </button>
      </div>
      <div className="lg:hidden">
        <button>Menu</button>
      </div>
    </header>
  );
};

export default Navbar;
