import {NextApiRequest, NextApiResponse} from "next";
import {without} from 'lodash';

import prismadb from "@/lib/prismadb";
import serverAuth from "@/lib/serverAuth";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    try {
        if (req.method === 'POST') {
            const {currentUser} = await serverAuth(req);

            const {movieId} = req.body;

            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId
                }
            });

            if (!existingMovie) {
                throw new Error('No movie found');
            }

            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || ''
                },
                data: {
                    favouriteIds: {
                        push: movieId
                    }
                }
            })

            return res.status(200).json(user);
        }

        if (req.method === 'DELETE') {
            const {currentUser} = await serverAuth(req);

            const {movieId} = req.body;

            const existingMovie = await prismadb.movie.findUnique({
                where: {
                    id: movieId
                }
            });

            if (!existingMovie) {
                throw new Error('No movie found');
            }

            const user = await prismadb.user.update({
                where: {
                    email: currentUser.email || ''
                },
                data: {
                    favouriteIds: {
                        set: without(currentUser.favouriteIds, movieId)
                    }
                }
            })

            return res.status(200).json(user);
        }

        return res.status(405).end();
    } catch (error) {
        console.error(error);
        return res.status(400).end();
    }

}