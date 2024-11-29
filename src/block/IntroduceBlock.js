import styled from 'styled-components';

const IntroSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 100%;
  padding: 2rem;
`;

const ContentWrapper = styled.div`
  width: 100%;
  max-width: 1044.05px;
`;

const BodyTitle = styled.h1`
  font-size: 2.5rem;
  margin-bottom: 1.25rem;
  line-height: 1.5;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    max-width: 100%;
  }
`;

const PointBackgroundColor = styled.span`
  background-color: #51abff;
  color: white;
  padding: 0.2rem 0.4rem;
  box-decoration-break: clone;
  -webkit-box-decoration-break: clone;
`;

const BodyContent = styled.div`
  padding-top: 2.8rem;
  font-size: 1.25rem;
  text-align: left;
  width: 100%;
  max-width: 1044.05px;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 1rem;
    padding-top: 1.5rem;
  }
`;

const PointColor = styled.span`
  color: #51abff;
  font-weight: 500;
`;

const IntroduceBlock = () => {
    return (
        <IntroSection aria-label="개인 소개">
            <ContentWrapper>
                <BodyTitle>
                    <PointBackgroundColor>
                      더욱 효율적인 코드 작성
                    </PointBackgroundColor>
                    을 지향하는 백엔드 개발자 김승원입니다.
                </BodyTitle>

                <BodyContent>
                    <p>
                        스프링 웹 플럭스를 활용한 비동기 논블로킹 웹 애플리케이션 개발에 관심이 많으며, 
                        <PointColor>교내 약130명 이상의 학생이 사용하는 이력서 작성 플랫폼 {" "}</PointColor> 
                        프로젝트를 주도하며 안정적인 서버 구현에 기여했습니다.
                    </p>
                    <p>
                        <PointColor>가독성 높은 코드와 시스템 성능 최적화 사이의 균형</PointColor>을 중요하게 생각하며, 
                        실제 프로젝트에서 팀과 함께 지속적으로 고민하고 개선해왔습니다. 
                        또한, 확장성과 유지보수성을 고려한 유연한 설계를 지향하며, 
                        문제 해결과 성능 개선에 주도적으로 참여하고 있습니다. 
                    </p>
                    <p>
                        끊임없이 학습하고 도전하며, <PointColor>의미 있는 결과</PointColor>를 만들어내는 개발자로 성장하는 것이 저의 목표입니다.
                    </p>
                </BodyContent>
            </ContentWrapper>
        </IntroSection>
    );
};

export default IntroduceBlock;