<?php
$conex= mysqli_connect('localhost','root','' ,'generadornomina') or die(mysql_error($mysqli));
?> 
    
    <!Doctype html>
    <html>
    <link rel="stylesheet" type="text/css" href="tabla.css">
    <link rel="icon" href="jlogo.ico">
        <head>
            <title>U-23</title>
</head><body>
    <h2 align="center" >LEONES U-23</h2><br>
    <table class="tabla">
        <tr>
            <td>Foto</td>
            <td>Nombres</td>
            <td>Apellidos</td>
            <td>CUI</td>
            <td>Años</td>
            <td>Fecha de Cumpleaños</td>
            <td>Rama</td>
            <td>Club</td>
            <td>Categoria</td>
            <td>Dorsal</td>
            <?php
$sql="SELECT * from leones23";
$result=mysqli_query($conex, $sql);

while($mostrar=mysqli_fetch_array($result)){

?>
        </tr>
        <tr>
            <?php
        echo "<td><img src='" . $mostrar['foto'] . "' alt='Imagen' width='25%' ></td>";?>
        <td><?php echo $mostrar ['nombres'] ?></td>
        <td><?php echo $mostrar ['apellidos'] ?></td>
        <td><?php echo $mostrar ['cui'] ?></td>
        <td><?php echo $mostrar ['aos'] ?></td>
        <td><?php echo $mostrar ['nacimiento'] ?></td>
        <td><?php echo $mostrar ['rama'] ?></td>
        <td><?php echo $mostrar ['club'] ?></td>
        <td><?php echo $mostrar ['categoria'] ?></td>
        <td><?php echo $mostrar ['dorsal'] ?></td>
        
        
        </tr>
    <?php
}

    ?>

</table>
<br><br><br>
<h1><a href="u23.html">VOLVER</a></h1>
<form align="center" action="deleteleones23.php" method="post" name="form1">
<label for="cui">Borrar registro:</label>
<input type="text" id="id" name="id" placeholder="utiliza el CUI para borrar">
<input type="submit" value="Borrar">
</form>

