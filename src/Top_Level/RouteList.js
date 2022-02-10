import React from "react";
import { Route, Routes, Navigate } from "react-router-dom";
import Blog from "../Home/Blog";
import PostForm from "../Posts/PostForm";
import PostDetail from "../Posts/PostDetail";

const RouteList = () => {


    return (
        <Routes>
            <Route path="/blog" element={<Blog />} />
            <Route path="/posts/new" element={<PostForm />} />
            <Route path="/posts/:id" element={<PostDetail />} />

        

          
            <Route path="/" element={<Navigate replace to="/blog" />} />
            <Route path='*' element={<Navigate replace to="/blog" />} />
        </Routes>
    )
}

export default RouteList;