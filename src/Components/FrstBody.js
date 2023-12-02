import React from 'react'
import "./global.css"
import pic from "./feature.jpg"
import data from "./Objects1.json"
const Body1 = () => {
  return (
    <>
    { data.map((data,z)=>(
    <small>
    <div id='main' className='bg-light pb-3'>
       <div  className='ms-4 pt-3'>
        <h4>Profile</h4>
        <h6>Dashboard / Profile</h6>
        </div>
        <div id='bodys'className='d-flex b-box bg-white mx-4 mt-4 border-0 border-bottom border-light border-3 rounded shadow rounded' >
            <section className='d-flex mt-3 w-50'>
                <article className='ps-3'>
                    <img src={pic} height={120} className='rounded rounded-circle'/>
                </article>
                <article className='ms-2 pb-4'>
                    <h4>Global Technologies</h4>
                    <div className='fw-bold'>{data.Name}</div>
                    <div className='fs-6 fw-light'>{data.Role}</div>
                    <div><b>Employee ID:{data.EmpID}</b></div>
                    <button class="btn btn- mt-2 gradient-custom" type="submit">Send Message</button>
                </article>
                <div className='vr'></div>
            </section>
            <section className='d-flex float-right text mt-3 w-50 '>
                <article className='ms-5 '>
                   <h6> Phone:</h6>
                   <h6> Email:</h6>
                   <h6> B-day:</h6>
                   <h6> Address:</h6>
                   <h6> Gender:</h6>
                </article>
                
               
                    <article className='mx-auto' key={z}>
                    <h6 className='text-primary'>{data.Phone}</h6>
                <h6 className='text-primary'>{data.Email}</h6>
                <h6 className='text-secondary'>{data.Bday}</h6>
                <h6 className='text-secondary'>{data.Address}</h6>
                <h6 className='text-secondary'>{data.Gender}</h6>
                </article>
                 
            </section>
        </div>
   
    <div className='d-flex b-box bg-white mx-4 mb-3 py-3 border-0 hr border-secondary rounded d-flex justify-content-between shadow bg-white rounded'>
        <section className='ms-2 w-25 fw-bold '>Projects</section>

        <section className='w-75 text-secondary'>Tasks</section>
        

    </div>
</div>
</small>
 ))}
    </>
  )
}
export default Body1;