const Book = require('./book')

exports.createBook = async(req,res)=>{
    try {
        const {id, title, author, price, publishedYear} = 
        req.body;

        if(!id || !title || !author || !price || !publishedYear){
            return res.json({error : 'all fields are required'})
        }
        const newbook = new Book({id, title, author, price, publishedYear})

         await newbook.save();
         res.status(201).json({ message: 'Book created successfully', book: newbook });
    } catch (error) {
        console.error('Error creating book', e);
        res.status(500).json({error: "Internal server error"});
    }
}

exports.getAllBooks = async(req,res)=>{
    try {
        const books = await Book.find();
        res.json(books);
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
}

exports.getBookById = async(req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        if(isNaN(bookId)) {
            return res.status(400).json({error: "Invalid Book ID"})
        }

        const book = await Book.findOne({id: bookId});

        if (!book) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json(book);
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
};

exports.deleteBookById = async(req, res) => {
    try {
        const bookId = parseInt(req.params.id);
        if(isNaN(bookId)) {
            return res.status(400).json({error: "Invalid Book ID"})
        }

        const book = await Book.deleteOne({id: bookId});

        if (!book) {
            return res.status(404).json({ error: 'Student not found' });
        }

        res.json({message:"book deleted"});
    } catch(error) {
        console.error('Error creating book', error);
        res.status(500).json({error: "Internal server error"});
    }
};


exports.updateBookById = async (req,res)=>{
    try {
        const {id, title, author, price, publishedYear} = 
        req.body;
        const updatedBook = await Book.findByIdAndUpdate(
            req.params.id,
            { id, title, author, price, publishedYear},
            {new:true}
        )
        res.json(updatedBook)
    } catch (error) {
        
    }
}