export default function Dropdown(props: { color: string; text: string; }) {
    let colorClass='';
    if (props.color=='yellow') colorClass='yellow-bg'
    else if (props.color=='green') colorClass='green-bg'
    return(
        <button className={colorClass}>
            {props.text}
        </button>
    )
}