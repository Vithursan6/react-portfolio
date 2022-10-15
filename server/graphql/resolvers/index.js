
const Project = require('../../database/models/project');

exports.projectQueries = {
      project: (root, {id}, ctx) => {
        return ctx.models.Project.getById(id);
      },
      projects: (root, args, ctx) => {
        return ctx.models.Project.getAll();
      }
}

exports.projectMutations = {
  createProject: async (root, {input}, ctx) => {
    const createdProject = await Project.create(input);
    return createdProject;
  },
  updateProject: async (root, {id, input}, ctx) => {
    const updatedProject = await ctx.models.Project.findAndUpdate(id, input);
    return updatedProject;
  },
  deleteProject: async (root, {id}, ctx) => {
    const deletedProject = await ctx.models.Project.findAndDelete(id);
    return deletedProject._id;
  }

}