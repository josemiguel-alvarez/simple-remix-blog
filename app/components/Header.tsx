import Drawer from "@mui/material/Drawer";
import { Link } from "@remix-run/react";
import { useEffect, useState } from "react";
import { siteMetadata } from "~/siteMetadata";
import { isDarkMode } from "~/utils/darkMode";
import menuIcon from "../assets/menu.webp";
import { BlogLinks } from "./BlogLinks";
import { SocialMedia } from "./SocialMedia";

export const Header = () => {
  const [shouldShowDrawer, setShouldShowDrawer] = useState(false);
  const [siteLogo, setSiteLogo] = useState(siteMetadata.logo);

  const openDrawer = () => setShouldShowDrawer(true);
  const closeDrawer = () => setShouldShowDrawer(false);

  useEffect(() => {
    if (isDarkMode() && siteMetadata.logo_dark_mode) {
      setSiteLogo(siteMetadata.logo_dark_mode);
    }
  }, []);

  return (
    <header className="flex justify-between items-center max-w-full w-full py-8 gap-x-12 md:gap-x-0">
      <Link className="home text-3xl font-medium no-underline flex-1" to="/">
        {siteLogo ? (
          <img alt="Project logo" src={siteLogo} loading="lazy" />
        ) : (
          <span>{siteMetadata.domain}</span>
        )}
      </Link>

      <div className="hidden sm:block flex-1">
        <SocialMedia />
      </div>

      <div className="sm:flex items-center gap-4 hidden flex-1 justify-end">
        <BlogLinks />
      </div>

      <div className="sm:hidden not-prose" onClick={openDrawer}>
        <img
          alt="Menu"
          src={menuIcon}
          width={42}
          height={42}
          loading="lazy"
          className="dark:invert"
        />
      </div>

      <Drawer
        anchor="right"
        open={shouldShowDrawer}
        onClose={closeDrawer}
        onClick={closeDrawer}
      >
        <div className="flex flex-col pr-8 pl-4 pt-8 gap-4 dark:bg-slate-900 h-full">
          <div className="flex gap-4">
            <SocialMedia />
          </div>

          <BlogLinks />
        </div>
      </Drawer>
    </header>
  );
};
