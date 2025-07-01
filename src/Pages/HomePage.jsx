import React from "react";
import { places } from "../Data/places";
// import { explore } from "../Data/explore";
import HeroSection from "../Sections/HeroSection";
import SectionScroller from "../Sections/SectionScroller";
import PlaceCard from "../Components/PlaceCard";
import ExploreCard from "../Components/ExploreCard";
import ScrollBar from "../Sections/ReviewSection";
import Footer from "../Sections/Footer";
import ShowcaseSection from "../Sections/ShowcaseSection";
import streetImage from "../assets/Showcase/street.png";
const HomePage = () => (
    <>
        <HeroSection /> {/* Hero Section to welcome users */}

        {/* Section for International Destinations */}
        <SectionScroller
            title="International Destinations!"
            items={places}
            renderCard={(place) => <PlaceCard key={place.id} place={place} />}
        />

        {/* <ShowcaseSection /> */}
        <ShowcaseSection
            imageSrc={streetImage}
            title="Unveiling the Beauty of the World’s Streets"
            description="Every street tells a story.From the sunlit facades to the quiet hum of life, these paths are more than just roads—they are gateways to culture, history, and adventure.Whether it's the cobblestone alleys of Europe or the vibrant corners of Asia, each destination invites you to explore, experience, and embrace the world in its purest form."
            highlightTitle="Did You Know?"
            highlightText="Some of the world’s oldest streets date back over **2,000 years**, preserving the footprints of generations. **The Shambles in England**, for instance, still showcases medieval structures untouched by time."
            buttonText="Discover More"
        />

        {/* Section for More Adventures */}
        {/* <SectionScroller
            title="Explore More Adventures"
            items={explore}
            renderCard={(exploreItem) => <ExploreCard key={exploreItem.id} explore={exploreItem} />}
        /> */}
        <ScrollBar />
        <Footer />
    </>
);

export default HomePage;
