
import "./info.css";

type Props = {
    label: string;
    value: string;
}

export default function Infor({label, value}: Props){
    return(
        <div className="container-infor-components" >
            <label>{label}</label>
            <div className="value-infor" >{value}</div>
        </div>
    );
}