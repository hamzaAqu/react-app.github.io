import '../styles/Banner.css'
import Recommandation from './Recommandation'
import logo from'../assets/logo.png'

function Banner(){
    const title = 'La maison jungle'
	return (<div className="lmj-banner">
        <img src={logo} alt='la maison jungle' className="lmj-logo"/>
        <h1 className="lmj-title">{title}</h1>
        <div> <Recommandation/> </div>
        </div>)
}
export default Banner
/* Il s'agit d'une syntaxe prévue dans l'ES6, 
qui vous épargnera d'utiliser les accolades au moment de l'import */