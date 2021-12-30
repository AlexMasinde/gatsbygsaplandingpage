import * as React from "react";
import { Link } from "gatsby";

// styles
const pageStyles = {
  backgroundColor: "#f5f5f5",
  height: "100vh",
  width: "100vw",
  padding: "96px",
  fontFamily: "DM sans, sans-serif",
};

const linkStyles = {
  fontSize: " 1.5rem",
  fontWeight: "700",
};

const headerStyles = {
  marginBottom: "2rem",
};

// markup
const NotFoundPage = () => {
  return (
    <main style={pageStyles}>
      <h1 style={headerStyles}>Page Not Found</h1>
      <Link style={linkStyles} to="/">
        Go home
      </Link>
      .
    </main>
  );
};

export default NotFoundPage;
