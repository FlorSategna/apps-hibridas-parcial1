import Genre from '../models/genresModel.js';
import Movie from '../models/moviesModel.js';

class GenreController {
    async getAll(req, res) {
        try {
            const genres = await Genre.find();

            res.json({
                message: 'success',
                data: genres
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener los géneros'
            });
        }
    }

    async getById(req, res) {
        try {
            const id = req.params.id;
            const genre = await Genre.findById(id);

            if (!genre) {
                return res.status(404).json({
                    message: 'Género no encontrado'
                });
            }

            res.json({
                message: 'success',
                data: genre
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al obtener el género'
            });
        }
    }

    async create(req, res) {
        try {
            const { name } = req.body;

            if (!name) {
                return res.status(403).send('Faltan parámetros obligatorios');
            }

            const genre = await Genre.create({ name });

            res.json({
                message: 'success',
                data: genre
            });
        } catch (error) {
            res.status(500).json({
                message: `Error al crear el género - ${error.message}`
            });
        }
    }

    async update(req, res) {
        try {
            const id = req.params.id;
            const { name, active } = req.body;

            if (!name) {
                return res.status(403).send('Faltan parámetros obligatorios');
            }

            const genre = await Genre.findByIdAndUpdate(
                id,
                { name, active },
                { new: true, runValidators: true }
            );

            if (!genre) {
                return res.status(404).json({
                    message: 'Género no encontrado'
                });
            }

            res.json({
                message: 'success',
                data: genre
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al actualizar el género'
            });
        }
    }

    async delete(req, res) {
        try {
            const id = req.params.id;

            // No permitir borrar géneros con películas asociadas
            const movies = await Movie.find({ genre: id });
            if (movies.length > 0) {
                return res.status(400).json({
                    message: 'No es posible eliminar un género con películas asociadas'
                });
            }

            const genre = await Genre.findByIdAndDelete(id);

            if (!genre) {
                return res.status(404).json({
                    message: 'Género no encontrado'
                });
            }

            res.json({
                message: 'success'
            });
        } catch (error) {
            res.status(500).json({
                message: 'Error al eliminar el género'
            });
        }
    }
}

export default GenreController;