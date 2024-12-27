
export default function ClientCard(props: { content?: any}) {
    return(
        <div className="client-card">
             <img src={props.content.imgSrc} />
        </div>
    )
}
