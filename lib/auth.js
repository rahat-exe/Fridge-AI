import { betterAuth } from "better-auth";
import { mongodbAdapter } from "better-auth/adapters/mongodb";
import { MongoClient } from "mongodb";


const client = new MongoClient(process.env.MONGODB_URL);
const db = client.db();

export const auth = betterAuth({
    database:mongodbAdapter(db),
    secret:process.env.BETTER__AUTH_SECRET,
    emailAndPassword:{
        enabled:true,
    }
    
})