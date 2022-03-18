import React from "react";
import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

function Layout({ children }: { children: JSX.Element | JSX.Element[] }) {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{children}</main>
    </div>
  );
}

export default Layout;
