import { Type } from "class-transformer";
import { IsEmail, IsNotEmpty, IsNotEmptyObject, IsNumber, IsNumberString, ValidateNested } from "class-validator";
import { CreateAddressDto } from "./CreateAddress.dto";

export class CreateCustomerDto{
    //Following are the some validators from class class-validator
    @IsNumberString()
    @IsNotEmpty()
    id:number;

    @IsEmail()
    email: string;

    @IsNotEmpty()
    name:string;

    @IsNotEmptyObject()
    @ValidateNested()
    @Type(()=>CreateAddressDto)
    address:CreateAddressDto;
}