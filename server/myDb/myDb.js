
const { projects } = require('./data');
const Project = require('../database/models/project');

class myDb {

    async clean() {
        await Project.deleteMany({});
    }

    async addData() {
        await Project.create(projects);
    }

    async populate() {
        await this.clean();
        await this.addData();
    }

}

module.exports = new myDb();