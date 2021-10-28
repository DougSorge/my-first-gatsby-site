import React from "react";
import { graphql } from "gatsby";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Layout from "../../components/layout";
import { MDXRenderer } from "gatsby-plugin-mdx";

const Post = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image);
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage image={image} alt={data.mdx.frontmatter.hero_image_alt} />
      <p>
        Photo Credit{`: `}
        <a
          href={data.mdx.frontmatter.hero_image_credit_link}
          target="_blank"
          rel="noreferrer"
        >
          {data.mdx.frontmatter.hero_image_credit_text}
        </a>
        {data.mdx.frontmatter.date}
      </p>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  );
};
export const grabPostData = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      frontmatter {
        title
        date(formatString: "MMMM D, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData(width: 1200)
          }
        }
      }
      body
    }
  }
`;

export default Post;
