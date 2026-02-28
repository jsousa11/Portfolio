import React from "react";
import "./home.css";
import Social from "./Social";
import Data from "./Data";
import ScrollDown from "./ScrollDown";
import profileImg from "../../assets/JSousa.png";

const Home = () => {
    return (
        <section className="home section" id="home">
            <div className="home__container container grid">
                <div className="home__content grid">
                    <Social />

                    <div
                        className="home__img"
                        style={{ backgroundImage: `url(${profileImg})` }}
                    ></div>

                    <Data />
                
                </div>

                <ScrollDown />
            </div>
        </section>
    )
}

export default Home;