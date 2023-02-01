import { React } from "react";
import SlideFeature from "../pure/SlideFeature/slideFeature";
import "./slide1.scss";

const Slide1 = ({ title, paragraph, data1 }) => {
    return (
        <section className="sec-benefits">
            <div className="intro">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="benefit-cards row">
                {data1.map((item, index) => (
                    <SlideFeature
                        key={index}
                        srcImg={item.srcImg}
                        alt={item.alt}
                        title={item.title}
                        text={item.text}
                        cta={false}
                    />
                ))}
            </div>
        </section>
    );
};

export default Slide1;
