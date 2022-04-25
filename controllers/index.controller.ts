import {Response,Request,Context,helpers} from "https://deno.land/x/oak/mod.ts";
import db from '../db/mongodb.ts';

const userCollection = db.collection("users");



export const getAllUsers = async (context:Context)=>{
    const users = await userCollection.find().toArray();
    context.response.body ={
        payload:users
    }
}

export const getUserById = async (context:Context)=>{
    const{id} = helpers.getQuery(context,{mergeParams:true})
    const userSerch = await userCollection.findOne({_id: id})
    if(!userSerch) context.response.body = {status:'error, not found user!'}

    context.response.body = {
        status:"success",
        user:userSerch
    };
}

export const getQuery = ({request, response}:{request:Request,response:Response})=>{
    const query = request.url.searchParams.get('uid');
    console.log(query);
    response.body =query
}

export const saveUser = async({request,response}:{request:Request,response:Response})=>{
    const body = await request.body();
    const value= await body.value;
    console.log(value)
    userCollection.insertOne(value);
    response.body ={
        status:"success,nuevo usuarioooo",
        value:value
    }
}