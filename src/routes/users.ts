import { Router} from "express"
import {
  getOne,
  getAll,
  create,
  update,
  remove
} from "../controllers/users"

const router = Router()

router.get('/:id', getOne)
router.get('/', getAll)
router.post('/', create)
router.put('/:id', update)
router.delete('/:id', remove)

export default router
