import React from 'react';

const Forecast = ({ forecastWeather, location }) => {
  return (
    <div className='container mt-3'>
      <h4 className='text-white text-center'> 
        Forecast weather of {location.name},{location.region},{location.country}
      </h4>
      {forecastWeather.forecastday.map((data, index) => {
        return (
          <div className="accordion accordion-flush mt-3" id="accordionFlushExample" key={index}>
            <div className="accordion-item">
              <h2 className="accordion-header">
                <button className="accordion-button collapsed" 
                  type="button" 
                  data-bs-toggle="collapse" 
                  data-bs-target={`#${index}`} 
                  aria-expanded="false" 
                  aria-controls="flush-collapseOne">
                  <div className="d-flex flex-row mb-3">
                    <div className="p-2">{data.date}</div>
                    <div className="p-2"><img src={data.day.condition.icon} alt="weather icon" /></div>
                    <div className="p-2">
                      <h6>Max Temp : </h6>{data.day.maxtemp_c}
                    </div>
                  </div>
                </button>
              </h2>
              <div id={`${index}`} 
              className="accordion-collapse collapse"
               data-bs-parent="#accordionFlushExample">
                <div className="accordion-body">
                   {data.hour.map((Data ) => (
                    <>
                    
                      <h4>{Data.time}</h4>Temperature
                      <div className="progress"
                       role="progressbar" 
                       aria-label="Default striped example" 
                       aria-valuenow="10" 
                       aria-valuemin="0" 
                       aria-valuemax="100">
                        <div className="progress-bar progress-bar-striped" 
                        style={{width: `${Data.temp_c}%`}}></div>
                      </div>
                    </>
                  ))}
                </div>
              </div>
            </div>
          </div>
        )
      })}
    </div>
  );
};

export default Forecast;
