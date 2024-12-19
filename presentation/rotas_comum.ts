import { Application } from "express";

export abstract class Rotas_comuns{
    _app : Application;

    constructor(app:Application){
        this._app = app;
        this.configurar_rotas();
    }
    
    abstract configurar_rotas(): Application
}