import { Sequelize } from "sequelize";

import { User, UserSchema } from "./user.model";
import { Space, SpaceSchema } from "./spaces.model";
import { Category, CategorySchema } from "./category.model";

function setupModels(sequelize: Sequelize) {
  User.init(UserSchema, User.config(sequelize))
  Space.init(SpaceSchema, Space.config(sequelize))
  Category.init(CategorySchema, Category.config(sequelize))
}

export { setupModels }
