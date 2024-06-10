import React from "react";
import Link from "next/link";

import { RiPlantFill } from "react-icons/ri";
import { FaInfoCircle } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="bg-gray-200 h-[90vh] w-72 text-center">
      <Link
        href="/dashboard"
        aria-current="true"
        className="flex justify-center items-center w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
      >
        <FaInfoCircle className="w-10 h-10 text-green-400" />
      </Link>
      <Link
        href="/dashboard/crop"
        className="flex justify-center items-center w-full cursor-pointer rounded-lg p-4 transition duration-500 hover:bg-neutral-100 hover:text-neutral-500 focus:bg-neutral-100 focus:text-neutral-500 focus:ring-0 dark:hover:bg-neutral-600 dark:hover:text-neutral-200 dark:focus:bg-neutral-600 dark:focus:text-neutral-200"
      >
        <RiPlantFill className="w-10 h-10 text-green-400" />
      </Link>
    </div>
  );
};

export default Sidebar;
