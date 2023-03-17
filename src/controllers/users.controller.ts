import { NextFunction, Request, Response } from "express"
import boom from "@hapi/boom"

import { models } from "../db/config"

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    const user = await models.User.findByPk(id);

    if (!user) {
      throw boom.notFound('User not found')
    }

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
      models.User.count(),
      models.User.findAll({
        limit: Number(limit),
        offset: Number(offset)
      })
    ])

    res.status(201).json({
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
    console.log(body)
    const user = await models.User.findOne({ where: { email: body.email } })

    if (user) throw boom.badRequest('Email is already in use')

    const newUser = await models.User.create(body)

    res.status(201).json({
      newUser
    })
  } catch (error) {
    next(error)
  }
}

const update = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params
    const { body } = req

    const user = await models.User.findByPk(id)

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

    const user = await models.User.findByPk(id)

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
