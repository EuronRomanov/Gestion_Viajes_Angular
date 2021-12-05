import {  
    reducerDestinosViajes,
    DestinosViajesState,
    initializeDestinosViajesState,
    NuevoDestinoAction,
    DestinosViajesActionTypes,
    InitMyDataAction
} from "./destinos-viajes-state.model";
import { DestinoViaje } from "./destino-viaje.model";

describe('reducerDestinosViajes',()=>{
    it('should reduce init data', ()=>{
        const prevState:DestinosViajesState=initializeDestinosViajesState();
        const action:InitMyDataAction=new InitMyDataAction(['destino','destino 2']);
        const newState:DestinosViajesActionTypes=reducerDestinosViajes(prevState,action);
        expect(newState.items.length).toEqual(2);
        expect(newState.items[0].n).toEqual('destino 1');
    });
    it('should reduce new item added', ()=>{
        const prevState:DestinosViajesState=initializeDestinosViajesState();
        const action:InitMyDataAction=new NuevoDestinoAction(new DestinoViaje('barcelona','url'));
        const newState:DestinosViajesActionTypes=reducerDestinosViajes(prevState,action);
        expect(newState.items.length).toEqual(1);
        expect(newState.items[0].n).toEqual('barcelona');
    });
});