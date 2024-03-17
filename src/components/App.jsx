import React from "react";
import { nanoid } from "nanoid";
import { useDispatch, useSelector } from "react-redux";

import { selectIsLoggedIn } from "redux/auth/selectors";
import { UserMenu } from "./UserMenu";

import { Outlet } from "react-router-dom";
import { Header } from "./Header/Header";
import { Hero } from "./Hero/Hero";


export const App = () => {
  const isLoggedIn = useSelector(selectIsLoggedIn)
  return (
    <>
      <Header />
      <Hero />
      {isLoggedIn && <UserMenu />}
      <Outlet />
    </>
  );
};
