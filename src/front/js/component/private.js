import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";
import { LoginComponent } from "./loginComponet";


export const Private = () => {
    const { store, actions } = useContext(Context);

    return (
        <div className="container">

            {store.login
                ?
                <>
                    <h1> If you are registered,</h1>
                    <h1> you can see this page. :)</h1>
                </>
                :
                <LoginComponent />
            }

        </div>
    );
};