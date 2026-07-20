import React from 'react'

function Footer() {
    return (
        <footer>
            <div className="footer-content">
                <div className="footer-links">
                    <a href="https://github.com/Benoite142" target="_blank" rel="noopener noreferrer">GitHub</a>
                    <a href="https://www.linkedin.com/in/benoit-charbonneau01/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                    <a href="mailto:benoit.charbonneau01@gmail.com">Email</a>
                </div>
                <a href="/benoit-cv-en.pdf" download className="resume-btn">
                    Download Resume
                </a>
                <p>&copy; 2026 Benoit Charbonneau. All rights reserved.</p>
            </div>
        </footer>
    )
}

export default Footer
