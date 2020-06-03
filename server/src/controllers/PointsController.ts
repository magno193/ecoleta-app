import { Request, Response } from 'express'
import knex from '../database/connection';

class PointsController {
    async create(request: Request, response: Response) {

        const {
            name,
            email,
            whatsapp,
            city,
            uf,
            latitude,
            longitude,
            items
        } = request.body;

        const trx = await knex.transaction();
        const point = {
            image: 'img-fake',
            name,
            email,
            whatsapp,
            city,
            uf,
            latitude,
            longitude,
        }
        const insertedIds = await trx('points').insert(point);

        const point_id = insertedIds[0];

        const pointItems = items.map((item_id: number) => {
            return {
                item_id,
                point_id: point_id,
            }
        })

        await trx('point_items').insert(pointItems);


        return response.json({ 
            id: point_id,
            ...point,
        });

    }
}

export default PointsController;