import React from "react";
import { Routes, Route } from "react-router-dom";
import Dashboard from "./component/Dashboard";
import LoginForm from "./component/LoginForm";
import requireAuth from "./component/requireAuth";
import SignupForm from "./component/SignupForm";
import Header from "./component/Header";

function App() {
  return (
    <div className="container">
      <Header />
      <Routes>
        <Route path="/" element={<div />} />
        <Route path="login" element={<LoginForm />} />
        <Route path="signup" element={<SignupForm />} />
        <Route path="dashboard" element={requireAuth(<Dashboard />)} />
      </Routes>
    </div>
  );
}

export default App;
