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
                <navbar className ='py-0 d-flex navbar bg-danger navbar-expand-lg navbar-light gradient-custom'>
            <section className=' ms-3 d-flex'>
                <logo>
                    <img src={navLogo} alt='logo' height={25}/>
                </logo>
                <ham className= 'ms-2'>
                <img src={ham} height={25}/>
                </ham>
                <h5 className= 'ms-2 text-white'>Dreams Technologies</h5>
            </section>
            <search className= 'ms-auto'>
                            <nav class="navbar ">
                <div class="container-fluid opacity-25 ">
                
                <div class="input-group ">
  <div class="input-group-prepend">
  </div>
  <div className='container bg-light  rounded-pill d-flex'>
  <input type="text" class="text-white border-0 py-1" placeholder="Search here" aria-label="Username" />
<img src={search} className='pt-2' height={25}/>

  </div>
</div>







                </div>
                </nav>
            </search>
            <article>
                <div class="btn-group">
                <button type="button" class="btn  dropdown-toggle btn-transparent text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Kannada</a></li>
                    <li><a class="dropdown-item" href="#">Telugu</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </article>
            <noti><img src={noti} height={25}/></noti>
            <msg className="ps-2"><img src={msg} height={25}/></msg>
            <acc><img src={pic} height={25} alt='logo' className=' ms-2 rounded-circle '/></acc>
            <article>
            <div class="btn-group">
                <button type="button" class="btn  dropdown-toggle btn-transparent ps-1 text-white" data-bs-toggle="dropdown" aria-expanded="false">
                    Admin
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Logout</a></li>
                    <li><a class="dropdown-item" href="#">Details</a></li>
                </ul>
                </div>
            </article>
        </navbar>

       
        </>

    )
}
export default Nav;