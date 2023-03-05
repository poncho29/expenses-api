import { Request, Response } from "express";


const getOne = (req: Request, res: Response) => {
  res.json({
    msg: 'getOne space'
  })
}

const getAll = (req: Request, res: Response) => {
  res.json({
    msg: 'getAll spaces'
  })
}

const create = (req: Request, res: Response) => {
  res.json({
    msg: 'create space'
  })
}

const update = (req: Request, res: Response) => {
  res.json({
    msg: 'update space'
  })
}

const remove = (req: Request, res: Response) => {
  res.json({
    msg: 'remove space'
  })
}


export {
  getOne, getAll, create, update, remove
}
