import React from 'react';

function SplashFooter() {
  return (

    <main className="footer-main">
      <section className="footer-content">
        <div className="connect-dev">
          Connect with the developer
        </div>
        <div className="connect-links">
          <ul className="connect-icons">
            <li key="email" className="contact-email"><a href="mailto: jbiakcin@icloud.com"><i className="far fa-envelope"></i></a></li>
            <li key="github" className="contact-github"><a href="https://github.com/jbiakcin"><i className="fab fa-github"></i></a></li>
            <li key="linkedin" className="contact-linkedin"><a href="https://www.linkedin.com/in/jennie-richardson-1531881a5/"><i className="fab fa-linkedin"></i></a></li>
            <li key="angellist" className="contact-angelist"><a href="https://angel.co/u/jennie-richardson"><i className="fab fa-angellist"></i></a></li>
          </ul>
        </div>
      </section>
    </main>

  );
}

export default SplashFooter;