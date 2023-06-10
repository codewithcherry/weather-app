import React, { useEffect, useState } from 'react'
import axios from 'axios';
import Weather_API from '../Keys';

function WeatherHead(props) {

    
    const [data,setData]=useState(null);
    const [err,setError]=useState(false);
    const [time,setTime]=useState({})

    useEffect(()=>{
        if(navigator.geolocation){
            navigator.geolocation.getCurrentPosition(position=>{
                fetchData(position.coords.latitude,position.coords.longitude)
                } ,error=>{
                    alert(error.message)
                });
            }
        else {
            alert("Gelocaation is not supported by the browser. please check.")
        }
    },[]);

    const fetchData=async (lat,long)=>{
        try {
            const response=await axios.get(`https://api.weatherapi.com/v1/forecast.json?key=${Weather_API.Your_api_key}&q=${lat},${long}&days=3&aqi=no&alerts=no`)
            .then(res=>res.data);
            setData(response);
            getTime();
        }
        catch(error){
            console.log(error.message);
            setError(true)
        }
    }
    
    const getTime = () => {
        const Days = [
          "Sunday",
          "Monday",
          "Tuesday",
          "Wednesday",
          "Thursday",
          "Friday",
          "Saturday",
        ];
        const Months = [
          "January",
          "Febuary",
          "March",
          "April",
          "May",
          "June",
          "July",
          "August",
          "September",
          "October",
          "November",
          "December",
        ];
        const date = new Date();
        setTime({
          hours: date.getHours(),
          minutes: date.getMinutes(),
          seconds: date.getSeconds(),
          day: Days[date.getDay()],
          date: date.getDate(),
          month: Months[date.getMonth()],
          year: date.getFullYear(),
        });
      };
   

  return (
    <div>
       {data &&
      <div className='container mx-auto p-32'>
        <div className='m-4 p-4'>
            <h1 className='text-2xl font-bold text-slate-300'>{data.location.name}, {data.location.country}</h1>
            <p className='text-lg font-semibold text-slate-300'>{ time.month+" "+ time.date + " , "+ time.day }</p>
            
        </div>
        <div className='flex justify-between items-center m-4 p-4'>
            <div>
                <div className='flex justify-around items-center  m-4 p-8 rounded-lg backdrop-opacity-25 text-slate-300'>
                    <div>
                        <div>
                            <img src={`https://${data.current.condition.icon}`} alt="Weather Icon"  className='h-32 w-32'/>
                        </div>
                    </div>
                    <div >
                        <div  className='text-4xl text-center'>
                        <span>{data.current.temp_c}</span><sup>°</sup>
                        </div>
                        <div>
                        <p>{data.current.condition.text}</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid gap-16 grid-cols-3 m-4 p-8 shadow-2xl rounded-lg backdrop-opacity-25 shadow-slate-900 text-slate-300'>
                <div >
                    <div className='text-center'>
                        <span>{data.forecast.forecastday[0].day.maxtemp_c}</span><span>°</span>
                    </div>
                    <div className='text-center'>
                        <span>High</span>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <span>{data.current.wind_mph}</span><span>mph</span>
                    </div>
                    <div className='text-center'>
                        <span>Wind</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>{data.forecast.forecastday[0].astro.sunrise}</span>
                    </div>
                    <div className='text-center'>
                        <span>Sunrise</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>{data.forecast.forecastday[0].day.mintemp_c}</span><span>°</span>
                    </div>
                    <div className='text-center'>
                        <span>Low</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>{data.current.cloud}</span><span>%</span>
                    </div>
                    <div className='text-center'>
                        <span>Rain</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>{data.forecast.forecastday[0].astro.sunset}</span>
                    </div>
                    <div className='text-center'>
                        <span>Sunset</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
}
    </div>
  )
}

export default WeatherHead
