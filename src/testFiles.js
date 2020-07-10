import React, { Component } from "react"
import "98.css";
import pomoScreenshot from './static/pomoScreenshot.png';

class testFiles extends Component {
    render() {
        return ( 
            <div>
                <h1 className="title">Projects</h1>

                <div className="window">
                    <div class="title-bar">
                        <div className="title-bar-text">Pomodoro Timer</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body">
                        <img src={pomoScreenshot} alt="pomodoroProject" />
                        <button className="testingbutton">View Project</button>
                    </div>
                </div>

                 <div className="window">
                    <div class="title-bar">
                        <div className="title-bar-text">Pomodoro Timer Project Details</div>
                        <div className="title-bar-controls">
                            <button aria-label="Minimize"></button>
                            <button aria-label="Maximize"></button>
                            <button aria-label="Close"></button>
                        </div>
                    </div>
                    <div className="window-body">
                        <img src={pomoScreenshot} alt="pomodoroProject" />
                        <p className="testText">This would be the area that I would talk about the project. <br />
                            I would give some links to the code, maybe a youtube link, etc <br />
                            This would be a popup from the project that preview that was selected
                        </p>
                        <button className="back">Go Back</button>
                        <button className="testingbutton">Go to Website</button>
                    </div>
                </div> 
            </div>
        );
    }
}
export default testFiles;