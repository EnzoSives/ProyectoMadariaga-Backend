export class CreatePostulacionDto {
    readonly nombre : string;
    readonly puesto : string;
    readonly descripcion: string;
    readonly vencimiento : Date;
    readonly modalidad: string;
    readonly cupos : number;
    readonly edadMin : number;
    readonly edadMax : number;
}
