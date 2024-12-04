import { Title1 } from "../style";
import { 
    OpenSourceContainer, 
    OpenSourceItem,
    OpenSourceContent,
    RepoName,
    Description,
    PRLink
} from "../style/components/OpenSourceStyles";

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
            <OpenSourceContainer>
                {contributions.map((contribution, index) => (
                    <OpenSourceItem key={index}>
                        <OpenSourceContent>
                            <RepoName>{contribution.repoName}</RepoName>
                            <Description>{contribution.description}</Description>
                            <PRLink 
                                href={contribution.prLink} 
                                target="_blank" 
                                rel="noopener noreferrer"
                            >
                                github pull request
                            </PRLink>
                        </OpenSourceContent>
                    </OpenSourceItem>
                ))}
            </OpenSourceContainer>
        </>
    );
};

export default ContributeBlock;
