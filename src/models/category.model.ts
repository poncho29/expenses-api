import { DataTypes, Model, Sequelize } from 'sequelize';

const CATEGORY_TABLE = 'Categories'

const CategorySchema = {
  id: {
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
    type: DataTypes.INTEGER
  },
  name: {
    allowNull: false,
    type: DataTypes.STRING
  },
  type: {
    type: DataTypes.INTEGER,
  },
  createdAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'created_at',
    defaultValue: DataTypes.NOW
  },
  updatedAt: {
    allowNull: false,
    type: DataTypes.DATE,
    field: 'updated_at',
    defaultValue: DataTypes.NOW
  }
}

class Category extends Model {
  static associate() {}

  static config(sequelize: Sequelize){
    return {
      sequelize,
      tableName: CATEGORY_TABLE,
      modelName: 'Category'
    }
  }
}

export { Category, CategorySchema, CATEGORY_TABLE };
