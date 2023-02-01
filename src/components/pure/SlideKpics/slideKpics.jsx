import React from "react";
import "./slideKpics.scss";

const SlideKpics = ({ icon, title, text }) => {
    return (
        <div className="slide-kpics col-md">
            <i class={icon}></i>
            <div className="description">
                <h4 className="title">{title}</h4>
                <p className="text">{text}</p>
            </div>
        </div>
    );
};

export default SlideKpics;
