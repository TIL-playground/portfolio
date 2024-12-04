import daemawiki_img from "../imgs/daema.svg";
import daemawiki_logo from "../imgs/daemawiki-logo.svg";
import repo_img from "../imgs/repo.svg";
import repo_logo from "../imgs/repo-logo.svg";
import founderz_img from "../imgs/founderz.svg";
import founderz_logo from "../imgs/founderz-logo.svg";
import Project from "../components/Project";
import { ProjectsTitle } from "../style";
import styled from "styled-components";

const projectArray = [
    {
        title: "Daemawiki",
        description: "Daemawiki is DSM\nwiki service :>",
        imageSrc: daemawiki_img,
        imageAlt: "daemawiki image",
        imageLink: "https://daemawiki.xquare.com/",
        logoSrc: daemawiki_logo,
        logoAlt: "daemawiki logo",
        date: "2024.06. ~ ing",
        stack: ["Spring WebFlux", "Java", "MongoDB"],
        githubLink: "https://github.com/daemawiki/claude",
        notionLink: "https://usadapekora.notion.site/DSM-48506e0449a24fbea9b1e563f3be4f53",
    },
    {
        alignRight: true,
        title: "Repo",
        description: "Repo is DSM\nresume platform :)",
        imageSrc: repo_img,
        imageAlt: "repo image",
        imageLink: "https://www.dsm-repo.com/",
        logoSrc: repo_logo,
        logoAlt: "repo logo",
        date: "2024.05. ~ 2024.09.",
        stack: ["Spring MVC", "Java", "MongoDB"],
        githubLink: "https://github.com/dsm-repo/Whopper",
        notionLink: "https://usadapekora.notion.site/DSM-243478eb505b4155a98dae7bae41ddb9",
    },
    {
        title: "Founderz",
        description: "Founderz is blockchain-based\nstartup investment platform :]",
        imageSrc: founderz_img,
        imageAlt: "founderz image",
        imageLink: "https://founderz.xquare.app/",
        logoSrc: founderz_logo,
        logoAlt: "founderz logo",
        date: "2024.05. ~ 2024.11.",
        stack: ["Spring MVC", "Java", "MySQL"],
        githubLink: "https://github.com/teamFOUNDERZ/FOUNDERZ-Backend",
        notionLink: "https://usadapekora.notion.site/14a3c1533f0d805db602c62898eecaf3",
    },
]

const ProjectBlock = () => {
    return (
        <>
            <ProjectsTitle>Projects</ProjectsTitle>

            <ProjectContents>
                {projectArray.map((project) => (
                    <Project
                        key={project.title}
                        alignRight={project.alignRight || false}
                        imageSrc={project.imageSrc}
                        imageAlt={project.imageAlt}
                        title={project.title}
                        logoSrc={project.logoSrc}
                        logoAlt={project.logoAlt} 
                        description={project.description}
                        date={project.date}
                        stack={project.stack}
                        githubLink={project.githubLink}
                        notionLink={project.notionLink}
                    />
                ))}
            </ProjectContents>
        </>
    )
}

const ProjectContents = styled.div`
    padding-bottom: 120px;
`;  

export default ProjectBlock;