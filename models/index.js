const User = require("./User");
const Task = require("./Task");
const Project = require("./Project");
const Note = require("./Note");

User.hasMany(Project, {
    foreignKey: "userId",
});

Project.belongsTo(User, {
    foreignKey: "userId",
});

Project.hasMany(Task, {
    foreignKey: "projectId",
    onDelete: "CASCADE",
});

Task.belongsTo(Project, {
    foreignKey: "projectId",
});

Task.hasMany(Note, {
    foreignKey: 'notId',
    onDelete: "CASCADE",
});

Note.belongsTo(Task, {
    foreignKey: 'notId',
});



module.exports = {
    User,
    Task,
    Project,
    Note,
};