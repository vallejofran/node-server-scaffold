import UserExample from "../models/user-sequelize-example.js";

const getUsers = async (req, res) => {
  const users = await UserExample.findAll();

  res.status(200).json(users);
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  const user = await UserExample.findByPk(id);

  if (user) res.status(200).json(user);
  else res.status(404).json({ msg: "User not found" });
};

export { getUsers, getUserById };
