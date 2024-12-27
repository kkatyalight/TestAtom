export default function SpecialCard(props:{ content?:any;}) {
    return(
        <div className="special-card flex-col gap-2">
             <img src={props.content.imgSrc} alt={props.content.title} />
             <p className="txt-reg-16 title">{props.content.title}</p>
             <p className="txt-bold-14">{props.content.text}</p>
             <p className="txt-reg-14 underline">Подробнее</p>
        </div>
    )
}