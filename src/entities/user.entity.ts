import {
    BeforeInsert,
    BeforeUpdate,
    Column,
    Entity,
    PrimaryGeneratedColumn, 

  } from "typeorm";
  import { hashSync, getRounds } from "bcryptjs";
  
  @Entity("users")
  export class User {
    @PrimaryGeneratedColumn("uuid")
    uuid: string;
  
    @Column({ type: "varchar", length: 80 })
    name: string;
  
    @Column({ type: "varchar", length: 255 })
    email: string;
  
    @Column({ type: "varchar", length: 120 })
    password: string;
  
    @Column({ type: "varchar", length: 11 })
    celphone: string;
  
    @Column({ type: "varchar", nullable: true })
    reset_password: string | null | undefined;
  
   
    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
      const isEncrypted = getRounds(this.password);
      if (!isEncrypted) {
        this.password = hashSync(this.password, 10);
      }
    }
  }
