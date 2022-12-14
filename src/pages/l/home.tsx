import React from "react";
import Head from "next/head";
import Feed from "../../components/Feed";
import HomeHeader from "../../components/HomeHeader";
import ProfileSide from "../../components/ProfileSide";
import RightHandSide from "../../components/RightHandSide";

type HomeProps = {};

const HomePage: React.FC<HomeProps> = () => {
  return (
    <div>
      <Head>
        <title>LinkedIn Clone</title>
        <meta name="description" content="Generated by create next app" />
        <link
          rel="icon"
          href="https://upload.wikimedia.org/wikipedia/commons/thumb/c/ca/LinkedIn_logo_initials.png/800px-LinkedIn_logo_initials.png"
        />
      </Head>
      <HomeHeader />

      <div className="mx-auto max-h-screen overflow-hidden lg:max-w-6xl mt-8">
        <main className="grid grid-cols-9">
          <ProfileSide />
          <Feed />
          <RightHandSide />
        </main>
      </div>
    </div>
  );
};
export default HomePage;
