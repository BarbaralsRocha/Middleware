const errorHandler = (error, req, res, next) => {
    console.log('erro')
    return res.status(error.status || 500 ).json({ message: error.message });
};

module.exports = errorHandler;