import * as React from "react";
import { Link, graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import Layout from "../../components/layout";

const Blog = ({ data }) => {
  console.log(data);
  return (
    <Layout pageTitle="My Blog Posts">
      {data.allMdx.nodes &&
        data.allMdx.nodes.map((node) => (
          <article>
            <h2>
              <Link to={`/blog/${node.slug}`}> {node.frontmatter.title} </Link>
            </h2>
            <p>{`Posted: ${node.frontmatter.date} | Updated: ${node.parent.modifiedTime}`}</p>
          </article>
        ))}
    </Layout>
  );
};

// The result of this pagequery is fed automatically into your component. That's why we have data de-structured in the props field.
// The variable name or the query never needs to be manually passed into the component.
export const pullBlogPostNames = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        parent {
          ... on File {
            modifiedTime(formatString: "MMMM D, YYYY")
          }
        }
        frontmatter {
          author
          date(formatString: "MMMM D, YYYY")
          title
        }
        slug
        id
      }
    }
  }
`;
export default Blog;
