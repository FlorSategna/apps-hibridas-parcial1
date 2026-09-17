const validateGenre = (req, res, next) => {
    const { name } = req.body;

    if (!name) {
        return res.status(403).json({ message: 'Faltan parámetros obligatorios en género' });
    }

    next();
};

export default validateGenre;