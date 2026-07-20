import React from 'react'

function Skills() {
    const skills = ['C++', 'Django', 'Python', 'JavaScript', 'Full Stack Development']

    return (
        <section id="skills">
            <h2>Skills</h2>
            <ul>
                {skills.map((skill, index) => (
                    <li key={index}>{skill}</li>
                ))}
            </ul>
        </section>
    )
}

export default Skills
