document.getElementById("loginForm").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita el envío del formulario
  
  var username = document.getElementById("username").value;
  var password = document.getElementById("password").value;
  
  // u12M
  if (username === "leones12m" && password === "12345") {
    window.location.href = "leones_u12m.php"; // Redirigir a la página leones
  } else if (username === "aguilas12m" && password === "45678") {
    window.location.href = "aguilas_u12m.php"; // Redirigir a la página aguilas
  } else if (username === "infinity12m" && password === "12345") {
    window.location.href = "infinity_u12m.php"; // Redirigir a la página infinity
  } else if (username === "grizzlies12m" && password === "45678") {
    window.location.href = "grizzlies_u12m.php"; // Redirigir a la página grizzlies
  } else if (username === "pepesqueros12m" && password === "12345") {
    window.location.href = "pepesqueros_u12m.php"; // Redirigir a la página pepesqueros
  } else if (username === "talents12m" && password === "12345") {
    window.location.href = "talents_u12m.php"; // Redirigir a la página talents
  }
  else if (username === "mym12m" && password === "12345") {
    window.location.href = "mym_u12m.php"; // Redirigir a la página mym
  }else if (username === "jaguares" && password === "12345") {
    window.location.href = "jaguares_u12m.php"; // Redirigir a la página jaguares
  } 
  

   // u23
   if (username === "leones23" && password === "12345") {
    window.location.href = "leones23.php"; // Redirigir a la página leones
  } else if (username === "aguilas23" && password === "45678") {
    window.location.href = "aguilas23.php"; // Redirigir a la página aguilas
  } else if (username === "litegua23" && password === "12345") {
    window.location.href = "litegua23.php"; // Redirigir a la página litegua
  } else if (username === "theproces23" && password === "45678") {
    window.location.href = "theproces23.php"; // Redirigir a la página the process
  } else if (username === "huracanes23" && password === "12345") {
    window.location.href = "huracanes23.php"; // Redirigir a la página huracanes
  } else if (username === "hopzone23" && password === "12345") {
    window.location.href = "hopzone23.php"; // Redirigir a la página hop zone
  }
  else if (username === "pepesqueros23" && password === "12345") {
    window.location.href = "pepesqueros23.php"; // Redirigir a la página pepesqueros
  }else if (username === "pumas23" && password === "12345") {
    window.location.href = "pumas23.php"; // Redirigir a la página pumas
  } 
  
  
   // u16F
   if (username === "leones16f" && password === "12345") {
    window.location.href = "leones16f.php"; // Redirigir a la página leones
  } else if (username === "aguilas16f" && password === "45678") {
    window.location.href = "aguilas16f.php"; // Redirigir a la página aguilas
  } else if (username === "warriors16f" && password === "12345") {
    window.location.href = "warriors16f.php"; // Redirigir a la página warriros
  } else if (username === "grizzlies16f" && password === "45678") {
    window.location.href = "grizzlies16f.php"; // Redirigir a la página grizzlies
  } else if (username === "talents16f" && password === "12345") {
    window.location.href = "talents16f.php"; // Redirigir a la página talents
  
  }else if (username === "pumas16f" && password === "12345") {
    window.location.href = "pumas16f.php"; // Redirigir a la página pumas
  } 
  
  
  
  
  else {
    alert("Usuario o contraseña incorrectos");
  }
});