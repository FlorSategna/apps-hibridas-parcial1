const validateReview = (req, res, next) => {
    const { movie, user, rating } = req.body;

    if (!movie || !user || !rating) {
        return res.status(403).json({ message: 'Faltan parámetros obligatorios en reseña' });
    }

    if (rating < 1 || rating > 5) {
        return res.status(400).json({ message: 'El rating debe estar entre 1 y 5' });
    }

    next();
};

export default validateReview;