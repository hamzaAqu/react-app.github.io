import {plantList} from '../datas/plantList'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'



function ShoppingList({cart,updateCart}){
//reduce me retourne un tableau des categories de plantes
//on ajoute la categorie de la plante suivant si elle existe dj ps la peine
    const categories = plantList.reduce((acc,plant)=>
    acc.includes(plant.category)? acc: acc.concat(plant.category), [])
    
    function addToCart(name,price){
      const currentedPlant=cart.find((plant)=>plant.name===name)
      if(currentedPlant){
          const filtredPlant=cart.filter((plant)=>plant.name!==name)
          updateCart([
              ...filtredPlant,{name,price,amount: currentedPlant.amount+1}
          ])
      }
      else{
          updateCart([...cart,{name,price,amount:1}])
      }
    }

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
                   plantList.map(({id, cover, name, water, light,price})=> ( 
                    <div key={id}>
                   <PlantItem id={id} cover={cover} name={name} water={water} light={light}/>
                   <button onClick={() =>addToCart(name,price)}>Ajouter</button>

                    </div>
                   
                   ))
                }
                
            </ul>
        </div>
           
    )
}

export default ShoppingList