import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Header() {
    const scrollToSection = (id) => {
        const element = document.getElementById(id)
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' })
        }
    }

    return (
        <header>
            <nav className="navigation-header">
                <ul>
                    <li><a href="#about" onClick={() => scrollToSection('about')}>About</a></li>
                    <li><a href="#work" onClick={() => scrollToSection('work')}>Work</a></li>
                    <li><a href="#projects" onClick={() => scrollToSection('projects')}>Projects</a></li>
                    <li><a href="#skills" onClick={() => scrollToSection('skills')}>Skills</a></li>
                </ul>
            </nav>
            <h1>Benoit Charbonneau</h1>
            <p>Software Developer</p>
            <div className="social-links">
                <a href="https://github.com/Benoite142" target="_blank" rel="noopener noreferrer" title="GitHub">
                    <FaGithub /> GitHub
                </a>
                <a href="https://www.linkedin.com/in/benoit-charbonneau01/" target="_blank" rel="noopener noreferrer" title="LinkedIn">
                    <FaLinkedin /> LinkedIn
                </a>
            </div>
        </header>
    )
}

export default Header
