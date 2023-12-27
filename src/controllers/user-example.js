import CRUDService from "../services/crud-service-mongodb.js";
// import CRUDService from "../services/crud-service-sequelize.js";

const getUsers = async (req, res) => {
  try {
    const users = await CRUDService.get();
    res.status(200).json(users);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

const getUserById = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await CRUDService.getById(id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

const createUser = async (req, res) => {
  const userData = req.body;

  try {
    const newUser = await CRUDService.create(userData);
    res.status(200).json(newUser);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

const updateUser = async (req, res) => {
  const { id } = req.params;
  const userData = req.body;

  try {
    const updatedUser = await CRUDService.updateById(id, userData);
    res.status(200).json(updatedUser);
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  try {
    const user = await CRUDService.deleteById(id);
    if (user) res.status(200).json(user);
    else res.status(404).json({ msg: "User not found" });
  } catch (error) {
    console.error(error);
    process.exit(0);
  }
};

export { getUsers, getUserById, createUser, updateUser, deleteUser };
