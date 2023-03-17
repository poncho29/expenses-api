import { NextFunction, Request, Response } from "express";
import boom from "@hapi/boom";

import { models } from "../db/config"

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const category = await models.Category.findByPk(id)

    if (!category) throw boom.notFound('Category not found')

    res.json({
      category
    })

  } catch (error) {
    next(error)
  }
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit = 5, offset = 0 } = req.query;

    const [count, categories] = await Promise.all([
      models.Category.count(),
      models.Category.findAll({
        limit: Number(limit),
        offset: Number(offset)
      })
    ])

    res.json({
      count,
      categories
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req

    const category = await models.Category.create(body)

    res.status(201).json({
      category
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req

    const category = await models.Category.findByPk(id)

    if (!category) throw boom.notFound('Category not found')

    await category.update(body)

    res.json({
      category
    })
  } catch (error) {
    next(error)
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const category = await models.Category.findByPk(id)

    if (!category) throw boom.notFound('User not found')

    await category.destroy()

    res.json({
      msg: 'Category deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

export { getOne, getAll, create, update, remove }
