
const incompleteInfo = (req, res, next) => {
    const { productName, infos } = req.body; 
    if (!productName){
        throw { status: 400, message: "O campo productName é obrigatório" };
    }
    if(infos){
        const { saleDate, warrantyPeriod } = infos
        if(!warrantyPeriod) {
            throw { status: 400, message: "O campo warrantyPeriod é obrigatório" };
        }
        if (!saleDate){
            throw { status: 400, message: "O campo saleDate é obrigatório" };
        }
    } else {
        throw { status: 400, message: "O campo infos é obrigatório" };
    }
    
    next()
};

module.exports = incompleteInfo;