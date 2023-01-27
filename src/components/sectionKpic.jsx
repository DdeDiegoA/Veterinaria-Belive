import React from "react";
import SlideFeature from "./pure/slideFeature";
import SlideKpics from "./pure/slideKpics";

const SectionKpic = () => {
    return (
        <section className="sec-kpics">
            <div className="over row">
                <SlideKpics
                    icon={"bi bi-heart-pulse"}
                    title={"+34793"}
                    text={"Happy Clients"}
                />
                <SlideKpics
                    icon={"bi bi-bandaid"}
                    title={"+45388"}
                    text={"Departament"}
                />
                <SlideKpics
                    icon={"bi bi-activity"}
                    title={"+54762"}
                    text={"Vaccinations"}
                />
            </div>
        </section>
    );
};

export default SectionKpic;
