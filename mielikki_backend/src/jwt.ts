import jwt from "jose";


function jwtHandle(params:any):string {
    //@ts-ignore
    const tokenSing = jwt.JWS.sign(params,process.env.SECRET)
    return tokenSing
}

export default jwtHandle