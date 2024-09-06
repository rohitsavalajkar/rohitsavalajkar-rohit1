// Separate UI Component 
// Avoid Rewards.js file
import React,{useEffect,useState} from 'react';
import { getPointsData } from './Points';

const RewardsProgram =() =>{
    const [pointsData,setPointsData]= useState({});

    useEffect(()=>{
        const fetchData = async() =>{
            const points =await getPointsData();
            setPointsData(points);
        };
        fetchData();
    },[]);

    return(
        <div>
            <h1>Rewards Points</h1>
            <ul>
                {Object.keys(pointsData).map((month)=>(
                    <li key={month}>
                        {month}:{pointsData[month]}points
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default RewardsProgram;