import React from 'react'
import pic from "./feature.jpg"
import pic1 from "./pic1.jpg"
import dot from "./dots.png"
import pic2 from "./dwd.jpg"
import pic3 from "./fire.jpg"

const Cards = () => {
  return (
    <>
    <small>
    <div className='bg-light '>
    <section className='d-flex justify-content-between '>
  
        <div class="card w-25 mx-4 ">
  <div class="card-body">
    <section className='d-flex '>
    <h5 class="card-title"><small>Office Management<small/></small></h5>
    <img className='ms-auto' height={20} src={dot}/>
    </section>
    <h6 class="">1<small className='text-secondary'> open task</small>, 9<small className='text-secondary'> tasks completed</small></h6>
    <p class="text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div>Deadline:</div>
    <div className='mb-2 text-secondary'>17th Apr 2023</div>
    <div><small>Project Leader:</small></div>
    <img src={pic} height={25} className='mb-2 rounded-circle'/>
    <div>Team:</div>
    <img src={pic} height={25} className='rounded-circle'/>
    <img src={pic1} height={25} className='rounded-circle'/>
    <img src={pic2} height={25} className='rounded-circle'/>
    <img src={pic3} height={25} className='rounded-circle'/>


       </div>
    </div>

    <div class="card w-25">
  <div class="card-body">
  <section className='d-flex '>
    <h5 class="card-title"><small>Project Management<small/></small></h5>
    <img className='ms-auto' height={20} src={dot}/>
    </section>    <h6 class="">2<small className='text-secondary'> open task</small>, 5<small className='text-secondary'> tasks completed</small></h6>
    <p class="text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div>Deadline:</div>
    <div className='text-secondary mb-2'>17th Apr 2023</div>
    <div><small>Project Leader:</small></div>
    <img src={pic} height={25} className=' mb-2 rounded-circle'/>
    <div>Team:</div>
    <img src={pic} height={25} className='rounded-circle'/>
    <img src={pic1} height={25} className='rounded-circle'/>
    <img src={pic2} height={25} className='rounded-circle'/>
    <img src={pic3} height={25} className='rounded-circle'/>


       </div>
    </div>

    <div class="card w-25 mx-4">
  <div class="card-body">
  <section className='d-flex '>
    <h5 class="card-title"><small>Video Calling App<small/></small></h5>
    <img className='ms-auto' height={20} src={dot}/>
    </section>    <h6 class="">3<small className='text-secondary'> open task</small>, 3<small className='text-secondary'> tasks completed</small></h6>
    <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div>Deadline:</div>
    <div className='text-secondary mb-2'>17th Apr 2023</div>
    <div><small>Project Leader:</small></div>
    <img src={pic} height={25} className='mb-2 rounded-circle'/>
    <div>Team:</div>
    <img src={pic} height={25} className='rounded-circle'/>
    <img src={pic1} height={25} className='rounded-circle'/>
    <img src={pic2} height={25} className='rounded-circle'/>
    <img src={pic3} height={25} className='rounded-circle'/>

       </div>
    </div>

    <div class="card w-25 me-4 he">
  <div class="card-body pt-3">
 
  <section className='d-flex '>
    <h5 class="card-title"><small>Hospital Administration<small/></small></h5>
    <img className='ms-auto' height={20} src={dot}/>
    </section>    <h6 class="">12<small className='text-secondary'> open task</small>, 4<small className='text-secondary'> tasks completed</small></h6>
    <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div>Deadline:</div>
    <div className='text-secondary'>17th Apr 2023</div><br></br>
    <div><small>Project Leader:</small></div>
    <img src={pic} height={25} className=' mb-2 rounded-circle'/>
    <div>Team:</div>
    <img src={pic} height={25} className='rounded-circle'/>
    <img src={pic1} height={25} className='rounded-circle'/>
    <img src={pic2} height={25} className='rounded-circle'/>
    <img src={pic3} height={25} className='rounded-circle'/>


       </div>
    </div>
    
    </section>
    </div>
    </small>
    </>
  )
}

export default Cards;