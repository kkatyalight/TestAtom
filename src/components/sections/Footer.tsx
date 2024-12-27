import logo from "../../assets/logo.svg"
import icon_vk from "../../assets/icon_vk.svg"
import icon_inst from "../../assets/icon_inst.svg"
import icon_footerBtm from "../../assets/icon_footerBtm.svg"
import Button from "../small_components/Button";


export default function Footer() {
    return(
        <footer>
            <div className="footer-top">
                <div className="footer-top-content margin-sides flex-row space-between">
                    <div className="flex-col space-between footer-logo">
                        <img src={logo} alt="logo" id='logo'/>
                        <div className='txt-reg-10'>
                            <p className="underline">Политика конфиденциальности</p>
                            <p className="txt-gray">Вся предоставленная на сайте информация не является публичной офертой, определяемой положениями Статьи 437(2) Гражданского кодекса РФ.</p>
                        </div>
                    </div>
                    <div className="flex-col txt-reg-14">
                        <p className='txt-bold-14'>Компания</p>
                        <p>Главная</p>
                        <p>О компании</p>
                        <p>Доставка и оплата</p>
                    </div>
                    <div className="footer-cat flex-col txt-reg-14">
                        <p className='txt-bold-14'>Каталог</p>
                        <p>Трубный прокат</p>
                        <p>Трубопроводная арматура</p>
                        <p>Нержавеющий прокат</p>
                        <p>Черный прокат</p>
                        <p>Листовой прокат</p>
                        <p>Жаропрочный прокат</p>
                        <p>Металлоконструкции</p>
                        <p>Ферросплавы</p>
                        <p>Металлические порошки</p>
                    </div>
                    <div className="flex-col">
                        <div className="flex-col">
                            <p className="txt-bold-14">Контакты</p>
                            <p className="txt-reg-18">8 800 999 79 77</p>
                            <p className="txt-reg-18">atomes@help.com</p>
                        </div>
                        <Button color='yellow' text='заказать звонок'/>
                    </div>
                </div>

            </div>
            <div className="footer-bottom">
                <div className="margin-sides flex-row space-between">
                    <div className="txt-light-gray txt-reg-10">
                        <p>© 2009-2020 ООО “Стальэнерго”</p>
                        <p>Все права защищены</p>
                    </div>
                    <div className="flex-row gap-3">
                        <img src={icon_vk} alt="icon_vk" className="footer-icon"/>
                        <img src={icon_inst} alt="icon_inst" className="footer-icon"/>
                        <img src={icon_footerBtm} alt="icon_footerBtm" className="fb-logo"/>
                    </div>
                </div>
            </div>
        </footer>
    )
}