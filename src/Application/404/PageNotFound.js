import React from "react";
import { Link } from "react-router-dom";

export default function PageNotFound() {
  return (
    <>
      <main className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
        <div className="text-center">
          <p className="text-[30px] font-semibold text-secondary">404</p>
          <h1 className="mt-4 text-[50px] font-LatoBold tracking-tight text-primary sm:text-5xl">
            Page not found
          </h1>
          <p className="mt-6 text-base leading-7 text-secondary-text">
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10 flex items-center justify-center gap-x-6">
            <Link
              to="/"
              className="rounded-md bg-secondary px-3.5 py-2.5 text-sm font-Poppins text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Go back home
            </Link>
            <Link
              to="/contact-us"
              className="text-sm font-Poppins font-semibold text-black"
            >
              Contact support <span aria-hidden="true">&rarr;</span>
            </Link>
          </div>
        </div>
      </main>
    </>
  );
}
