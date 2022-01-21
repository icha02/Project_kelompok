function jalankanAlert() {
    let username = document.getElementById("username").value
    let password = document.getElementById("password").value

     if (username == "azka" && password == "azka") {
         Swal.fire(
            'Login Berhasil!',
           'Terimakasih sudah login!',
            'success'
         )
     } else{
         Swal.fire({
             icon: 'Login gagal',
             title: 'Maaf anda belum berhasil',
             text: 'Username atau password salah!',
         })
     }
}