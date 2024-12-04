import React from "react";
import { 
  CertificationContainer, 
  CertificationName, 
  CertificationLine, 
  CertificationDate 
} from "../style";

const Certification = ({ name, date }) => {
  return (
    <CertificationContainer>
      <CertificationName>{name}</CertificationName>
      <CertificationLine />
      <CertificationDate>{date}</CertificationDate>
    </CertificationContainer>
  );
};

export default Certification;