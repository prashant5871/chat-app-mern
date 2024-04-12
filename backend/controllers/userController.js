import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"

//Register
export const register = async (req, res) => {
    try {
        const { fullName, username, password, gender, confirmPassword } = req.body;

        if (!fullName || !username || !password || !gender || !confirmPassword) {
            return res.status(400).json({ message: "All fields are required." })
        }

        if (password !== confirmPassword) {
            return res.status(400).json({ message: "password and confirm password must be same" })
        }

        const user = await User.findOne({ username })
        if (user) {
            return res.status(400).json({ message: "Username already exits... try another username" })
        }
        //Let's encrypt the password
        const hashPassword = await bcrypt.hash(password, 10);


        //Let's set the profile photo of the user
        const maleUrl = `https://avatar.iran.liara.run/public/boy?username=${username}`;
        const femaleUrl = `https://avatar.iran.liara.run/public/girl?username=${username}`;
        //save user into the database


        await User.create({
            fullName,
            username,
            password: hashPassword,
            profilePhoto: gender === "male" ? maleUrl : femaleUrl,
            gender
        })

        return res.send({ message: "Account created succesfully", success: true })
    } catch (error) {
        console.log(error);
    }

}

export const testApi = (req, res) => {
    res.send("hello world")
}