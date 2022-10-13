import { useState } from "react";
import axios from "axios"
import ProjectCard from "../../components/projects/ProjectCard";
import Link from 'next/link';


const removeProject = (id) => {
    const query = `
        mutation DeleteProject {
            deleteProject(id: "${id}")
        }
    `;
    return axios.post('http://localhost:3000/graphql', { query })
    .then(({data: graph}) =>  graph.data)
    .then(data => data.removeProject)
}

const putProject = (id) => {
    const query = `mutation UpdateProject {
        updateProject(id: "${id}",input: {
              title: "update test app",
              description: "update test app",
              technologies: "html, css, javascript, virtual DOM",
              url: "https://vithursan6.github.io/updatednewTestApp/",
              isCurrentlyDeployed: true
        }) {
          _id
          title
          description
          technologies
          url
        }
      }`;
    return axios.post('http://localhost:3000/graphql', { query })
        .then(({data: graph}) =>  graph.data)
        .then(data => data.updateProject)
}

const addProject = () => {
    const query = `mutation CreateProject {
        createProject(input: {
              title: "new test app",
              description: "new test app",
              technologies: "html, css, javascript, virtual DOM",
              url: "https://vithursan6.github.io/newTestApp/",
              isCurrentlyDeployed: false
        }) {
          _id
          title
          description
          technologies
          url
        }
      }`;
    return axios.post('http://localhost:3000/graphql', { query })
        .then(({data: graph}) =>  graph.data)
        .then(data => data.createProject)
}

const fetchProjects = () => {
    const query = `query Projects {projects { _id, title, description, technologies, url }}`;
    return axios.post('http://localhost:3000/graphql', { query })
        .then(({data: graph}) =>  graph.data)
        .then(data => data.projects)
}

const Projects = ({data}) =>  {
    const [projects, setProjects] = useState(data.projects);

    const createProject = async () => {
        const newProject = await addProject();
        const newProjects = [...projects, newProject];
        setProjects(newProjects);
    }

    const updateProject = async (id) => {
        const updatedProject = await putProject(id);
        const index = projects.findIndex(p => p._id === id);
        const newProjects = projects.slice();
        newProjects[index] = updatedProject;
        setProjects(newProjects);
    }

    const deleteProject = async (id) => {
        const deletedId = await removeProject(id);
        const index = projects.findIndex(p => p._id === id);
        const newProjects = projects.slice();
        newProjects.splice(index, 1);
        setProjects(newProjects);
    }
 


    return (
        <>
            <section className="section-title">
                <div className="px-2">
                    <div className="pt-5 pb-4">
                    <h1>Projects</h1>
                    </div>
                </div>
                <button 
                onClick={createProject}
                className="btn btn-primary">Add Project</button>
            </section>
            <br />
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
                            <button
                            className="btn btn-warning" 
                            onClick={() => updateProject(project._id)}>Update Project</button> 
                            <button 
                            className="btn btn-danger"
                            onClick={() => deleteProject(project._id)}>
                            Delete Project
                            </button>                       
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
    return { data: { projects }};
}

export default Projects;