import {Column, CreateDateColumn, Entity, Index, JoinColumn, OneToOne, PrimaryColumn, PrimaryGeneratedColumn, UpdateDateColumn} from 'typeorm';
import { User } from './user.entity';

@Entity()
export class LinkedinInfo{
    @PrimaryGeneratedColumn({name : "id"})
    id : number;

    // @OneToOne(() => User,{
    //     cascade:true
    // })
    // @JoinColumn({referencedColumnName : "id", name : "user_id"})
    // user : User;

    @Column({name : "user_id", unique:true})
    userId : number;

    @Column({name : "access_token", nullable:false})
    accessToken : string;

    @Column({name : "name", nullable:false})
    name : string;

    @Column({name : "email"})
    email: string;

    @Column({name : "is_email_verified", default:false})
    isEmailVerified : boolean;

    @Column({name : "expires_in", default:null})
    expiresIn : number;

    @Column({type:"json", name : "meta_data"})
    metaData : JSON;

    @CreateDateColumn({name : "created_at"})
    createdAt: Date;

    @UpdateDateColumn({name : "updated_at"})
    updatedAt: Date;
}