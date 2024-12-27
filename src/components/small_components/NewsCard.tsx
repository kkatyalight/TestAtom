export default function NewsCard(props:{content?:any}) {
    return(
        <div className="news-card flex-col">
            <p className="txt-med-16 underline">{props.content.title}</p>
            <p className="txt-med-16">{props.content.date}</p>
            <p className="txt-reg-12">{props.content.text}</p>
        </div>
    )
}