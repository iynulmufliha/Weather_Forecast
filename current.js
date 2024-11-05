import React from 'react';
const Current=({currentWeather, location})=>{
    return(
       <div className='container mt-5' >
       <div className='text-white text-center '><h4>Current Weather of {location.name}, {location.region}, {location.country}</h4> 
       <div className='row'>
        {/* col-1 */}
        <div className='col-3 '>
        <div class="card" className='text-center bg-dark rounded p-1 
        bg-opacity-10 border-dark border-opacity-25 text-white mt-2'>
  {/* <img src={currentWeather.condition.icon} class="card-img-top" alt="..."/> */}
  <div class="card-body">
    <h5 class="card-title"> {currentWeather.condition.text}</h5>
    
  </div>
</div>
        </div>

        {/* col-2 */}
        <div className='col-3'><div class="card" className='text-center bg-dark rounded p-1 
        bg-opacity-10 border-dark border-opacity-25 text-white mt-2' >
 
  <div class="card-body">
    <h5 class="card-title">Temperature in {currentWeather.temp_c} C</h5>
    
  </div>
</div>

        </div>

        {/* col-3 */}
        <div className='col-3'><div class="card" className='text-center bg-dark rounded p-1 
        bg-opacity-10 border-dark border-opacity-25 text-white mt-2' >
  
  <div class="card-body">
    <h5 class="card-title">Temperature in {currentWeather.temp_f} F</h5>
    
  </div>
</div>

        </div>

        {/* col-4 */}
        <div className='col-3'><div class="card" className='text-center bg-dark rounded p-1 
        bg-opacity-10 border-dark border-opacity-25 text-white mt-2'>

  <div class="card-body">
    <h5 class="card-title">Humidity : {currentWeather.humidity} </h5>
    
  </div>
</div>

        </div>
        
       </div>
       </div>
        </div>
    )
}
export default Current;