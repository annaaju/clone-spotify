import './Header.css'

import smallLeft from '../../assets/icons/small-left.png'
import smallRight from '../../assets/icons/small-right.png'
import lupa from '../../assets/icons/search.png'

// eslint-disable-next-line react/prop-types
const Header = ({searchTerm, setSearchTerm}) => {

    const handleInputChange = (e) => {
        setSearchTerm(e.target.value.toLowerCase())
      }

  return (
    <nav className="header-navigation">
    <div className="navigation">

        <div className="setas">

            <button className="arrow-left">
                <img src={smallLeft}/>
            </button>
            <button className="arrow-right">
                <img src={smallRight}/>
            </button>
        
        </div>

        <div className="header-search">
            <img src={lupa}/>
            <input id="search-input"
             value={searchTerm}
             onChange={handleInputChange}
             type="text" 
             maxLength={400} 
             placeholder="O que você quer ouvir?">                         
            </input>
        </div>

        <div className="header-login">
            <button className="subscribe">Cadastre-se</button>
            <button className="enter">Entrar</button>
        </div>
    
    </div>

</nav>
  )
}

export default Header