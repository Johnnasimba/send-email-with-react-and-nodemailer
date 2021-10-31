import e from 'cors';
import React, { Component } from 'react';

class Form extends Component{
    state = {
        name: '',
        lastname: '',
        email: '',
        message: '',
        sent: false
    }

    // handle input
    handleName =(e)=> {
        this.setState({
            name: e.target.value
        })
    }
    handleLastname =(e)=> {
        this.setState({
            lastname: e.target.value
        })
    }
    handleEmail =(e)=> {
        this.setState({
            mail: e.target.value
        })
    }
    handleMessage =(e)=> {
        this.setState({
            message: e.target.value
        })
    }
    handleSent =()=> {
        this.setState({
            sent: !this.state.sent
        })
    }
    
    // end of handle input




    render() {


        return (
            <div className="container">
                <form>
                    {/* single item */}
                    <div className="singleItem">
                        <label  htmlFor="name">Name</label>
                        <input type="text" 
                        name="name" 
                        className="name" 
                        placeholder="Enter your name" 
                        value={this.state.name}
                        onChange={this.handleName}
                        />
                    </div>
                    {/* end of single item */}
                    {/* single item */}
                    <div className="singleItem">
                        <label  htmlFor="lastname">lastname</label>
                        <input type="text" 
                        name="lastname"
                         className="lastname"
                          placeholder="Enter your lastname"
                          value={this.state.lastname}
                          onChange={this.handleLastname}
                           />
                    </div>
                    {/* end of single item */}
                    {/* single item */}
                    <div className="singleItem">
                        <label  htmlFor="email">email</label>
                        <input type="text"
                        name="email" 
                        className="mail" 
                        placeholder="email" 
                        value={this.state.email}
                        onChange={this.handleEmail}
                        />
                    </div>
                    {/* end of single item */}
                    {/* single item */}
                    <div className="textarea singleItem">
                        <label  htmlFor="message">  Message</label>
                        <textarea 
                        name="message" 
                        id="" cols="30" rows="5" 
                        placeholder="Your message"
                        value={this.state.message}
                        onChange={this.handleMessage}
                        
                        >

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