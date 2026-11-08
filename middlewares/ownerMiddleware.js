import Review from '../models/reviewsModel.js';

const ownerMiddleware = async (req, res, next) => {
    try {
        const id = req.params.id;
        const review = await Review.findById(id);

        if (!review) {
            return res.status(404).json({
                message: 'Reseña no encontrada'
            });
        }

        if (req.user.role != 'admin' && review.user.toString() != req.user.id) {
            return res.status(403).json({
                message: 'No tenés permiso sobre esta reseña'
            });
        }

        next();
    } catch (error) {
        res.status(500).json({
            message: 'Error al verificar la reseña'
        });
    }
};

export default ownerMiddleware;