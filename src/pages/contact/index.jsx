import React from "react";

const index = () => {
    return (
        <>
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
                        <form action="">
                            <p>Email Id</p>
                            <input
                                type="text"
                                name="Email"
                                id=""
                                placeholder="Work Email"
                            />
                            <p>Firstname</p>
                            <input
                                type="text"
                                name="Firstname"
                                id=""
                                placeholder="John "
                            />
                            <p>Lastname</p>
                            <input
                                type="text"
                                name="Lastname"
                                id=""
                                placeholder="Doe"
                            />
                            <p>Message</p>
                            <textarea
                                name="text"
                                id=""
                                cols="80"
                                rows="7"
                                placeholder="Message"
                            ></textarea>
                            <br />

                            <input type="submit" name="" id="" />
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
};

export default index;
