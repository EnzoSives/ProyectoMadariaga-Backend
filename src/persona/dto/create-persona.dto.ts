import { IsString, IsInt, IsDate, IsBoolean, IsOptional, IsEmail, IsNumberString } from 'class-validator';

export class CreatePersonaDto {
  @IsString()
  nombre: string;

  @IsString()
  apellido: string;

  @IsNumberString()
  dni: number;

  @IsInt()
  genero: number;

  @IsDate()
  fecha_nacimiento: Date;

  @IsString()
  lugar_de_nacimiento: string;

  @IsString()
  lugar_de_residencia: string;

  @IsInt()
  estadoCivil: number;

  @IsString()
  cuil: string;

  @IsString()
  domicilio: string;

  @IsString()
  barrio: string;

  @IsInt()
  vivienda: number;

  @IsEmail()
  email: string;

  @IsString()
  telefono: string;

  @IsBoolean()
  empleoActual: boolean;

  @IsString()
  @IsOptional()
  empleoActualData?: string;

  @IsBoolean()
  escolaridad: boolean;

  @IsString()
  @IsOptional()
  escolaridadData?: string;

  @IsBoolean()
  terciario: boolean;

  @IsString()
  @IsOptional()
  terciarioData?: string;

  @IsBoolean()
  universitario: boolean;

  @IsBoolean()
  curso: boolean;

  @IsBoolean()
  experiencia_laboral: boolean;

  @IsInt()
  id_Imagen: number;
}
