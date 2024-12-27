import icon_search from '../../assets/icon_search.svg'
export default function SearchBar() {
    return(
        <div className="search-bar-wrap">
            <img src={icon_search} alt="icon_search" />
             <input className="search-bar" placeholder="Поиск по каталогу">
             </input>
        </div>
      
    )
}