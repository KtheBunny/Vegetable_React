import { useState } from 'react'
import btn_facebook from './img/btn_facebook.png'
import btn_instagram from './img/btn_instagram.png'
import img_main_pumpkin from './img/img_main_pumpkin.png'
import pepper from './img/img_vegetables_pepper.png'
import carrot from './img/img_vegetables_carrot.png'
import corn from './img/img_vegetables_corn.png'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div class="bg">

      <div class="container">

        <header class="header">
          <span class="vegetables">Vegetables</span>
          <img src={btn_facebook} class="btn_facebook"/>
          <img src={btn_instagram} class="btn_instagram"/>
          <div class="line"></div>
          <span class="btn_login">LOGIN</span>
          <span class="btn_join">JOIN</span>
        </header>

        <nav class="nav_box">
          <div>
              <span class="nav_content">Home</span>
              <span class="nav_content">About Us</span>
              <span class="nav_content">Vegetables</span>
              <span class="nav_content">Online</span>
              <span class="nav_content">Contact</span>
          </div>
        </nav>

        <main>
          <img src={img_main_pumpkin} class="img_main_pumpkin"/>

          <div class="body_box container">
            <h2 class="body_box_vegetable">Vegetable</h2>
            <h2 class="body_box_contact">Contact</h2>
          </div>

          <div class="body_box container">
            <div class="body_box_col">
              <img src={pepper}/>
              <img src={carrot} class="img_carrot"/>
              <img src={corn}/>
            </div>
            <div class="body_box_col_2">
              <p>For any questions or suggestions about Vegetables, Vegetables Club or your 
                online order you can contact Vegetables Customer Service by phone, email 
                or post and we'll be happy to help.</p>
              <hr/>
              <p>E-mail : Vegetables@aaabbccc.com<br/>
                PHONE : +886-123-456-789</p>
            </div>

          </div>
        </main>

      </div>

      <footer class="footer">
        <p class="footer_text">Copyrights 2017 Vegetables cise / Design by Vegetables</p>
      </footer>

    </div>
    </>
  )
}

export default App
