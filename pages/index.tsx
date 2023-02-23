import type { NextPage } from "next";
import dynamic from 'next/dynamic'
import Head from "next/head";
import data from "../data/data.json";

import SocialIcons from "../app/SocialIcons";

import lottieJson from "../animation.json";
import Lottie from "react-lottie-player";

const Header = dynamic(() => import("../app/Header"));
const Footer = dynamic(() => import("../app/Footer"));


const Home: NextPage = () => {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Entwarp technical question" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


      <section id="home">
        <Header />
        <Lottie
          play
          loop
          animationData={lottieJson}
        />
        <SocialIcons />
      </section>

      <section id="about">
        <p dangerouslySetInnerHTML={{ __html: data.data.sectionTextCopy }} />
      </section>

      <section id="contact">
        <h2>{data.data.sectionContactTitle}</h2>
        <div>
          <h3>{data.data.sectionContactInitialTitle}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.sectionContactInitialCopy,
            }}
          />
        </div>
        <SocialIcons />
        <div>
          <h3>{data.data.sectionContactSecondaryTitle}</h3>
          <div
            dangerouslySetInnerHTML={{
              __html: data.data.sectionContactSecondaryCopy,
            }}
          />
        </div>
        <Footer />
      </section>
    </>
  )
}

export default Home
