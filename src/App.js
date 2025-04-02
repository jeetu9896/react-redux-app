import React from "react";
import { Routes, Route } from "react-router-dom";
import UserList from "./pages/Users";
import UserDetail from "./pages/Users/UserDetail";

const App = () => {
  return (
      <Routes>
        <Route path="/" element={<UserList />} />
        <Route path="/user/:id" element={<UserDetail />} />
      </Routes>
  );
};

export default App;
