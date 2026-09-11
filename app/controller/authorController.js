


const getAllAuthors =  (req, res) => {
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
    }

const getAuthorById = (req, res) => {

const {id} = req.params;
    res
    .status(200)
    .json({
        id, 
        success: true, 
        message: `${req.method} - Request received to authors endpoint` });
}

const createAuthor = (req, res) => {
    res
    .status(200)
    .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
};  

const updateAuthor = (req, res) => {
    const {id} = req.params;
    res
    .status(200)
    .json({
        id,
        success: true,
        message: `${req.method} - Request received to authors endpoint` });
};

const deleteAuthor = (req, res) => {
    const {id} = req.params;
    res
        .status(200)
        .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
    };

module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};