import { useState, useEffect} from 'react'
import '../styles/Cart.css'

function Cart({cart,updateCart}) {
const	total=cart.reduce((acc,plant)=>acc+plant.amount*plant.price,0)
//const [cart, updateCart] = useState(0)

	const [isOpen, setIsOpen] = useState(true)
	useEffect(()=>{if(total>0){document.title=`lmj: ${total} d'achats` } },[total])

	function deleteCart(name){
		const deletedPlant =cart.filter((plant)=> plant.name!==name)
		updateCart([...deletedPlant])
	}
	return isOpen ? (
		<div className='lmj-cart'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(false)}
			>
				Fermer
			</button>
			<h2>Panier</h2>
			{
				cart.map(({name,price,amount},index)=>
				<div key={index}>
					{name} {price}*{amount} 
					<button onClick={() =>deleteCart(name)}>delete</button>
				</div>
				)
			}
			<h3>total: {total}</h3>
			<button onClick={() => updateCart([])}>Vider le panier</button>
		</div>
	) : (
		<div className='lmj-cart-closed'>
			<button
				className='lmj-cart-toggle-button'
				onClick={() => setIsOpen(true)}
			>
				Ouvrir le Panier
			</button>
		</div>
	)
}

export default Cart