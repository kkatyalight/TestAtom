export default function BannerList(props: { heading: string; text: string; }) {
    return(
        <div className="flex-col banner-list">
            <p className="txt-black-24">{props.heading}</p>
            <hr />
            <p className="txt-reg-14">{props.text}</p>
        </div>
        
    )
}