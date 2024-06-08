import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class ExperienciaLaboral {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;
    @Column()
    puesto: string;
    @Column()
    desde: Date;
    @Column()
    hasta: Date;

    //id_persona: number;
    //ManytoOne(persona: Persona)
    
    constructor(nombre: string, puesto: string, desde: Date, hasta: Date) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.desde = desde;
        this.hasta = hasta;
    }


    public getId(): number {
        return this.id;
    }
    public getNombre(): string {
        return this.nombre;
    }
    public getDesde(): Date {
        return this.desde;
    }
    public getHasta(): Date {
        return this.hasta;
    }

    public setId(id: number){
        this.id = id;
    }

    public setNombre(nombre: string){
        this.nombre = nombre;
    }
    public setDesde(desde: Date){
        this.desde = desde;
    }
    public setHasta(hasta: Date){
        this.hasta = hasta;
    } 

}


