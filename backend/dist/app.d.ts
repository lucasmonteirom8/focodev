import { Application } from 'express';
declare class App {
    app: Application;
    port: number;
    constructor(appInit: {
        port: number;
        middleWares: any;
        controllers: any;
    });
    private middleWares;
    private routes;
    listen(): void;
}
export default App;
