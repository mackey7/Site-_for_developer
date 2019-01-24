import React from 'react';
import './Contact.scss'
import logo from "../../images/company_logo.png";
const Contact = () => {
    return (
        <section className="contact">
            <div className="contact_container">
                <div className="contact_company">
                    <div className="contact_company-about">
                        <h2><i class="far fa-envelope"></i> KONTAKT</h2>
                        <img src={logo} alt="logo" />
                        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et libero dicta autem illum similique sequi expedita consectetur tenetur maiores, perspiciatis praesentium nobis, earum molestiae nulla architecto, quasi quidem ex? Nesciunt minima cumque, sunt eaque a voluptas officia soluta, amet at tempora doloremque nemo debitis! Voluptatibus quos at, cupiditate nostrum veritatis veniam accusamus distinctio, reprehenderit facilis tempora nemo repudiandae corporis facere.</p>
                    </div>
                    <div className="contact_company-contact">
                        <p>Lorem Ipsum Sp.z o.o.</p>
                        <p>32-020 Kraków, Floriańska 1/1</p>
                        <p>
                            +48 777 77 77
                   </p>
                        <p>kontakt@kontakt.com.pl</p>
                        <p>KRS: 000002222333</p>
                        <p>nipm: 975-2222-22-22</p>
                    </div>
                </div>
                <div>
                    <form className="contact_form" action="">
                        <label htmlFor=""></label>
                        <input type="text" />
                        <label htmlFor=""></label>
                        <input type="text" />
                        <textarea name="" id="" cols="30" rows="10"></textarea>
                        <div className="contact_form-veryficate">
                            <input type="text" />
                            <input type="text" />
                        </div>
                        <input type="button" value="Wysłanie formularza" />
                    </form>
                </div>
            </div>
        </section>
    )
}
export default Contact;