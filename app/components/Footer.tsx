import { Link } from "@remix-run/react";
import { siteMetadata } from "~/siteMetadata";

export const Footer = () => {
  return (
    <div className="mt-8 py-4 flex flex-col justify-center items-center space-x-2 text-xs sm:text-sm text-gray-500 dark:text-gray-400 sm:flex-row ">
      <div>{siteMetadata.author}</div>
      <div className="hidden sm:block">{` • `}</div>
      <div>{`© ${new Date().getFullYear()}`}</div>
      <div className="hidden sm:block">{` • `}</div>
      <Link to="/" className="no-underline text-gray-500">
        {siteMetadata.domain}
      </Link>
    </div>
  );
};
