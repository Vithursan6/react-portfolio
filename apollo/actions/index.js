import { useQuery, useMutation, useLazyQuery } from '@apollo/react-hooks';
import { 
    GET_PROJECTS,
    PUT_PROJECT,
    DELETE_PROJECT,
    ADD_PROJECT,
    SIGN_IN,
    SIGN_OUT,
    GET_USER
} from '../queries'




export const useGetProject = () => useQuery(GET_PROJECTS);
export const useUpdateProject = () => useMutation(PUT_PROJECT);


export const useDeleteProject = () => useMutation(DELETE_PROJECT, {
        update(cache, {data: {deleteProject}}) {
            const {projects} = cache.readQuery({query: GET_PROJECTS })
            const newProjects = projects.filter(p => p._id !== deleteProject);
            cache.writeQuery({
                query: GET_PROJECTS, 
                data: { projects: newProjects}
            });
        }
    });


export const useCreateProject = () => useMutation(ADD_PROJECT, {
        update(cache, {data: {createProject}}) {
            const {projects} = cache.readQuery({query: GET_PROJECTS})
            cache.writeQuery({
                query: GET_PROJECTS,
                data: { projects: [...projects, createProject]}
            })
        }
    });

//Auth Actions Start

export const useSignIn = () => useMutation(SIGN_IN, {
    update(cache, { data: { signIn: signedInUser }}) {
        cache.writeQuery({
            query: GET_USER,
            data: { user: signedInUser }
        })
    }
})

export const useSignOut = () => useMutation(SIGN_OUT)

export const useLazyGetUser = () => useLazyQuery(GET_USER)
export const useGetUser = () => useQuery(GET_USER)


//Auth Action End