import {reasons} from '../../data'

export default function MainReasons(props: { title: string }) {
    return(
        <section className="main-reasons-wrap margin-bottom-2">
            <div className='margin-sides flex-col gap-2'>
                <p className="txt-bold-24 txt-uppercase">{props.title}</p>
                <div className="main-reasons flex-row">
                    {reasons.map((info)=>
                        <div className='reason-card flex-row'>
                            <img src={info.imgSrc} alt={info.title} />
                            <p>{info.title}</p>
                        </div>
                    )}
                </div>
            </div>
            
        </section>
    )
}