import { UserModel } from '../models/UserModel.js';

export const userController = {
    getAllUsers: async (req, res) => {
        try {
            const user = await UserModel.find()
            res.status(200).json(user);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    deleteUser: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.status(200).json("Delete successfully")
        } catch (error) {
            res.status(500).json(error);
        }
    },
    editProfile: async (req, res) => {
        try {
            const data = {
                _id: req.body._id,
                firstName: req.body.firstName,
                lastName: req.body.lastName,
                bio: req.body.bio,
                avatar: req.body.avatar,
            }
            const user = await UserModel.findOneAndUpdate({ _id: data._id }, data, { new: true })
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    findUsers: async (req, res) => {
        try {
            let user = new RegExp('^' + req.body.query)
            UserModel.find({ firstName: { $regex: user } })
                .then(users => {
                    res.json(users)
                })
                .catch(error => {
                    console.log(error);
                })
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getUserById: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.id)
            res.status(200).json(user)
        } catch (error) {
            res.status(500).json(error);
        }
    },
    checkFollow: async (req, res) => {
        try {
            if (req.body.userId !== req.params.id) {
                const user = await UserModel.findById(req.params.id)
                if (!user.followers.includes(req.body.userId)) {
                    res.status(200).json(0)
                } else {
                    res.status(200).json(1)
                }
            } else {
                res.status(403).json('You cant follow yourself')
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    follow: async (req, res) => {
        try {
            if (req.body.userId !== req.params.id) {
                try {
                    const user = await UserModel.findById(req.params.id)
                    const currentUser = await UserModel.findById(req.body.userId)
                    if (!user.followers.includes(req.body.userId)) {
                        await user.updateOne({ $push: { followers: req.body.userId } })
                        await currentUser.updateOne({ $push: { following: req.params.id } })
                        res.status(200).json('User has been followed')
                    } else {
                        res.status(403).json('You already follow this user')
                    }
                } catch (error) {
                    res.status(500).json(error);
                }
            } else {
                res.status(403).json('You cant follow yourself')
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    unFollow: async (req, res) => {
        try {
            if (req.body.userId !== req.params.id) {
                try {
                    const user = await UserModel.findById(req.params.id)
                    const currentUser = await UserModel.findById(req.body.userId)
                    if (user.followers.includes(req.body.userId)) {
                        await user.updateOne({ $pull: { followers: req.body.userId } })
                        await currentUser.updateOne({ $pull: { following: req.params.id } })
                        res.status(200).json('User has been unFollowed')
                    } else {
                        res.status(403).json('You dont follow this user')
                    }
                } catch (error) {
                    res.status(500).json(error);
                }
            } else {
                res.status(403).json('You cant unFollow yourself')
            }
        } catch (error) {
            res.status(500).json(error);
        }
    },
    getFollowers: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.userId)
            const followers = await Promise.all(
                user.followers.map(followerId => {
                    return UserModel.findById(followerId)
                })
            )
            let followerList = []
            followers.map((follower) => {
                const { password, ...other } = follower._doc
                followerList.push({ ...other })
            })
            res.status(200).json(followerList)
        } catch (error) {
            res.status(500).json(error)
        }
    },
    getFollowings: async (req, res) => {
        try {
            const user = await UserModel.findById(req.params.userId)
            const following = await Promise.all(
                user.following.map(followingId => {
                    return UserModel.findById(followingId)
                })
            )
            let followingList = []
            following.map((following) => {
                const { password, ...other } = following._doc
                followingList.push({ ...other })
            })
            res.status(200).json(followingList)
        } catch (error) {
            res.status(500).json(error)
        }
    }

}