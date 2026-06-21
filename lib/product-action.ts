'use server';

import { index } from '@/lib/pinecone'
import { prisma } from '@/lib/prisma'

export async function searchProduct(query: string) {

    const results = await index.namespace("data").searchRecords({
        query: {
            topK: 3,
            inputs: {
            text: query
            }
        }
    });

    // console.log(results.result.hits)

    type pdt = {
        title : string;
        amazonLink : string;
        imageURL : string;
    }

    const data : pdt[] = []
    for (const item of results.result.hits) {
        const pId = item._id
        const product = await prisma.product.findUnique({
            where: {
                id: pId,
            },
        });
        if(product){
            data.push({title: product.title, amazonLink: product.amazonLink, imageURL: product.imageURL})
        }
    }

    // console.log(data);
    return data;
}