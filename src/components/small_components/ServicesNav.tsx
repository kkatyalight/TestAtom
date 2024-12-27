import { useState } from "react";

export default function ServicesNav(props:{ content?:any[]; onClick?: any}) {
     const [activeID, setActiveID] = useState(-1);
     const handleClick=(id:number)=>{
        setActiveID(id);
        props.onClick(id)
     }
    return(
        <div className="services-wrap flex-row space-between" >
            {props.content?.map((info,id)=>
                <div onClick={()=>handleClick(id)} className={`${activeID==id ? 'active' : ''} services-nav-item flex-row align-center`}>
                    <img src={info.iconSrc} alt="" />
                    <p>{info.title}</p>
                </div>
            )}
            </div>
    )
}