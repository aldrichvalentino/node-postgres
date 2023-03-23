import {
	type NextFunction,
	type Request,
	type Response,
} from 'express';

type ExpressMiddleware = (
	req: Request,
	res: Response,
	next?: NextFunction,
) => Promise<void>;

const getUsers: ExpressMiddleware = async (_req, res) => {
	res.status(200);
	res.json({
		message: 'Get Users',
	});
};

const createUser: ExpressMiddleware = async (req, res) => {
	console.log(req.body);

	res.status(201);
	res.json({
		message: 'Create User',
	});
};

export default {
	getUsers,
	createUser,
};
