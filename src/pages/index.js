import * as React from "react";
import { StaticImage } from "gatsby-plugin-image";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home Page"}>
        <p>Gatsby tutorial is pretty chill.</p>
        <p>I'm making this by follwing the Gatsby tutorial</p>
        <StaticImage
          alt="Doug looking like a really cool type of guy"
          src="../images/selfImgSmall.jpg"
        />
      </Layout>
    </main>
  );
};

export default IndexPage;
