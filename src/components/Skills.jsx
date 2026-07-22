import React from 'react'
import { SiPython, SiCplusplus, SiJavascript, SiDjango, SiGit } from 'react-icons/si'
import { TbFileTypeSql } from 'react-icons/tb'
import { FaLinux, FaFileExcel } from 'react-icons/fa'

function Skills() {
    const skillCategories = [
        {
            category: 'Languages',
            skills: [
                { name: 'Python', icon: SiPython },
                { name: 'JavaScript', icon: SiJavascript },
                { name: 'C++', icon: SiCplusplus },
                { name: 'SQL', icon: TbFileTypeSql }
            ]
        },
        {
            category: 'Frameworks & Tools',
            skills: [
                { name: 'Django', icon: SiDjango },
                { name: 'Git', icon: SiGit },
                { name: 'Linux', icon: FaLinux },
                { name: 'Excel', icon: FaFileExcel }
            ]
        }
    ]

    return (
        <section id="skills">
            <h2>Skills</h2>
            <div className="skills-container">
                {skillCategories.map((category, catIndex) => (
                    <div key={catIndex} className="skills-category">
                        <h3>{category.category}</h3>
                        <div className="skills-grid">
                            {category.skills.map((skill, skillIndex) => {
                                const IconComponent = skill.icon
                                return (
                                    <div key={skillIndex} className="skill-card">
                                        <IconComponent className="skill-icon" />
                                        <span className="skill-name">{skill.name}</span>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Skills
