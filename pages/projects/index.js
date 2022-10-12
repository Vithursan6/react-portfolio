import axios from "axios"
import ProjectCard from "../../components/projects/ProjectCard";
import Link from 'next/link';

const fetchProjects = () => {
    const query = `query Projects {projects { _id, title, description, technologies, url }}`;
    return axios.post('http://localhost:3000/graphql', { query })
        .then(({data: graph}) =>  graph.data)
        .then(data => data.projects)
}

const Projects = ({projects}) =>  {
 


    return (
        <>
            <section className="section-title">
                <div className="px-2">
                    <div className="pt-5 pb-4">
                    <h1>Projects</h1>
                    </div>
                </div>
            </section>
            <section className="pb-5">
                <div className="row">
                    { projects.map(project =>
                        <div key={project._id} className="col-md-4">
                            <Link 
                             href='/projects/[id]'
                             as={`/projects/${project._id}`}>
                            <a className="card-link">
                            <ProjectCard project={project} />
                            </a>
                            </Link>                        
                        </div>
                        )
                    }
                </div>
        </section>
        </>
    )
}

Projects.getInitialProps = async () => {

    const projects = await fetchProjects();
    return { projects };
}

export default Projects;