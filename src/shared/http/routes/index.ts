import { Router } from "express";

const routes = Router();

routes.get('/', (request, response) => {
    return response.json({ message: 'Olá Dev!' })
});

export default routes;