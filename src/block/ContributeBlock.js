import { Title1 } from "../style";
import { 
    ContributeContainer, 
    ContributeItem,
    ContributeContent,
    RepoName,
    Description,
    PRLink
} from "../style/components/ContributeStyles";

const contributions = [
    {
        repoName: "kestra-io/kestra",
        description: "unify instanceof usage to pattern matching style.",
        prLink: "https://github.com/kestra-io/kestra/pull/6073"
    },
    {
        repoName: "velog-io/velog",
        description: "change text style correctly.",
        prLink: "https://github.com/velog-io/velog/pull/49"
    },
];

const ContributeBlock = () => {
    return (
        <>
            <Title1>Contribute</Title1>
            <ContributeContainer>
                {contributions.map((contribution, index) => (
                    <ContributeItem key={index}>
                        <ContributeContent>
                            <RepoName>{contribution.repoName}</RepoName>
                            <Description>{contribution.description}</Description>
                            <PRLink 
                                href={contribution.prLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                github pull request
                            </PRLink>
                        </ContributeContent>
                    </ContributeItem>
                ))}
            </ContributeContainer>
        </>
    );
};

export default ContributeBlock;
