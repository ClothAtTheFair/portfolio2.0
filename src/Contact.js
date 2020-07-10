import React, { Component } from "react"
import "98.css";
import clippy from 'clippyjs'

clippy.load('clippy', (agent) => {
    agent.show();
});

class Contact extends Component {
    render() {
     
        return ( 
            <div>
                <div className="window">
                    <div class="title-bar">
                        <div className="title-bar-text">Contact Form</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body">
                        <h4>Send an Email</h4>
                        <div className = "field-row-stacked">
                            <label for="name">Name</label>
                            <input id="name" type="text"/>
                        </div>
                        <div className="field-row-stacked">
                            <label for="email">Email</label>
                            <input id="email" type="text"/>
                        </div>

                        <div className="field-row-stacked">
                            <label for="message">Message</label>
                            <textarea id="message" rows="8"></textarea>
                        </div>
                        <button>Reset</button>
                        <button>Submit</button>
                    </div>
                </div>
            </div>
            
        );
    }
}
export default Contact;