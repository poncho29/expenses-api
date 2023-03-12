import { NextFunction, Request, Response } from "express";
import boom from "@hapi/boom";

import { Space } from "../models/spaces.model";


const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const space = await Space.findByPk(id)

    if (!space) throw boom.notFound('Space not found')

    res.json({
      space
    })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { limit = 5, offset = 0 } = req.query

    const [count, spaces] = await Promise.all([
      Space.count(),
      Space.findAll({
        limit: Number(limit),
        offset: Number(offset)
      })
    ])

    res.json({
      count,
      spaces
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req

    const space = await Space.create(body)

    res.json({
      space
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req

    const space = await Space.findByPk(id)

    if (!space) throw boom.notFound('Space not found')

    await space.update(body);

    res.json({
      space
    })
  } catch (error) {
    next(error)
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const space = await Space.findByPk(id)

    if (!space) throw boom.notFound('Space not found')

    await space.destroy()

    res.json({
      msg: 'Space deleted successfully'
    })
  } catch (error) {

  }
}

export {
  getOne, getAll, create, update, remove
}
