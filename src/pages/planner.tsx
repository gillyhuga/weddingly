import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import AuthPlanner from "@/components/pages/planner/AuthPlanner";
import ListPlanner from "@/components/pages/planner/Planner";
import { getUserProfile } from "@/lib/fetchApi";
import { setUser } from "src/store/user";



function Planner() {

  let { token } = useSelector((state: RootState) => state.auth);
  const dispatch = useDispatch();

  useEffect(() => {
    getUserProfile(token).then((response) => {
      dispatch(setUser(response.data))
    })
  }, [dispatch, token])
  return (
    <div>

      {!token ? <AuthPlanner /> :
        (<ListPlanner />)
      }
    </div>
  );
};

export default Planner;
