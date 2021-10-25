
    let count_guess = 0;                                     // Kullanicinin sayiyi kac seferde bildigini gosterebilmek icin bir counter 
    let guessed_nums = [];                                   // Kullanicinin girdigi sayilari gosterebilmek icin bir array
    let randomNumber = Math.floor(Math.random() * 100 + 1);      // 1 ile 100 arasında bir sayı üretiyor (100 dahil olsun diye +1 ekledik)
    
    document.getElementById("button").onclick = () => {      // Butona ulasip her basildiginda yapilmasi istenen fonksiyon
    
    var input = document.getElementById("guess").value;

    if(input === ""){                                       // Eger kullanici input alanini bos birakirsa
      alert("It can not be left blank!");
    }

    if(input <= 0 || input > 100){                          // Eger kullanici 1 ile 100 arasinda olmayan bir sayi girerse
      alert("Please enter a number between 0 and 100!");
    }

    if(isNaN(input)){                                        // Eger kullanici input icerisine sayi girmezse
        document.getElementById("span1").innerText = "Try Again...";
        document.getElementById("span1").style.color = "blue";
        
        var r = confirm("Please enter a number?");
        if (r == true) {
            document.getElementById("guess").value = '';
        }else{
            document.getElementById('guess').value = '';
        }
    }

    if (!isNaN(input) && input !== " "){                     // Eger kullanici input alanina sayi olmayan bir karakter veya bosluk girerse denenen sayilar dizisine atmasin diye 
         guessed_nums.push(input);
    }
    
    if (input > randomNumber) {     // Girilen sayi tahmin edilmek istenen sayidan buyukse
        count_guess++; 
        document.getElementById("span1").innerText="Please Enter a Lower Number...";
        document.getElementById('span2').innerText = 'Number of attemps: ' + count_guess;
        document.getElementById('span3').innerText = `Tried Numbers : ${guessed_nums}`;
        
    }
    if (input < randomNumber) {     // Girilen sayi tahmin edilmek istenen sayidan kucukse
        count_guess++;
        document.getElementById('span1').innerText = 'Please Enter a Greater Number...';
        document.getElementById('span2').innerText = 'Number of attemps: ' + count_guess;
        document.getElementById('span3').innerText = `Tried Numbers : ${guessed_nums}`;
        
        
    }
    if (input == randomNumber) {    // Girilen sayi tahmin edilmek istenen sayiya esitse
        document.getElementById('span1').innerText = 'CONGRATULATIONS!!!';
        document.getElementById('span2').innerText = `YOU HAVE GUESSED THE NUMBER AT ${count_guess + 1} ATTEMPTS`;
        document.getElementById('span3').innerText = "IF YOU WANT TO PLAY AGAIN, CLICK RESTART";
        stopProgress();
    }
    document.getElementById('guess').value = '';            // Her seferinde input ici temizlensin
}

document.getElementById('reset').onclick = function () {    // Restart butonuna basıldığında ilgili fonksiyon cagiriliyor
  location.reload();                                        // Sayfa tekrar yenileniyor
}

document.getElementById('guess').addEventListener('keyup', function (event) {       // Butonun eventlarina keyup (klavyeden tusa basilma)   eventi ekleniyor
  if (event.code === 'Enter') {                             // Eğer kullanıcının input code 'Enter' ise, yani Enter tusuna basarsa
    event.preventDefault();                                 // Öncelikle bunun default fonksiyonunu engelle
    document.getElementById('button').click();              // Butonun click() fonksiyonunu çağır,yani sanki kullanıcı butona basıyormuş gibi 
    document.getElementById('guess').value = '';            // Ve her seferinde input içini temizle
  } 
});

function stopProgress(){                                    // Oyun bitince bu fonksiyon cagirilacak 
  let my_btn = document.getElementById('button');
  let guess = document.getElementById('guess');
  my_btn.style.display = 'none';                            // Oyun bittiginde check button kaybolur      
  guess.disabled = true;                                    // Input alani disabled olur, yani kullanici artik deger giremez
  guess.placeholder = '👏 YOU WIN!';                        // Ve ayni alanda placeholder olarak bu yazi yazar
} 
   