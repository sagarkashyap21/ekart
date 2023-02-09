import React from 'react'
import "../styles/footer.css";

export default function Footer() {
    return (
        <div className="container" >
            <div className="div1" data-aos="flip-left">
                <div className="first" >
                    
                    <img id="img1" src="https://ekartlogistics.com/assets/images/ekWhiteLogo.png" alt="" />
                    <ul className="ul1">
                        <li><img src="https://www.mmppicture.co.in/wp-content/uploads/2021/03/Facebook-Icon-PNG-36.png" alt="" /></li>
                        <li><img src="https://i.pinimg.com/originals/21/d6/7f/21d67f1d6b3be5bb2e39395311c77fc6.jpg" alt="" /></li>
                        <li><img id="twitter"  src="https://icon-library.com/images/twitter-icon-black-background/twitter-icon-black-background-17.jpg" alt="" /></li>
                    </ul>
                </div>
                <div  data-aos="flip-right" style={{ display: "flex", justifyContent: "space-evenly", marginTop: "50px", width: "40%" }}>
                    <ul style={{ listStyle: "none", textAlign: "center" }}>
                        <h3 style={{ marginBottom: "10px", color: "skyblue" }}>ABOUT</h3>
                        <li>Our Story</li>
                        <li>Benefits</li>
                        <li>Team</li>
                        <li>Carrers</li>
                    </ul>
                    <ul style={{ listStyle: "none", textAlign: "center" }}>
                        <h3 style={{ marginBottom: "10px", color: "skyblue" }}>LEGAL</h3>
                        <li>Terms & coditions</li>
                        <li>Privacy Policy</li>
                        <li>Terms of use</li>
                    </ul>

                </div>
            </div>
            <p id="copyright" style={{ display: "flex", justifyContent: "center" }}>@Copyright 1999-2023 by Refsnes Data. All Rights Reserved.</p>
        </div>
    )
}
