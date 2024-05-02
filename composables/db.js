import {DataTypes, Sequelize} from "sequelize";

const db = new Sequelize({
    dialect: 'sqlite',
    storage: 'database.sqlite'
})

await db.authenticate()

const Dogs = db.define('dogs',{
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    breed: {
        type: DataTypes.STRING,
        allowNull: false
    },
},{
    createdAt: false,
    updatedAt: false,

})

await Dogs.sync()
if(await Dogs.count()===0)
    await Dogs.bulkCreate([
        {
            name: 'Rex',
            breed: 'German Shepherd'
        },
        {
            name: 'Fuffy',
            breed: 'Labrador'
        },
        {
            name: 'Doggo',
            breed: 'Basset town'
        }
    ])

export function useDogsDb(){
    return Dogs
}

const Contacts = db.define('contacts', {
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        primaryKey: true
    },
    fullName: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
},{
    createdAt: false,
    updatedAt: false,

})
await Contacts.sync()

export function useContactsDb() {
    return Contacts
}