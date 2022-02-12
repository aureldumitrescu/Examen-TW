import Sequelize, { DATE } from 'sequelize'

const sequelize = new Sequelize({
    dialect: 'sqlite',
    storage: './lists.db'
})

const FavouriteList = sequelize.define('favouriteList',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descriere:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{min:3}
    },
    data:{
        type: Sequelize.DATE,
        defaultValue: Sequelize.NOW, 
        allowNull: true
    }
});

const Video = sequelize.define('video',{
    id:{
        type: Sequelize.INTEGER,
        allowNull: false,
        primaryKey: true
    },
    descriere:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{min:5}
    },
    titlu:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{min:5}
    },
    url:{
        type: Sequelize.STRING,
        allowNull: false,
        validate:{isUrl:true}
    }
});

FavouriteList.hasMany(Video, {
    foreignKey: 'favouriteListId'
})

Video.belongsTo(FavouriteList, {
    foreignKey: 'favouriteListId'
})

async function initialize(){
    await sequelize.authenticate()
    // await sequelize.sync({
    //     alter: true
    // })
}

export{
    initialize,
    FavouriteList,
    Video
}