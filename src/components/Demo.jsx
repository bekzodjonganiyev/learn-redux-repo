import React, { useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'

import { requestProducts, successProducts } from '../store/actions/products'
import { requestUsers, successUsers } from '../store/actions/users'
import store from '../store'

const Demo = () => {
  const getState = (state) => state
  const {users, products} = useSelector(getState)

  const dispatch = useDispatch()

  const fetchUsers = () =>{
    dispatch(requestUsers())

    setTimeout(() => {
      // dispatch(successUsers({
      //   id: Math.floor(Math.random() * 100),
      //   email: `${Math.random().toString().substring(7)}@gmail.com`
      // }))
      store.dispatch(
        successUsers({
          id: Math.floor(Math.random() * 100),
          email: `${Math.random().toString().substring(7)}@gmail.com`
        })
      )
    }, 2000)

    console.log(store)
  }
  const fetchProducts = () =>{
    dispatch(requestProducts())

    setTimeout(() => {
      dispatch(successProducts({
        id: Math.floor(Math.random() * 100),
        email: `Product - ${Math.random().toString().substring(7)}`
      }))
    }, 2000)
  }

  return (
    <div>
      <button onClick={fetchUsers}>Fetch users</button>
      <button onClick={fetchProducts}>Fetch products</button>
      <h2>Users | {users.isLoading && "Loading"}</h2>
      <pre>
        {
          JSON.stringify(users.list, null, 4)
        }
      </pre>
      <h2>Products | {products.isLoading && "Loading"}</h2>
      <pre>
        {
          JSON.stringify(products.list, null, 4)
        }
      </pre>
    </div>
  )
}

export default Demo