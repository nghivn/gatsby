import React from "react";
import Link from "gatsby-link";
import profile from "../images/profile.png";

const AboutPage = () => (
  <div className="flex flex-col md:flex-row items-center">
    <div className="w-2/3 md:w-1/3">
      <img src={profile} />
    </div>

    <div className="md:w-2/3 px-4 md:w-1/3">
      <h2>
        Hey!
      </h2>

      <p className="border-l-4 border-grey-darkest font-serif leading-loose pl-4 text-justify">
      I am passionate designer and strong believer in smart and useful designed products where no instruction and complex understanding is required.
      I hope to establish focus on the user - where their needs, frustrations, and delights become essential to the product.
      Outside of design, I am a geek and an aspiring power-lifter. I love to talk about video games, movies (or you know, Star Wars too), fitness, and maybe even hiking.
      You will most likely find me in either the gym pounding weights, online blasting away pixels, or planning to something spontaneous in my next adventure!
      </p>

      {/*<p className="font-bold mt-4 text-right text-xs uppercase">
        — Thomas Nagel
      </p> */}
    </div>
  </div>
);

export default AboutPage;
