import React from "react";
import { useQuery } from "@apollo/react-hooks";
import { GET_PROJECT } from "@/apollo/queries";

const ProjectDetail = ({query}) => {

    const { loading, error, data } = useQuery(GET_PROJECT, {variables: { id: query.id }});

    if (loading) { return 'Loading...'};

    const project = data && data.project || {};

    return (
            <div className="portfolio-detail">
                <div className="container">

                    <div className="jumbotron">
                        <h1 className="display-3">{project.title}</h1>
                        <p className="lead">{project.description}</p>
                        <p>
                            <a className="btn btn-lg btn-success" href="#" role="button">{project.url}</a>
                        </p>
                    </div>

                    <div className="row marketing">
                        <div className="col-lg-6">
                            <h4 className="title">Technologies Used:</h4>
                            <p className="text">{project.technologies}</p>

                            <h4 className="title">Start Date</h4>
                            <p className="text">Some Start Date</p>
                        </div>

                        <div className="col-lg-6">
                            {/* TODO: days later... */}
                            <h4 className="title">Days</h4>
                            <p className="text">44</p>

                            <h4 className="title">End Date</h4>
                            <p className="text">Some End Date</p>
                        </div>
                        <div className="col-md-12">
                            <hr />
                            <h4 className="title">Description</h4>
                            <p>{project.description}</p>
                        </div>
                    </div>
                </div>
            </div>
    )
}

ProjectDetail.getInitialProps = async ({query}) => {
    return {query};
}


export default ProjectDetail;