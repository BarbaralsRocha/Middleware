const validationSales = (req, res, next) => {
    const { productName, infos: {saleDate, warrantyPeriod} } = req.body; 
    if (productName.length < 4){

        throw { status: 400, message: "O nome deve ter pelo menos 4 caracteres" };
    }
    if (warrantyPeriod > 3 || warrantyPeriod < 1){

        throw { status: 400, message: "O campo warrantyPeriod precisa estar entre 1 e 3" };
    }
    next()
};

module.exports = validationSales;