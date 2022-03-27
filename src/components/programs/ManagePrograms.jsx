import React from "react";
import '../../App.css'
import {Link} from "react-router-dom";

const ManagePrograms = () => {
    return (
        <div className={"ButtonCard"}>
            <h1>Manage Programs</h1>
            <Link to={"/create-program"}>Create Program</Link>
        </div>
    );
};

export default ManagePrograms;