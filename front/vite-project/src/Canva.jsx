import React from 'react'
import './Canva.css'


function canva() {


  return (

    <>

      {/* ////////////header part///////// */}


      <div className='main'>

        <img src="https://static.canva.com/web/images/12487a1e0770d29351bd4ce4f87ec8fe.svg" alt="" />


        <div className='header'>

          <div className='list'>
            <select name="dropdown" id="list1">
              <option value="">Design Spotlight</option>
              <option value="">list1</option>
              <option value="">list2</option>
              <option value="">list3</option>

            </select>
          </div>


          <div className='list'>
            <select name="dropdown" id="list1">
              <option value="">Business</option>
              <option value="">list1</option>
              <option value="">list2</option>
              <option value="">list3</option>
            </select>
          </div>

          <div className='list'>
            <select name="dropdown" id="list1">
              <option value="">Eduction</option>
              <option value="">list1</option>
              <option value="">list2</option>
              <option value="">list3</option>
            </select>
          </div>







        </div>



        <div className='search'>
          <img src="./image/zoom.svg" alt="" />
          <input type="search" placeholder='Use 5+ words to describe' />
        </div>


        <div className='image'>
          <img src="./image/monitor.svg" alt="" />
          <img src="./image/settings.svg" alt="" />
          <img src="./image/bell.svg" alt="" />
        </div>

        <div className='create_a_design'>
          <button className='btn'>Create a design</button>
          <button className='btn1'>HJ</button>
        </div>


      </div>



      {/* /////////left part/////// */}



      <div className='left'>

        <div className='fsl'>
          <h3>FC</h3>
        </div>


        <div className='fslcreativity'>
          <h4>FSL Creativity</h4>
          <h5>Free .</h5>
          <img src="./image/user.svg" alt="" />
          <h6>1</h6>
        </div>

      </div>


<div></div>



      {/* ///////// right part////// */}





      <div className='right'>

<div className="right-button">
<div className='magic'>
          <h3>Meet Magic Studio</h3>
        </div>

        <div className='custom'>
          <button>Custom size</button>
          <button>Upload</button>
        </div>
</div>
        

      




      

        <div className='searchbar'>

          <input type="search1" placeholder='Use 5+ words to describe' />
        </div>

        <div className='icon'>
        <div className='iconimage'>
          <ul>
            <li> <img src="./image/stars.svg" alt="" />
            <h4>For you</h4></li>

            <li><img src="./image/docs.svg" alt="" />
            <h4>Docs</h4></li>

            <li><img src="./image/whiteboards.svg" alt="" />
            <h4>whiteboards</h4></li>

            <li><img src="./image/presentations.svg" alt="" />
            <h4>presentations</h4></li>

            <li><img src="./image/social media.svg" alt="" />
            <h4>social media</h4></li>

            <li><img src="./image/videos.svg" alt="" />
            <h4>videos</h4></li>

            <li> <img src="./image/print products.svg" alt="" />
            <h4>print products</h4></li>

            <li><img src="./image/websites.svg" alt="" />
            <h4>websites</h4></li>

            <li><img src="./image/dots.svg" alt="" />
            <h4>More</h4></li>


          </ul>
        </div>



      </div>
      </div>


    </>
  )
}

export default canva