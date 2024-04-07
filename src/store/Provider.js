import React from 'react'
import { useReducer } from 'react'
import CartContext from './Context'
import reducer from './reducer'
import { initState } from './reducer'

export function CartProvider({children}) {

    const [state, dispatch] = useReducer(reducer, initState)

  return (
    <div>
      <CartContext.Provider value={{state, dispatch}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}


