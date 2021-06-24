import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm"; // talks with database

// creates user table in mysql database
@Entity()
export class Users extends BaseEntity {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    name!: string;

    @Column()
    username!: string;

    @Column()
    password!: string;

} 