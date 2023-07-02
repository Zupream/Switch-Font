import "./App.css";
import AuthContextProvider from "./context/AuthContext";
import FeedContextProvider from "./context/FeedContext";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Router from "./routes/Router";
import { useState } from "react";

function App() {

    return (
        <>
            <AuthContextProvider>
                <FeedContextProvider>
                    <Router />
                    <ToastContainer position="top-center"  autoClose={1000} />
                </FeedContextProvider>
            </AuthContextProvider>
        </>
    );
}

export default App;
