import { DataTypes } from 'sequelize';
import connection from '../db/config';

const Space = connection.define('Space', {
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
})

export default Space;
