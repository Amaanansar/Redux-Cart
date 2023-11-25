import React from 'react'
import { useSelector } from 'react-redux'

const Navbar = () => {
  const amount = useSelector(state => state.amount)
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-body-tertiary">
        <div className="container-fluid">
            <p className="navbar-brand" >State Bank</p>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul style={{visibility:"hidden"}} className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                <p className="nav-link active" aria-current="page" >Home</p>
                </li>
            </ul>
            <button disabled={true} className="btn btn-primary">Your Balance: {amount}</button>
            </div>
        </div>
        </nav>
    </div>
  )
}

export default Navbar
