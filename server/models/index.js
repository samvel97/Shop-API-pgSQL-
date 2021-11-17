const sequelize = require('../db')
const {DataTypes} = require('sequelize')

const User = sequelize.define('user',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    user:{type:DataTypes.STRING, unique:true},
    email:{type:DataTypes.STRING, unique:true},
    password:DataTypes.STRING,
})

const Group = sequelize.define('group',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, unique:true, allowNull:false},
})

const Ticket = sequelize.define('ticket',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, allowNull:false},
    discription:{type:DataTypes.TEXT, allowNull:false},
    document:DataTypes.STRING,
    comments:DataTypes.TEXT
})
const TicketComments = sequelize.define("ticket_comments",{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    name:{type:DataTypes.STRING, defaultValue:'task'},
    comments:DataTypes.TEXT
})

const TicketGroups = sequelize.define('ticket_group',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
})

const Role = sequelize.define('role',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    role:{type:DataTypes.STRING, unique:true, allowNull:false},
})

const UserInfo = sequelize.define('user_info',{
    id:{type:DataTypes.INTEGER, primaryKey:true, autoIncrement:true},
    title:{type:DataTypes.STRING, allowNull:false},
    description:{type:DataTypes.TEXT, allowNull:false},
})



Ticket.hasMany(TicketComments)
TicketComments.belongsTo(Ticket)

User.hasMany(Ticket)
Ticket.belongsTo(User)

Group.hasMany(User)
User.belongsTo(Group)


Role.hasMany(User)
User.belongsTo(Role)


module.exports = {
    User,
    Ticket,
    Group,
    UserInfo,
    Role,
    TicketGroups,
    TicketComments
}