import { GraphQLID, GraphQLString } from "graphql";
import { UserType } from '../TypeDef/User'
import { MessageType } from '../TypeDef/Messages'

import { Users } from '../../Entities/Users'

// create a user account
export const CREATE_USER  = {
    type: UserType,
    args: {
        name: { type: GraphQLString},
        username: { type: GraphQLString},
        password: { type: GraphQLString}
    },
    async resolve(parent: any, args: any){
        const { name, username, password} = args;
        await Users.insert({ name, username, password})
        return args

    }
}

// delete a user by id
export const DELETE_USER = {
    type: MessageType,
    args: { 
        id: { type: GraphQLID },
        
    },
    async resolve(parent: any, args: any){
        const id = args.id;
        await Users.delete(id);
        return { success: true, message: "Deleted Successfully."}

    }
    
}

// upadte password if username and old password matches
export const UPDATE_PASSWORD = {
    type: MessageType,
    args: { 
        username: { type: GraphQLString},
        oldPassword: { type: GraphQLString},
        newPassword: { type: GraphQLString}
    },
    async resolve(parent: any, args: any){
        const { username, oldPassword, newPassword} = args;
        // get the user info with given username
        const getUser = await Users.findOne({username: username});
        if(!getUser){
            throw new Error("Username not found.")
        }

        const userPassword = getUser?.password;
        if(oldPassword === userPassword){
             await Users.update({username: username}, {password: newPassword});
            return { success: true, message: "Password updated Successfully."}

        }else {
            throw new Error("Password does not match.")

        }       

    }
}