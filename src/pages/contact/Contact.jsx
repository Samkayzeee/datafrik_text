import './Contact.css';

const Contact = () => {
    return ( 
        <>
            <div className="contact mb-60">
                <h2 className='my-4'>Contact</h2>

                <div className="form-div flex justify-center">
                <form action="">
                    <h5 className='my-4'>Fill out this form to reach us.</h5>
                    <ul>
                        <li className='half'>
                            <input type="text" name="FirstName" id="FirstName" placeholder='First name' required />
                            <input type="text" name="LastName" id="LastName" placeholder='Last name' required />
                        </li>

                        <li>
                            <input  type="email" name="email" id="email" placeholder='Email' required/>
                        </li>

                        <li>
                            <input type="text" name="subject" id="subject" placeholder='Phone (optional)' required />
                        </li>

                        <li>
                            <textarea name="message" id="message" cols="30" rows="6" placeholder='Message' ></textarea>
                        </li>
                    </ul>

                    <button type='submit' className='py-2 px-20'>Send</button>
                </form>
                </div>
            </div>
        </>
     );
}
 
export default Contact;