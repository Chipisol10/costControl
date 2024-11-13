const not_found_handler = (req,res,next) => {
    return res.status(404).json({
        success:false,
        message:` The petition with the method ${req.method} with the route ${req.url} -  not found - Not found  `
    })
}

export default not_found_handler