import { useEffect } from "react";
import { Link } from "react-router-dom";
import PageNotFoundImage from "../assets/images/pagenotfound.png";

export const PageNotFound = () => {
  useEffect(() => {
    document.title = `Page Not Found / Moviemate`;
  });

  return (
    <main>
      <section className="flex flex-col justify-center px-2">
        <div className="flex flex-col items-center my-4">
          <p className="text-7xl  font-bold my-10 dark:text-white text-gray-700">
            404, Oops!
          </p>
          <div className="max-w-lg">
            <img
              className="rounded"
              src={PageNotFoundImage}
              alt="404 Page not found"
            />
          </div>
        </div>
        <div className="flex justify-center my-4">
          <Link to="/">
            <button className="mr-2 font-medium px-5 py-2.5 rounded-lg w-64 text-xl  dark:text-white text-gray-700 bg-gradient-to-r from-blue-500 via-blue-600 to-blue-700 ">
              Back to Moviemate
            </button>
          </Link>
        </div>
      </section>
    </main>
  );
};
