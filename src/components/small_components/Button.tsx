export default function Button(props: { color: string; text: string; className?:string}) {
    let colorClass='';
    if (props.color=='yellow') colorClass='yellow-bg'
    else if (props.color=='green') colorClass='green-bg'
    if(props.className) colorClass+=` ${props.className}`
    return(
        <a className={colorClass+' btn txt-med-14'}>
            {props.text}
        </a>
    )
}