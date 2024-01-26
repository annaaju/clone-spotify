import './SideBar.css'
import logo from '../../assets/icons/logo-spotify.png'

const SideBar = () => {
  
    return (
    <div className="sidebar">
        <nav className="sidebar-nav">
            <div>
                <div className="logo">
                    <a href="#"> <img src={logo}/> </a>
                </div>   
                    <ul>
                        <li>
                            <a href="#">
                                <span><i className="fa-solid fa-house"></i></span>
                                <span className='textSpan'>Início</span>
                            </a>
                        </li>
                        <li>
                            <a href="#">
                                <span><i className="fa-solid fa-search"></i></span>
                                <span className='textSpan'>Pesquisa</span>
                            </a>
                        </li>
                    </ul>
            </div>
        </nav>

        <div className="library">
            <div className="library-content">

                <button className="library-button">
                    <span className="fa fas fa-book"></span>
                    <span>Sua biblioteca</span>
                </button>
                <span className="fa fa-plus"></span>
            </div>

            <section className="section-playlist">
                
                <div className="section-playlist-content">
                   
                    <span className="text title">Crie sua primeira playlist</span>
                    <span className="text subtitle">É fácil, vamos te ajudar.</span>
                    
                    <button className="section-playlist-button">
                        <span>Criar playlist</span>       
                    </button>
                
                </div>
            </section>

            <div className="cookies">
                <a href="#">Cookies</a>
            </div>

            <div className="languages">
                <button className="languages-button">
                    <span className="fa fa-globe"></span>
                    <span className='textSpan'>Português do Brasil</span>
                </button>
            </div>

        </div>
    </div>
  )
}

export default SideBar