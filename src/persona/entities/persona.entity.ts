import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Persona {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombre: string;

    

    constructor(){

        

    }

}



