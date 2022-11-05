const axios = require('axios');
const { response } = require('express');

let pessoas = []

let alerta = false;


class PessoasController {
    static index(req,res)
    {
        if(pessoas.length > 0){
            alerta = false
        }else{
            alerta = true
        }
        res.render('index',{
        pessoas:pessoas,
        alerta:alerta
        })
    }
  static cadastro(req,res)
  {
    res.render('cadastro')
  }
static salvar(req,res){
    pessoas.push(req.body)
    res.redirect('/')
}
static  async buscarCep(req,res){
    let cep = '69059140'
    let rota = process.env.API_BASE+cep+'/json'

   let endereco = await axios.get(rota)
  .then(function (response) {
    // handle success
    return response.data;
  })
  .catch(function (error) {
    // handle error
    return  error
  })

  res.render('endereco',{
    endereco:endereco
  })


}


}

//   static store(req,res)
//                 {
//                     pessoas.push(req.body.nome)
//                 //     let pessoa = req.body
//                 //     pessoa.idade = 2022-pessoa.nascimento
//                 // console.log(pessoas)

//                     res.render('index',{
//                         pessoas:pessoas
//                     })
//                 }
   

// }

            // let usuarios = [
            //     {username: 'gabriel', password: '123'},
            //     {username: 'joao', password: '3212'}
            // 

                // static login(req,res)
                // {
                //     let auth = false
                //     let user = req.body
                //     if(user.login == usuario.username)
                //     {
                //         auth = true
                //     }else {
                //         auth = false
                //     }
                //     res.render('index',{
                //         auth:auth
                //     })
                // }

                // static sobre(req,res)
                // {
                //     res.render('sobre',{
                //         usuarios:usuarios
                //     })
                // }

                

module.exports = PessoasController