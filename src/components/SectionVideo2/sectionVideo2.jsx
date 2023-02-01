import React from "react";
import "./sectionVideo2.scss";

const SectionVideo2 = ({ title, description }) => {
    return (
        <section className="sec-video-2">
            <div className="home-video d-none d-md-block">
                <img src="src/assets/img/Veterinaria/video2.jpg" alt="video1" />
            </div>
            <div className="video">
                <h2 className="video-title display-2">{title}</h2>
                <p className="video-descripion">{description}</p>

                <div className="d-flex flex-row bd-highlight mb-3 justify-content-end">
                    <button className="btn-sec">Our Service</button>
                </div>
            </div>
        </section>
    );
};

export default SectionVideo2;
