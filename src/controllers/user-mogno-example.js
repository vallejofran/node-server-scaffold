import User from "../models/user-mongo-example.js";

const createUser = async (req, res) => {
  const userData = req.body;
  const newUser = await User.create(userData);

  res.status(200).json(newUser);
};

const getUsers = async (req, res) => {
  const users = await User.find();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await User.findById(id);

  if (user) res.status(200).json(user);
  else res.status(404).json({ msg: "User not found" });
};

export { createUser, getUsers, getUserById };
