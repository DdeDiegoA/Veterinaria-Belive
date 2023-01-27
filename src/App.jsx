import Header from "./components/header";
import SectionHome from "./components/sectionHome";
import SectionVideo1 from "./components/sectionVideo1";
import SectionVideo2 from "./components/sectionVideo2";
import Slide1 from "./components/slide1";
import Slide2 from "./components/slide2";
import Slide3 from "./components/slide3";
import SectionKpic from "./components/sectionKpic";
import RecentPost from "./components/recentPost";
import SectionFooter from "./components/sectionFooter";
import "./sass/index.scss";

function App() {
    return (
        <div className="Page">
            <Header />
            <SectionHome />
            <SectionVideo1 />
            <Slide1 />
            <SectionVideo2 />
            <Slide2 />
            <Slide3 />
            <SectionKpic />
            <RecentPost />
            <SectionFooter />
        </div>
    );
}

export default App;
