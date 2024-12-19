import { Application } from "express";
import { Rotas_comuns } from "./rotas_comum";

export class Rotas_grupo extends Rotas_comuns{
    constructor(app:Application){
        super(app)
    }

    configurar_rotas(): Application{
        this._app.route('/grupos')
        .post((req: Request, res: Response) => { })
        .get((req: Request, res: Response) => { })

        this._app.route('/grupos/:id_grupo')
        .put((req: Request, res: Response) => { })
        .delete((req: Request, res: Response) => { })

        this._app.route('/grupos/:id_grupo/participantes')
        .post((req: Request, res: Response) => { })
        .get((req: Request, res: Response) => { })

        this._app.route('/grupos/:id_grupo/participantes/:id_participante')
        .put((req: Request, res: Response) => { })
        .delete((req: Request, res: Response) => { })

        this._app.route('/grupos/:id_grupo/sortear')
        .get((req: Request, res: Response) => { })
        

        return this._app;
    }


}