import ProjectCard from "../../components/projects/ProjectCard";
import Link from 'next/link';
import { useGetProject, useCreateProject, useDeleteProject, useUpdateProject } from "@/apollo/actions";
import withApollo from "../../hoc/withApollo";
import { getDataFromTree } from '@apollo/react-ssr';

const Projects = () =>  {
    const { data } = useGetProject();
    const [updateProject] = useUpdateProject();
    const [deleteProject] = useDeleteProject();
    const [createProject] = useCreateProject();

    const projects = data && data.projects || [];

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
                            onClick={() => updateProject({variables: {id: project._id}})}>Update Project</button> 
                            <button 
                            className="btn btn-danger"
                            onClick={() => deleteProject({variables: {id: project._id}})}>
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

export default withApollo(Projects, { getDataFromTree });