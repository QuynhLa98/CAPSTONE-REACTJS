import { baseService } from "./baseService";

export class QuanLyDatVeService extends baseService {
    constructor() {
        super();
    }

    layChiTietPhongVe = (maLichChieu) => { // url
        return this.get(`/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${maLichChieu}`);
    }

    taoLichChieu = (thongTinLichChieu) => {
        return this.post(`/api/QuanLyDatVe/TaoLichChieu`, thongTinLichChieu);
    }


}


export const quanLyDatVeService = new QuanLyDatVeService();