import React from "react";

const SectionVideo1 = () => {
    return (
        <section className="sec-video">
            <div className="home-cta">
                <h2 className="home-title display-2">
                    As a veterinarian and lover of animals
                </h2>
                <p className="home-descripion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>
                <div className="lead-magnet row align-items-center">
                    <div className="d-flex flex-row bd-highlight mb-3">
                        <button className="btn-sec">Our Service</button>
                    </div>
                </div>
            </div>
            <div className="home-img d-none d-md-block">
                <img src="src/assets/img/Veterinaria/video1.png" alt="video1" />
            </div>
        </section>
    );
};

export default SectionVideo1;
