import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import React from 'react';
import Button from './Button';

export default function Slider(props: { header: string; viewAll: boolean; content: any[]; element: JSX.Element; button?: JSX.Element;items:number}) {
    const options={
        items:props.items,
        loop:true,
        margin:10,
        nav:true,
        // navContainer: '.slider .customNav',
        navText : ["<i class='fa fa-chevron-left'></i>","<i class='fa fa-chevron-right'></i>"],
        dots:false,
        responsive:{
            0:{
                items:1
            },
            600:{
                items:3
            },
            1024:{
                items:3
            }
        }
    }
    return(
        <section className='slider margin-sides margin-bottom-5 flex-col'>
            <div className='slider-header flex-row margin-bottom-2 space-between'>
                <p className='txt-bold-24 txt-uppercase'>{props.header}</p>
                {props.viewAll &&<p className='txt-reg-16'>Смотреть все</p>}
                <div className='customNav'></div>
            </div>
            <OwlCarousel className='owl-theme flex-row align-center' {...options}>
                {props.content.map((info)=>
                    React.cloneElement(props.element,{content:info })
                )}
            </OwlCarousel>
            {props.button &&<Button color='green' text='Смотреть все' className='self-center margin-top-2'/>}
        </section>
    )
}