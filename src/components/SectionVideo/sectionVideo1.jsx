import React from "react";
import "./sectionVideo1.scss";

const SectionVideo1 = ({ title, description }) => {
    return (
        <section className="sec-video">
            <div className="video">
                <h2 className="video-title display-2">{title}</h2>
                <p className="videdo-descripion">{description}</p>
                <div className="lead-magnet row align-items-center">
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <button className="btn-sec">Our Service</button>
                    </div>
                </div>
            </div>
            <div className="home-video d-none d-md-block">
                <img src="src/assets/img/Veterinaria/video1.png" alt="video1" />
            </div>
        </section>
    );
};

export default SectionVideo1;
