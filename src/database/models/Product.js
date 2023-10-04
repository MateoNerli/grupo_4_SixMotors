module.exports = (sequelize, dataTypes) => {
  let alias = "Product";
  let columns = {
    id: {
      type: dataTypes.INTEGER(11),
      primaryKey: true,
      autoIncrement: true,
      allowNull: false,
    },
    name: {
      type: dataTypes.STRING(100),
      allowNull: false,
    },
    type: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    description: {
      type: dataTypes.STRING(1000),
      allowNull: false,
    },
    img: {
      type: dataTypes.STRING(100),
      allowNull: true,
    },
    category: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    colors: {
      type: dataTypes.STRING(45),
      allowNull: false,
    },
    price: {
      type: dataTypes.DECIMAL(10, 2),
      allowNull: false,
    },
    marked: {
      type: dataTypes.BOOLEAN,
      defaultValue: false,
    },
  };

  let configurations = {};

  const Product = sequelize.define(alias, columns, configurations);

  return Product;
};
