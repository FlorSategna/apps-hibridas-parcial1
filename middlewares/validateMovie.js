const validateMovie = (req, res, next) => {
    const { title, year, genre } = req.body;

    if (!title || !year || !genre) {
        return res.status(403).json({ message: 'Faltan parámetros obligatorios en película' });
    }

    if (typeof year !== 'number' || year < 1900) {
        return res.status(400).json({ message: 'El año debe ser un número válido mayor a 1900' });
    }

    next();
};

export default validateMovie;