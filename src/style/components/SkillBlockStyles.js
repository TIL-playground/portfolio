import styled from 'styled-components';

export const SkillHover = styled.div`
    zoom: 1.1;
    &:hover {
        transform: scale(1.1);
        transition: transform 0.3s ease;
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
`;
