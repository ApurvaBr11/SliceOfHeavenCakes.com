"use client";
import usesidebartoggle from "@/app/stores/sidebartoggle";

import Image from "next/image";
import Link from "next/link";

const Sidebar = () => {
  const item = [
    {
      name: "Home",
      href: "/",
    },
    {
      name: "Browse",
      href: "/browse",
    },
    {
      name: "Latest Lounches",
      href: "/latest",
    },
    {
      name: "NewsLatter",
      href: "/news",
    },
    {
      name: "About",
      href: "/about",
    },
    {
      name: "Collaborators",
      href: "/collaborators",
    },
  ];
  const { mode } = usesidebartoggle((state) => state);
  return (
    <div
      className={ ` ${
        mode ? "w-[25%]" : "w-[0%]"
      } transition-[width]
       duration-1000 ease-in-out min-h-screen bg-violet-300 flex  flex-col gap-4 py-5`}
    >
      <div className="p-5 flex flex-col fixed top-6 w-full ">
        {item.map((e) => (
          <Link href={e.href}>
            <p className="px-5 py-2 border-b border-purple-950">{e.name}</p>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
