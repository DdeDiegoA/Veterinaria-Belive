import React from "react";

const SlideFeature = ({ srcImg, alt, title, text, cta }) => {
    const BuyNow = () => {
        return <button className="btn-main-s">Adopt Him</button>;
    };

    return (
        <div className="slide-feature col-md">
            <img src={srcImg} alt={alt} />
            <div className="description">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
            </div>
            {cta == true && <BuyNow />}
        </div>
    );
};

export default SlideFeature;
