// ===========Bài 1================
//input: nhập vào. sao cho 1+2+...+n>10000. tìm n nhỏ nhất.
//các bước xử lý
// khai báo hăng số:
const soTuNhien = 10000
function timSoN (){
    
    var i = 0;
    var soDuongNhoNhat = 0;
    while(soDuongNhoNhat < soTuNhien)
    {i++;
        soDuongNhoNhat += i;
        
    }
document.getElementById("timNguyenDuong").innerHTML = i;
}


// ouput: xuất ra số n 

// ============Bài 2===============
// input: cho X và N. tính S(n)=x+x^2+x^3+..x^n.
// xử lý:
function tinhS() {
    // gọi lấy biên n và X
    var soN = document.getElementById("soN").value * 1;
    var soX = document.getElementById("soX").value * 1;
    var tongSN = 0;
    // cho i chạy từ 1 đến n . tính công thức xuất giá trị Tong.
    for (var i = 1; i <= soN; i++){
        tongSN = tongSN + Math.pow(soX, i);
    }
document.getElementById("tinhKetQuaS").innerHTML = tongSN;
}
//output: xuất ra tổng S(n)
// =======Bài 3===========
//  input: cho N: tính giai thừa đến N
//xử lý: 
function tinhGiaiThuaN (){
    var soGiaiThuaN = document.getElementById("soNguyenN").value * 1;
    var giaiThua = 1;
    for(i = 1; i <= soGiaiThuaN; i++){
        giaiThua = i * giaiThua;
    }
document.getElementById("tinhNguyenDuongN").innerHTML = giaiThua;
}
// ==========Bài 4==============
// input: tạo 10 thẻ div. các div số 2 4 6 8 10 thì bg đỏ và ngược lại thì bg xanh
 //xử lý:
 function inTheDiv(){
    var soDiv = "";
    for(var i = 1; i <= 10; i++){
        if (i % 2 == 0){
        soDiv += `<div class="p-3 bg-danger"></div>`; 
        console.log(soDiv);
        }
else    {
    soDiv += `<div class="p-3 bg-primary"></div>`;
        }
    }
document.getElementById("inXanhDo").innerHTML = soDiv;
 }
//  In ra 10 thẻ div ngoài mang hình với số chãn thì bg= đỏ và lẽ thì = xanh 
//   =========Bài 5==================
 function inSoNguyenTo(){
    var soNguyenTo = document.getElementById ("soNguyenTo").value * 1;
    var inKetQua = "";
    var demSo = 0;
    // if (soNguyenTo >= 2){ inKetQua = 2};
    // console.log(inKetQua);
    for (var i = 1; i <= soNguyenTo; i++){
        var demSo = 0;
    for(var j = 1; j <= i; j++){
        if (i % j == 0){
        demSo++;
        }
         
    }
    if (demSo ==2) {
        inKetQua += " " + i;
    }
    
}
    
    document.getElementById ("ketQuaNguyenTo").innerHTML = inKetQua;
 }
 function inSoNguyen(){ 
 var soNguyenNho = 0;
 for(i = 1; i <= 141; i++){
    soNguyenNho += i;
    console.log(soNguyenNho);
    
 }
 document.getElementById("XanhDo").innerHTML = soNguyenNho;
}