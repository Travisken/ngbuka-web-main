import LandingAbout from "@/components/Landing/LandingAbout";
import LandingBook from "@/components/Landing/LandingBook";
import LandingCTA from "@/components/Landing/LandingCTA";
import LandingContact from "@/components/Landing/LandingContact";
import LandingFAQ from "@/components/Landing/LandingFAQ";
import LandingFeatures from "@/components/Landing/LandingFeatures";
import LandingHero from "@/components/Landing/LandingHero";
import LandingTestimonials from "@/components/Landing/LandingTestimonials";
import LandingTopCategories from "@/components/Landing/landingTopCategories";
import Items from "@/components/Molecules/Items";

import { Fragment } from "react";

export default function Home() {
  return (
    <Fragment>
        <LandingHero />
        <LandingTopCategories />
        <Items text='Best sellers' url='/'/>
        <LandingBook />
        <LandingFeatures />
        <Items text='In your area' url='/'/>
        <LandingAbout />
        <Items text='Top deals' url='/'/> 
        <LandingTestimonials />
        <LandingFAQ />
        <LandingContact />
        <LandingCTA />
    </Fragment>
  );
}
