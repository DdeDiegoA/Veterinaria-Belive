import React from "react";
import SlideVetcare from "./pure/slideVetcare";

const Slide3 = () => {
    return (
        <section className="sec-vetcare">
            <div className="intro">
                <h3>The vetcare team</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </p>
                <div className="benefit-card row">
                    <SlideVetcare
                        srcImg={"src/assets/img/Veterinaria/doc-1.jpg"}
                        alt={"doc-slide1"}
                        title={"Jennifer Mullen"}
                        text={"VETERINARY"}
                    />
                    <SlideVetcare
                        srcImg={"src/assets/img/Veterinaria/doc-2.jpg"}
                        alt={"doc-slide2"}
                        title={"Sheeren Collins"}
                        text={"ADMINISTRATION"}
                    />
                    <SlideVetcare
                        srcImg={"src/assets/img/Veterinaria/doc-3.jpg"}
                        alt={"doc-slide3"}
                        title={"Jennifer Mullen"}
                        text={"VETERINARY"}
                    />
                </div>
            </div>
        </section>
    );
};

export default Slide3;
