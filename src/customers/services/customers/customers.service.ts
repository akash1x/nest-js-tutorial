import { Injectable } from '@nestjs/common';
import { CreateCustomerDto } from 'src/customers/dtos/CreateCustomer.dto';
import { Customer } from 'src/customers/types/Customer';

@Injectable()
export class CustomersService {
    private customers: Customer[]=[{
        id:1,
        email:"akash.dohare",
        name: "Akash Dohare",
    },
    {
        id:2,
        email:"akash.dohare",
        name: "Akash Dohare",
    },
    {
        id:3,
        email:"akash.dohare",
        name: "Akash Dohare",
    }
]
    findCustomerById(id: number){
        return this.customers.find(user=>user.id===id)
    }

    createCustomer(customerDto:CreateCustomerDto){
        this.customers.push(customerDto);
    }
    getCustomers(){
        return this.customers;
    }
}
