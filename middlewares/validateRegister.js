const validateRegister = (req, res, next) => {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
        return res.status(403).json({ message: 'Faltan parámetros obligatorios en registro' });
    }

    if (!email.includes('@') || !email.includes('.')) {
        return res.status(400).json({ message: 'El email no es válido' });
    }

    if (password.length < 6) {
        return res.status(400).json({ message: 'La contraseña debe tener al menos 6 caracteres' });
    }

    next();
};

export default validateRegister;