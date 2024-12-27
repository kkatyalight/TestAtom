import React from 'react';

export default function TextAndPhoto(props:{ imgSrc:string; header:string; content: any[]; element: JSX.Element;}) {
    return(
        <section className="margin-sides margin-bottom-5 txtimg-wrap">
            <p className='txt-bold-24 txt-uppercase'>{props.header}</p>
            <div className='flex-row gap-3'>
                {React.cloneElement(props.element,{content:props.content })}
                <img className='services-img' src={props.imgSrc} alt={props.header} />
            </div>
            
        </section>
        
    )
}