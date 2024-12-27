import logo from "../../assets/logo.svg"
import icon_tel from "../../assets/icon_tel.svg"
import icon_address from "../../assets/icon_address.svg"
import icon_user from "../../assets/icon_user.svg"
import icon_arrowThin from "../../assets/icon_arrowThin.svg"
import icon_shopCart from "../../assets/icon_shopCart.svg"
import Dropdown from "../small_components/Dropdown";
import SearchBar from "../small_components/SearchBar";
import { Link } from "react-router-dom"
import Button from "../small_components/Button"

export default function Header() {
    return(
        <header className="margin-sides margin-bottom-2 margin-top-1 txt-reg-14">
            <div className="header-top flex-row space-between">
                <div className="flex-row">
                    <Link to='/'><img src={logo} alt="logo" id='logo'/></Link>
                    
                    <p className="txt-light-12 logo-txt">Оптовые поставки металлопроката по России и странам СНГ</p>  
                </div>
                <div className="flex-row">
                    <Link to='/delivery'>Доставка</Link>
                    <Link to='/services'>Услуги</Link>
                    <p>О компании</p>
                    <p>Контакты</p>
                </div>
                <div className="flex-col gap-05 txt-right">
                    <div className="flex-row">
                        <img src={icon_tel} alt="icon_tel" className="header-icon"/>
                        <p className="txt-bold-18">8 800 999 79 77</p>
                    </div>
                    <p className="txt-reg-12 txt-dashed">Заказать звонок</p>
                </div>
            </div>
            <hr />
            <div className="header-bottom flex-row space-between">
                <div className="flex-row">
                    <Button color='green' text='Каталог'/>
                    <SearchBar/>
                    <div className="flex-row">
                        <img src={icon_address} alt="icon_address" className="header-icon"/>
                        <div>
                            <p>Свердл. обл., г. Первоуральск</p>
                            <p>Пн-Вс 8:00 - 21:00</p>
                        </div>
                    </div>
                    
                </div>
                <div className="flex-row gap-2">
                <div className="header-user flex-row gap-0">
                        <img src={icon_user} alt="icon_user" />
                        <img src={icon_arrowThin} alt="icon_arrowThin" />
                    </div>
                    <div className="header-shopcart">
                        <img src={icon_shopCart} alt="icon_shopCart" />
                        <p className="txt-med-14 txt-white">8</p>
                    </div>
                </div>
               

            </div>
        </header>
    )
}