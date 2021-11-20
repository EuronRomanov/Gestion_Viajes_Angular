//import { v4 as uuid } from "uuid";
export class DestinoViaje {
    id!:number;
    private selected!: boolean;
    public servicios:string[];
    constructor(public n:string, public u:string, public votes:number=0) {
        this.servicios=['pileta','desayuno'];
    }
    isSelected():boolean{
        return this.selected;
    }
    setSelected(s:boolean){
        this.selected=s;
    }

    voteUp(){
        this.votes++;
    }
    voteDown(){
        this.votes--;
    }
}