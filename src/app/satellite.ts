import { read } from 'fs';
import { JsonPipe } from '@angular/common';

export class Satellite {
    name: string;
    orbitType: string;
    type: string;
    operational: boolean;
    launchDate: string;
    changeWarning: boolean;
    

    constructor(name: string, type: string, launchDate:string, orbitType: string, operational: boolean, changeWarning:boolean) {
       this.name = name;
       this.orbitType = orbitType;
       this.type = type;
       this.operational = operational;
       this.launchDate = launchDate;
       this.changeWarning = changeWarning;
    }

    shouldShowWarning(boolean) {
        if (this.type === 'Space Debris') {
        this.changeWarning = true;
        return this.changeWarning;
        } 
        else {
            this.changeWarning = false;
            return this.changeWarning;
         }
      }
    

}
