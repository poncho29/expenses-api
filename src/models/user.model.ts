import { DataTypes, Model, Sequelize } from 'sequelize';

const USER_TABLE = 'Users'

const UserSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER,
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  email: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  phone: {
    type: DataTypes.STRING,
  },
  password: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'create_at',
    defaultValue: DataTypes.NOW
  }
}

class User extends Model {
  static associate() {}

  static config(sequelize: Sequelize){
    return {
      sequelize,
      tableName: USER_TABLE,
      modelName: 'User'
    }
  }
}

export { User, UserSchema, USER_TABLE };
