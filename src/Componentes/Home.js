import React from "react";
import GifSection from "./GifSection"
import RandomSection from "./RandomSection";

export default function Home(){
    return <div className="home">
        <GifSection categorie="trending"/>
        <RandomSection />
    </div>
}