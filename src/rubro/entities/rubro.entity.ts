import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Rubro {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    descripcion: string;

    constructor(nombre: string, descripcion: string) {
        this.nombre = nombre;
        this.descripcion = descripcion
    }

    //  GETTERS

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    /// SETTERS

    public setId(id: number) {
        this.id = id;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

}
