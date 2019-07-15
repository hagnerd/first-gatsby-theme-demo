import React from "react";
import Layout from "../components/layout";

export default function HomePage() {
  return (
    <Layout>
      <h1>Welcome!</h1>
      <p>
        Hello, from Gatsby{" "}
        <span role="img" aria-label="hand emoji waving hello">
          👋
        </span>
      </p>
    </Layout>
  );
}
