import React from 'react'
import "../components/navbar.css"
function Navbar() {
  return (
<nav class="navbar navbar-expand-lg bg-body-tertiary">
  <div class="container-fluid" >
    <a class="navbar-brand" href="#" style={{color:"white"}}>Psychtherapy</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>AboutUs</a>
        </li>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#" style={{color:"white"}}>ContactUs</a>
        </li>
        
    
      </ul>
      
    </div>
    <div>
       <button style={{display:"flex",color:"#FFA73D",border:"none",backgroundColor:"#2B2D65"}}>Login</button> 
    </div>
  </div>
</nav>  )
}

export default Navbar