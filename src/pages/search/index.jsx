import React from "react";
import post from "@/components/photos/post.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";

const index = () => {
    return (
        <>
            <div className="container">
                <input
                    id="search"
                    type="text"
                    placeholder="Search for the State"
                />
                <div className="button">
                    <button id="btn">
                        <AiOutlineSearch />
                    </button>
                </div>
            </div>
            <div className="svgs">
                <Image src={post} alt="" />
            </div>
        </>
    );
};

export default index;
