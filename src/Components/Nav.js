import { React } from 'react';
import "./global.css"
import noti from "./icons8-notification-50.png"
import msg from "./icons8-speech-bubble-50.png"
import navLogo from "./Navbar_Logo.png" 
import ham from "./icons8-menu-24.png"
import pic from "./feature.jpg"
import search from "./search4.png"





const Nav=()=>{
    return(
        <>
                <navbars className ='py-0 d-flex navbar bg-danger navbar-expand-lg navbar-light gradient-custom'>
            <section className=' ms-3 d-flex'>
                    <img src={navLogo} alt='logo' id='logo' height={25}/>

                <img className= 'ms-2' src={ham}  id='hide' alt='ham' height={25}/>
             
                <h5 id='hide' className= 'ms-2 text-white'>Dreams Technologies</h5>
            </section>
            <search className= ' search ms-auto'>
                            <nav  className="navbar">
                <div className="container-fluid opacity-25 ">
                
                <div className="input-group" >
  <div className="input-group-prepend">
  </div>
  <div className=' search container bg-light  rounded-pill d-flex'>
  <input type="text" class="text-white border-0 py-1" placeholder="Search here" aria-label="Username" />
<img src={search} alt='search' className='pt-2' height={25}/>

  </div>
</div>

                </div>
                </nav>
            </search>
            <article>
                <div  id='hide' className="btn-group">
                <button type="button" className="btn  dropdown-toggle btn-transparent text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Kannada</a></li>
                    <li><a className="dropdown-item" href="#">Telugu</a></li>
                    <li><a className="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </article>
            <img src={noti} alt='noti' id='hide' height={25}/>
            <img src={msg} className="ps-2" id='hide' alt='msg' height={25}/>
            <img src={pic} height={25} id='hide' alt='logo' className=' ms-2 rounded-circle '/>
            <article>
            <div className="btn-group" id='button'>
                <button type="button"  className="btn  dropdown-toggle btn-transparent ps-1 text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    Admin
                </button>
                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Logout</a></li>
                    <li><a className="dropdown-item" href="#">Details</a></li>
                </ul>
                </div>
            </article>
        </navbars>

       
        </>

    )
}
export default Nav;