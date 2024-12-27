import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import MainBanner from "../components/sections/MainBanner";
import MainCatalog from "../components/sections/MainCatalog";
import MainNews from "../components/sections/MainNews";
import MainPopular from "../components/sections/MainPopular";
import MainReasons from "../components/sections/MainReasons";
import MainServices from "../components/sections/MainServices";
import MainSpecial from "../components/sections/MainSpecial";
import OurClients from "../components/sections/OurClients";
import TextAndPhoto from "../components/small_components/TextAndPhoto";
import ServicesNav from "../components/small_components/ServicesNav";

import main_services from "../assets/main_services.png"

import Slider from "../components/small_components/Slider";
import PopularCard from "../components/small_components/PopularCard";
import SpecialCard from "../components/small_components/SpecialCard";
import ClientCard from "../components/small_components/ClientCard";
import NewsCard from "../components/small_components/NewsCard";
import {popular,special,clients,services,news} from '../data'
import Button from "../components/small_components/Button";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Main() {
    const navigate = useNavigate();
     const handleServiceClick=(id:number)=>{
        // navigate(`/services/${id}`);
        navigate(`/services`);
    }

    return(
        <>
        <Header/>
        <MainBanner/>
        <MainCatalog/>
        {/* <MainPopular/> */}
        <div className="popular-section margin-bottom-5">
        <Slider
            header='популярные разделы'
            viewAll={false}
            element={<PopularCard/>}
            content={popular}
            items={4}
        />
        </div>
        
        {/* <MainSpecial/> */}
        <Slider
            header='специальные предложения'
            viewAll={true}
            element={<SpecialCard/>}
            content={special}
            items={3}
        />
        {/* <MainServices/> */}
        <TextAndPhoto
            imgSrc={main_services}
            header="Услуги"
            content={services}
            element={<ServicesNav onClick={handleServiceClick}/>}
        />
        {/* <OurClients/> */}
        <Slider
            header='наши клиенты'
            viewAll={false}
            element={<ClientCard/>}
            content={clients}
            items={4}
        />
        <MainReasons title='почему выбирают нас?'/>
        {/* <MainNews/> */}
        <Slider
            header='новости'
            viewAll={false}
            element={<NewsCard/>}
            button={<Button color='green' text='все новости'/>}
            content={news}
            items={4}
        />
        <Footer/>
        </>
    )
}