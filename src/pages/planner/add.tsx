import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import AddPlanner from "@/components/pages/planner/AddPlanner";


function Planner() {
    let { token } = useSelector((state: RootState) => state.auth);
    return (
        <div>
            <AddPlanner />
        </div>
    );
};

export default Planner;
