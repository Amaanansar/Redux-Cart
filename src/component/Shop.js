import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { bindActionCreators } from 'redux'
import { actionCreators } from '../state/index'


const Shop = () => {
  const dispatch = useDispatch()
  const amount = useSelector(state => state.amount)
  const {withdrawMoney, depositMoney} = bindActionCreators(actionCreators,dispatch)
  const withdraw = () =>{
    if (amount === 0 ){
      alert("Amount can't go in Negative!")
    } else {
      withdrawMoney(100)
    }
  }

    return (
    <div>
      <div className="container my-5">
        <h3 className="card-text">Deposit/Withdraw Money.</h3>
          <button className="btn btn-outline-danger btn-sm mx-2" onClick={withdraw}>-</button>Update Balance<button className="btn btn-outline-danger btn-sm mx-2" onClick={() => {depositMoney(100)}}>+</button>
      </div>
    </div>
  )
}

export default Shop
