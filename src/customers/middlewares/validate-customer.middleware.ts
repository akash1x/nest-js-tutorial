import { Injectable, NestMiddleware } from "@nestjs/common";
import { NextFunction, Request, Response } from "express";

//Middleware also supports dependency injection similar to services and controllers

@Injectable()
export class ValidateCustomerMiddleware implements NestMiddleware{
use(req:Request, res: Response, next:NextFunction){
    console.log("Inside validate middleware")
    const {authorization} = req.headers;

    if(!authorization) return res.status(403).send({error:"No Authentication Token"})

    next();
}
}