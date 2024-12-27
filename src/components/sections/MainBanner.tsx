import main_banner from "../../assets/main_banner.png"
import Button from "../small_components/Button";
import BannerList from "../small_components/BannerList";

export default function MainBanner() {
    return( 
        <section className="main-banner margin-bottom-5">
            <div className="overlay">
                <img src={main_banner} alt="" />
            </div>
            
            
            <div className="main-banner-text margin-sides flex-col">
                <div className="flex-col">
                    <div className="txt-bold-40">
                        <p>Надёжный поставщик</p>
                        <p>Выгодный партнёр</p>
                    </div>
                    <p className="txt-reg-16">Оптовая продажа металлопроката от производителя</p>
                    <Button color='green' text='написать нам'/>
                </div>
                
                <div className="flex-row">
                    <BannerList heading="27000+" text="товарных позиций"/>
                    <BannerList heading="15 лет" text="работы в отрасли"/>
                    <BannerList heading="2200+" text="постоянных клиентов"/>
                </div>
            </div>
           
        </section>
    )
}