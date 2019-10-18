import React from 'react';
import Navigation from './Navigation';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import './App.css';

class App extends React.Component {
    render() {
        return (
            <Router>
                <div>
                    <Navigation />
                    <div class="fluid-container ml-5 mr-5">
                        <div id="first-screen" class="row align-items-center">
                            <div class="col-md-6">
                                <div class="row display-1">infO(1) Robotics</div>
                                <h4 class="row">Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur. Lorem ipsum dolor sit amet consectetur.</h4>
                            </div>

                            <div className="col-md-6">
                                <img src="https://dummyimage.com/1080x1080/000/fff" alt="" height="100%" width="100%"/>
                            </div>
                        </div>

                    </div>

                    <div className="container">
                        <div className="row">
                            <div className="col-md-4">
                                <div class="card" style={{ width: 18 + "rem" }}>
                                    <img src="https://dummyimage.com/512x512/000/fff" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="text-center">Cool thingy #1</h5>
                                        <p class="card-text text-center">Cras ac diam condimentum, pharetra magna nec, sagittis lorem. Nam tincidunt, lectus et volutpat molestie, odio dui tincidunt urna, ut aliquam nunc odio sit amet augue. Donec condimentum leo id lorem venenatis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div class="card" style={{ width: 18 + "rem" }}>
                                    <img src="https://dummyimage.com/512x512/000/fff" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="text-center">Cool thingy #2</h5>
                                        <p class="card-text text-center">Aliquam vel imperdiet leo, sed semper odio. Proin nec suscipit neque, non efficitur leo. Maecenas auctor sapien sit amet libero convallis, scelerisque pulvinar odio efficitur. Vestibulum bibendum, arcu ac imperdiet facilisis.</p>
                                    </div>
                                </div>
                            </div>

                            <div className="col-md-4">
                                <div class="card" style={{ width: 18 + "rem" }}>
                                    <img src="https://dummyimage.com/512x512/000/fff" class="card-img-top" alt="..." />
                                    <div class="card-body">
                                        <h5 class="text-center">Cool thingy #3</h5>
                                        <p class="card-text text-center">Vestibulum tincidunt quis nisl congue tincidunt. Aliquam sapien eros, maximus vel est eget, efficitur dignissim purus. Phasellus congue, nulla nec vestibulum fermentum, purus velit laoreet elit, non fermentum ligula mi porta neque. </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                    
                    
                </div>
            </Router>
        )
    }
}

export default App;