import React from 'react'

function WorkExperience() {
    const experiences = [
        {
            title: 'Summer Worker at MUHC Research Institute',
            date: 'Since May 2026',
            responsibilities: [
                'Created Python scripts for data analysis and automation tasks.',
                'Handled preprocessing and postprocessing of MRI scans.'
            ]
        },
        {
            title: 'Intern Software Developer at MUHC Research Institute',
            date: 'May 2025 - August 2025',
            responsibilities: [
                'Developed a full Django Website for medical purposes.',
                'The website predicts patient in the emergency department placement in rooms based on various medical criteria with a Machine Learning model. The site also provides real-time updates and notifications to the medical staff while also showing the real placement of patients.',
                'Optimized application performance and ensured scalability.',
                'Ensured the website met the requirements and needs of the physicians.'
            ]
        },
        {
            title: 'Intern Full Stack Developer at Opal Health Informatics Group',
            date: 'January 2024 - May 2024 | September 2024 - December 2024',
            responsibilities: [
                'Fixed bugs and optimized code across different environments.',
                'Developed user-friendly front-end and back-end applications.',
                'Ensured application design is optimized for mobile-based devices.',
                'Designed and developed RESTful APIs',
                'Developed a PDF generator in Python.',
                'Refactored code for the launch of the application in Open Source.',
                'Contributed to the CI/CD pipeline.'
            ]
        },
        {
            title: 'Digital Security Intern at Agropur',
            date: 'May 2023 - August 2023',
            responsibilities: [
                'Participated in the writing of multiple policies in the field of IT security.',
                'Conducted meetings with managers of different departments to confirm the accuracy of the policies.',
                'Researched and collected data to improve and deepen the various policies.'
            ]
        }
    ]

    return (
        <section id="work">
            <h2>Work Experience</h2>
            <p>Here are some of my work experiences:</p>
            {experiences.map((exp, index) => (
                <div key={index} className="work-item">
                    <h3>{exp.title}</h3>
                    <p className="date">{exp.date}</p>
                    <p><strong>Responsibilities:</strong></p>
                    <ul>
                        {exp.responsibilities.map((resp, i) => (
                            <li key={i}>{resp}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </section>
    )
}

export default WorkExperience
