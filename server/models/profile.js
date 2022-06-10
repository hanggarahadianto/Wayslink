module.exports = (sequelize, DataTypes) => {
  const profile = sequelize.define("profile", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  // post.associate = (models) => {
  //   // link.belongsTo(models.user, {
  //   //   onDelete: "cascade",
  //   // });
  //   // link.hasMany(models.account, {
  //   //   onDelete: "cascade",
  //   // });
  // };

  return profile;
};
