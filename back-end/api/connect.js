import { MongoClient } from "mongodb";

const URI =
  "mongodb+srv://kiraryuuku10_db_user:6hVUu91OA1ye2RHc@project.jhddoor.mongodb.net/?appName=Project";

const client = new MongoClient(URI);

export const db = client.db("projectSpotify");

console.log(db);
