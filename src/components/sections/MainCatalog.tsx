import {catalog} from '../../data'
import CatalogCard from "../small_components/CatalogCard";
import Button from "../small_components/Button";

export default function MainCatalog() {

    return(
        <section className='margin-sides margin-bottom-5 flex-col gap-3'>
            <div className='flex-row catalog'>
                {catalog.map((info)=>
                    <CatalogCard img={info.imgSrc} title={info.title} list={info.categories}/>
                )}
            </div>
            <div className='flex-row justify-center'>
                <Button color='green' text='смотреть все'/>
                <Button color='yellow' text='скачать прайс-лист'/>
            </div>
        </section>
    )
}