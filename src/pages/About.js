import React from 'react';
import './About.css';
import teamImage from './111.png';

const teamMembers = [
    {
        id: 1,
        name: 'Hajer Al-Roshdi',
        role: 'Programmer',
       image:  teamImage, 
        bio: 'A programmer in the Global Computer Services Company'
    },
    {
        id: 2,
        name: 'Amal Al-Badi',
        role: 'Programmer',
        image: teamImage, 
        bio: 'A programmer in the Code Academy'
    },
    {
        id: 3,
        name: 'Jihan Al-Nofli',
        role: 'Data Science',
       image: teamImage,
        bio: 'A Data Science in the Code Academy'
    },
    {
        id: 4,
        name: 'Sabaa Al-Thehli',
        role: 'Data Science',
       image: teamImage,
        bio: 'A Data Science in the Code Academy'
    },

    {
        id: 5,
        name: 'Safa Al-Hanai',
        role: 'Designer',
       image: teamImage,
        bio: 'A programmer in the Code Academy'
    }
];

function About() {
    return (
        <div className="about-container">
            <h1>About Us</h1>
            <div className="team-members">
                {teamMembers.map(member => (
                    <div key={member.id} className="member-card">
                        <img src={member.image} alt={member.name} className="member-image" />
                        <h2>{member.name}</h2>
                        <h6>{member.role}</h6>
                        <p>{member.bio}</p>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default About; 