import React, { useEffect, useState } from "react";
import post from "@/components/photos/post.svg";
import Image from "next/image";
import { AiOutlineSearch } from "react-icons/ai";
import { getStates, searchSubmit } from "@/components/http_requests";
import Post from "@/components/search/Post";

const index = () => {
    const [show, setShow] = useState(false);
    const [options, setOptions] = useState([]);
    const [value, setValue] = useState("Select the state");
    const [search, setSearch] = useState([]);
    useEffect(() => {
        getStates(setOptions);
    }, []);

    const submitHandler = () => {
        searchSubmit(value, setSearch);
        setShow(true);
    };

    return (
        <>
            {show ? (
                <div className="posts">
                    <button onClick={() => setShow((t) => !t)}>Back</button>
                    <div className="content">
                        {search.length === 0 && (
                            <div className="error">Nothing to show</div>
                        )}
                        {search.map((item, i) => (
                            <Post obj={item} key={i} />
                        ))}
                    </div>
                </div>
            ) : (
                <div className="search">
                    <div className="container">
                        <select
                            value={value}
                            onChange={(e) => setValue(e.target.value)}
                        >
                            <option>Select the state</option>
                            {options.map((item, index) => (
                                <option value={item} key={index}>
                                    {item}
                                </option>
                            ))}
                        </select>
                        <div className="button" onClick={submitHandler}>
                            <button id="btn">
                                <AiOutlineSearch />
                            </button>
                        </div>
                    </div>
                    <div className="svgs">
                        <Image src={post} alt="" />
                    </div>
                </div>
            )}
        </>
    );
};

export default index;
