const usersService = require('../services/usersService');
const { BadRequestError, InternalServerError, NotFoundError, } = require('../middleware/errorHandler');

const readUsers = async (req, res) => {
  try {
    const users = await usersService.getAll();
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    throw new InternalServerError('Internal Server Error')
  }
};

const readUsersSpecific = async (req, res) => {
  try {
    const id = req.params.id;
    const users = await usersService.get(id); 
    res.status(200).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    throw new NotFoundError('Error Not Found')
  }
};

const createUsers = async (req, res) => {
  try {
    const users = await usersService.addNew(req);

    res.status(201).json({
      status: 'success',
      data: users,
    });
  } catch (error) {
    throw new BadRequestError('Bad Request Error')
  }
};

const updateUsers = async (req, res) => {
    try {
      const id = req.params.id;
      const users = await usersService.patch(req);
      res.status(200).json({
        status: 'success',
        data: users,
      });
    } catch (error) {
      throw new BadRequestError('Bad Request Error')
    }
};

const deleteUsers = async (req, res) => {
    try {
      const id = req.params.id;
      await usersService.del(id);
      res.status(200).json({
        status: 'success',
        message: 'Movie successfully deleted!',
      });
    } catch (error) {
      throw new InternalServerError('Internal Server Error')
    }
};

module.exports = {
  readUsers,
  readUsersSpecific,
  createUsers,
  updateUsers,
  deleteUsers
};