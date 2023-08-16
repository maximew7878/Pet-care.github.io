import React from "react";
import {
    AiFillHome,
    AiOutlineSearch,
    AiOutlineUser,
    AiFillPhone,
} from "react-icons/ai";
import Link from "next/link";

const Navbar = () => {
    return (
        <div className="nav">
            <li>
                <Link href="/">
                    <AiFillHome />
                </Link>
            </li>
            <li>
                <Link href="/search">
                    <AiOutlineSearch />
                </Link>
            </li>
            <li>
                <Link href="/upload">
                    <AiOutlineUser />
                </Link>
            </li>
            <li>
                <Link href="/contact">
                    <AiFillPhone />
                </Link>
            </li>
        </div>
    );
};

export default Navbar;
