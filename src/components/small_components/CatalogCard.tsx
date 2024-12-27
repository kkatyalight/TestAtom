import { useState } from 'react';

export default function CatalogCard(props: { img: string; title: string; list: string[]; }) {
    const showIfClosed=4;
    const [isOpened, setIsOpened] = useState(false);
    const handleClick=()=>{
        setIsOpened(true);
    }
    return(
        <div className={`${isOpened?'opened':''} catalog-card flex-col`}>
            <img src={props.img} alt={props.title} />
            <p className="txt-bold-14 title">{props.title}</p>
            <div className="flex-col">
                {props.list.map((info,id)=>
                ( !isOpened && id<showIfClosed || isOpened
                    ? <p className="txt-reg-14">{info}</p>
                    : null
                )
                
                
                )}
            </div>
            {isOpened||props.list.length>showIfClosed &&<p onClick={handleClick} className="txt-gray underline view-all">Смотреть все</p>}
        </div>
    )
}