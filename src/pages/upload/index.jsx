import { getStates, uploadSubmit } from "@/components/http_requests";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const index = () => {
    const [option, setOption] = useState([]);
    const [value, setValue] = useState("");
    const [input, setInput] = useState({
        Name: "",
        Email: "",
        Contact: "",
        Address: "",
        state: "",
        URL: "",
    });
    const redirect = useRouter();
    useEffect(() => {
        getStates(setOption);
    }, []);

    return (
        <form
            className="upload"
            id="form"
            onSubmit={(e) => uploadSubmit(e, input, value, redirect)}
        >
            <h1>Give Infomation</h1>
            <hr />
            <br />
            <label>Name:</label>
            <input
                type="text"
                placeholder="Enter Your Name"
                value={input.Name}
                onInput={(e) =>
                    setInput((t) => {
                        return { ...t, Name: e.target.value };
                    })
                }
                id="name"
                required
            />
            <br />
            <label>Email:</label>
            <input
                type="email"
                placeholder="Enter Your Email"
                value={input.Email}
                onInput={(e) =>
                    setInput((t) => {
                        return { ...t, Email: e.target.value };
                    })
                }
                required
                id="email"
            />
            <br />
            <label>Number:</label>
            <input
                type="number"
                value={input.Contact}
                onInput={(e) =>
                    setInput((t) => {
                        return { ...t, Contact: e.target.value };
                    })
                }
                required
                placeholder="Enter Contact No"
                id="contact"
            />
            <br />
            <label>Full Address:</label>
            <textarea
                type="Address"
                placeholder="Enter Your Address"
                id="address"
                value={input.Address}
                onInput={(e) =>
                    setInput((t) => {
                        return { ...t, Address: e.target.value };
                    })
                }
                required
            ></textarea>
            <br />
            <label>State:</label>
            <select
                value={value}
                onChange={(e) => setValue(e.target.value)}
                required
            >
                <option>Select State</option>
                {option.map((item, i) => (
                    <option value={item} key={i}>
                        {item}
                    </option>
                ))}
            </select>
            <br />
            <label>Photos:</label>
            <input
                type="file"
                id="photo"
                accept="image/*"
                onInput={(e) =>
                    setInput((t) => {
                        return { ...t, URL: e.target.files[0] };
                    })
                }
                required
            />
            <button id="btn">Submit</button>
            <br />
        </form>
    );
};

export default index;
