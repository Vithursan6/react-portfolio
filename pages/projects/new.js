
import ProjectForm from "../../components/forms/ProjectForm";
import withApollo from "../../hoc/withApollo";
import withAuth from "../../hoc/withAuth";


const ProjectNew= () =>  {



    return (
        <>
            <div className="bwm-form mt-5">
                <div className="row">
                    <div className="col-md-5 mx-auto">
                        <h1 className="page-title">Add New Project</h1>
                        <ProjectForm onSubmit={data => alert(JSON.stringify(data))} />
                    </div>
                </div>
            </div>
        </>
    )
}

export default withApollo(withAuth(ProjectNew, 'admin'));