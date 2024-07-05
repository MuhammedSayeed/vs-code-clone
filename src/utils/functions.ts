import { Ifile } from "../interfaces";

export const doesFileExist = (arr : Ifile[] , id : string) =>{
    return arr.some(obj => obj.id === id)
}