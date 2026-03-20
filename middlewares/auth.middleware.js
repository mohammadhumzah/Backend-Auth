import jwt from "jsonwebtoken"

export const isLoggedIn = async (request, response, next) => {
    // check if we have user cookie or not
    try {
        console.log(request.cookies)
        let token = undefined;
        if (request.cookies && request.cookies.token) {
            token = request.cookies.token;
        }

        if (!token){
            console.log("No token")
            return response.status(401).json({
                success: false,
                message:"Unauthorized"
            })
        }
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        console.log("decoded data: ", decoded)
        request.user = decoded  // req is an object data-type and we are putting decoded user data into it thats all

        return next()

    } catch (error) {
        console.log("Auth middleware failure")
        return response.status(500).json({
            success:false,
            message: "Internal server error"
        })
    }
}