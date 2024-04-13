import { User } from "../models/userModel.js";
import bcrypt from "bcryptjs"
import jwt from "jsonwebtoken"

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

export const login = async (req, res) => {
    try {


        const { username, password } = req.body;
        //check wheather all information are sent or not!
        if (!username || !password) {
            return res.status(400).json({
                message: "All fields are required",
            })
        }

        //check wheather user exists or not
        const user = await User.findOne({ username })
        if (!user) {
            return res.status(400).json({
                message: "username is invalid",
                success: false
            })
        }

        //varify password
        //we can not directlly compare since password in the database is bcrypted and password entered by the user is plain text.
        // if (password != user.password) {
        //     return res.status(400).json({
        //         message: "Password is invalid",
        //         succes: false
        //     })
        // }

        //we will be goint to use built in function from bcrypt to compare both the password
        const isPasswordMatch = await bcrypt.compare(password, user.password);

        if (!isPasswordMatch) {
            return res.status(400).json({
                message: "Password is invalid",
                succes: false
            })

        }

        const tokenData = {
            userId: user._id
        }

        const token = jwt.sign(tokenData, process.env.JWT_SECRET_KEY, { expiresIn: "1d" })
        console.log(token);

        return res.cookie("token", token, { maxAge: 1 * 24 * 60 * 60 * 1000, httpOnly: true, sameSite: 'strict' }).json({
            _id: user._id,
            username: user.username,
            fullName: user.fullName,
            gender: user.gender,
            profilePhoto: user.profilePhoto
        })
    } catch (error) {
        console.log(error);
    }
}

//Logout 
export const logout = (req, res) => {
    try {
        return res.cookie("token", "", { maxAge: 0 }).json({
            message: "Logged out succesfully"
        })
    } catch (error) {
        console.log(error);
    }
}

//Get all users except logged in user
export const getOtherUsers = async (req, res) => {
    const id = req.id
    const otherUsers = await User.find({ _id: { $ne: id } }).select("-password");
    return res.json(otherUsers)
}

//It is just for testing purpose
export const testApi = (req, res) => {
    res.send("hello world")
}