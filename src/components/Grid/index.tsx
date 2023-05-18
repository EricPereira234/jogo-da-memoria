import './gridItem.css';
import { CiSquareQuestion } from 'react-icons/ci';

import { items } from '../../data/items';


type Props = {
    item: any;
    onClick: () => void
}

export default function GridItem({item, onClick}: Props){
    return(
        <div>
            {item.permanentShown === false && item.show === false &&
            
                <CiSquareQuestion size={30}  />

            }

            {(item.permanentShown || item.show) && item.item !== null &&
                <span>{items[item.item].icon}</span>
            }

           


        </div>
    )
}