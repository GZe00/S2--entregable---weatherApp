
//  ``
import React, { useEffect, useState } from 'react';
import '../assets/styles/App.css';

import GeoLocation from './useGeoLocation';

// import ContainerTrue from '../components/ContainerTrue';
// import ContainerFalse from '../components/ContainerFalse';
// // import Before from '../components/Before';
import Tittles from '../components/Tittles';
import Search from '../components/Search';
import City from '../components/City';
import InfoTemp from '../components/InfoTemp';
import InfoGen from '../components/InfoGen';

// import Spinner from '../components/Spinner';


const App = () => {
  // const location = GeoLocation();

  // let test = 'Japan';
  const [first, setFirst] = useState('México');
  const [change, setChange] = useState(null);
  const [oTest, setOTest] = useState('');
  
  const [data, setData] = useState('');

  const [city, setCity] = useState('');
  const [abr, setAbr] = useState('');
  const [temp, setTemp] = useState('');
  const [tempMax, setTempMax] = useState('');
  const [tempMin, setTempMin] = useState('');
  const [img, setImg] = useState('');
  const [description, setDescription] = useState('');
  const [wind, setWind] = useState('');
  const [seaLevel, setSeaLevel] = useState('');
  const [humi, setHumi] = useState('');
  const [pressure, setPressure] = useState('');

  useEffect(() => {
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${first}&units=metric&lang=es&appid=82b8455236da184718038c0f0baa478a`)
        // fetch(`https://api.openweathermap.org/data/2.5/weather?id=5678125&units=metric&lang=es&appid=82b8455236da184718038c0f0baa478a`)
        .then(responde => responde.json())
        .then(datos => setData(datos))
    
  }, []);

  useEffect(() => {
    if (data) {
      setCity(data.name);
      setAbr(data.sys.country);
      setTemp(data.main.temp);
      setTempMax(data.main.temp_max);
      setTempMin(data.main.temp_min);
      setImg(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
      setDescription(data.weather[0].description);
      setWind(data.wind.speed);
      setSeaLevel(data.main.sea_level);
      setHumi(data.main.humidity);
      setPressure(data.main.pressure);
    }
  }, [data]);

  
  const onHandleChange = e => {
    setOTest(e.target.value);
  }

  const onHandleClick = () => {
    setChange(oTest);    
  }

  const onHandleReset = () => {
    setOTest('');
  }

  useEffect(() =>{
    if(change){
      fetch(`https://api.openweathermap.org/data/2.5/weather?q=${oTest}&units=metric&lang=es&appid=82b8455236da184718038c0f0baa478a`)
        // fetch(`https://api.openweathermap.org/data/2.5/weather?id=5678125&units=metric&lang=es&appid=82b8455236da184718038c0f0baa478a`)
        .then(responde => responde.json())
        .then(datos => setData(datos))

      setCity(data.name);
      setAbr(data.sys.country);
      setTemp(data.main.temp);
      setTempMax(data.main.temp_max);
      setTempMin(data.main.temp_min);
      setImg(`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`);
      setDescription(data.weather[0].description);
      setWind(data.wind.speed);
      setSeaLevel(data.main.sea_level);
      setHumi(data.main.humidity);
      setPressure(data.main.pressure);
    }
  },[change]);
  

  return (
    
    <div className="App">

      <Tittles />
      <Search onChange = {onHandleChange} value = {oTest} onClickS = {onHandleClick} onClickR = {onHandleReset} />
      <City city={city} abr={abr} />
      <InfoTemp temp={temp} tempMax={tempMax} tempMin={tempMin} img={img} description={description} />
      <InfoGen wind={wind} seaLevel={seaLevel} humi={humi} pressure={pressure} />


    </div>
  );
}

export default App;

{/* <Spinner status = {loading}/> 
      location.permission ? 'Hola' : 'Hola2'   
      } */}