let belanja = parseInt(prompt("masukan total belanja"));

document.write(`anda belanja = ${belanja}`)

let diskon = 0

switch (true) {
    
    case (belanja < 100000) :
        document.write("tidak mendapatkan diskon");
        
        break;
    
    case (belanja >= 100000 && belanja <= 200000):
        diskon = belanja * 10 / 100 ;
         
        document.write(`anda mendapatkan diskon 10% total menjadi ${belanja - diskon}`);
        break;
    
    case (belanja >= 200000):
        diskon = belanja * 25 / 100 ;
         
        document.write(`anda mendapatkan diskon 25% dan total menjadi ${belanja - diskon}`) ;
        break
}