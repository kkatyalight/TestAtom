import Footer from "../components/sections/Footer";
import Header from "../components/sections/Header";
import ClientCard from "../components/small_components/ClientCard";
import Slider from "../components/small_components/Slider";
import TextAndPhoto from "../components/small_components/TextAndPhoto";
import { clients } from "../data";
import delivery from '../assets/delivery.png'
import main_services from "../assets/main_services.png"
import logo_notext from "../assets/logo_notext.svg"
export default function Delivery() {
    return(
        <>
        <Header/>
                <section className="margin-sides margin-bottom-5 txtimg-wrap">
                    <p className='txt-bold-24 txt-uppercase margin-bottom-2'>доставка</p>
                    <div className='flex-row gap-3 space-between'>
                        <div className="txt-reg-16 delivery-text">
                            <p>Купить товар «Лист горячекатаный 8 1.5м 6м ст3пс5/сп5 14637» в Екатеринбурге по выгодной цене за метр, тонну или другую единицу измерения. Онлайн-калькулятор рассчитает стоимость, размеры и массу изделия (кг, т).</p>
                            <br />
                            <p>Ознакомьтесь с описанием и техническими характеристиками товара «Лист горячекатаный 8 1.5м 6м ст3пс5/сп5 14637» на официальном сайте «Сталепромышленной компании» или звоните по номеру в Екатеринбурге +7 (343) 3122111 и получите консультацию наших специалистов.</p>
                        </div>
                        <div className="delivery-img">
                            <img src={delivery} alt="delivery" />
                            <div className="txt-bold-40 txt-white img-text">
                                <p>Надёжный поставщик</p>
                                <p>Выгодный партнёр</p>
                            </div>
                            <img src={logo_notext} alt="logo_notext" className="img-logo" />
                            
                        </div>
                        
                    </div>
                    
                </section>
        <Slider
            header='с кем мы работаем'
            viewAll={false}
            element={<ClientCard/>}
            content={clients}
            items={4}
        />
        <Footer/>
        </>
    )
}