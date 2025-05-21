import rateLimit from "../config/upstash.js"

const rateLimiter = async (req,res,next) => {

    // per user => 

    try{
        const {success} = await rateLimit.limit("my-rate-limit")

        if(!success) {
            return res.status(429),json({
                message : "too many request, pls try again later"
            })
        }
        next()

    }
    catch(error){
        console.log("rate limit error")
        next(error)
    }
}


export default rateLimiter