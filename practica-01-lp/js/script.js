console.log('hola');


var clientes = [];
var rooms = [];

function save() {

    if (clientes.length == 0) {
        let tik = document.getElementById('num_tik').value
        let me = document.getElementById('mesa').value;
        let cli = document.getElementById('nom_cliente').value;
        let dn = document.getElementById('num_dni').value;
        let f = new Date();

        var obj_client = {
            tiket:tik,
            mesa:me,
            nombre:cli,
            dni:dn,
            date:f
        }
        clientes.push(obj_client);
        listar_clientes();
        document.getElementById('num_tik').disabled="disabled"
        document.getElementById('mesa').disabled="disabled"
        document.getElementById('nom_cliente').disabled = "disabled"
        document.getElementById('num_dni').disabled = "disabled"
        
    }
    
    let tip = document.getElementById('tipo_plato').value;
    let cant = document.getElementById('cantidad').value;
    let c = parseInt(cant);
 

    let pre = (tip == 'ejecutivo') ? 250 : 20;

    var obj_room = {
        tipo_plato: tip,    
        precio:pre,
        cantidad:c,
      
    }

    rooms.push(obj_room);
    
    listar_rooms();
    document.getElementById('cantidad').value = 0;

}

function listar_clientes() {
    for (let i = 0; i < clientes.length; i++) {
        const element = clientes[i];
        let fecha = element.date.getDate() + "/" + (element.date.getMonth() +1) + "/" + element.date.getFullYear();
        document.getElementsByTagName('tbody')[0].innerHTML = '<tr><td>'+ (i+1) + '</td><td>'+ element.tiket + '</td><td>'+ element.mesa + '</td><td>'+ element.nombre +'</td>'+
        '<td>'+ element.dni +'</td><td>'+ fecha +'</td><td>';
    }
}
function listar_rooms() {

    let contenedor = '';
    let tot = 0.0;
    for (let i = 0; i < rooms.length; i++) {
        const element = rooms[i];
        tot += (element.precio*element.cantidad);
        contenedor += '<tr><td>' + (i+1) + '</td><td>' + element.tipo_plato + '</td>'+
        '<td>' + element.precio + '</td><td>' + element.cantidad + '</td><td><img src="images/delete.png" width="30px" onclick="delete_room(' + i +')"></td></tr>';
    }
    document.getElementsByTagName('tbody')[1].innerHTML = contenedor;
    document.getElementById('total').value = tot;
}

function reset() {
    document.getElementsByTagName('tbody')[1].innerHTML = "";
    document.getElementsByTagName('tbody')[0].innerHTML = "";
    clientes.splice(0, clientes.length);
    rooms.splice(0, rooms.length);
    document.getElementById('num_tiket').disabled = false;
    document.getElementById('mesa').disabled=false;
    document.getElementById('nom_cliente').disabled = false;
    document.getElementById('num_dni').disabled = false;
   
    document.getElementById('total').value = "";
    document.getElementById('num_tiket').disabled = value;
    document.getElementById('mesa').disabled=value    
    document.getElementById('nom_cliente').value = "";
    document.getElementById('num_dni').value = "";
    
}

function delete_room(index) {
    console.log(index);
    if (confirm("Desea eliminar Pedido")) {

        rooms.splice(index , 1);
        listar_rooms();
    }
}