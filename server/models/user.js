module.exports = (sequelize, DataTypes) => {
  const user = sequelize.define("user", {
    email: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
  });

  user.associate = (models) => {
    user.hasMany(models.link, {
      onDelete: "cascade",
    });
  };

  return user;
};
