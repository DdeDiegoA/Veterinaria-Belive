import React from "react";
import "./sectionHome.scss";

const SectionHome = ({ title, description }) => {
    return (
        <section className="sec-home">
            <div className="home-cta">
                <h2 className="home-title display-2">{title}</h2>
                <p className="home-description ">{description}</p>
                <div className="lead-magnet row aling-items-center">
                    <div className="d-flex flex-row bd-highlight mb-3 gap-3">
                        <button className="btn-main">Contact Us</button>
                        <button className="btn-sec">Our Service</button>
                    </div>
                </div>
            </div>
            <div className="home-img d-none d-md-block">
                <img src="src/assets/img/Veterinaria/perro1.png" />
            </div>
        </section>
    );
};

export default SectionHome;
