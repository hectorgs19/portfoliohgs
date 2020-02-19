import React, { Component } from 'react'

export default class Timeline extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-experience" data-section="timeline">
          <div className="colorlib-narrow-content">
            <div className="row">
              <div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
          <a name="highlights" href="highlights">
                <span className="heading-meta">highlights</span></a>
                <h2 className="colorlib-heading animate-box">Timeline</h2>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="timeline-centered">
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-3">
                      <i className="fas fa-laptop-code"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Development of Web Applications <span>2018-2019</span></h2>
                        <p>
                          Developing, implementing and maintaining web applications, irrespective of the model used and using specific technologies, guaranteeing secure access to data and complying with the accessibility, usability and quality criteria required by established standards.</p>
                          <span><a className="btn btn-primary btn-learn" href="https://www.dropbox.com/s/6tw9qof6s4r9xkk/web%20developer%20degree.pdf?dl=0" target="_blank" rel="noopener noreferrer">View Details <i className="fas fa-eye"></i></a></span>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInTop">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-4">
                      <i className="fas fa-laptop-code"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Development of Multiplatform Applications <span>2016-2018</span></h2>
                        <p>Developing, installing, documenting and maintaining multi-platform computer applications, using technologies and specific development environments, guaranteeing secure access to data and complying with «usability» and quality criteria required by established standards.</p>
                        <span><a className="btn btn-primary btn-learn" href="https://www.dropbox.com/s/9ssxyg2uxrfd7wd/multiplatform%20debeloper%20degree.pdf?dl=0" target="_blank" rel="noopener noreferrer">View Details <i className="fas fa-eye" /></a></span>
                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry animate-box" data-animate-effect="fadeInLeft">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-5">
                      <i className="fas fa-tty"></i>
                      </div>
                      <div className="timeline-label">
                        <h2>Telecommunications and Computer Systems <span>2014-2016</span></h2>
                        <p>Developing projects as well as managing and supervising the assembly and the maintenance of common telecommunication infrastructures and telecommunication systems and equipment such as broadband networks and fixed and mobile radio, electronic systems, audiovisual production and transmission, based on technical documentation, regulations and procedures, ensuring the performance, the quality, the safety and the environmental conservation.</p> 
                        <span><a className="btn btn-primary btn-learn detalles" href="https://www.dropbox.com/s/0ju54kryv4ctzmg/telecomunications%20and%20computer%20sistems%20degree.pdf?dl=0" target="_blank" rel="noopener noreferrer">View Details <i className="fas fa-eye" /></a></span>

                      </div>
                    </div>
                  </article>
                  <article className="timeline-entry begin animate-box" data-animate-effect="fadeInBottom">
                    <div className="timeline-entry-inner">
                      <div className="timeline-icon color-none">
                      </div>
                    </div>
                  </article>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    )
  }
}
