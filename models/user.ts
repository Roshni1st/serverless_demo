import { Sequelize, DataTypes, Model } from 'sequelize';

interface UserAttributes {
  id: number;
  first_name: string | null;
  last_name: string | null;
  age: number | null;
  dob: Date | null;
  about: string | null;
}

interface UserModel extends Model<UserAttributes>, UserAttributes {}

export = (sequelize: Sequelize) => {
  const User = sequelize.define<UserModel>(
    'User',
    {
      id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: null,
      },
      last_name: {
        type: DataTypes.STRING(30),
        allowNull: true,
        defaultValue: null,
      },
      age: {
        type: DataTypes.NUMBER,
        allowNull: true,
        defaultValue: null,
      },
      dob: {
        type: DataTypes.DATE,
        allowNull: true,
        defaultValue: null,
      },
      about: {
        type: DataTypes.STRING(500),
        allowNull: true,
        defaultValue: null,
      },
    },
    {
      tableName: 'User',
      timestamps: true,
    },
  );

  return User;
};
