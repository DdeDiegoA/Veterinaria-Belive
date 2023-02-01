import React from "react";
import "./slideVetcare.scss";

const SlideVetcare = ({ srcImg, alt, title, text }) => {
    return (
        <div className="slide-vetcare col-md">
            <img src={srcImg} alt={alt} />
            <div className="description">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
                <div className="social">
                    <i class="bi bi-instagram"></i>
                    <i class="bi bi-facebook"></i>
                    <i class="bi bi-twitter"></i>
                    <i class="bi bi-whatsapp"></i>
                </div>
            </div>
        </div>
    );
};

export default SlideVetcare;
