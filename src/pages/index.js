import React from "react";
import Header from "@/components/HomePage/Header";
import Aboutus from "@/components/HomePage/Aboutus";
import Howwework from "@/components/HomePage/Howwework";

export default function Home() {
    return (
        <div className="home">
            <Header />
            <Aboutus />
            <Howwework />
        </div>
    );
}
