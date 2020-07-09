import React, { useState, useEffect } from 'react'
//importing CSS 
import '../../App.css'
// import fetchDailyData
import { fetchDailyData } from '../../API';
//import Chart
import { Line, Bar } from 'react-chartjs-2';

const Chart = () => {
    const [dailyData, setDailyData] = useState([]);

    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData());
        }
        fetchAPI();
    }, []);

    const lineChart = (
        dailyData[0]
        ? (
        <Line 
            data={
                {
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Infected',
                        borderColor: 'blue',
                        backgroundColor: 'lightblue',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'red',
                        backgroundColor: 'rgba(255, 0, 0, 0.6)',
                        fill: true,
                    }],
                }
            }
        />) : null
    );
    return (
        <div className="chartcontainer">
            {lineChart};
        </div>
    )
}

export default Chart