const nama = "reza afrian mawardi";
let usia = 30 ;

let biodata = document.getElementById(`biodata`);

function generateBiodata () {
    let generasi;

    if(usia > 10 && usia < 18){
        generasi = "generasi remaja";
    }
    else if (usia > 18 && usia < 30) {
        generasi = "generasi dewasa";
    }
    else if (usia >= 30) {
        generasi = "generasi bapak bapak";
    }
    else if (usia < 10 && usia > 5) {
        generasi = "generasi anak kecil";
    }
    else{
        generasi = "generasi bayi";
    }

    return biodata.innerHTML =  generasi;
}

console.log(nama);
console.log(usia);

generateBiodata();