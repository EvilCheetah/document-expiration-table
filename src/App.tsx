import { useState } from 'react';
import './App.css';
import { ExpirationTable } from './components/ExpirationTable/ExpirationTable';
import vehicle_information from './data.json'


function App()
{
    const [ vehicles, setVehicles ] = useState(vehicle_information);

    return (
        <div className="App">
            <ExpirationTable vehicles={vehicles} setVehicles={setVehicles}/>
        </div>
    );
}

export default App;
