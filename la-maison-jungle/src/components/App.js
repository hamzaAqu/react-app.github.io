import ShoppingList from './ShoppingList'
import Banner from './Banner'
import Footer from './Footer'
import Cart from './Cart'
import { useState} from 'react'

function App() {

  //j'initialise un state de carte qui fera le lien entre Cart et ShoppingList
  //mon state est un tableu qui va contenir des objets plantes(certains attributs)
  const [cart,updateCart]=useState([])
  return( 
  <div>
         <Banner />
         <div>
            <Cart cart={cart} updateCart={updateCart} />
            <ShoppingList cart={cart} updateCart={updateCart} />

         </div>
         
         <Footer />
         
  </div>)
}

export default App
