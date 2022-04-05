export default class Usuario{
     url = "https://f10-api.herokuapp.com/usuarios/"

    constructor(nombre, apellido, correo){
        this.nombre = nombre,
        this.apellido = apellido,
        this.correo = correo
    }

    crearUsuarioApi(objetoUsuario){
        axios.post(this.url, objetoUsuario) 
        .then(data=> console.log(data))
        .catch(console.warn('error de usuario'))
        
    }

    buscarCorreoUsuario(email){
        return axios.get(this.url)
        .then(({data})=>{
            localStorage.setItem('Buscar', JSON.stringify(data.find(user=>user.correo === email)))
        })
    }

    editarUsuario(datosModificados, id){
        axios.put(this.url+id, datosModificados)
        .then(data=> console.log(data))
        .catch(console.warn('error al modificar'))
    }

    eliminarUsuario(id){
        axios.delete(this.url+id)
        .then(data=> console.log(data))
        .catch(console.warn('error al eliminar el usuario'))
    }

}

