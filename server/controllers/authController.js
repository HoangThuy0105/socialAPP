import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken'
import { UserModel } from '../models/UserModel.js';

let refreshTokens = []

export const authController = {
    registerUser: async (req, res) => {
        try {
            const salt = await bcrypt.genSalt(10)
            const hashed = await bcrypt.hash(req.body.password, salt)

            // Create new user
            const newUser = await new UserModel({
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                email: req.body.email,
                phoneNumber: req.body.phoneNumber,
                password: hashed
            })

            const user = await newUser.save()
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    // GENERATE ACCESS TOKEN
    generateAccessToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_ACCESS_KEY,
            {
                expiresIn: "24h"
            }
        )
    },
    // GENERATE REFRESH TOKEN
    generateRefreshToken: (user) => {
        return jwt.sign(
            {
                id: user.id,
                admin: user.admin
            },
            process.env.JWT_REFRESH_KEY,
            {
                expiresIn: "365d"
            }
        )
    },
    loginUser: async (req, res) => {
        try {
            const user = await UserModel.findOne({ email: req.body.email })
            if (!user) {
                return res.status(404).json("Wrong email!")
            }
            const validPassword = await bcrypt.compare(
                req.body.password,
                user.password
            )
            if (!validPassword) {
                return res.status(404).json("Wrong password")
            }
            if (user && validPassword) {
                const accessToken = authController.generateAccessToken(user)
                const refreshToken = authController.generateRefreshToken(user)
                refreshTokens.push(refreshToken)
                res.cookie("refresh_token", refreshToken, {
                    httpOnly: true,
                    secure: false,
                    path: "/",
                    sameSite: "strict"
                })
                const { password, ...others } = user._doc
                res.status(200).json({ ...others, accessToken })
            }
        } catch (error) {
            req.status(500).json(error)
        }
    },
    requestRefreshToken: async (req, res) => {
        const refreshToken = req.cookies.refresh_token
        if (!refreshToken) return res.status(401).json("You're not authenticated")
        if (!refreshTokens.includes(refreshToken)) {
            return res.status(403).json("Refresh token is not valid")
        }
        jwt.verify(refreshToken, process.env.JWT_REFRESH_KEY, (err, user) => {
            if (err) {
                console.log(err)
            }
            refreshTokens = refreshTokens.filter((token) => token !== refreshToken)
            // Create new accessToken and refreshToken
            const newAccessToken = authController.generateAccessToken(user)
            const newRefreshToken = authController.generateRefreshToken(user)
            refreshTokens.push(newRefreshToken)
            res.cookie("refresh_token", newRefreshToken, {
                httpOnly: true,
                secure: false,
                path: "/",
                sameSite: "strict"
            })
            res.status(200).json({ accessToken: newAccessToken })
        })
    },
    userLogout: async (req, res) => {
        res.clearCookie("refresh_token")
        refreshTokens = refreshTokens.filter((token) => token !== req.cookies.refresh_token)
        res.status(200).json("Log out successfully")
    }
}
