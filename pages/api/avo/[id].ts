import { NextApiRequest, NextApiResponse } from "next"
import DB from '@database'

const allAvos = async (reques: NextApiRequest, response: NextApiResponse) =>{
    const db = new DB();
    const id = reques.query.id;
    const avo = await db.getById(id as string);
    
    response.status(200).json(avo);
}

export default allAvos