import React from 'react';
import { Title1 } from "../style";
import SkillCard from "../components/Skill/SkillCard";
import styled from 'styled-components';

const skills = {
    languages: [
        "Java",
        "Kotlin",
        "TypeScript",
        "JavaScript",
    ],
    frameworks: [
        "Spring Boot",
        "Spring MVC",
        "Spring WebFlux",
        "Spring Data JPA",
        "Spring Data Mongo",
        "NestJS",
        "TypeORM",
        "Mongoose",
    ],
    databases: [
        "MySQL",
        "MongoDB",
        "Redis",
    ]
};

const SkillsWrapper = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 20px 120px 20px;

    @media (max-width: 768px) {
        padding: 0 16px 100px 16px;
    }

    @media (max-width: 480px) {
        padding: 0 12px 80px 12px;
    }
`;

const CategoryTitle = styled.h2`
    color: #1C194A;
    font-size: 30px;
    margin: 40px 0 20px;
    font-weight: 600;

    @media (max-width: 768px) {
        font-size: 26px;
        margin: 35px 0 18px;
    }

    @media (max-width: 480px) {
        font-size: 22px;
        margin: 30px 0 16px;
    }
`;

const SkillSection = styled.div`
    margin-bottom: 40px;
    
    &:last-child {
        margin-bottom: 0;
    }

    @media (max-width: 768px) {
        margin-bottom: 35px;
    }

    @media (max-width: 480px) {
        margin-bottom: 30px;
    }
`;

const SkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    gap: 12px;

    @media (max-width: 768px) {
        gap: 10px;
    }

    @media (max-width: 480px) {
        gap: 8px;
    }
`;

const SkillBlock = () => {
    return (
        <SkillsWrapper>
            <Title1>Skills</Title1>
            
            <SkillSection>
                <CategoryTitle>Programming Languages</CategoryTitle>
                <SkillContainer>
                    {skills.languages.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            text={skill}
                        />
                    ))}
                </SkillContainer>
            </SkillSection>

            <SkillSection>
                <CategoryTitle>Frameworks & Libraries</CategoryTitle>
                <SkillContainer>
                    {skills.frameworks.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            text={skill}
                        />
                    ))}
                </SkillContainer>
            </SkillSection>

            <SkillSection>
                <CategoryTitle>Databases</CategoryTitle>
                <SkillContainer>
                    {skills.databases.map((skill, index) => (
                        <SkillCard 
                            key={index}
                            text={skill}
                        />
                    ))}
                </SkillContainer>
            </SkillSection>
        </SkillsWrapper>
    );
};

export default SkillBlock;