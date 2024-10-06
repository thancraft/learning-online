//membuat sebuah array
        let cars = ["bmw", "volvo", "honda"]; //memasukkan array kedalam variable cars
        document.getElementById("array").innerHTML = cars; //menampilkan array pada variable cars
        
        // mengambil elemen dari sebuah array dan memasukkannya ke variable bmw
        let bmw = cars[0]; //urutan elemen pada array dimulai dari 0, 1, 2, ...
        document.getElementById("array").innerHTML = bmw;  //menampilkan variable bmw kedalaman element id "array" pada html


//properti yang menampilkan jumlahnya elemen dalam suatu array
 //array length property
        let len = cars.length; //menampilkan banyaknya elemen pada sebuah array
        document.getElementById("array").innerHTML = len; 

        let last = cars[cars.length - 1]; //menampilkan elemen yang paling akhir dari sebuah array
        document.getElementById("array").innerHTML = last; 


//pengulangan setiap elemen dari sebuah array
 //Loop Over an array item
        cars.forEach(//function untuk menampilkan elemen dari sebuah array setiap elemennya
            (item,index,array) => { //membuat sebuah function
                console.log(item,index); //menampilkan elemen dari array ke sebuah console log
            });


// mengubah sebuah array menjadi string menggunakan function (toString)
 //toString(): convert an array into string
        document.getElementById("array").innerHTML = cars.toString(); //mengubah array menjadi string dan menampilkannya di html   


//mengubah elemen terakhir dari sebuah array
 //remove the last element from an array
    let last1 = cars.pop(); //menghapus elemen terakhir
    document.getElementById("array").innerHTML = last1; //menampilkan sebuah perubahaan di html
    let last2 = cars[cars.length - 1]; //mengambil elemen paling akhir
    console.log(last2); //menampilkannya di console log/console


//menambah elemen baru ke paling akhir dari sebuah array
 //add a new element at the end of array
    cars.push("audi");
    document.getElementById("array").innerHTML = cars;


//menghapus elemen paling awal dari sebuah array
 //shift(): remove the first element from an array
    cars.shift(); //menghapus elemen awal
    document.getElementById("array").innerHTML = cars;
