import { useContext } from 'react'
import { Context } from '../context'

const useCart = () => {
  const context = useContext(Context)
  const dispatch = context.dispatch
  const cart = context.cart

  return {
    ...cart,
    dispatch
  }
}

export default useCart