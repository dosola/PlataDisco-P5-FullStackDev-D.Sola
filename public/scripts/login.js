

router.post('/', async (req,res,next)=>{
    const { password, email, name, lastName} = req.body
    const hashed = await hashPassword(password)
    const user = { 
        password: hashed,
         email,
         name,
         lastName}
    try{
      await User.create(user)
      res.sendStatus(201)
    }
    catch(error){
      res.status(500).send({error: error.message})
    }
  })



  const loginUser = async (e) => {
    e.preventDefault()
    getInputValues()
    try{
     const response = await axios.post(`http://localhost:3000/login`,objectToSend)
     swal({
      title: 'Success!',
      text: "",
      icon: 'success',
      confirmButtonText: 'Ok'
    })
    window.location.href= "./index.html"
    }
    catch(error){
      swal({
//Mostrá el mensaje de error 
      })
    }
}
const loginButton = document.getElementById('login')
loginButton.addEventListener('click', (e)=> loginUser(e))
