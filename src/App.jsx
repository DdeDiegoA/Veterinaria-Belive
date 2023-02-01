import Header from "./components/Header/header";
import SectionHome from "./components/SectionHome/sectionHome";
import SectionVideo1 from "./components/SectionVideo/sectionVideo1";
import SectionVideo2 from "./components/SectionVideo2/sectionVideo2";
import Slide1 from "./components/SectionBenefit/slide1";
import Slide2 from "./components/SectionBuy/slide2";
import Slide3 from "./components/SectionVetcare/slide3";
import SectionKpic from "./components/SectionKpic/sectionKpic";
import RecentPost from "./components/RecentPost/recentPost";
import SectionFooter from "./components/SectionFooter/sectionFooter";
import "./sass/index.scss";

function App() {
    const slide1 = [
        {
            srcImg: "src/assets/img/Veterinaria/slide1.jpg",
            alt: "slide1",
            title: "Veterinarian",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            srcImg: "src/assets/img/Veterinaria/slide2.jpg",
            alt: "slide2",
            title: "Pet Care",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
        {
            srcImg: "src/assets/img/Veterinaria/slide3.jpg",
            alt: "slide3",
            title: "Animal Hospital",
            text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
        },
    ];
    const slide2 = [
        {
            srcImg: "src/assets/img/Veterinaria/perro-slide-1.jpg",
            alt: "slide1",
            title: "30",
            discount: "50",
        },
        {
            srcImg: "src/assets/img/Veterinaria/perro-slide-2.jpg",
            alt: "slide2",
            title: "25",
            discount: "40",
        },
        {
            srcImg: "src/assets/img/Veterinaria/perro-slide-3.jpg",
            alt: "slide3",
            title: "20",
            discount: "45",
        },
    ];
    const slide3 = [
        {
            srcImg: "src/assets/img/Veterinaria/doc-1.jpg",
            alt: "slide1",
            title: "Jennifer Mullen",
            text: "VETERINARY",
        },
        {
            srcImg: "src/assets/img/Veterinaria/doc-2.jpg",
            alt: "slide2",
            title: "Sheeren Collins",
            text: "ADMINISTRATION",
        },
        {
            srcImg: "src/assets/img/Veterinaria/doc-3.jpg",
            alt: "slide3",
            title: "Jennifer Mullen",
            text: "VETERINARY",
        },
    ];
    const slide4 = [
        {
            cardImg: "src/assets/img/Veterinaria/articulo-1.jpg",
            cardDate: "February 09,2020",
            cardTitle: "As Veterinarian and lover of animals",
            cardText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            cardImg: "src/assets/img/Veterinaria/articulo-2.jpg",
            cardDate: "February 10,2020",
            cardTitle: "As Veterinarian and lover of animals",
            cardText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
        {
            cardImg: "src/assets/img/Veterinaria/articulo-3.jpg",
            cardDate: "February 11,2020",
            cardTitle: "As Veterinarian and lover of animals",
            cardText:
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.",
        },
    ];

    return (
        <div className="Page">
            <Header />
            <SectionHome
                title="FIRST I WANTED TO BE A VETERANIAN"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat."
            />
            <SectionVideo1
                title="As a veterinarian and lover of animals"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
            />
            <Slide1
                title="title here"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua"
                data1={slide1}
            />
            <SectionVideo2
                title="As a veterinarian and lover of animals"
                description="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua."
            />
            <Slide2
                title="title here"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua"
                data2={slide2}
            />
            <Slide3
                title="title here"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua"
                data3={slide3}
            />
            <SectionKpic />
            <RecentPost
                title="title here"
                paragraph="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed
                    do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua"
                data4={slide4}
            />
            <SectionFooter />
        </div>
    );
}

export default App;
