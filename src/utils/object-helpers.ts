import {ObjPropKeyType, ObjPropNameType, ObjPropValueType, UsersObjectType} from "../Components/Users/UsersContainer";


export const updateObjectInArray = (items: Array<UsersObjectType>,
                                    itemId: ObjPropValueType, objPropName: ObjPropKeyType,
                                    newObjProps: ObjPropNameType): Array<UsersObjectType> => {
    return items.map((u) => {
        if (u[objPropName] === itemId) {
            return {...u, ...newObjProps}
        }
        return u
    })
}