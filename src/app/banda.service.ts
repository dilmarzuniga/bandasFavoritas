import { Injectable } from '@angular/core';

import { Banda } from './banda';
import { BANDAS } from './bandas-falsas';

@Injectable()
export class BandaService {
    getBandas(): Promise<Banda[]> {
        //return Promise.resolve(BANDAS);

        return new Promise(resolve => {
            // simula la latencia del servidor de 3 segundos
            setTimeout(() => resolve(BANDAS), 3000);
        });
    }
    
    /*getBandas(): Banda[]{
        return BANDAS;
    };*/
}
