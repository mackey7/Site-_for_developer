import React from 'react';
import './Contact.scss'
import logo from "../../images/company_logo.png";
const Contact = () => {
    return (
        <section className="contact">
            <div className="contact_container">

                <div className="contact_container--about">
                    <h2><i class="far fa-envelope"></i> KONTAKT</h2>
                    <img src={logo} alt="logo" />
                    <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Et libero dicta autem illum similique sequi expedita consectetur tenetur maiores, perspiciatis praesentium nobis, earum molestiae nulla architecto, quasi quidem ex? Nesciunt minima cumque, sunt eaque a voluptas officia soluta, amet at tempora doloremque nemo debitis! Voluptatibus quos at, cupiditate nostrum veritatis veniam accusamus distinctio, reprehenderit facilis tempora nemo repudiandae corporis facere.</p>
                </div>

                <div className="contact_container--contact">
                    <p>Lorem Ipsum Sp.z o.o.</p>
                    <p>32-020 Kraków, Floriańska 1/1</p>
                    <p>
                        +48 777 77 77
                   </p>
                    <p>kontakt@kontakt.com.pl</p>
                    <p>KRS: 000002222333</p>
                    <p>nipm: 975-2222-22-22</p>
                </div>

                <form className="contact_container--form" action="">
                    <label htmlFor=""></label>
                    <input type="text" placeholder="Imię i nazwisko" />
                    <label htmlFor=""></label>
                    <input type="text" placeholder="e-mail" />
                    <textarea name="" id="" cols="30" rows="10" placeholder="treść wiadomości"></textarea>
                    <div className="contact_form-veryficate">
                        <input type="text" value="AXK^%CH" />
                        <input type="text" placeholder="przepisz" />
                    </div>
                    <input type="button" value="Wysłanie formularza" />
                </form>

            </div>

        </section >
    )
}
export default Contact;