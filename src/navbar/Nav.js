import { Dropdown } from 'bootstrap';
import { React } from 'react';




const Nav=()=>{
    return(
        <navbar className ='d-flex navbar bg-danger'>
            <section className=' ms-3 d-flex'>
                <logo>
                    <img src='' alt='logo'/>
                </logo>
                <ham className= 'ms-2'>
                ***
                </ham>
                <h4 className= 'ms-2'>Dreams Technologies</h4>
            </section>
            <search className= 'ms-auto'>
                            <nav class="navbar ">
                <div class="container-fluid opacity-50">
                    <form class="d-flex" role="search">
                    <input class="form-control me-2 rounded-pill" type="search" placeholder="Search here" aria-label="Search"/>
                    </form>
                </div>
                </nav>
            </search>
            <article>
                <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    English
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </article>
            <noti><img src="src\navbar\icons8-notification-50.png"/></noti>
            <msg><img src="src\navbar\icons8-message-50.png"/></msg>
            <acc><img src="../feature.jpg" alt='logo'/></acc>
            <article>
            <div class="btn-group">
                <button type="button" class="btn btn-danger dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
                    Action
                </button>
                <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="#">Action</a></li>
                    <li><a class="dropdown-item" href="#">Another action</a></li>
                    <li><a class="dropdown-item" href="#">Something else here</a></li>
                </ul>
                </div>
            </article>
        </navbar>
    )
}
export default Nav;