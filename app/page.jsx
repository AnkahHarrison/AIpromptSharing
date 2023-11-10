"use client";

import React from "react";
import Feed from "@components/Feed";
import Typed from "react-typed";
const Home = () => {
  return (
    <section className="flex-col w-full flex-center">
      <h1 className="text-center head_text">
        Welcome, to Essay Share
        <br className="max-md:hidden" />
        <span className="orange_gradient"> Where Dreams Take Flight</span>
      </h1>
      <p className="text-center desc">
        <Typed
          strings={[
            "Essay Share is a supportive community ",
            "where individuals can share their Common App Essay prompts",
            "and receive valuable feedback,review ",
            "from peers and mentors.",
            "Whether you're brainstorming ideas,",
            "polishing your essay, or just seeking inspiration",
            "you're in the right place!",
          ]}
          typeSpeed={60}
          backSpeed={50}
          loop
          className="text-black text-md lg:text-xl "
        />
      </p>
      {/* feed */}
      <Feed />
    </section>
  );
};

export default Home;
