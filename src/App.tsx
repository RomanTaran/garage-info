import * as React from 'react';
import './App.css';
import {createTheme, ThemeProvider} from "@mui/material";
import SignIn from "./components/SignIn";
import {RecoilRoot} from "recoil";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import ProtectedRoutes from "./routes";
import Dashboard from "./components/Dashboard";
import InnerContent from './components/InnerContent';
import {Toaster} from "react-hot-toast";
import RecoverPassword from "./components/RecoverPassword"
import UserList from "./components/UserList";
import NotFound from "./components/NotFound";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

export default function App() {
  return (
    <ThemeProvider theme={darkTheme}>
      <RecoilRoot>
        <BrowserRouter>
          <Routes>
            <Route path="/login" element={<SignIn />} />
            <Route path="/reset-password" element={<RecoverPassword />} />
            <Route path="/" element={<ProtectedRoutes />}>
              <Route path="/" element={<InnerContent />}>
                <Route path="/" element={<Navigate replace to="dashboard" />} />
                <Route path="dashboard" element={<Dashboard />} />
                <Route path="users" element={<UserList />} />
              </Route>
            </Route>
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </RecoilRoot>
      <Toaster />
    </ThemeProvider>
  );
}
