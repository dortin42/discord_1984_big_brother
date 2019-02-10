import * as Discord from 'discord.js'

export default class BigBrotherClient {
    private client: Discord.Client;

    constructor() {
        this.client = new Discord.Client();
        this.client.on('ready', () => {
            console.log(`Connected as ${this.client.user.tag}`);
        });
    }

    public login(token: string) {
        this.client.login(token)
        .then(_ => console.log(`Log in success`))
        .catch(e => console.error(e));
    }

    public disconnect() {
        this.client.destroy()
        .then(() => console.log('Disconnected'))
        .catch(e => console.error(e));
    }
}
