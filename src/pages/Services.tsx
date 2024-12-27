import { useState } from "react";
import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ServicesNav from "../components/small_components/ServicesNav";
import {services} from "../data"
import Button from "../components/small_components/Button";

export default function Services(props:{id?:number}) {
    const [serviceID, setServiceID] = useState(props.id || -1);
    const handleClick=(id:number)=>{
        setServiceID(id);
    }
    return(
        <>
        <Header/>
        <section className="margin-sides flex-col margin-bottom-5">
            <p className="txt-bold-24 txt-uppercase">услуги</p>
            <ServicesNav content={services} onClick={handleClick}/>
        </section>
        {serviceID!=-1 &&
        <section className="margin-sides margin-bottom-5 txtimg-wrap">
            <div className='flex-row gap-3 space-between'>
                <div className="flex-col service-descr">
                <p className='txt-bold-24 txt-uppercase margin-bottom-2'>{services[serviceID].title}</p>
                    <p className="txt-bold-16">{services[serviceID].info.adv.title}</p>
                    <p className="txt-reg-16">{services[serviceID].info.adv.text}</p>
                    <p className="txt-bold-16">{services[serviceID].info.disadv.title}</p>
                    <ul className="flex-col gap-05 service-list">
                        {services[serviceID].info.disadv.text.map((info)=>
                            <li className="txt-reg-16">{info}</li>
                        )}
                    </ul>
                    <p className="txt-bold-16">{services[serviceID].info.price.title}</p>
                    <ul className="flex-col gap-05 service-list">
                        {services[serviceID].info.price.text.map((info)=>
                            <li className="txt-reg-16">{info}</li>
                        )}
                    </ul>
                    <Button 
                        color='green'
                        text='заказать услугу'
                        className="margin-top-1"
                    />
                </div>
                <img className="services-img" src={services[serviceID].imgSrc} alt={services[serviceID].title} />
            </div>    
        </section>}
        <Footer/>
        </>
    )
}