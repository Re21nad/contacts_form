import './FontText.css';
export default function FontText() {
    return (
        <>

            <div className="container"> 
                <h1>Contact Us</h1> 
                <div className="name">
                    <div className='first'>
                        <label htmlFor="textInput">First Name *</label>
                        <input type="text" id="textInput" />
                    </div>
                    <div className='last'>
                        <label htmlFor="textInput">Last Name *</label>
                        <input type="text" id="textInput" />
                    </div>
                </div>
                <div className="Email">
                    <label htmlFor="textInput">Email Address *</label>
                    <input type="email" id="textInput" />
                </div>
                <div className="type">
                    <label>Query Type *</label>
                    <div className='Ratio'>
                        <div className='General'>
                            <input type="radio" id="general" name="enquiryType" value="general" className='ratio-input' />
                            <label htmlFor="general">General Enquiry</label>
                        </div>
                        <div className='Support'>
                            <input type="radio" id="support" name="enquiryType" value="support" className='ratio-input' />
                            <label htmlFor="support">Support Request</label>
                        </div>
                    </div>
                </div>
                <div className="message">
                    <label htmlFor="messageInput">Message *</label>
                    <textarea id="messageInput" rows="4" className="message-input"></textarea>
                </div>
                <div className="check">
                    <label htmlFor="textInput">I consent to being contacted by the team.</label>
                    <input type="checkbox" id="textInput" />
                </div>

                <button className='submit'>Submit</button>
            </div>
        </>
    );
}
