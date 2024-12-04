import styled from 'styled-components';

export const SkillHover = styled.div`
    zoom: 1.1;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
    }

    @media (max-width: 768px) {
        zoom: 1;
    }
`;

export const SkillContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: 20px;
    margin: 0 auto;
    max-width: 800px;
    padding-bottom: 150px;

    @media (max-width: 768px) {
        max-width: 600px;
        gap: 15px;
        padding-bottom: 100px;
    }

    @media (max-width: 480px) {
        max-width: 90%;
        gap: 10px;
        padding-bottom: 80px;
    }
`;
