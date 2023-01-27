import React from "react";
import SlideFeature from "./pure/slideFeature";

const Slide2 = () => {
    return (
        <section className="sec-buy">
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
                    srcImg={"src/assets/img/Veterinaria/perro-slide-1.jpg"}
                    alt={"slide1"}
                    title={
                        <p>
                            <span class="tachado">50$</span> 30$
                        </p>
                    }
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                    cta={true}
                />
                <SlideFeature
                    srcImg={"src/assets/img/Veterinaria/perro-slide-2.jpg"}
                    alt={"slide2"}
                    title={
                        <p>
                            <span class="tachado">40$</span> 25$
                        </p>
                    }
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                    cta={true}
                />
                <SlideFeature
                    srcImg={"src/assets/img/Veterinaria/perro-slide-3.jpg"}
                    alt={"slide3"}
                    title={
                        <p>
                            <span class="tachado">45$</span> 20$
                        </p>
                    }
                    text={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua"
                    }
                    cta={true}
                />
            </div>
        </section>
    );
};

export default Slide2;
