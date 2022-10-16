
const { projects, users } = require('./data');
const Project = require('../database/models/project');
const User = require('../database/models/user');

class myDb {

    async clean() {
        await User.deleteMany({});
        await Project.deleteMany({});
    }

    async addData() {
        await User.create(users);
        await Project.create(projects);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }

}

module.exports = new myDb();