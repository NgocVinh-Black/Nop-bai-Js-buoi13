//Tính tiền lương nhân viên
const tien1Ngay = 100000;
function tinhLuong() {
  var soNgayLam = document.getElementById("txtSoNgayLam").value * 1;
  console.log(typeof Number(soNgayLam));
  var tongTien = 0;
  if (soNgayLam >= 0) {
    tongTien = soNgayLam * tien1Ngay;
  } else {
    alert("Nhập lại dữ liệu");
  }
  document.getElementById(
    "ketQuaLuong"
  ).innerHTML = `Tiền lương tháng này của bạn là: ${tongTien.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}
document.getElementById("txtTinhLuong").onclick = tinhLuong;

//Tính giá trị trung bình
document.getElementById("txtTinhTrungBinh").onclick = function () {
  var soThu1 = document.getElementById("txtSoThu1").value * 1;
  var soThu2 = document.getElementById("txtSoThu2").value * 1;
  var soThu3 = document.getElementById("txtSoThu3").value * 1;
  var soThu4 = document.getElementById("txtSoThu4").value * 1;
  var soThu5 = document.getElementById("txtSoThu5").value * 1;
  console.log(typeof parseFloat(soThu1));
  console.log(typeof parseFloat(soThu2));
  console.log(typeof parseFloat(soThu3));
  console.log(typeof parseFloat(soThu4));
  console.log(typeof parseFloat(soThu5));
  var soTrungBinh = 0;
  soTrungBinh = (soThu1 + soThu2 + soThu3 + soThu4 + soThu5) / 5;
  document.getElementById(
    "ketQuaTrungBinh"
  ).innerHTML = `Gias trị trung bình là: ${soTrungBinh}`;
};

//Tính tiền quy đổi
const tien1USD = 23500;
function tinhTienDoi() {
  var soTienVND = document.getElementById("txtVND").value * 1;
  console.log(typeof Number(soTienVND));
  var tongTienDoi = 0;
  if (soTienVND >= 0) {
    tongTienDoi = soTienVND * tien1USD;
  } else {
    alert("Nhập lại dữ liệu");
  }
  document.getElementById(
    "ketQuaDoiTien"
  ).innerHTML = `Tiền quy đổi của bạn là: ${tongTienDoi.toLocaleString(
    "it-IT",
    {
      style: "currency",
      currency: "VND",
    }
  )}`;
}
document.getElementById("txtDoiTien").onclick = tinhTienDoi;

//Tính diện tích, chu vi hình chữ nhật
function returnCD() {
  var chieuDai = document.getElementById("txtChieuDai").value * 1;
  return chieuDai;
}
function returnCR() {
  var chieuRong = document.getElementById("txtChieuRong").value * 1;
  return chieuRong;
}
document.getElementById("txtDienTich").onclick = function () {
  var ketQuaHCN = 0;
  var chieuDai = returnCD();
  var chieuRong = returnCR();
  console.log(typeof Number(chieuDai));
  console.log(typeof Number(chieuRong));
  if (chieuDai >= chieuRong) {
    ketQuaHCN = chieuDai * chieuRong;
  } else {
    alert("Nhập lại dữ liệu");
  }
  document.getElementById(
    "txtketQuaHCN"
  ).innerHTML = `Diện tích hình chữ nhật là: ${ketQuaHCN}`;
};
document.getElementById("txtChuVi").onclick = function () {
  var ketQuaHCN = 0;
  var chieuDai = returnCD();
  var chieuRong = returnCR();
  console.log(typeof Number(chieuDai));
  console.log(typeof Number(chieuRong));
  if (chieuDai >= chieuRong) {
    ketQuaHCN = (chieuDai + chieuRong) / 2;
  } else {
    alert("Nhập lại dữ liệu");
  }
  document.getElementById(
    "txtketQuaHCN"
  ).innerHTML = `Chu vi hình chữ nhật là: ${ketQuaHCN}`;
};

//Tổng 2 kí số

document.getElementById("txtTongKiSo").onclick = function () {
  var soNhapVao = document.getElementById("txtSoNhapVao").value * 1;
  var soChuc = Math.floor(soNhapVao / 10);
  var soDonVi = Math.floor(soNhapVao % 10);
  console.log(typeof Number(soNhapVao));
  var tong2Kiso = 0;
  if (soNhapVao < 100) {
    tong2Kiso = soChuc + soDonVi;
  } else {
    alert("Nhập số nhỏ hơn 100");
  }
  document.getElementById(
    "txtTongKiSoHT"
  ).innerHTML = `Tổng 2 kí số là: ${tong2Kiso}`;
};
