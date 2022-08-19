import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import AuthPlanner from "@/components/pages/planner/AuthPlanner";
import ListPlanner from "@/components/pages/planner/Planner";



function Planner() {


  let { token } = useSelector((state: RootState) => state.auth);


  return (
    <div>

      {!token ? <AuthPlanner /> :
        (<ListPlanner />)
      }
    </div>
  );
};

export default Planner;
