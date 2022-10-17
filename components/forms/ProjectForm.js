import { useForm } from "react-hook-form"




const ProjectForm = ({onSubmit}) => {

    const {handleSubmit, register } = useForm();

    return (

        // <div>
        //     <form action="/action_page.php">
        //     <input type="file" id="myFile" name="filename" />
        //     <input type="submit" />
        //     </form>
        // </div>

        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group">
                <label htmlFor="title">Title</label>
                <input
                ref={register}
                name="title"
                type="text"
                className="form-control"
                id="title"/>
            </div>

            <div className="form-group">
                <label htmlFor="url">Website</label>
                <input
                ref={register}
                name="url"
                type="url"
                className="form-control"
                id="url"/>
            </div>

            <div className="form-group">
                <label htmlFor="technologies">Technologies</label>
                <input
                ref={register}
                name="technologies"
                type="text"
                className="form-control"
                id="location"/>
            </div>

            <div className="form-group">
                <label htmlFor="description">Description</label>
                <textarea
                ref={register}
                name="description"
                rows="5"
                type="text"
                className="form-control"
                id="description">
                </textarea>
            </div>

            <button
                type="submit"
                className="btn btn-primary">Create
            </button>
            </form>
    )
}

export default ProjectForm;