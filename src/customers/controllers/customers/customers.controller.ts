import { Body, Controller, Get, HttpException, HttpStatus, Param, ParseIntPipe, Post, Req, Res, UsePipes, ValidationPipe,  } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { CustomersService } from 'src/customers/services/customers/customers.service';

@Controller('customers')
export class CustomersController {
    constructor(private customersService: CustomersService){
    }

    // @Get(':id')
    // getCustomer(@Param('id',ParseIntPipe) id:number ,@Req() req:Request, @Res() res: Response){
    //     //req.params.id  //This will also work  but in nestJs better use @Param('id')
    //     // All the route parameters will come as string 
    //     // We can use ParseIntPipe to typecast the value to integer
    //    const customer= this.customersService.findCustomerById(id);
    //     if(customer){
    //         res.send(customer)
    //     }else{
    //         res.status(400).send({msg:"Customer not found"});
    //     }
    // }


    // NestJS way without using req and res objects
    @Get('/search/:id')
    getCustomer(@Param('id',ParseIntPipe) id:number ){
       const customer= this.customersService.findCustomerById(id);
        if(customer){
            return customer
        }else{
             throw new HttpException('Customer not Found',HttpStatus.BAD_REQUEST);
        }
    }

    @Get()
    getAllCustomers(){
        return this.customersService.getCustomers();
    }


    @Post('create')
    @UsePipes(ValidationPipe) // Validatiors invocation checks the validator defiened on DTOS
    createCustomer(@Body() createCustomerDto : CreateCustomerDto){
        this.customersService.createCustomer(createCustomerDto)

    }


}
