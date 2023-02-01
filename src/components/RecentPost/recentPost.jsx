import React from "react";
import SlideCards from "../pure/SlideCards/slideCards";
import "./recentPost.scss";

const RecentPost = ({ title, paragraph, data4 }) => {
    return (
        <section className="sec-recent-post">
            <div className="intro">
                <h3>{title}</h3>
                <p>{paragraph}</p>
            </div>
            <div className="recent-cards row">
                {data4.map((item, index) => (
                    <SlideCards
                        key={index}
                        cardImg={item.cardImg}
                        cardTitle={item.cardTitle}
                        cardDate={item.cardDate}
                        cardText={item.cardText}
                    />
                ))}
            </div>
        </section>
    );
};

export default RecentPost;
