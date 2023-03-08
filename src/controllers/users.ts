import { NextFunction, Request, Response } from "express"
import boom from "@hapi/boom"
import User from "../models/user"

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    if (!id) {
      throw boom.notFound('User not found')
    }

    const user = await User.findByPk(id);

    res.json({
      user
    })
  } catch (error) {
    next(error)
  }
}

const getAll = async (req: Request, res: Response, next: NextFunction) => {
  const { limit = 5, offset = 0 } = req.query;

  try {
    const [count, users] = await Promise.all([
      User.count(),
      User.findAll({
        limit: Number(limit),
        offset: Number(offset)
      })
    ])

    res.status(200).json({
      count,
      users
    })
  } catch (error) {
    next(error)
  }
}

const create = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { body } = req

    const user = await User.create(body)

    res.status(201).json({
      user
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req

    const user = await User.findByPk(id)

    if (!user) {
      throw boom.notFound('User not found')
    }

    await user.update(body);

    res.json({
      user
    })
  } catch (error) {
    next(error)
  }
}

const remove = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const user = await User.findByPk(id)

    if (!user) {
      throw boom.notFound('User not found')
    }

    await user.destroy()

    res.json({
      msg: 'User deleted successfully'
    })
  } catch (error) {
    next(error)
  }
}

export {
  getOne, getAll, create, update, remove
}
