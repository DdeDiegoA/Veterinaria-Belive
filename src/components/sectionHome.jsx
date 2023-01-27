import React from "react";

const SectionHome = () => {
    return (
        <section className="sec-home">
            <div className="home-cta">
                <h2 className="home-title display-2">
                    FIRST I WANTED TO BE A VETERANIAN
                </h2>
                <p className="home-description ">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                </p>
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
