import React from "react";
import { useRouter } from "next/router";



// const ProjectsDetail = () => {

//     const router = useRouter();
//     const id = router.query.id;

//     return (
//         <h1>I am Detail Page with ID: {id}</h1>
//     )
// }

class ProjectsDetail extends React.Component {

    //Called on server
    static getInitialProps({query}) {
        //anything returned will be in this.props
        return {query};
    }

    render() {
        const {id} = this.props.query;
        return (
            <h1>I am Detail Page with ID: {id}</h1>
        )
    }
}

export default ProjectsDetail;