import React from 'react';
import styled from 'styled-components';
import { Title1 } from '../style';
import ExperienceCard from '../components/Experience/ExperienceCard';

const experiences = [
    // 경력이 없습니다 ㅠㅠ
];

const ExperienceWrapper = styled.div`
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

const TimelineContainer = styled.div`
    position: relative;
    margin-top: 60px;

    &::before {
        content: '';
        position: absolute;
        width: 2px;
        background-color: #e0e0e0;
        top: 0;
        bottom: 0;
        left: 50%;
        transform: translateX(-50%);

        @media (max-width: 768px) {
            left: 30px;
        }
    }
`;

const ExperienceItem = styled.div`
    margin-bottom: 50px;
    display: flex;
    justify-content: ${props => props.isLeft ? 'flex-start' : 'flex-end'};
    
    @media (max-width: 768px) {
        justify-content: flex-start;
        padding-left: 60px;
    }
`;

const ExperienceBlock = () => {
    return (
        <ExperienceWrapper>
            <Title1>Work Experience</Title1>
            <TimelineContainer>
                {experiences.map((exp, index) => (
                    <ExperienceItem key={index} isLeft={index % 2 === 0}>
                        <ExperienceCard
                            period={exp.period}
                            company={exp.company}
                            position={exp.position}
                            description={exp.description}
                            isLeft={index % 2 === 0}
                        />
                    </ExperienceItem>
                ))}
            </TimelineContainer>
        </ExperienceWrapper>
    );
};

export default ExperienceBlock;
