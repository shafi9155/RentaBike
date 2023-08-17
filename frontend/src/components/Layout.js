import React from "react";
import { Helmet } from "react-helmet";

const Layout = ({ children, title, description, keywords, author }) => {
  return (
    <div>
      <Helmet>
        <meta charSet='utf-8' />
        <meta name='description' content={description} />
        <meta name='keywords' content={keywords} />
        <meta name='author' content={author} />
        <title>{title}</title>
      </Helmet>
      <main style={{ minHeight: "70vh" }}>{children}</main>
    </div>
  );
};

Layout.defaultProps = {
  title: "rentaride : Hire a roadbike",
  description: "Mern stack project",
  keywords: "MERN : MongoDB,ExpressJS,React,NodeJS",
  author: "Mohammad Shafiuddin",
};

export default Layout;
