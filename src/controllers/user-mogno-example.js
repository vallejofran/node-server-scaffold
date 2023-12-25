import User from "../models/user-mongo-example.js";

const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await User.create(userData);
    res.status(200).json(newUser);
  } catch (error) {
    process.exit(0);
  }
};

const getUsers = async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    process.exit(0);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await User.findById(id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ msg: "User not found" });
  } catch (error) {
    process.exit(0);
  }
};

export { createUser, getUsers, getUserById };
