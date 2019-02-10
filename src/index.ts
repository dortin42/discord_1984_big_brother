import BigBrotherClient from './client/client'
import * as dotenv from "dotenv";

dotenv.config();

const client = new BigBrotherClient();

client.login(process.env.TOKEN);

process.once('SIGINT', () => {
    client.disconnect();
    process.exit(0);
});
