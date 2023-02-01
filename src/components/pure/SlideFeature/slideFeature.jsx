import React from "react";
import { NavItem } from "react-bootstrap";
import "./slideFeature.scss";

const SlideFeature = ({ title, cta, text, srcImg, alt, discount }) => {
    const BuyNow = () => {
        return <button className="btn-main-s">Adopt Him</button>;
    };

    return (
        <div className="slide-feature col-md">
            <img src={srcImg} alt={alt} />
            <div className="description">
                <h4 className="title">
                    {discount && <span className="tachado">{discount}</span>}
                    {title}
                </h4>
                {text && <p className="text">{text}</p>}
            </div>
            {cta && <BuyNow />}
        </div>
    );
};

export default SlideFeature;
