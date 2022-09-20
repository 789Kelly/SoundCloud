"use strict";
const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Playlist extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Playlist.belongsToMany(models.Song, {
        through: models.PlaylistSong,
        foreignKey: "playlistId",
        otherKey: "songId",
      });
      Playlist.belongsTo(models.User, {
        foreignKey: "userId",

        // onDelete: "CASCADE",
        // hooks: true,
      });
    }
  }
  Playlist.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: "Playlist",
    }
  );
  return Playlist;
};
