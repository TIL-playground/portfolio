import styled from "styled-components";
import { Title1 } from "../style";
import Certification from "../components/Certification";

const certifications = [
    {
        name: "정보처리기능사",
        date: "2023.09"
    },
    {
        name: "PCCE 830점",
        date: "2024.01"
    },
    {
        name: "TOPCIT 595점",
        date: "2024.11"
    },
]

const CertificationBlock = () => {
    return <CertificationContainer>
        <Title1>Certification</Title1>
        
        {
            certifications.map((certification, index) => (
                <Certification name={certification.name} date={certification.date} />
            ))
        }

    </CertificationContainer>;
};

const CertificationContainer = styled.div`
  height: 925px;
`;

export default CertificationBlock