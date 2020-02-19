import React, { Component } from 'react'
import ProgressBar from 'react-bootstrap/ProgressBar'

export default class About extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-about" data-section="about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-12">
                <div className="row row-bottom-padded-sm animate-box" data-animate-effect="fadeInLeft">
                <div className="col-md-12">
                    <div className="about-desc">
                        <span className="heading-meta">About Me</span>
                        <h2 className="colorlib-heading">Who Am I?</h2>
                            <p>
                                I am from León, Spain. In June of 2019, I finished my third programming degree and I decided to come to Manchester to improve my English level since I consider it important for my future.
                            </p>
                            <p>
                                 I'm very organized on my day by day, I´m trying to take time to train, cook my own food and do courses to keep training myself.
                                <br/> ~ Always looking for the balance. ~
                            </p>
                            <p>
                                I'm an energized, positive person, who likes challenges and never leaves anything half - done.
                                <br/> ~ If you're gonna try it, go to the end. ~
                            </p>
                        
                    </div>
                </div>
                </div>
            </div>
            </div>
        </div>
        </section>
        <section className="about-skills">
            <h1 class="skills">Languages and Knowdedge</h1>
            <div className="progressbar">
                
                <div>HTML</div>
                <ProgressBar id="html" progress-bar animated now={98}/>
                <div>CSS</div>
                <ProgressBar id="css" progress-bar animated now={90} />
                <div>JavaScript</div>
                <ProgressBar id="js" progress-bar animated now={60} />
                <div>PHP</div>
                <ProgressBar id="php" progress-bar animated now={80} />
                <div>SQL</div>
                <ProgressBar id="sql" progress-bar animated now={80} />
                <div>Ionic Framework</div>
                <ProgressBar id="ionic" progress-bar animated now={55} />
                <div>Git</div>
                <ProgressBar id="git" progress-bar animated now={80} />
                <div>Bootstrap Framework</div>
                <ProgressBar id="bootstrap" progress-bar animated now={90} />
                <div>Swift</div>
                <ProgressBar id="swift" progress-bar animated now={50} />
                <div>.NET and C#</div>
                <ProgressBar id="dotnet" progress-bar animated now={40} />
            </div>
        <div className="colorlib-narrow-content">

        </div>
        </section>
        {/* <section className="colorlib-about">
        <div className="colorlib-narrow-content">
            <div className="row">
            <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
                <span className="heading-meta">What I do?</span>
                <h2 className="colorlib-heading">Here are some of my expertise</h2>
            </div>
            </div>
            <div className="row row-pt-md">
            <div className="col-md-4 text-center animate-box">
                <div className="services color-1">
                <span className="icon">
                    <i className="icon-bulb" />
                </span>
                <div className="desc">
                    <h3>Web Development </h3>
                    <p>I have experience building websites and chrome extentions using JavaScript,React,HTML,CSS</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-3">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Data Structures & Algorithms</h3>
                    <p>As coming from the CS background, I have good grasp over fundamental concepts of DSA</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-5">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>I am pursuing my internship with DevOps team at Juniper and working with tools like Jenkins, Docker, K8s</p>
                </div>
                </div>
            </div>
            
            <div className="col-md-4 text-center animate-box">
                <div className="services color-2">
                <span className="icon">
                    <i className="icon-data" />
                </span>
                <div className="desc">
                    <h3>Dev Ops</h3>
                    <p>Jenkins , Kubernetes , Docker </p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-4">
                <span className="icon">
                    <i className="icon-layers2" />
                </span>
                <div className="desc">
                    <h3>Graphic Design</h3>
                    <p>My friend knows .. P</p>
                </div>
                </div>
            </div>
            <div className="col-md-4 text-center animate-box">
                <div className="services color-6">
                <span className="icon">
                    <i className="icon-phone3" />
                </span>
                <div className="desc">
                    <h3>Digital Marketing</h3>
                    <p>I use Instagram eight hours a day :) </p>
                </div>
                </div>
            </div>
           
            </div>
        </div>
        </section> */}
      </div>
    )
  }
}
