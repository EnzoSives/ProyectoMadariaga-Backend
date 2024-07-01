import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Empresa {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    cuil: string;

    @Column()
    cuit:string;

    @Column()
    telefono: string;

    @Column()
    email:string;


    constructor(nombre: string, cuil:string,cuit:string,telefono:string,email:string) {
        this.nombre = nombre;
        this.cuil = cuil;
        this.cuit = cuit;
        this.telefono = telefono;
        this.email = email;
    }

    //  GETTERS

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getCuil(): string {
        return this.cuil;
    }

    public getCuit(): string {
        return this.cuit;
    }

    public getTelefono(): string {
        return this.telefono;
    }

    public getEmail(): string {
        return this.email;
    }


    /// SETTERS

    public setId(id: number) {
        this.id = id;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public setCuil(cuil: string) {
        this.cuil = cuil;
    }
    public setCuit(cuit: string) {
        this.cuit = cuit;
    }
    public setTelefono(telefono: string) {
        this.telefono = telefono;
    }
    public setEmail(email: string) {
        this.email = email;
    }
}

