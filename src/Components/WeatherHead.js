import React from 'react'

function WeatherHead(props) {
  return (
    <div>
      <div className='container mx-auto p-32'>
        <div className='m-4 p-4'>
            <h1 className='text-2xl font-bold text-slate-300'>New Delhi, IN</h1>
            <p className='text-lg font-semibold text-slate-300'>Friday 9 May</p>
        </div>
        <div className='flex justify-between items-center m-4 p-4'>
            <div>
                <div className='flex justify-around items-center  m-4 p-8 rounded-lg backdrop-opacity-25 text-slate-300'>
                    <div>
                        <div>
                            <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="Weather Icon"  className='h-32 w-32'/>
                        </div>
                    </div>
                    <div >
                        <div  className='text-4xl text-center'>
                        <span>5</span><sup>°</sup>
                        </div>
                        <div>
                        <p>Overcast Clouds</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className='grid gap-16 grid-cols-3 m-4 p-8 shadow-2xl rounded-lg backdrop-opacity-25 shadow-slate-900 text-slate-300'>
                <div >
                    <div className='text-center'>
                        <span>6</span><span>°</span>
                    </div>
                    <div className='text-center'>
                        <span>High</span>
                    </div>
                </div>
                <div>
                    <div className='text-center'>
                        <span>3.1</span><span>mph</span>
                    </div>
                    <div className='text-center'>
                        <span>Wind</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>6:40</span> <span>am</span>
                    </div>
                    <div className='text-center'>
                        <span>Sunrise</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>3</span><span>°</span>
                    </div>
                    <div className='text-center'>
                        <span>Low</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>70</span><span>%</span>
                    </div>
                    <div className='text-center'>
                        <span>Rain</span>
                    </div>
                </div>
                <div>
                <div className='text-center'>
                        <span>6:40</span> <span>pm</span>
                    </div>
                    <div className='text-center'>
                        <span>Sunset</span>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default WeatherHead
