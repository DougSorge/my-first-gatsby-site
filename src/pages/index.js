import * as React from "react";
import { Link } from "gatsby";
import Layout from "../components/layout";

const IndexPage = () => {
  return (
    <main>
      <Layout pageTitle={"Home Page"}>
        <p>Gatsby tutorial is pretty chill.</p>
        <p>I'm making this by follwing the Gatsby tutorial</p>
      </Layout>
    </main>
  );
};

export default IndexPage;
