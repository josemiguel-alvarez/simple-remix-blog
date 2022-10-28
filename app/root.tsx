import type { LinksFunction, MetaFunction } from "@remix-run/node";
import {
  Links,
  LiveReload,
  Meta,
  Outlet,
  Scripts,
  ScrollRestoration,
} from "@remix-run/react";
import { useEffect } from "react";
import { DynamicLinks } from "./components/DynamicLinks";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { siteMetadata } from "./siteMetadata";
import styles from "./tailwind.css";
import { isDarkMode } from "./utils/darkMode";

export const links: LinksFunction = () => {
  return [
    {
      rel: "stylesheet",
      href: styles,
    },
    {
      rel: "icon",
      type: "image/png",
      href: "/favicons/favicon-32x32.png",
    },
  ];
};

export const meta: MetaFunction = ({ location }) => ({
  charset: "utf-8",
  title: siteMetadata.title,
  description: siteMetadata.description,
  viewport: "width=device-width,initial-scale=1",
  robots: "index, follow",
  "og:url": `${siteMetadata.url}${location.pathname}`,
  "og:type": "website",
  "og:site_name": siteMetadata.title,
  "og:title": siteMetadata.title,
  "og:description": siteMetadata.description,
  "og:image": siteMetadata.image,
  "twitter:card": "summary",
  "twitter:site": `@${siteMetadata.twitter}`,
  "twitter:title": siteMetadata.title,
  "twitter:description": siteMetadata.description,
  "twitter:image": siteMetadata.image,
});

export default function App() {
  useEffect(() => {
    if (isDarkMode()) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  }, []);

  const flexClasses = "flex flex-col items-center";
  const spacingClasses =
    "px-4 md:px-0 md:max-w-2xl lg:max-w-3xl xl:max-w-5xl mx-auto h-[100vh]";
  const proseClasses = "prose lg:prose-xl dark:prose-invert";

  return (
    <html lang="en">
      <head>
        <Meta />
        <DynamicLinks />
        <Links />
      </head>
      <body
        className={`dark:bg-slate-900 overflow-y-scroll ${proseClasses} ${flexClasses} ${spacingClasses}`}
      >
        <Header />
        <Outlet />
        <Footer />
        <ScrollRestoration />
        <Scripts />
        <LiveReload />
      </body>
    </html>
  );
}
