import React from "react";
import "./globals.css";
import { Button } from "@/components/ui/button";
import CompanionCard from "@/components/CompanionCard";
import { CompanionsList } from "@/components/CompanionsList";
import { recentSessions } from "@/constants";
import CTA from "@/components/CTA";

const Page = () => {
  return (
    <main>
      <p className="text-2xl font-bold">Popular Companions</p>
      <section className="home-section flex  flex-column">
        <CompanionCard
          id="222"
          name="countercsy the number wizard"
          topic="derivative & integrals"
          subject="science"
          duration={21}
          color="#ffda6e"
        />

        <CompanionCard
          id="222"
          name="countercsy the number wizard"
          topic="derivative & integrals"
          subject="science"
          duration={21}
          color="#ffda6e"
        />

        <CompanionCard
          id="222"
          name="countercsy the number wizard"
          topic="derivative & integrals"
          subject="science"
          duration={21}
          color="#ffda6e"
        />
      </section>
      <section
        className="flex justify-between
 items-start"
      >
        <CompanionsList
          title="recently completed data"
          companions={recentSessions}
          classNames="w/2/3 max-lg:w-full"
        />
        <CTA />
      </section>
    </main>
  );
};

export default Page;
