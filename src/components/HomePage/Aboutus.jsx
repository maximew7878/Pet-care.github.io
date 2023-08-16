import React from "react";
import cat1 from "@/components/photos/cat1.jpg";
import cat2 from "@/components/photos/cat2.jpg";
import Image from "next/image";

const Aboutus = () => {
    return (
        <div className="aboutus">
            <h1>ABOUT US</h1>
            <div className="quote">
                <p className="blockquote">
                    " When I look into the eyes of an animal I do not see an
                    animal. I see a living being. I see a friend. I feel a
                    soul."
                </p>
                <p className="author">By AD Williams</p>

                <div className="image"></div>
            </div>
            <div className="text">
                <p>
                    Animal Donation website is specially designed to address
                    animal welfare in India. We believe that the power of
                    compassion,love,generous & kind nature will have a positive
                    impact on the lives of animals around the country. We try to
                    rescue, treat , rehabillate, feed and love the needy
                    animals.
                    <Image src={cat1} alt="" />
                </p>
                <p>
                    <Image src={cat2} alt="" />
                    The mission is to resuce the animals, to help them get new
                    homes and most importantly is to build a compassionate
                    society which will not show love only towards the animals in
                    the house but also towards the street animals.
                </p>
            </div>
        </div>
    );
};

export default Aboutus;
