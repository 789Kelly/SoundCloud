"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Song.belongsToMany(models.Playlist, {
        through: models.PlaylistSong,
        foreignKey: "songId",
        otherKey: "playlistId",
      });
      Song.hasMany(models.Comment, {
        foreignKey: "songId",
        onDelete: "CASCADE",
        hooks: true,
      });
      Song.belongsTo(models.User, {
        foreignKey: "userId",
      });
      Song.belongsTo(models.Album, {
        foreignKey: "albumId",
      });
    }
  }
  Song.init(
    {
      userId: {
        allowNull: false,
        type: DataTypes.INTEGER,
      },
      albumId: {
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 60],
        },
      },
      description: {
        type: DataTypes.STRING,
      },
      url: {
        allowNull: false,
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
      imageUrl: {
        type: DataTypes.STRING,
        validate: {
          len: [1, 256],
        },
      },
    },
    {
      sequelize,
      modelName: "Song",
    }
  );
  return Song;
};
