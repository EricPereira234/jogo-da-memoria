import {useEffect, useState} from 'react';
import './App.css';
import { VscDebugRestart } from 'react-icons/vsc';

import logoImage from './assets/devmemory_logo.png';
import Button from './components/Button';
import Infor from './components/InforItem';
import Grid from './components/Grid';
import { items } from './data/items';
import { time } from 'console';

type GridItem = {
  item: number | null;
  show: boolean;
  permanentShown: boolean;
}

function App() {
  const [playing, setPlaying] = useState<boolean>(false);
  const [timeElapsed, setTimeElapsed] = useState<number>(0);
  const [moveCount, setMoveCount] = useState<number>(0);
  const [showCount, setShowCont] = useState<number>(0);
  const [gridItems, setGridItems] = useState<GridItem[]>([]);

  useEffect(()=> resetGrid(),[]);

  useEffect(()=>{
    const timer = setInterval(()=>{
      if(playing){
        setTimeElapsed(timeElapsed + 1);
      }
    }, 1000);
    return ()=> clearInterval(timer);
  },[playing, timeElapsed])

  const resetGrid = ()=>{
    setTimeElapsed(0);
    setMoveCount(0);
    setShowCont(0);
    
    let tempGrid: GridItem[] = [];
    for(let i = 0; i < (items.length * 2); i++){
      tempGrid.push({
        item: null,
        show: false,
        permanentShown: false
      })
    }

    for(let w = 0; w < 2; w++){
      for(let i = 0; i < items.length; i++){
        let pos = -1;
        while(pos < 0 || tempGrid[pos].item !== null){
          pos = Math.floor(Math.random() * (items.length * 2));
        }
        tempGrid[pos].item = i;
      }
    }

    setGridItems(tempGrid);

    //start jogo
    setPlaying(true);

  }

  function handleItemClick(){

  }

  function formatTime(seconds: number){
    let minutes = Math.floor(seconds/ 60);
    seconds -= (minutes * 60);

    let secString = `${seconds < 10? '0' + seconds : seconds }`
    let secMinut = `${seconds < 10? '0'+ minutes : minutes }`

    return `${secMinut}: ${secString}`;
  }

  return (
    <div className="container">
        <div className='container-info' >
            <div className='logoLink' >
              <img src={logoImage} width={200} alt='logo' />
            </div>

            <div className='info-area' >
              <Infor label='Tempo'  value={formatTime(timeElapsed)}/>
              <Infor label='Movimentos'  value='0'/>
            </div>

            <Button 
              label='Reiniciar'
              icon={<VscDebugRestart size={25} />}
              onClick={resetGrid}
             />
       </div>


       <div className='container-grid' >
         <div className='container-grid2' >
          {gridItems.map((item, index)=>(
            <Grid
              key={index}
              item={item}
              onClick={()=>handleItemClick()}
            />
          ))}
         </div>
       </div>
    </div>
  );
}

export default App;
