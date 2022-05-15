module.exports = (sequelize, DataTypes) => {
  const link = sequelize.define("link", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    image: {
      type: DataTypes.STRING,
      allowNull: true,
    },
  });

  link.associate = (models) => {
    // link.belongsTo(models.user, {
    //   onDelete: "cascade",
    // });

    link.hasMany(models.account, {
      onDelete: "cascade",
    });
  };

  return link;
};
