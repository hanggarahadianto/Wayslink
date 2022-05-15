module.exports = (sequelize, DataTypes) => {
  const account = sequelize.define("account", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    link: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // account.associate = (models) => {
  //   account.belongsTo(models.link, {
  //     onDelete: "cascade",
  //   });

  //   // user.hasMany(models.book, {
  //   //   onDelete: "cascade",
  //   // });
  // };

  return account;
};
