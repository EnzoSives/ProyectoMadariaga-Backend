import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity('personas')
export class Persona {
  @PrimaryGeneratedColumn()
  private id: number;

  @Column({ type: 'varchar', length: 255 })
  private nombre: string;

  @Column({ type: 'varchar', length: 255 })
  private apellido: string;

  @Column({ type: 'bigint' })
  private dni: number;

  @Column({ type: 'int' })
  private genero: number;

  @Column({ type: 'date' })
  private fecha_nacimiento: Date;

  @Column({ type: 'varchar', length: 255 })
  private lugar_de_nacimiento: string;

  @Column({ type: 'varchar', length: 255 })
  private lugar_de_residencia: string;

  @Column({ type: 'int' })
  private estadoCivil: number;

  @Column({ type: 'varchar', length: 20 })
  private cuil: string;

  @Column({ type: 'varchar', length: 255 })
  private domicilio: string;

  @Column({ type: 'varchar', length: 255 })
  private barrio: string;

  @Column({ type: 'int' })
  private vivienda: number;

  @Column({ type: 'varchar', length: 255 })
  private email: string;

  @Column({ type: 'varchar', length: 20 })
  private telefono: string;

  @Column({ type: 'boolean' })
  private empleoActual: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  private empleoActualData: string;

  @Column({ type: 'boolean' })
  private escolaridad: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  private escolaridadData: string;

  @Column({ type: 'boolean' })
  private terciario: boolean;

  @Column({ type: 'varchar', length: 255, nullable: true })
  private terciarioData: string;

  @Column({ type: 'boolean' })
  private universitario: boolean;

  @Column({ type: 'boolean' })
  private curso: boolean;

  @Column({ type: 'boolean' })
  private experiencia_laboral: boolean;

  @Column({ type: 'int' })
  private id_Imagen: number;

  constructor(
    nombre: string,
    apellido: string,
    dni: number,
    genero: number,
    fecha_nacimiento: Date,
    lugar_de_nacimiento: string,
    lugar_de_residencia: string,
    estadoCivil: number,
    cuil: string,
    domicilio: string,
    barrio: string,
    vivienda: number,
    email: string,
    telefono: string,
    empleoActual: boolean,
    empleoActualData: string,
    escolaridad: boolean,
    escolaridadData: string,
    terciario: boolean,
    terciarioData: string,
    universitario: boolean,
    curso: boolean,
    experiencia_laboral: boolean,
    id_Imagen: number
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.dni = dni;
    this.genero = genero;
    this.fecha_nacimiento = fecha_nacimiento;
    this.lugar_de_nacimiento = lugar_de_nacimiento;
    this.lugar_de_residencia = lugar_de_residencia;
    this.estadoCivil = estadoCivil;
    this.cuil = cuil;
    this.domicilio = domicilio;
    this.barrio = barrio;
    this.vivienda = vivienda;
    this.email = email;
    this.telefono = telefono;
    this.empleoActual = empleoActual;
    this.empleoActualData = empleoActualData;
    this.escolaridad = escolaridad;
    this.escolaridadData = escolaridadData;
    this.terciario = terciario;
    this.terciarioData = terciarioData;
    this.universitario = universitario;
    this.curso = curso;
    this.experiencia_laboral = experiencia_laboral;
    this.id_Imagen = id_Imagen;
  }


  public getId(): number {
    return this.id;
  }

  public getNombre(): string {
    return this.nombre;
  }

  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }

  public getApellido(): string {
    return this.apellido;
  }

  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }

  public getDni(): number {
    return this.dni;
  }

  public setDni(dni: number): void {
    this.dni = dni;
  }

  public getGenero(): number {
    return this.genero;
  }

  public setGenero(genero: number): void {
    this.genero = genero;
  }

  public getFechaNacimiento(): Date {
    return this.fecha_nacimiento;
  }

  public setFechaNacimiento(fecha_nacimiento: Date): void {
    this.fecha_nacimiento = fecha_nacimiento;
  }

  public getLugarDeNacimiento(): string {
    return this.lugar_de_nacimiento;
  }

  public setLugarDeNacimiento(lugar_de_nacimiento: string): void {
    this.lugar_de_nacimiento = lugar_de_nacimiento;
  }

  public getLugarDeResidencia(): string {
    return this.lugar_de_residencia;
  }

  public setLugarDeResidencia(lugar_de_residencia: string): void {
    this.lugar_de_residencia = lugar_de_residencia;
  }

  public getEstadoCivil(): number {
    return this.estadoCivil;
  }

  public setEstadoCivil(estadoCivil: number): void {
    this.estadoCivil = estadoCivil;
  }

  public getCuil(): string {
    return this.cuil;
  }

  public setCuil(cuil: string): void {
    this.cuil = cuil;
  }

  public getDomicilio(): string {
    return this.domicilio;
  }

  public setDomicilio(domicilio: string): void {
    this.domicilio = domicilio;
  }

  public getBarrio(): string {
    return this.barrio;
  }

  public setBarrio(barrio: string): void {
    this.barrio = barrio;
  }

  public getVivienda(): number {
    return this.vivienda;
  }

  public setVivienda(vivienda: number): void {
    this.vivienda = vivienda;
  }

  public getEmail(): string {
    return this.email;
  }

  public setEmail(email: string): void {
    this.email = email;
  }

  public getTelefono(): string {
    return this.telefono;
  }

  public setTelefono(telefono: string): void {
    this.telefono = telefono;
  }

  public getEmpleoActual(): boolean {
    return this.empleoActual;
  }

  public setEmpleoActual(empleoActual: boolean): void {
    this.empleoActual = empleoActual;
  }

  public getEmpleoActualData(): string {
    return this.empleoActualData;
  }

  public setEmpleoActualData(empleoActualData: string): void {
    this.empleoActualData = empleoActualData;
  }

  public getEscolaridad(): boolean {
    return this.escolaridad;
  }

  public setEscolaridad(escolaridad: boolean): void {
    this.escolaridad = escolaridad;
  }

  public getEscolaridadData(): string {
    return this.escolaridadData;
  }

  public setEscolaridadData(escolaridadData: string): void {
    this.escolaridadData = escolaridadData;
  }

  public getTerciario(): boolean {
    return this.terciario;
  }

  public setTerciario(terciario: boolean): void {
    this.terciario = terciario;
  }

  public getTerciarioData(): string {
    return this.terciarioData;
  }

  public setTerciarioData(terciarioData: string): void {
    this.terciarioData = terciarioData;
  }

  public getUniversitario(): boolean {
    return this.universitario;
  }

  public setUniversitario(universitario: boolean): void {
    this.universitario = universitario;
  }

  public getCurso(): boolean {
    return this.curso;
  }

  public setCurso(curso: boolean): void {
    this.curso = curso;
  }

  public getExperienciaLaboral(): boolean {
    return this.experiencia_laboral;
  }

  public setExperienciaLaboral(experiencia_laboral: boolean): void {
    this.experiencia_laboral = experiencia_laboral;
  }

  public getIdImagen(): number {
    return this.id_Imagen;
  }

  public setIdImagen(id_Imagen: number): void {
    this.id_Imagen = id_Imagen;
  }
}
