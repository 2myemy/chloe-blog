// import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import Layout from "./Layout";
import About from "./pages/About";
import Home from "./pages/Home";
import Portfolio from "./pages/Portfolio";
import Posts from "./pages/Posts/Posts";
import Post from "./pages/Posts/Post";
import CreatePost from './pages/Posts/CreatePost';
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Kanban from "./pages/Kanban/KanbanMain";
import Rating from "./pages/Rating/Rating";
import NotFound from "./pages/NotFound";

const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/portfolio/kanban" element={<Kanban />} />
        <Route path="/portfolio/rating" element={<Rating />} />
        <Route exact path="/posts" element={<Posts />} />
        <Route path="/posts/:postid" element={<Post />} />
        <Route exact path="/posts/create" element={<CreatePost />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/signup" element={<SignUp />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
};

export default App;
