import React, { Component } from 'react';

class Form extends Component{
    render() {
        return (
            <div className="container">
                <form>
                    {/* single item */}
                    <div className="singleItem">
                        <label  htmlFor="name">Name</label>
                        <input type="text" name="name" className="name" placeholder="Enter your name" />
                    </div>
                    {/* end of single item */}
                    {/* single item */}
                    <div className="singleItem">
                        <label  htmlFor="lastname">lastname</label>
                        <input type="text" name="lastname" className="lastname" placeholder="Enter your lastname" />
                    </div>
                    {/* end of single item */}
                    {/* single item */}
                    <div className="singleItem">
                        <label  htmlFor="email">email</label>
                        <input type="text" name="email" className="mail" placeholder="email" />
                    </div>
                    {/* end of single item */}
                    {/* single item */}
                    <div className="textarea singleItem">
                        <label  htmlFor="message">  Message</label>
                        <textarea name="message" id="" cols="30" rows="5" placeholder="Your message">

                        </textarea>
                    </div>
                    <div class="msg">Your message has been sent</div>
                    {/* end of single item */}
                    <div className="btn">
                        <button type="submit">Submit</button>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Form;