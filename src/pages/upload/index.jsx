import React from "react";

const index = () => {
    return (
        <form className="container" id="form">
            <h1>Give Infomation</h1>

            <hr />
            <br />
            <label>Name:</label>
            <input type="text" placeholder="Enter Your Name" id="name" />
            <br />
            <label>Email:</label>
            <input type="email" placeholder="Enter Your Email" id="email" />
            <br />
            <label>Number:</label>
            <input type="number" placeholder="Enter Contact No" id="contact" />
            <br />
            <label>Full Address:</label>
            <textarea
                type="Address"
                placeholder="Enter Your Address"
                id="address"
            ></textarea>
            <br />
            <label>State:</label>
            <select id="state"></select>
            <br />
            <label>Photos:</label>
            <input type="file" id="photo" accept="image/*" />
            <button id="btn">Submit</button>
            <br />
        </form>
    );
};

export default index;
