import React from "react";

const SectionVideo2 = () => {
    return (
        <section className="sec-video-2">
            <div className="home-img d-none d-md-block">
                <img src="src/assets/img/Veterinaria/video2.jpg" alt="video1" />
            </div>
            <div className="home-cta">
                <h2 className="home-title display-2">
                    As a veterinarian and lover of animals
                </h2>
                <p className="home-descripion">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua.
                </p>

                <div className="d-flex flex-row bd-highlight mb-3 justify-content-end">
                    <button className="btn-sec">Our Service</button>
                </div>
            </div>
        </section>
    );
};

export default SectionVideo2;
