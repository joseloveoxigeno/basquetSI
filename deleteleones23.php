<?php
$conex= mysqli_connect('localhost','root','' ,'generadornomina') or die(mysql_error($mysqli));

//$reg=mysql_query("SELECT id FROM tabla WHERE cui='$_POST[id]'",$conex);
//if($re=mysql_fetch_array($reg)){
  //  mysql_query("DELETE FROM tabla WHERE cui = '$_POST[id]'",$conex);
//echo"datos eliminados";
//}else{
  //  echo"datos no eliminados";
//}
if (isset($_POST["id"])) {
    $id = $_POST["id"];

    // Consulta para eliminar el registro
    $sql = "DELETE FROM leones23 WHERE cui = $id";

    if ($conex->query($sql) === TRUE) {
        echo "Registro eliminado correctamente";
    } else {
        echo "Error al eliminar el registro: " . $conex->error;
    }
}

?>