import express from 'express';
import {graphqlHTTP } from 'express-graphql';
import  { schema } from './Schema'
import cors from 'cors';
import { createConnection} from 'typeorm'
import { Users } from './Entities/Users'

const main = async () => {

    await createConnection({
        type: 'mysql',
        database: "ReactGraphQL",
        username: "",
        password: "",
        logging: true,
        synchronize: false,
        entities: [Users]
    })

    const app = express();
    app.use(cors());
    app.use(express.json());
    app.use("/graphql", graphqlHTTP({
        schema,
        graphiql: true
    }))
    let port: number = 3001;

    app.listen(3001, () => { console.log("Server running on port 3001")});

}

// catch any erros on app
main().catch((e) => {
    console.log(e);
})