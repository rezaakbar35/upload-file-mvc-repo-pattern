const moviesService = require('../services/moviesService');
const { BadRequestError, InternalServerError, NotFoundError, } = require('../middleware/errorHandler');

const readMovies = async (req, res) => {
  try {
    const movies = await moviesService.getAll();
    res.status(200).json({
      status: 'success',
      data: movies,
    });
  } catch (error) {
    throw new InternalServerError('Internal Server Error')
  }
};

const readMoviesSpecific = async (req, res) => {
    try {
      const id = req.params.id;
      const movie = await moviesService.get(id);
      if (movie) {
        res.status(200).json({
          status: 'success',
          data: movie,
        });
      } else {
        throw new NotFoundError('Error Not Found')
      }
    } catch (error) {
      throw new NotFoundError('Error Not Found')
    }
  };

const createMovies = async (req, res) => {
  try {
    const movies = await moviesService.addNew(req);

    res.status(201).json({
      status: 'success',
      data: movies,
    });
  } catch (error) {
    throw new BadRequestError('Bad Request Error')
  }
};

const uploadPhotos = async (req, res) => {
    try {
      const file = req.file ? req.file.path : null;
      if (!file) {
        res.status(400).json({ 
          status: 'error',
          message: 'No file is selected.',
        });
        return;
      }
      
      const photos = await moviesService.uploadPhoto(req);
      res.status(201).json({
        status: 'success',
        data: photos,
      });
    } catch (error) {
      throw new InternalServerError('Internal Server Error')
    }
  };

const updateMovies = async (req, res) => {
    try {
      const id = req.params.id;
      const movies = await moviesService.patch(req);
      res.status(200).json({
        status: 'success',
        data: movies,
      });
    } catch (error) {
      throw new BadRequestError('Bad Request Error')
    }
};

const deleteMovies = async (req, res) => {
    try {
      const id = req.params.id;
      await moviesService.del(id);
      res.status(200).json({
        status: 'success',
        message: 'Movie successfully deleted!',
      });
    } catch (error) {
      throw new InternalServerError('Internal Server Error')
    }
};

module.exports = {
  readMovies,
  readMoviesSpecific,
  createMovies,
  updateMovies,
  deleteMovies,
  uploadPhotos
};