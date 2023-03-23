import express from 'express';

import userController from '@/controllers/user';

const app = express();

app.get('/', userController.getUsers);
app.post('/', userController.createUser);

export default app;
