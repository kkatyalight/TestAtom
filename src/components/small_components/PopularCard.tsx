
export default function PopularCard(props:{ content?:any}) {
    return(
        <div className="popular-card flex-col gap-2">
             <img src={props.content.imgSrc} alt={props.content.title} />
             <p className="txt-med-16 txt-center">{props.content.title}</p>
        </div>
    )
}