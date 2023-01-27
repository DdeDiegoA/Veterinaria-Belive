import React from "react";
import SlideFeature from "./pure/slideFeature";

const Slide1 = () => {
    return (
        <section className="sec-benefits">
            <div className="intro">
                <h3>Title Here</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </p>
            </div>
            <div className="benefit-cards row">
                <SlideFeature
                    srcImg={"src/assets/img/Veterinaria/slide1.jpg"}
                    alt={"slide1"}
                    title={"Veterinarian"}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                />
                <SlideFeature
                    srcImg={"src/assets/img/Veterinaria/slide2.jpg"}
                    alt={"slide2"}
                    title={"Vaccination Care"}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                />
                <SlideFeature
                    srcImg={"src/assets/img/Veterinaria/slide3.jpg"}
                    alt={"slide3"}
                    title={"Dental Care"}
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                />
            </div>
        </section>
    );
};

export default Slide1;
