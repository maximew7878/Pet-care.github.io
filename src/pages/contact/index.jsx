import { contactSubmit } from "@/components/http_requests";
import React, { useState } from "react";

const index = () => {
    const [input, setInput] = useState({ email: "", name: "", message: "" });
    return (
        <div className="contact">
            <div className="header">
                <h1>
                    We want to Hear From You
                    <p>
                        Please fill out our form, and we'll get in touch shortly
                    </p>
                </h1>
            </div>
            <div className="content">
                <marquee>
                    Contact us for more information about working with Animal
                    Donation
                </marquee>
            </div>

            <div className="section">
                <div className="left"></div>
                <div className="right">
                    <div className="formbox">
                        <form onSubmit={(e) => contactSubmit(e, input)}>
                            <p>Email Id</p>
                            <input
                                type="text"
                                name="Email"
                                id=""
                                placeholder="Work Email"
                                value={input.email}
                                onChange={(e) =>
                                    setInput((t) => {
                                        return { ...t, email: e.target.value };
                                    })
                                }
                                required
                            />
                            <p>Name</p>
                            <input
                                type="text"
                                name="Firstname"
                                id=""
                                placeholder="John "
                                value={input.name}
                                onChange={(e) =>
                                    setInput((t) => {
                                        return { ...t, name: e.target.value };
                                    })
                                }
                                required
                            />
                            <p>Message</p>
                            <textarea
                                name="text"
                                id=""
                                cols="80"
                                rows="7"
                                placeholder="Message"
                                value={input.message}
                                onChange={(e) =>
                                    setInput((t) => {
                                        return {
                                            ...t,
                                            message: e.target.value,
                                        };
                                    })
                                }
                                required
                            ></textarea>
                            <br />

                            <input type="submit" />
                        </form>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default index;
