
import './button.css';

type Props = {
    label: string;
    icon: any;
    onClick: React.MouseEventHandler<HTMLDivElement>;
}

export default function Button({label, icon, onClick}: Props){
    return(
        <div className='infor-button' onClick={onClick} >
            <button >{icon}</button>
            <label>{label}</label>
        </div>
    )
}