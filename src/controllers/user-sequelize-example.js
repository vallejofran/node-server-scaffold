import UserExample from "../models/user-sequelize-example.js";

const getUsers = async (req, res) => {
  try {
    const users = await UserExample.findAll();
    res.status(200).json(users);
  } catch (error) {
    process.exit(0);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await UserExample.findByPk(id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ msg: "User not found" });
  } catch (error) {
    process.exit(0);
  }
};

export { getUsers, getUserById };
