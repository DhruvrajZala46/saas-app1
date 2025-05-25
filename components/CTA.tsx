import React from "react";
import Image from "next/image";
import Link from "next/link";

const CTA = () => {
  return (
    <section className="cta-section w-80 bg-orange-300 p-4 border rounded-3xl ">
      <div className="cta-badge">start learning your way.</div>
      <h2 className="text-3xl font-bold">
        Build and Personalized Learning Companion
      </h2>
      <p>
        Pick a name, subject, voice and personality - and strt learning through
        voice converstiaon thtat feel natural and fun.
      </p>
      <Image src="images/cta.svg" alt="cta" width={323} height={232} />

      <button className="btn-primary">
        <Image src="/icons/plus.svg" alt="plus" width={12} height={12} />

        <Link href="/companions/new">
          <p>Build a New Companion</p>
        </Link>
      </button>
    </section>
  );
};

export default CTA;
