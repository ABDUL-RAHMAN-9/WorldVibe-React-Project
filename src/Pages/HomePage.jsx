import React from "react";
import { places } from "../Data/places";
// import { explore } from "../Data/explore";
import HeroSection from "../Sections/HeroSection";  // Import Hero Section
import SectionScroller from "../Sections/SectionScroller";
import PlaceCard from "../Components/PlaceCard";
import ExploreCard from "../Components/ExploreCard";
import ScrollBar from "../Sections/ReviewSection";
import DestinationsShowcase from "../Sections/DestinationsShowcase";

const HomePage = () => (
    <>
        <HeroSection /> {/* Hero Section to welcome users */}

        {/* Section for International Destinations */}
        <SectionScroller
            title="International Destinations!"
            items={places}
            renderCard={(place) => <PlaceCard key={place.id} place={place} />}
        />
        <DestinationsShowcase />

        {/* Section for More Adventures */}
        {/* <SectionScroller
            title="Explore More Adventures"
            items={explore}
            renderCard={(exploreItem) => <ExploreCard key={exploreItem.id} explore={exploreItem} />}
        /> */}
        {/* <ScrollBar />  use this in differnt page */}

    </>
);

export default HomePage;
