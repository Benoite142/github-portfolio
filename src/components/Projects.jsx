import React from 'react'

function Projects() {
    const projects = [
        { name: 'Piano Knight', link: 'https://ben0ite.itch.io/piano-knight' },
        { name: 'Synthesizer Application', link: 'https://github.com/Benoite142/Rusty-Synth' },
        { name: 'Hockey Stats', link: 'https://github.com/Benoite142/hockeyStats' }
    ]

    return (
        <section id="projects">
            <h2>Projects</h2>
            <p>Here lies some of my notable projects that I have worked on:</p>
            <ul>
                {projects.map((project, index) => (
                    <li key={index}>
                        <a href={project.link}>{project.name}</a>
                    </li>
                ))}
            </ul>
        </section>
    )
}

export default Projects
