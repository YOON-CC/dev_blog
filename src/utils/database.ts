import { MongoClient } from "mongodb";

const url = `${process.env.NEXT_PUBLIC_REACT_APP_DB_URL}`;

const options: any = { useNewUrlParser: true };
let connectDB: Promise<MongoClient>;

if (process.env.NODE_ENV === "development") {
  // 개발 중 재실행을 막음
  if (!global._mongo) {
    global._mongo = new MongoClient(url, options).connect();
  }
  connectDB = global._mongo;
} else {
  connectDB = new MongoClient(url, options).connect();
}

export { connectDB };
