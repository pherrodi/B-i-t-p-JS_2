// bài 1'

document.getElementById('btn-bai1').onclick = function () {
    // input
    var diemChuan = +document.getElementById('diem-chuan').value;
    var khuVuc = document.getElementById('khu-vuc').value;
    var doiTuong = +document.getElementById('doi-tuong').value;
    var diemMon1 = +document.getElementById('diem-mon1').value;
    var diemMon2= +document.getElementById('diem-mon2').value;
    var diemMon3 = +document.getElementById('diem-mon3').value;
    //output
    var outPutDiem = 0;
    var outPutKQ = '';
    // process 

    switch (khuVuc) {
        case 'A':
            khuVuc = 2;
            break;
        case 'B':
            khuVuc = 1;
            break;
        case 'C':
            khuVuc = 0.5;
            break;
        default:
            khuVuc = 0;
            break;
    }
    switch (doiTuong) {
        case 1:
            doiTuong = 2.5;
            break;
        case 2:
            doiTuong = 1.5;
            break;
        case 3:
            doiTuong = 1;
            break;
        default:
            doiTuong =0;
            break;
    }   
    outPutDiem = khuVuc + doiTuong + diemMon1 + diemMon2 + diemMon3;
    if(outPutDiem >= diemChuan) {
        outPutKQ = 'Đậu';
    }
    else {
        outPutKQ = 'Rớt';
    }
    document.getElementById('ket-qua1').innerHTML = `<i class="fa fa-hand-point-right"></i> Điểm của bạn là : ${outPutDiem} đ ,  Bạn đã ${outPutKQ}`;
}

// bài 2
document.getElementById('btn-tien-dien').onclick = function() {
    // input 
    var soKwDien  = +document.getElementById('so-kw').value;
    var tenKH = document.getElementById('ho-ten').value;
    // output 
    var billDien = 0;
    var outPut2 = '';
    // process
    if (soKwDien >0) {
        billDien = tinhTienDien(soKwDien);
        outPut2 = `Tiền điện của KH ${tenKH} là ${billDien}`; 
    }
    else {
        outPut2 = 'Nhập số Kw sai , vui lòng nhập lại'
    }
    document.getElementById('ket-qua2').innerHTML = outPut2;
}



function tinhTienDien(soKw) {
    var tienDien = 0;
    if (soKw<=50) {
        tienDien = soKw * 500;
    }
    else if ( soKw > 50 && soKw <= 100) {
        tienDien = 50*500 + (soKw-50)*650 ;
    }
    else if ( soKw >100 && soKw <=200) {
        tienDien = 50*500 + 50*650 + (soKw-100)*850;
    }
    else if (soKw >200 && soKw <= 350) {
        tienDien = 50*500 + 50*650 + 100*850 +(soKw - 150)*1100;
    }
    else if (soKw > 350) {
        tienDien = 50*500 + 50*650 + 100*850 + 150*1100 + (soKw -350)*1300;
    }
    return tienDien.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });;
}