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

// bài 3

document.getElementById('btn-tinh-thue').onclick = function () {
    //input
    var hoTenKHTinhThue = document.getElementById('ho-ten-thuetn').value;
    var tongThuNhap = +document.getElementById('tong-thu-nhap').value;
    var soNguoiPhuThuoc = +document.getElementById('so-nguoi-phu-thuoc').value;
    var thuNhapChiuThue = tongThuNhap - (4e+6) - soNguoiPhuThuoc*(1.6e+6);
    

    const a = 5 / 100;
    const b = 10 / 100;
    const c = 15 / 100;
    const d = 20 / 100;
    const e = 25 / 100;
    const f = 30 / 100;
    const g = 35 / 100;
    
    const T1 = 6 * 10 ** 7;
    const T2 = 12 * 10 ** 7;
    const T3 = 21 * 10 ** 7;
    const T4 = 38 * 10 ** 7;
    const T5 = 63 * 10 ** 7;
    const T6 = 96 * 10 ** 7;
    //output
    var tienThue = 0;
    // process

    switch (true) {
        case thuNhapChiuThue <= T1:
            tienThue = thuNhapChiuThue * a;
            break;
        case thuNhapChiuThue <= T2:
            tienThue = T1 * a + (thuNhapChiuThue - T1) * b;
            break;
        case thuNhapChiuThue <= T3:
            tienThue = T1 * a + (T2 - T1) * b + (thuNhapChiuThue - T2) * c;
            break;
        case thuNhapChiuThue <= T4:
            tienThue = T1 * a + (T2 - T1) * b + (T3 - T2) * c + (thuNhapChiuThue - T3) * d;
            break;
        case thuNhapChiuThue <= T5:
            tienThue = T1 * a + (T2 - T1) * b + (T3 - T2) * c + (T4 - T3) * d + (thuNhapChiuThue - T4) * e;
            break;
        case thuNhapChiuThue <= T6:
            tienThue = T1 * a + (T2 - T1) * b + (T3 - T2) * c + (T4 - T3) * d + (T5 - T4) * e + (thuNhapChiuThue - T5) * f;
            break;
        default:
            tienThue = T1 * a + (T2 - T1) * b + (T3 - T2) * c + (T4 - T3) * d + (T5 - T4) * e + (T6 - T5) * f + (thuNhapChiuThue - T6) * g;
            break;
    }
    document.getElementById('ket-qua3').innerHTML = `Tiền Thuế TNCN của ${hoTenKHTinhThue} là ${tienThue.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}`;
};

// bài 4
// xử lý ẩn hiện số kết nối
document.getElementById('loai-kh').onchange = function() {
    var loaiKh = document.getElementById('loai-kh').value;
    if (loaiKh == 'dn'){
        document.getElementById('so-ket-noi').style.display = 'block';
    } else {
        document.getElementById('so-ket-noi').style.display = 'none';
    }
}
// input
var loaiKh = document.getElementById('loai-kh').value;
var maKh = document.getElementById('ma-kh').value;
var soKetNoi = +document.getElementById('so-ket-noi').value;
var soKenh = +document.getElementById('so-kenh').value;
// output
var tienCap = 0;

//process

document.getElementById('btn-tinh-tien-cap').onclick = function () {
    if (loaiKh == 'nd') {
        tienCap = 4.5+20.5+7.5*soKenh;
    }
    else if (loaiKh =='dn') {
        if (soKetNoi<=10) {
            tienCap = 15+75+50+7.5*soKenh;
        }
        else {
            tienCap = 15+75+(soKetNoi-10)*5+50*soKenh;
        }
    }
  
    document.getElementById('ket-qua4').innerHTML = `Hóa đơn của mã KH ${maKh}  là ${tienCap}`;
}