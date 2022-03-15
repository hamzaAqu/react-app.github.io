import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import CareScale from './CareScale'



function ShoppingList(){
//reduce me retourne un tableau des categories de plantes
//on ajoute la categorie de la plante suivant si elle existe dj ps la peine
    const categories = plantList.reduce((acc,plant)=>
    acc.includes(plant.category)? acc: acc.concat(plant.category), [])

    return(
        <div>
            <ul> 
                {//j'ai dj cat unique dans le tableau alors je l'ai utilisée comme key
                    categories.map((cat) =>(
                        <li key={cat}> {cat}</li>
                    ))
                }
            </ul>
             <ul className='lmj-plant-list'>
                {
                   plantList.map((plant)=> ( 
                   <li key={plant.id} className='lmj-plant-item'> 
                    {plant.name} {plant.isSpecialOffer && <div className='lmj-sales'> solde!</div>}
                    <CareScale careType='light' scaleValue ={plant.light}/>                 {/* la valeur que je vais passer au props */}
                    <CareScale careType='water' scaleValue ={plant.water}/> 
                    </li>

                   ))
                }
                
            </ul>
        </div>
           
    )
}

export default ShoppingList