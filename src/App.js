
import './App.css';
import './app.scss';
import { useState } from 'react';
import {Route, Routes, BrowserRouter} from 'react-router-dom';
import Country from './Pages/Country/Country';
import City from './Pages/City/City';
import ResponsiveAppBar from './components/Controls/ButtonAppBar';
import ServiceFacility from './Pages/ServiceFacility/ServiceFacility';

function App() {
  // const [cities,setCitites] = useState([])
  // const fetchCities = () => {
  //   pozivMetodi.then(response => {
  //     setCitites(response.data.)
  //   })
  // }
  const [setted, isSetted] = useState(false);

  const countries = [
    {
      id: 1,
      name: 'Option1'
    },
    {
      id: 2,
      name: 'Option2'
    },
    {
      id: 13,
      name: 'Option3'
    },
  ]
  const cities = [
    {
      id: 1,
      name: 'City1'
    },
    {
      id: 2,
      name: 'City2'
    },
    {
      id: 13,
      name: 'City3'
    },
  ]

  const unlockButton = () =>{
    
  }
  return (
    <div className="App">
     {/* <Header/> */}
     <ResponsiveAppBar/>

     <Routes>
       <Route path='/countries' element={<Country/>}/>
       <Route path='/cities' element={<City/>}/>
       <Route path='/service-facilities' element={<ServiceFacility/>} />
     </Routes>
      {/* <div className='filter-layout'>
        <div className='country-layout'>
        <SelectControl options={countries} label="Countries" name="test" />
        </div>
        <div className='city-layout'>
        <SelectControl options={cities} label="Cities" name="test" />
        </div>    
      </div>
      <button className='button'>Show Service Facilities</button> */}
      
    </div>
  );
}

export default App;
