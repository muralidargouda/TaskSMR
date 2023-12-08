import React from 'react'
import pic from "./feature.jpg"
import pic1 from "./pic1.jpg"
import dot from "./dots.png"
import pic2 from "./dwd.jpg"
import pic3 from "./fire.jpg"
import "./global.css"

import ProgressBar from 'react-bootstrap/ProgressBar';


const Cards = () => {
  return (
    <>
    <small>
    <div id='cards' className='bg-light '>
    <section id='cards' className='d-flex justify-content-between '>
  
        <div class="card w-25 mx-4 col-lg">
  <div class="card-body pt-2">
    <section className='d-flex '>
    <h5 class="card-title"><small>Office Management<small/></small></h5>
    <img className='ms-auto' height={20} alt='dot' src={dot}/>
    </section>
    <h6 class="">1<small className='text-secondary'> open task</small>, 9<small className='text-secondary'> tasks completed</small></h6>
    <p class="text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div><b>Deadline:</b></div>
    <div className='mb-2 text-secondary'>17th Apr 2023</div>
    <div><small><b>Project Leader:</b></small></div>
    <img src={pic} height={25} alt='pic' className='mb-2 rounded-circle'/>
    <div><b>Team:</b></div>
    <div className='mb-4'>
    <img src={pic} height={25} alt='pic' className='z-0 position-absolute ms-1 rounded-circle'/>
    <img src={pic1} height={25} alt='pic1'  className='z-7 position-absolute ms-3 rounded-circle'/>
    <img src={pic2} height={25} alt='pic2' className=' z-6 position-absolute ms-4 rounded-circle'/>
    <img src={pic3} height={25} alt='pic3'  className='z-1 position-absolute  ms-4 ps-2 rounded-circle'/>
    </div>
   
<div className='d-flex justify-content-between'>
  <section><b><small>Progress:</small></b></section>
   <section className='text-success fw-bold'>40%</section>
   </div>
      <ProgressBar now={ 40}  />
       </div>
    </div>

    <div class="card w-25 col-lg">
  <div class="card-body pt-2">
  <section className='d-flex '>
    <h5 class="card-title"><small>Project Management<small/></small></h5>
    <img className='ms-auto' height={20} alt='dot' src={dot}/>
    </section>    <h6 class="">2<small className='text-secondary'> open task</small>, 5<small className='text-secondary'> tasks completed</small></h6>
    <p class="text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div><b>Deadline:</b></div>
    <div className='text-secondary mb-2'>17th Apr 2023</div>
    <div><small><b>Project Leader:</b></small></div>
    <img src={pic} height={25} alt='pic' className=' mb-2 rounded-circle'/>
    <div><b>Team:</b></div>
    <div className='mb-4'>
    <img src={pic} height={25} alt='pic' className='z-0 position-absolute ms-1 rounded-circle'/>
    <img src={pic1} height={25} alt='pic1'  className='z-7 position-absolute ms-3 rounded-circle'/>
    <img src={pic2} height={25} alt='pic2' className=' z-6 position-absolute ms-4 rounded-circle'/>
    <img src={pic3} height={25} alt='pic3'  className='z-1 position-absolute  ms-4 ps-2 rounded-circle'/>
    </div>
    
<div className='d-flex justify-content-between'>
  <section><b><small>Progress:</small></b></section>
   <section className='text-success fw-bold'>40%</section>
   </div>
      <ProgressBar now={40}  />
       </div>
    </div>

    <div class="card w-25 mx-4 col-lg">
  <div class="card-body pt-2">
  <section className='d-flex ' id='cardb'>
    <h5 class="card-title"><small>Video Calling App<small/></small></h5>
    <img className='ms-auto' height={20} alt='dot' src={dot}/>
    </section>    <h6 class="">3<small className='text-secondary'> open task</small>, 3<small className='text-secondary'> tasks completed</small></h6>
    <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
    <div><b>Deadline:</b></div>
    <div className='text-secondary mb-2'>17th Apr 2023</div>
    <div><small><b>Project Leader:</b></small></div>
    <img src={pic} height={25} alt='pic' className='mb-2 rounded-circle'/>
    <div><b>Team:</b></div>
    <div className='mb-4'>
    <img src={pic} height={25} alt='pic' className='z-0 position-absolute ms-1 rounded-circle'/>
    <img src={pic1} height={25} alt='pic1'  className='z-7 position-absolute ms-3 rounded-circle'/>
    <img src={pic2} height={25} alt='pic2' className=' z-6 position-absolute ms-4 rounded-circle'/>
    <img src={pic3} height={25} alt='pic3'  className='z-1 position-absolute  ms-4 ps-2 rounded-circle'/>
    </div>
    
<div className='d-flex justify-content-between'>
  <section><b><small>Progress:</small></b></section>
   <section className='text-success fw-bold'>40%</section>
   </div>
      <ProgressBar now={40}  />
       </div>
    </div>

    <div class="card w-25 me-4 ">
  <div class="card-body pt-2">
 
  <section className='d-flex '>
    <h5 class="card-title"><small>Hospital Administration<small/></small></h5>
    <img className='ms-auto' height={20} alt='dot' src={dot}/>
    </section>    <h6 class="">12<small className='text-secondary'> open task</small>, 4<small className='text-secondary'> tasks completed</small></h6>
    <p class="card-text text-secondary">Some quick example text to build on the card title and make up the bulk of the card content.</p>
   <div><b>Deadline:</b></div>
    <div className='text-secondary mb-2'>17th Apr 2023</div>
    <div><small><b>Project Leader:</b></small></div>
    <img src={pic} height={25} alt='pic' className='mb-2 rounded-circle'/>
    <div><b>Team:</b></div>
    <div className='mb-4'>
    <img src={pic} height={25} alt='pic' className='z-0 position-absolute ms-1 rounded-circle'/>
    <img src={pic1} height={25} alt='pic1'  className='z-7 position-absolute ms-3 rounded-circle'/>
    <img src={pic2} height={25} alt='pic2' className=' z-6 position-absolute ms-4 rounded-circle'/>
    <img src={pic3} height={25} alt='pic3'  className='z-1 position-absolute  ms-4 ps-2 rounded-circle'/>
    </div>
    
<div className='d-flex justify-content-between'>
  <section><b><small>Progress:</small></b></section>
   <section className='text-success fw-bold'>40%</section>
   </div>
      <ProgressBar now={40}  />
       </div>
    </div>
    </section>
    </div>
    </small>
    </>
  )
}

export default Cards;