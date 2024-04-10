import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  name: string;

  @Column({ type: 'int' })
  age: number;

  @Column()
  breed: string;

  constructor(name: string, breed?: string, age?: number);
  constructor(name: string, breed: string, age?: number);
  constructor(name: string, breed: string, age: number);
  constructor(name?: string, breed?: string, age?: number);
  constructor(name?: string, breed?: string, age?: number) {
    this.name = name || '';
    this.breed = breed || '';
    this.age = age || NaN;
  }


}
