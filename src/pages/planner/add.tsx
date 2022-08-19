import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "src/store";
import AddPlanner from "@/components/pages/planner/AddPlanner";
import toast from "react-hot-toast";
import { addPlan } from "@/lib/fetchApi";
import router from "next/router";


function Planner() {

    const [planner, setPlanner] = useState({
        date: "",
        total: "",
        location: "",
    });

    const dispatch = useDispatch();


    const handleFormChange = (e: any) => {
        setPlanner({
            ...planner,
            [e.target.name]: e.target.value
        })
    }

     const handleSubmit = (e: any) => {
        e.preventDefault();
        addPlan(planner.location, planner.date, planner.total)
           
            toast.success('Add Succesful!')
            router.push('/planner')
        
    }


    return (
        <div>
            <AddPlanner
                date={handleFormChange}
                total={handleFormChange}
                location={handleFormChange}
                onSubmit={handleSubmit}
            />
        </div>
    );
};

export default Planner;
