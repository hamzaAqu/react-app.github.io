import {plantList} from '../datas/plantList'
import Categories from'./Categories'
import '../styles/ShoppingList.css'
import PlantItem from './PlantItem'
import {useState} from 'react'



function ShoppingList({cart,updateCart}){

    const [activeCategory,setActiveCategory]=useState('')

    
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
        <div className='lmj-shopping-list'>
            <Categories activeCategory={activeCategory} setActiveCategory={setActiveCategory}/>
             <ul className='lmj-plant-list'>
                {
                   plantList.map(({id, cover, name, water, light,price,category})=> 
                   (category=== activeCategory || activeCategory=== '' )?
                   ( 
                    <div key={id}>
                   <PlantItem id={id} cover={cover} name={name} water={water} light={light} />
                   <button onClick={() =>addToCart(name,price)}>Ajouter</button>

                    </div>
                   
                   ): null
                   )
                }
            </ul>
            
        </div>
           
    )
}

export default ShoppingList