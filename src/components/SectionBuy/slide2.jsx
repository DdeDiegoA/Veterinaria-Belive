import React from "react";
import SlideFeature from "../pure/SlideFeature/slideFeature";
import "./slide2.scss";

const Slide2 = ({ title, paragraph, data2 }) => {
    return (
        <section className="sec-buy">
            <div className="intro">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="benefit-cards row">
                {data2.map((item, index) => (
                    <SlideFeature
                        key={index}
                        cta={true}
                        alt={item.alt}
                        srcImg={item.srcImg}
                        title={item.title}
                        discount={item.discount}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slide2;
