import React from "react";
import { Link } from "react-router-dom";

export default function NotFound() {
  return (
    <>
      <h1>Page not found.</h1>
      <Link to="/"> &larr; Return back</Link>
    </>
  );
}
