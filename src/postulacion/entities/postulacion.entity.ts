import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Postulacion {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    @Column()
    puesto: string;

    @Column()
    descripcion: string;

    @Column()
    vencimiento: Date;

    @Column()
    modalidad: string;

    @Column()
    cupos: number;

    @Column()
    edadMin: number;

    @Column()
    edadMax: number;

    //id_Empresa
    //id_postulados
    //id_rubro


    constructor(nombre: string, puesto: string, descripcion: string, vencimiento:Date, modalidad: string, cupos: number, edadMin: number, edadMax: number) {
        this.nombre = nombre;
        this.puesto = puesto;
        this.descripcion = descripcion;
        this.vencimiento = vencimiento;
        this.modalidad = modalidad;
        this.cupos = cupos;
        this.edadMin = edadMin;
        this.edadMax = edadMax;
    }

    //  GETTERS

    public getId(): number {
        return this.id;
    }

    public getNombre(): string {
        return this.nombre;
    }

    public getPuesto(): string {
        return this.puesto;
    }

    public getDescripcion(): string {
        return this.descripcion;
    }

    public getVencimiento(): Date {
        return this.vencimiento;
    }

    public getModalidad(): string {
        return this.modalidad;
    }

    public getCupos(): number {
        return this.cupos;
    }

    public getEdadMin(): number {
        return this.edadMin;
    }

    public getEdadMax(): number {
        return this.edadMax;
    }

    /// SETTERS

    public setId(id: number) {
        this.id = id;
    }

    public setNombre(nombre: string) {
        this.nombre = nombre;
    }

    public setPuesto(puesto: string) {
        this.puesto = puesto;
    }

    public setDescripcion(descripcion: string) {
        this.descripcion = descripcion;
    }

    public getVencimeinto(vencimiento:Date) {
        this.vencimiento = vencimiento;
    }

    public setModalidad(modalidad:string) {
        this.modalidad = modalidad;
    }

    public setCupos(cupos:number) {
        this.cupos = cupos;
    }

    public setEdadMin(edadMin:number) {
        this.edadMin = edadMin;
    }

    public setEdadMax(edadMax:number) {
        this.edadMax = edadMax;
    }

}
