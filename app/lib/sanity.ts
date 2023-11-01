import { createClient } from "next-sanity"

const projectId = '2i7sz6l3'
const dataset = 'production'
const apiVersion = '2023-01-01'

export const client = createClient({
    projectId,
    dataset,
    apiVersion,
    useCdn: true,
});
