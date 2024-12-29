
import './App.css';
import Header from './Component/Header/Header';
import  './Component/Header/Headerstyle.css';
import Main from './Component/Main/Main.jsx';
import './Component/Main/Main.css'
import Company from './Component/Companies/Company.jsx';
import './Component/Companies/Company.css'
import Residencies from './Component/Residencies/Residencies.jsx';
import Value from './Component/Value/Value.jsx';
import './Component/Value/Value.css'
import Contact  from './Component/Contact/Contact.jsx';
import './Component/Contact/Contact.css'

function App() {
  return (
    <div className="App">
    <div className=' upper'>
    <Header/>
    <Main/>
    </div>
    
    <Company/>
    <Residencies/>
    <Value/>
    <Contact/>
    </div>
  );
}

export default App;
