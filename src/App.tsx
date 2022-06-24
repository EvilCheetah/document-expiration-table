import './App.css';
import { ExpirationTable } from './components/ExpirationTable/ExpirationTable';
import vehicle_information from './data.json'


function App()
{
    return (
        <div className="App">
            <ExpirationTable vehicles={vehicle_information}/>
        </div>
    );
}

export default App;
