
const Author = require("../models/author")

const getAllAuthors = async (req, res) => {
    try {
        const authors = await Author.find({});
           res
        .status(200)
        .json({ success: true, data: authors });
    }
        
    catch (error) {
           res
        .status(400)
        .json({ success: false, message: error.message });
    }
};

const getAuthorById = async (req, res) => {

try {
    const {id} = req.params;
    const author = await Author.findById(id);

    if (!author) {
        return res.status(404).json({ success: false, message: 'Author not found!'})
    }
        res
        .status(200)
        .json({ success: true, data: author });
} catch (error) {
    res.status(400).json({success: false, message: "Access denied"})
    
}
}

const createAuthor = async (req, res) => {
    
    try {
        const author = await Author.create(req.body)
    res
    .status(201)
    .json({ success: true, data: author });
    } catch (error) {
        res
    .status(400)
    .json({ success: false, message: `${req.method} - Request denied` });
    }
    
};  

const updateAuthor = async (req, res) => {
  try {
      const {id} = req.params;
      const author = await Author.findByIdAndUpdate(id, req.body, {
        new: true,
        runValidators: true,
      });
      if (!author) {
        return res.status(404).json({ success: false, message: 'Author not updated!' })
      }
      res.status(200).json({success: true, data: author})
  } catch (error) {
    res.status(400)
    .json({ success: false, message: error.message})
}
}

const deleteAuthor = async (req, res) => {
try {
    const {id} = req.params;
    const author = await Author.findByIdAndDelete(id);

    if (!author) {
        return res.status(404).json({success: false, message: 'Author not deleted!'})
    }
    res.status(200).json({success: true, message: "Author success deleted"})
} catch (error) {

    res.status(500).json({ success: false, message: error.message})
}
}


module.exports = {
    getAllAuthors,
    getAuthorById,
    createAuthor,
    updateAuthor,
    deleteAuthor
};