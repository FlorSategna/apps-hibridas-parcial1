const validateLogin = (req, res, next) => {
    const { email, password } = req.body;

    if (!email || !password) {
        return res.status(403).json({ message: 'Faltan parámetros obligatorios en login' });
    }

    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ message: 'El email no es válido' });
    }

    next();
};

export default validateLogin;