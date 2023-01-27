import React from "react";
import SlideCards from "./pure/slideCards";

const RecentPost = () => {
    return (
        <section className="sec-recent-post">
            <div className="intro">
                <h3>TITLE HERE</h3>
                <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua
                </p>
            </div>
            <div className="recent-cards row">
                <SlideCards
                    cardImg={"src/assets/img/Veterinaria/articulo-1.jpg"}
                    cardDate={"February 09,2020"}
                    cardTitle={"As Veterinarian and lover of animals"}
                    cardText={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                />
                <SlideCards
                    cardImg={"src/assets/img/Veterinaria/articulo-2.jpg"}
                    cardDate={"February 10,2020"}
                    cardTitle={"As Veterinarian and lover of animals"}
                    cardText={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                />
                <SlideCards
                    cardImg={"src/assets/img/Veterinaria/articulo-3.jpg"}
                    cardDate={"February 11,2020"}
                    cardTitle={"As Veterinarian and lover of animals"}
                    cardText={
                        "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam."
                    }
                />
            </div>
        </section>
    );
};

export default RecentPost;
