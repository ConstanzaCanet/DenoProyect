import { Router } from "https://deno.land/x/oak/mod.ts";
import * as usersController from "../controllers/index.controller.ts";

const router = new Router();

router.get('/', usersController.getAllUsers)
router.post('/',usersController.saveUser)
router.get('/users',usersController.getQuery)
router.get('/:id',usersController.getUserById)
router.delete('/:id',usersController.deleteUser)

export default router;

