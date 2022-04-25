import {Bson,MongoClient,} from "https://deno.land/x/mongo@v0.29.4/mod.ts";

const client = new MongoClient();

await client.connect("mongodb+srv://Constanza:Konecta+865@products.fq2mz.mongodb.net/DenoCrud?retryWrites=true&w=majority&authMechanism=SCRAM-SHA-1");

const db = client.database('DenoCrud');

export default db;
