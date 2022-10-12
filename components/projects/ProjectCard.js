




const ProjectCard = ({project}) => {

    return (
        <div className="card subtle-shadow no-border">
            <div className="card-body">
                <h5 className="card-title">{project.title}</h5>
                <h6 className="card-subtitle mb-2 text-muted">{project.description}</h6>
                <p className="card-text fs-2">{project.technologies}</p>
            </div>
            <div className="card-footer no-border">
                <small className="text-muted">{project.url}</small>
            </div>
        </div>


    )

}

export default ProjectCard;