import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Curso {
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

    constructor(nombre: string, desde: Date, hasta: Date) {
        this.nombre = nombre;
        this.desde = desde;
        this.hasta = hasta;
    }

    getNombre() {
        return this.nombre;
    }

    setNombre(nombre: string) {
        this.nombre = nombre;
    }
    getDesde() {
        return this.desde;
    }

    setDesde(desde: Date) {
        this.desde = desde;
    }
    getHasta() {
        return this.hasta;
    }

    setHasta(hasta: Date) {
        this.hasta = hasta;
    }
}
