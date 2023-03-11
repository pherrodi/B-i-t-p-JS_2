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
