import { MiddlewareConsumer, Module, NestModule, RequestMethod } from '@nestjs/common';
import { NextFunction, Request, Response } from 'express';
import { CustomersController } from './controllers/customers/customers.controller';
import { ValidateCustomerAccount } from './middlewares/validate-customer-account.middleware';
import { ValidateCustomerMiddleware } from './middlewares/validate-customer.middleware';
import { CustomersService } from './services/customers/customers.service';

@Module({
  controllers: [CustomersController],
  providers: [CustomersService]
})
export class CustomersModule implements NestModule {

configure(consumer: MiddlewareConsumer) {
  //*****Registring for certain routes*****
  consumer.apply(ValidateCustomerMiddleware).forRoutes({
    path:'customers/search/:id',
    method: RequestMethod.GET
  },{
    path:'customers',
    method: RequestMethod.POST
  },)

  //*****Registering for entire controller*****
  
  //consumer.apply(ValidateCustomerMiddleware).forRoutes(CustomersController)

  
  //*****Registering for entire controller except some routes*****
  
  // consumer.apply(ValidateCustomerMiddleware).exclude({
  //   path:'api/customers/search/:id',
  //   method:RequestMethod.GET
  // }). forRoutes(CustomersController)

//*****Registering multiple middleware*****
//   consumer.apply(ValidateCustomerMiddleware,ValidateCustomerAccount,(req:Request,res:Response,next:NextFunction)=>{
//     console.log('Last Middle Ware');
//     next();
//   }).forRoutes({
//     path:'customers/search/:id',
//     method: RequestMethod.GET
//   },{
//     path:'customers',
//     method: RequestMethod.POST
//   },)
// }

}
