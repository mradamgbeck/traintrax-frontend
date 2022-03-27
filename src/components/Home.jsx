import React from "react";
import '../App.css'
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <div className={"ButtonCard"}>
            <h1>TrainTrax</h1>
            <Link to="/manage-programs">Manage Programs</Link>
        </div>
    );
};

export default Home;