import React, { useState, useEffect } from 'react'
//importing CSS 
import '../../App.css'
// import fetchDailyData
import { fetchDailyData } from '../../API';
//import Chart
import { Line, Bar } from 'react-chartjs-2';

const Chart = ({ data: { confirmed, recovered, deaths }, country }) => {
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
                        borderColor: 'navy',
                        backgroundColor: '#78b9c2',
                        fill: true,
                    }, {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: '#3aa682',
                        backgroundColor: 'rgba(59, 217, 164, 0.5)', 
                        fill: true,
                    }]
                }
            }
        />) : null
    );
    
    const barChart = (
        confirmed
        ? (
            <Bar
                data={{
                    labels: [ 'Infected', 'Recovered' , 'Deaths'],
                    datasets: [{
                        label: 'People',
                        backgroundColor: [
                            'rgba(0,0,255, 0.4)',
                            'rgba(0,255,0,0.4)',
                            'rgba(255,0,0,0.4)',
                        ],
                        borderWidth: [ 3, 3, 3],
                        borderColor: [
                            'rgba(0,0,255, 0.8)',
                            'rgba(0,255,0, 0.8)',
                            'rgba(255,0,0, 0.8)',
                        ],
                        data:[confirmed.value,  recovered.value, deaths.value],

                    }]
                }}
                options={{
                    legend: { display: false },
                    title: { display: true, text: `Current Statistics Of ${country}` },
                
                }}
            />
        ): null
    );
    return (
        <div className="chartcontainer">
            {country ? barChart : lineChart};
        </div>
    )
}

export default Chart