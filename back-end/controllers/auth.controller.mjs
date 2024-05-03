export const signup = (req,res)=>{
    const {body} = req
    const {name,email,password} = body
    const user = {
        name,
        email,
        password
    }
    console.log("ammar2",user)
    return res.status(200).send(user)
   

}

export const login = (req,res)=>{
    res.status(200).send("login User")

}
export const logout = (req,res)=>{
    res.status(200).send("logut User")

}