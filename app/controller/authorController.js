
const Author = require("../models/author")

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

const createAuthor = async (req, res) => {
    try {
        const author = await Author.create(req.body)
    res
    .status(200)
    .json({ success: true, message: `${req.method} - Request received to authors endpoint` });
    } catch (error) {res
    .status(400)
    .json({ success: false, message: `${req.method} - Request denied to authors endpoint` });
    }
    
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