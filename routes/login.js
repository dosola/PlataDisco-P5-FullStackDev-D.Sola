router.post('/login', async (req,res,next)=>{
    try{
        const {password,email,name, lastName, _id} = await User.findOne({"email":req.body.email})
        const match = await bcrypt.compare(req.body.password, password);
        const payload = {email, name, lastName, id:_id}
        if(match){
          const token = jwt.sign(payload, secret, { expiresIn: '24h' })
          res.cookie('token',token)
          res.status(200).send(payload)
        }
       else{
        res.status(401).send({message:'Wrong email or password'})
       }
    }
    catch(error){
      res.status(401).send({message:'User does not exist'})
    }
  })
  