import { GraphQLList } from 'graphql'
import { UserType } from '../TypeDef/User'
import { Users} from '../../Entities/Users'

export const GET_ALL_USERS = {
    type: new GraphQLList(UserType),
    resolve() {
        return Users.find();
    }

}