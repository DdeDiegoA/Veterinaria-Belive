import React from "react";
import SlideVetcare from "../pure/SlideVetcare/slideVetcare";
import "./slide3.scss";

const Slide3 = ({ title, paragraph, data3 }) => {
    return (
        <section className="sec-vetcare">
            <div className="intro">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="vetcare-card row">
                {data3.map((item, index) => (
                    <SlideVetcare
                        key={index}
                        text={item.text}
                        title={item.title}
                        srcImg={item.srcImg}
                        alt={item.alt}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slide3;
