import { Application } from "express";
import { Rotas_comuns } from "./rotas_comum";

export class Rotas_usuario extends Rotas_comuns{
    
    constructor(app:Application){
        super(app)
    }

    configurar_rotas(): Application{
        this._app.route('/usuario/cadastro')
        .post((req: Request, res: Response) => { })

        this._app.route('/usuario/login')
        .post((req: Request, res: Response) => { })
        
        this._app.route('/usuario/amigo_oculto')
        .get((req: Request, res: Response) => { })
        
        return this._app;
    }
}