import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import { Featured } from "./data";
import styles from "@/assets/styles/Home.module.css";

interface IProject {
  category: string;
  name: string;
  details: string;
  id: number;
  gitlink?: URL;
  livelink?: URL;
}

const ProjectCard: FC = () => {
  return (
    <>
      <div className="container">
        {Featured.map((project) => {
          return <ProjectDiv key={project.id} project={project} />;
        })}
      </div>
    </>
  );
};

const ProjectDiv: FC<{ project: IProject }> = ({ project }) => {
  return (
    <div className={styles.card}>
      <span>{project.category}</span>
      {project.livelink ? (
        <h2>
          <Link href={`${project?.livelink?.href}`} target="blank">
            {project.name}
          </Link>
        </h2>
      ) : (
        <h2>
          <Link href={`${project?.gitlink?.href}`} target="blank">
            {project.name}
          </Link>
        </h2>
      )}
      <p>{project.details}</p>
      <div>
        {project?.gitlink?.href && (
          <Link href={`${project?.gitlink?.href}`} target="blank">
            <Image
              src="/images/github.svg"
              alt="github"
              width={20}
              height={20}
            />
          </Link>
        )}

        {project?.livelink?.href && (
          <Link href={`${project?.livelink?.href}`} target="blank">
            <Image
              src="/images/share.svg"
              alt="github"
              layout="fill"
              className={styles.share}
            />
          </Link>
        )}
      </div>
    </div>
  );
};

export default ProjectCard;
