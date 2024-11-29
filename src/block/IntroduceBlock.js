import { PointColor, IntroduceContent, PointBackgroundColor, IntroduceTitle, ContentWrapper, IntroSection } from '../style/Styled'

const IntroduceBlock = () => {
    return (
        <IntroSection aria-label="개인 소개">
            <ContentWrapper>
                <IntroduceTitle>
                    <PointBackgroundColor>
                      더욱 효율적인 코드 작성
                    </PointBackgroundColor>
                    을 지향하는 백엔드 개발자 김승원입니다.
                </IntroduceTitle>

                <IntroduceContent>
                    <p>
                        스프링 웹 플럭스를 활용한 비동기 논블로킹 웹 애플리케이션 개발에 관심이 많으며, 
                        <PointColor>{" "} 교내 약130명 이상의 학생이 사용하는 이력서 작성 플랫폼 {" "}</PointColor> 
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
                </IntroduceContent>
            </ContentWrapper>
        </IntroSection>
    );
};

export default IntroduceBlock;