import React from 'react';
import './plans.css'
function Plans() {
    return (
        <div id="main">
            <div id="heading">
                <h1>
                    WELCOME TO SUBSCRIPTIONS
                </h1>
            </div>
            <div>
                <div class="col">
                    <div class="row g1">
                        <h1>ELITE</h1>
                        <h2>UNLIMILTED ACCESS TO</h2>
                        <div id="lists">
                            <h4>At-centre group classes</h4>
                            <h4>All Elite and PRO gyms</h4>
                            <h4>At-home live workouts</h4>
                            <div id="b">
                                <button class="button-28" role="button">TRY FOR FREE</button>
                                <button className="button-28" role="button">BUY NOW</button>
                            </div>

                        </div>
                    </div>
                    <div class="row">
                        <h1>PRO</h1>
                        <h2>UNLIMILTED ACCESS TO</h2>
                        <div id="lists">
                            <h4>All PRO gyms</h4>
                            <h4>At-home live workouts</h4>
                            <h4>4 Sessions/month at ELITE gyms and Group classes</h4>
                            <div id="b">
                                <button class="button-28" role="button">TRY FOR FREE</button>
                                <button className="button-28" role="button">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <h1>LIVE</h1>
                        <h2>UNLIMILTED ACCESS TO</h2>
                        <div id="lists">
                            <h4>1200+ at-home workouts across formats including strength, dance and yoga</h4>
                            <h4>30+ goal based fitness programs</h4>
                            <h4>Meditation sessions, health podcasts and more</h4>
                            <div id="b">
                                <button class="button-28" role="button">TRY FOR FREE</button>
                                <button className="button-28" role="button">BUY NOW</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Plans;
