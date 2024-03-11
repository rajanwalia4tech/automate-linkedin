import { IsEmail, IsNotEmpty, IsStrongPassword } from "class-validator";

export class CreateUserDto{
    
    @IsNotEmpty()
    name : string;

    @IsEmail()
    email : string;

    companyName : string;

    @IsNotEmpty()
    password:string;
}