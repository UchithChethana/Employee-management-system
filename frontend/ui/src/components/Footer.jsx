import React from 'react';
import { FaLinkedin, FaGithub, FaWhatsapp, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="footer text-white py-5" style={{ backgroundColor: '#1f1f1f' }}>
      <div className="container text-center">
        <h5 className="mb-3">© 2025 Uchith Chethana</h5>

        <blockquote className="blockquote">
          <p className="mb-0 fst-italic">
            “Transforming ideas into code — building solutions that matter.”
          </p>
          <footer className="blockquote-footer text-light mt-2">
            Uchith Chethana, IT Undergraduate at <cite title="SLIIT">SLIIT</cite>
          </footer>
        </blockquote>

        <hr className="border-light my-4" />

        <div className="d-flex flex-wrap justify-content-center gap-4">
          <a
            href="https://www.linkedin.com/in/uchith-chethana"
            className="text-decoration-none text-light d-flex align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin size={22} className="me-2" />
            LinkedIn
          </a>

          <a
            href="https://github.com/UchithChethana"
            className="text-decoration-none text-light d-flex align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub size={22} className="me-2" />
            GitHub
          </a>

          <a
            href="https://wa.me/94772284656"
            className="text-decoration-none text-light d-flex align-items-center"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaWhatsapp size={22} className="me-2" style={{ color: '#25D366' }} />
            WhatsApp
          </a>

          <a
            href="mailto:wgucgjayarathna9898@gmail.com"
            className="text-decoration-none text-light d-flex align-items-center"
          >
            <FaEnvelope size={22} className="me-2" />
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
