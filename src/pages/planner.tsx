import React, { useState } from "react";
import { useSelector } from "react-redux";
import { RootState } from "src/store";
import AuthPlanner from "@/components/pages/planner/AuthPlanner";
import ListPlanner from "@/components/pages/planner/ListPlanner";
import AddPlanner from "@/components/pages/planner/AddPlanner";


function Planner() {
  let { token } = useSelector((state: RootState) => state.auth);
  return (
    <div>
      {!token ? <AuthPlanner /> : <ListPlanner />
      }
    </div>
  );
};

export default Planner;
