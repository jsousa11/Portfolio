import React from "react";

const Info = () => {
    return (
        <div className="about__info grid">
            <div className="about__box">
            <i class="bx bx-award about__icon"></i>

                <h3 className="about__title">Student at University of Aveiro</h3>
                <span className="about__subtitle">I have a Bachelor's in Computer Science and Engineering</span>
            </div>

            <div className="about__box">
            <i class="bx bx-briefcase-alt about__icon"></i>

                <h3 className="about__title">My preferences</h3>
                <span className="about__subtitle">Throughout my degree, I had the opportunity to work with various technologies and frameworks, but I’ve always been more drawn to backend development. It’s where I find the most satisfaction, solving complex problems and building the core functionalities of applications.</span>
            </div>

            <div className="about__box">
            <i class="bx bx-support about__icon"></i>

                <h3 className="about__title">Soft Skils</h3>
                <span className="about__subtitle">Being part of a student association enhanced my teamwork and communication skills, preparing me to work effectively in diverse environments.</span>
            </div>
        </div>
    );
}

export default Info;