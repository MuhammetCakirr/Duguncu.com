
    document.addEventListener('DOMContentLoaded', function () {
        // Form elemanlarına erişim
        var form = document.querySelector('form');
        var isimInput = document.getElementById('isim');
        var soyisimInput = document.getElementById('soyisim');
        var epostaInput = document.getElementById('eposta');
        var telefonInput = document.getElementById('Telefon');
        var tarihInput = document.getElementById('datepicker');
        var mekanSelect = document.getElementById('mekan');
        var kisiSelect = document.getElementById('kisi');
       
        var button = document.getElementById('btn');
        var basarilimetin = document.getElementById('basarili');
        // Gönder butonuna tıklanınca formu kontrol et
        button.addEventListener('click', function (event) {
            // Boş veya anlamsız değer varsa
            if (!isimInput.value || !soyisimInput.value || !epostaInput.value || !telefonInput.value || !tarihInput.value || !mekanSelect.value || !kisiSelect.value ) {
                event.preventDefault(); // Formun gönderilmesini engelle
                alert('Lütfen tüm alanları doldurun.'); // Pop-up mesajı
            }
            else{
                // location.reload();
                event.preventDefault();
                basarilimetin.style.visibility = 'visible';

            }
        });
    });
