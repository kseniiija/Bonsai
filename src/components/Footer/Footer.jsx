import React from 'react'
import "./Footer.css"

function Footer() {

    return (

        <div className="Footer">
            <div className="map">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d462560.3011806427!2d54.947543798608436!3d25.076381472700536!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f43496ad9c645%3A0xbde66e5084295162!2sDubai%20-%20United%20Arab%20Emirates!5e0!3m2!1sen!2srs!4v1638116929216!5m2!1sen!2srs" width="100%" height="1000" style={{ border: 0 }} allowFullScreen={true} loading="lazy"></iframe>
            </div>
            <div className="information">
                <h1>Get in touch</h1>
                <br />
                <br />
                <br />
                <p>We are here to help you</p>
                <br />
                <br />
                <p> Contact us via Phone :  <strong>(+97) 150 997 78 07</strong></p>
            </div>
        </div>
    )
}


export default Footer
