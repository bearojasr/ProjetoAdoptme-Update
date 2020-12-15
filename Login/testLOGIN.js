
let valid;
let UsuariosRegistrados=[]

let registro = document.querySelector('#registro').style
let formulario = document.querySelector('#Res')


document.querySelector('#BtEnviar').addEventListener('click', (event)=>{
entradaDatos()
console.log('acaba de dar clic')
})
document.querySelector('#registrarse').addEventListener('click', (event)=>{
    Show(true,registro)
    console.log('acaba de dar clic en registrarse')
    })
document.querySelector('#cerrar').addEventListener('click', (event)=>{
    hidden(true,registro)
    console.log('acaba de dar clic en cerrar')
        
        })
document.querySelector('#EnviarRegistro').addEventListener('click', (event)=>{
    hidden(true,login)
    console.log('acaba de dar clic en salvar Dados')
                
                })
        

//-------------------------------recepcion de datos del html
function entradaDatos(){
     let usuario=document.querySelector('#TxtUsuario').value
      let senha=document.querySelector('#TxtSenha').value
     let login = document.querySelector('#contenedor').style
    
     if(usuario && senha!==''){
     event.preventDefault()
     }
    registrado=new Registro(usuario,senha)
    Validar(registrado,login)
    MostrarDatos()//es solo en la consola
}
//------------------------------constructor del objeto para guardar los usuarios
function Registro(usuario,senha){
    this.Usuario=usuario
    this.Senha=senha
}
//-------------------------------salida de datos en la consola
function MostrarDatos(){
   console.log(UsuariosRegistrados)
}
//---------------------------------comprobando si usuario existe|| y si hay problemas con el usuario o el password
function comprobar (a,b){
    for (let usuarios of UsuariosRegistrados)
    {
        if (usuarios.Usuario===a && usuarios.Senha===b)
        {
        return true
        }   else if (usuarios.Usuario===a && usuarios.Senha!==b || usuarios.Usuario!==a && usuarios.Senha===b )
            {
            return 'senhaOusuario'
            }
    
    }
}
//----------------------------------validar usuario y senha diferente de '' o con problemas en la senha o usuario, registro de aquel que sea nuevo y dando la bienvenida a quien ya esta registrado
function Validar(registrado,login)
{
   
if((registrado.Usuario && registrado.Senha)!=='')
    {
    if(comprobar(registrado.Usuario,registrado.Senha)==='senhaOusuario')
    {
        //----------------------------------console.log('se esta cumpliendo el nooooo')
        alert('Por favor, revise si su usuario o sua senha esta correctamente deleteado');
    }else{  
    if (!comprobar(registrado.Usuario,registrado.Senha))
        {
            //----------------------------------console.log('se esta cumpliendo el que no esta registradoooo')
            valid=confirm(registrado.Usuario+' usted no está registrado(a), quiere que guardemos su Registro con estos datos??')
            if (valid)
            {
                console.log('se esta cumpliendo el listo despues de registrar')
                UsuariosRegistrados.push(registrado); alert('Listo! recuerde guardar bien sua senha.')
            //-----------------------------------console.log('ocultado')
            hidden(valid,login)
            }

        }else {
            //----------------------------------------console.log('se esta cumpliendo el BIENVENIDO final')  
            alert(`BIENVENIDO ${registrado.Usuario}!`)
               //--------------------------------------console.log('ocultado')
               hidden(comprobar,login)
              
               }
            }
       
    }    
}
//-----------------------------------------------para ocultar usando display
function hidden(validacion, paraOcultar)
    {
    if(validacion)
        {
        
        paraOcultar.display='none'; 
        // paraOcultar.opacity=0;
        // paraOcultar.transition='opacity .20s linear';
        //    if(paraOcultar.opacity===0)
        //      {
        //         
        //         paraOcultar.display='none';               
        //     }
       
        }
    }
    function Show(validacion, paraMostrar)
    {
        console.log('SE ESTA EJECUTANDO EL SHOW')
    if(validacion)
        {
        // paraMostrar.opacity=1;
        paraMostrar.display='flex';  
        // paraMostrar.opacity=1;
        // paraMostrar.transition='opacity .20s linear';
        }
    }
    