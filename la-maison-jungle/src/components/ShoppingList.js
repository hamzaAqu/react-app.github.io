import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'



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
                   plantList.map(({id, cover, name, water, light})=> ( 
                   <PlantItem id={id} cover={cover} water={water} light={light}/>
                   ))
                }
                
            </ul>
        </div>
           
    )
}

export default ShoppingList