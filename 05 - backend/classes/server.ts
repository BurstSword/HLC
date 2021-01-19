import express from 'express';

export class Server {

    public app: express.Application;
    public port: number = 7564;
    constructor() {
        this.app = express();
    }
    

    start(data: () => void) {
        this.app.listen(this.port, data)
    }

}