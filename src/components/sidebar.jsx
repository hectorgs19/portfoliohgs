import React, { Component } from 'react'

export default class Sidebar extends Component {
  render() {
    return (
      <div>
        <div>
          <nav href="#navbar" className="js-colorlib-nav-toggle colorlib-nav-toggle" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar"><i /></nav>
          <aside id="colorlib-aside" className="border js-fullheight">
            <div className="text-center">
              <div className="author-img" style={{backgroundImage: 'url(images/profile.jpg)'}} />
              <h1 id="colorlib-logo"><a href="index.html">Héctor Gómez Soria</a></h1>
              <h2>Junior Developer</h2>
            </div>
            <nav id="colorlib-main-menu" role="navigation" className="navbar">
              <div id="navbar" className="collapse">
                <ul>
                  <li className="active"><a href="#home" data-nav-section="home">Introduction</a></li>
                  <li><a href="#about" data-nav-section="about">About</a></li>
                  {/*<li><a href="#" data-nav-section="projects">Projects</a></li>
                  <li><a href="#" data-nav-section="blog">Blog</a></li>*/}
                  <li><a href="#timeline" data-nav-section="timeline">Timeline</a></li>
                </ul>
              </div>
            </nav>
            <nav id="colorlib-main-menu">
              <ul>
                <li><a href="https://www.linkedin.com/in/hectorgs19/" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a></li>
                <li><a href="https://github.com/hectorgs19" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a></li>
                <li><a href="https://www.instagram.com/hectorgs19/" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a></li>
                <li><a href="https://www.facebook.com/hectorgs19" target="_blank" rel="noopener noreferrer"><i className="fab fa-facebook-f"></i></a></li>
                <br/>
                {/* <li><a href="#" target="_blank" rel="noopener noreferrer"><i className="icon-blogger2"></i></a></li> */}
              </ul>
            </nav>
            <div className="colorlib-footer">

            <span className="email">
                <a className="links" href="mailto:hectorgomezsoria@gmail.com">
                <i className="far fa-envelope"></i>
                  <br></br>hectorgomezsoria@gmail.com</a>
            </span>

              <p><small>
                   by HGS<br></br>
              </small></p>
            
            </div>
          </aside>
        </div>
      </div>
    )
  }
}
