import { NextFunction, Request, Response } from "express"
import User from "../models/user"
import { handleHttp } from "../utils/error.handle"

const getOne = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const { id } = req.params

    if (!id) {
      // return res.status(400).json({ msg: "id is required" })
      throw new Error('error')
    }

    const user = await User.findByPk(id);

    res.json({
      user
    })
  } catch (error) {
    next(error)
    // handleHttp(res, 'ERROR_GET_USER')
  }
}

const getAll = async (req: Request, res: Response) => {
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
    handleHttp(res, 'ERROR_GET_USERS')
  }
}

const create = async (req: Request, res: Response) => {
  try {
    const { body } = req

    const user = await User.create(body)

    res.status(201).json({
      user
    })
  } catch (error) {
    handleHttp(res, 'ERROR_POST_USER')
  }
}

const update = async (req: Request, res: Response) => {
  try {
    const { id } = req.params
    const { body } = req

    const user = await User.findByPk(id)

    if (!user) return res.status(400).json({ msg: "User not found" })

    await user.update(body);

    res.json({
      user
    })
  } catch (error) {
    handleHttp(res, 'ERROR_PUT_USER')
  }
}

const remove = async (req: Request, res: Response) => {
  try {
    const { id } = req.params

    const user = await User.findByPk(id)

    if (!user) return res.status(400).json({ msg: "User not found" })

    await user.destroy()

    res.json({
      msg: 'User deleted successfully'
    })
  } catch (error) {
    handleHttp(res, 'ERROR_DELETE_USER')
  }
}

export {
  getOne, getAll, create, update, remove
}
