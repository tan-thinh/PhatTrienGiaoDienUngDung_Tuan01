// Hàm tính điểm trung bình
const tinhDiemTrungBinh = (diem) => {
    let tongDiem = diem.reduce((tong, diemHienTai) => tong + diemHienTai, 0);
    return tongDiem / diem.length;
};

// Dữ liệu bài toán
const diemDolphins1 = [96, 108, 89];
const diemKoalas1 = [88, 91, 110];

const diemDolphinsBonus1 = [97, 112, 101];
const diemKoalasBonus1 = [109, 95, 123];

const diemDolphinsBonus2 = [97, 112, 101];
const diemKoalasBonus2 = [109, 95, 106];

// Hàm xác định đội chiến thắng
const xacDinhDoiThang = (diemDolphins, diemKoalas) => {
    const trungBinhDolphins = tinhDiemTrungBinh(diemDolphins);
    const trungBinhKoalas = tinhDiemTrungBinh(diemKoalas);

    // console.log(`Điểm trung bình của Dolphins: ${trungBinhDolphins}`);
    // console.log(`Điểm trung bình của Koalas: ${trungBinhKoalas}`);

    // Điều kiện tối thiểu: Điểm trung bình phải >= 100
    const diemToiThieu = 100;

    if (trungBinhDolphins > trungBinhKoalas && trungBinhDolphins >= diemToiThieu) {
        console.log("Đội Dolphins chiến thắng!");
    } else if (trungBinhKoalas > trungBinhDolphins && trungBinhKoalas >= diemToiThieu) {
        console.log("Đội Koalas chiến thắng!");
    } else if (trungBinhDolphins === trungBinhKoalas && trungBinhDolphins >= diemToiThieu && trungBinhKoalas >= diemToiThieu) {
        console.log("Hòa, cả hai đội cùng giành cúp!");
    } else {
        console.log("Không đội nào giành được cúp.");
    }
};

// Kiểm tra với các trường hợp
console.log("Dữ liệu bài toán 1:");
xacDinhDoiThang(diemDolphins1, diemKoalas1);

console.log("\nDữ liệu Bonus 1:");
xacDinhDoiThang(diemDolphinsBonus1, diemKoalasBonus1);

console.log("\nDữ liệu Bonus 2:");
xacDinhDoiThang(diemDolphinsBonus2, diemKoalasBonus2);