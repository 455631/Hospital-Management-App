import React from "react";
import Hero from "../components/Hero";
import Biography from "../components/Biography";
import Departments from "../components/Departments";
import MessageForm from "../components/MessageForm";

const Home=()=>{
    return (
        <>
        <Hero title={"Welcome to Medico Management Institute | Your trusted Healthcare Provider"} imageUrl={"/hero.png"}/>
        <Biography imageUrl={"/about.jpeg"}/>
        <Departments/>
        <MessageForm/>
        </>
    )
};

export default Home;