import { ArgumentsHost, Catch, ExceptionFilter, HttpException } from "@nestjs/common";
import { Request, Response } from "express";

//Exception Filter is custom way of dealing with exception. 
//If you don't like how nestjs handles it we can define our own custom mechanism to handle exceptions.

@Catch(HttpException)
export class HttpExceptionFilter implements ExceptionFilter{

    //ArgumentsHost can give you properties like request and response objects

    catch(exception: HttpException, host: ArgumentsHost) {

        const context = host.switchToHttp();
        const request = context.getRequest<Request>();
        const response = context.getResponse<Response>();
        response.sendStatus(exception.getStatus());
    }
    
}