

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
    const createdProject = await ctx.models.Project.create(input);
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

exports.userQueries = {
  user: (root, args, ctx) => {
    return ctx.models.User.getAuthUser(ctx);
  }
}

exports.userMutations = {

  signUp: async (root, { input }, ctx) => {
    const registeredUser = await ctx.models.User.signUp(input);
    return registeredUser._id;
    
  },
  signIn: (root, { input }, ctx) => {
    return ctx.models.User.signIn(input, ctx);

  },
  signOut: (root, args, ctx) => {
    return ctx.models.User.signOut(ctx);
    
  }
}