import React, { useEffect } from 'react'

function Forecast(props) {

    const [forecastdays,setForecastdays]=useState({day1:undefined,day2:undefined,day3:undefined})

   const info=props.forecast_data

    useEffect(()=>{
      const Days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
      ];
      const date=new Date();
      const day=date.getDay()
      setForecastdays({
        day1:Days[day],
        day2:Days[day+1],
        day3:Days[day+2]
      })

    })

  return (
    <div className='p-4 bg-slate-50 rounded-xl bg-opacity-10 shadow-sm shadow-gray-700'>
     <div className='text-3xl font-medium text-slate-300'>Forecast</div>
     <div className='flex justify-around'>
     {info.map((item,index)=>{
        return (
        <div className='m-4 p-4 shadow-2xl rounded-lg bg text-slate-400'> 
            <div  key={index}> 
              <div>
              <h1>{item.date}</h1>
              </div>
              <div>
                <div className='flex justify-around m-2 p-2'>
                  <div>
                    <img src="" alt="weather icon" className='h-16 w-16'/>
                  </div>
                  <div className=''>
                    <div>
                      <h1>{item.day.avgtemp_c}°</h1>
                    </div>
                    <div>
                      <p>feels like rainy</p>
                    </div>
                  </div>
                </div>
              </div>
              <div className='grid grid-cols-3 gap-4 m-2 p-4 '>
                <div>
                  <span>{item.day.maxtemp_c}</span><span>°</span>
                  <p>High</p>
                </div>
                <div>
                  <span>{item.day.maxwind_mph}</span>
                  <p>H-wind</p>
                </div>
                <div>
                  <span>{item.day.daily_chance_of_rain}</span><span>%</span>
                  <p>Rain</p>
                </div>
                <div>
                  <span>{item.day.mintemp_c}</span><span>°</span>
                  <p>Low</p>
                </div>
                <div>
                  <span>{item.day.totalprecip_mm}</span>
                  <p>preci</p>
                </div>
                <div>
                  <span>{item.day.avghumidity}</span>
                  <p>Humid</p>
                </div>
              </div>
            </div>
        </div>
        )
      })}
     </div>
    </div>
  )
}

export default Forecast
