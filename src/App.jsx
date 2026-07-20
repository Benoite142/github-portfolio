import React, { useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import WorkExperience from './components/WorkExperience'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Footer from './components/Footer'
import './index.css'

function App() {
    return (
        <div className="app">
            <Header />
            <main>
                <About />
                <WorkExperience />
                <Projects />
                <Skills />
            </main>
            <Footer />
        </div>
    )
}

export default App
