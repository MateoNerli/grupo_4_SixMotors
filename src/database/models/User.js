module.exports = (sequelize, dataTypes) => {
  let alias = "User";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(50),
      allowNull: false,
    },
    lastname: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    user: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    type: {
      type: dataTypes.STRING(45),
      allowNull: false,
      defaultValue: 0,
    },
    email: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    password: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    img: {
      type: dataTypes.STRING(255),
      allowNull: true,
      defaultValue: "../public/images/users/default.png",
    },
    country: {
      type: dataTypes.STRING(255),
      allowNull: false,
    },
    cel: {
      type: dataTypes.STRING(45),
      allowNull: true,
    },
    reviews: {
      type: dataTypes.STRING(512),
      allowNull: true,
    },
  };
  let configurations = {};

  const User = sequelize.define(alias, columns, configurations);

  User.associate = (models) => {
    User.hasMany(models.Order, {
      as: "orders",
      foreignKey: "userId",
    });
  };

  return User;
};
