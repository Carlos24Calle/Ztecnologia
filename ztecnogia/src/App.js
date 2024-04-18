import React from "react";
import "./assets/css/App.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import RequireAuth from "./Auth/Auth";
import {
  Home,
  Login,
  Products,
  Dashboard,
  Users,
  Clients,
  Quetos,
} from "./pages";
import Layout from "./components/Layout/Layout";
import QuetosCreate from "./pages/Quetos/Create";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Layout />}>
            <Route
              path="/Users"
              element={
                <RequireAuth>
                  <Users />
                </RequireAuth>
              }
            />

            <Route
              path="/Products"
              element={
                <RequireAuth>
                  <Products />
                </RequireAuth>
              }
            />

            <Route
              path="/Clients"
              element={
                <RequireAuth>
                  <Clients />
                </RequireAuth>
              }
            />

            <Route
              path="/home"
              element={
                <RequireAuth>
                  <Home />
                </RequireAuth>
              }
            />

            <Route
              path="/cotizaciones"
              element={
                <RequireAuth>
                  <Quetos />
                </RequireAuth>
              }
            />
            <Route
              path="/cotizaciones"
              element={
                <RequireAuth>
                  <Quetos />
                </RequireAuth>
              }
            />
            <Route
              path="/cotizaciones/crear"
              element={
                <RequireAuth>
                  <QuetosCreate />
                </RequireAuth>
              }
            />
            <Route
              path="/dashboard"
              element={
                <RequireAuth>
                  <Dashboard />
                </RequireAuth>
              }
            />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
