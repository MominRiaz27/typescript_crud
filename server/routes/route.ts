import { Router } from 'express';
import { createUser,getUser, updateUser,deleteUser } from '../controllers/controller';
import signupValidation from '../validation/dataValidation';

const router = Router();

router.post('/createUser', signupValidation , createUser);
router.get('/getUser', getUser);
router.put('/updateUser', updateUser);
router.delete('/deleteUser', deleteUser);

export default router;
