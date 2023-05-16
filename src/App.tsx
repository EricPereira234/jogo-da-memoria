
import './App.css';

import logoImage from './assets/devmemory_logo.png';

function App() {
  return (
    <div className="container">
        <div className='container-info' >
            <div className='logoLink' >
              <img src={logoImage} width={200} alt='logo' />
            </div>

            <div className='info-area' >
              ....
            </div>

            <button>Reiniciar</button>
       </div>


       <div className='container-grid' >
        ...
       </div>
    </div>
  );
}

export default App;
