import type { PageServerLoad, PageServerLoadEvent } from './$types'
import {xata} from "$lib/server/db/dbConnect";

export const load: PageServerLoad = async (event: PageServerLoadEvent) => {
    const records = await xata.db["image"].select(['image.signedUrl', '*']).getMany()
    const serialized = records.toSerializable()
    return {
        data: serialized
    }
}