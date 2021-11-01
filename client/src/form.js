import React, { Component } from 'react';
import axios from 'axios';

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
  
    
    // end of handle input

formSubmit = (e) => {
    e.preventDefault();
    let data = {
        name: this.state.name,
        lastname: this.state.lastname,
        email: this.state.email,
        message: this.state.message
    }
    axios.post('api/form', data) 
        .then(res=>{
            this.state({
                sent: true,
            }, this.resetForm())
            
        }).catch(()=>{
            console.log("message not sent");
        })
    
}

// reset initial form data
resetForm=()=> {
    this.setState({
        name: '',
        lastname: '',
        email: '',
        message: ''
    })
    setTimeout(()=>{
        this.setState({
            sent: false,
        }, 3000)
    })
}

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
                    <div className={this.state.sent ? 'msg msgAppear':'msg'}>Your message has been sent</div>
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