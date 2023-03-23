import express from 'express';
import bodyParser from 'body-parser';
import morgan from 'morgan';

import userRoutes from '@/routes/user';

const app = express();

app.use(bodyParser.json());
app.use(morgan('common'));

app.get('/', (_req, res) => {
	res.status(200);
	res.json({
		message: 'OK',
	});
});
app.use('/users', userRoutes);

export default app;
