//indicar donde queremos q el codigo accceda

let accion = 'actualizar'

switch (accion)
{
    case 'listar':
        console.log('Estoy en listar');
        break;
    
    case 'guardar':
        console.log('Accion guardar');
        break;
    default:
        console.log('No definida');
}