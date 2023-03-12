import { DataTypes, Model, Sequelize } from 'sequelize';

const SPACE_TABLE = 'Spaces'

const SpaceSchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  color: {
    type: DataTypes.STRING
  },
  total: {
    defaultValue: 0,
    type: DataTypes.FLOAT
  },
  totalExpenses: {
    defaultValue: 0,
    type: DataTypes.FLOAT
  },
  totalRevenue: {
    defaultValue: 0,
    type: DataTypes.FLOAT
  },
  createdAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    type: DataTypes.DATE,
    defaultValue: DataTypes.NOW
  }
}

class Space extends Model {
  static associate() {}

  static config(sequelize: Sequelize){
    return {
      sequelize,
      tableName: SPACE_TABLE,
      modelName: 'Space'
    }
  }
}

export { Space, SpaceSchema, SPACE_TABLE }
