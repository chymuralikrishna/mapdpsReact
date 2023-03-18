import React from "react";
import { Routes,Route } from "react-router-dom";
import HomeComponent from "./Home";
import TubeStackLoading from "./TubeStackLoading"
import Page404 from "./page404";


export default function ContentComponent(props){
    return(<div className="content">
<Routes>
    <Route path={"/TubeStackLoading"} element={<TubeStackLoading></TubeStackLoading>} />
    <Route path={"/*"} element={<Page404></Page404>} />
</Routes>

    </div>)
}