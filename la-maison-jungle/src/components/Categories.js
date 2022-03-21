import {plantList} from '../datas/plantList'
import '../styles/Categories.css'


function Categories({activeCategory,setActiveCategory}){

    const categorie=plantList.reduce((acc,plant)=> 
          acc.includes(plant.category)?acc: acc.concat(plant.category),[])

    
    return(
        <div className='lmj-categories'>
            <select value={activeCategory} onChange={(e)=>setActiveCategory(e.target.value)} 
            className='lmj-categories-select'>
            <option value=''>----</option>
             { 
             categorie.map((cat)=>
             <option key={cat}> {cat} </option>)
             }
           </select>
            <button onClick={() =>setActiveCategory('')}>Reinistialiser</button>
        </div>
        
    )
}

export default Categories