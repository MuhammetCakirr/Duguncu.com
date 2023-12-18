
document.addEventListener('DOMContentLoaded', function () {
    // Form elemanlarına erişim
    var form = document.querySelector('form');
    var isimInput = document.getElementById('name');
   
    var epostaInput = document.getElementById('email');
    var konuInput = document.getElementById('subject');
    var mesajInput = document.getElementById('message');
    var button = document.getElementById('btnn');

    var basarilimetin = document.getElementById('basarili');
    // Gönder butonuna tıklanınca formu kontrol et
    button.addEventListener('click', function (event) {
        // Boş veya anlamsız değer varsa
        if (!isimInput.value ||  !epostaInput.value || !konuInput.value || !mesajInput.value ) {
            event.preventDefault(); // Formun gönderilmesini engelle
            alert('Lütfen tüm alanları doldurun.'); // Pop-up mesajı
        }
        else{
            event.preventDefault();
            basarilimetin.style.visibility = 'visible';
            isimInput.value="";
            epostaInput.value="";
            konuInput.value="";
            mesajInput.value="";
        }
    });
});
