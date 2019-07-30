const userModel = require('../model/user');


exports.create = (req,res)=>{
    let user = new userModel({
        name: req.body.name,
        address: req.body.address,
        hobby: req.body.hobby
    });
    user.save()

    .then((data)=>{
        res.status(200).json({
            success: true,
            message: data
        })
    })
    .catch(()=>{
        res.status(200).json({
            success: true,
            message: err.message
        })
    })
}

exports.userAll = (req, res)=>{
    userModel.find()
    .then((data)=>{
        res.status(200).json({
            success: true,
            message : data
        })
    })
    .catch(()=>{
        res.status(400).json({
            success: false,
            message : err.message
        })
    })
}

exports.userOne = (req, res)=>{
    userModel.findById( {_id : req.params.id})
    .then((data)=>{
        res.status(200).json({
            success: true,
            message: data
        })
    })
    .catch(()=>{
        res.status(400).json({
            success: false,
            message: err.message
        })
    })
}



exports.delete = (req, res)=>{
    userModel.findByIdAndDelete( {_id : req.params.id})
    .then((data)=>{
        res.status(200).json({
            success: true,
            message: 'User data is deleted succesfully'
        })
    })
    .catch(()=>{
        res.status(400).json({
            success: false,
            message: err.message
        })
    })
}



exports.update = (req, res)=>{
    userModel.findByIdAndUpdate( {_id : req.params.id}, {$set : {name : req.body.name}}, (err)=>{
        if (err){
            ()=>{
                res.status(400).json({
                    success : false,
                    message : err.message
                })
            }
        } res.status(200).json({
            success : true,
            message : 'User data is updated successfully'
        })
       

    })
    
}