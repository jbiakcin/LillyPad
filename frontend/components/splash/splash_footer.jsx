import React from 'react';

function SplashFooter() {
  return (

    <main className="footer-main">
      <section className="footer-content">
        <div className="connect-dev">
          CONNECT WITH THE DEVELOPER
        </div>
        <div className="connect-links">
          <ul className="connect-icons">
            <li key="portfolio"><a href="https://jbiakcin.com" className="contact"><i class="fas fa-user"></i><span>Jennie's Portfolio</span></a></li>
            <li key="github"><a href="https://github.com/jbiakcin" className="contact"><i className="fab fa-github"></i><span>GitHub</span></a></li>
            <li key="linkedin"><a href="https://www.linkedin.com/in/jennie-richardson-1531881a5/" className="contact"><i className="fab fa-linkedin"></i><span>LinkedIn</span></a></li>
            <li key="angellist"><a href="https://angel.co/u/jennie-richardson" className="contact"><i className="fab fa-angellist"></i><span>AngelList</span></a></li>
            <li key="email"><a href="mailto: jbiakcin@icloud.com" className="contact"><i className="far fa-envelope"></i><span>Email</span></a></li>
          </ul>
        </div>
      </section>
    </main>

  );
}

export default SplashFooter;