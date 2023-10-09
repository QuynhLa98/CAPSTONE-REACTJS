import { SET_DANH_SACH_PHIM, SET_FILM_DANG_CHIEU, SET_FILM_SAP_CHIEU, SET_THONG_TIN_PHIM } from "../actions/type/QuanLyPhimType"
import { SET_CHI_TIET_PHIM } from "../actions/type/QuanLyRapType"

const stateDefault = {
    arrFilm: [
        {
            "maPhim": 1282,
            "tenPhim": "Bàn Tay Diệt Quỷ",
            "biDanh": "ban-tay-diet-quy",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "Bàn Tay Diệt Quỷ. Evil Expeller (2021) là một bộ phim kinh dị hành động Hàn Quốc được viết và đạo diễn bởi Kim Joo-hwan. Phim có sự tham gia của Park Seo-joon, Ahn Sung-ki và Woo Do-hwan. Bộ phim được phát hành vào ngày 31 tháng 7 năm 2019. Sau khi bản thân bỗng nhiên sở hữu “Bàn tay diệt quỷ”, võ sĩ MMA Yong Hoo (Park Seo Joon thủ vai) đã dấn thân vào hành trình trừ tà, trục quỷ đối đầu với Giám Mục Bóng Tối (Woo Do Hwan) – tên quỷ Satan đột lốt người. Từ đó sự thật về cái chết của cha Yong Hoo cũng dần được hé lộ cũng như nguyên nhân anh trở thành “người được chọn",
            "maNhom": "GP08",
            "ngayKhoiChieu": "2021-03-09T00:00:00",
            "danhGia": 5,
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
        },
        {
            "maPhim": 1282,
            "tenPhim": "Bàn Tay Diệt Quỷ",
            "biDanh": "ban-tay-diet-quy",
            "hinhAnh": "http://movieapi.cyberlearn.vn/hinhanh/ban-tay-diet-quy.png",
            "moTa": "Bàn Tay Diệt Quỷ. Evil Expeller (2021) là một bộ phim kinh dị hành động Hàn Quốc được viết và đạo diễn bởi Kim Joo-hwan. Phim có sự tham gia của Park Seo-joon, Ahn Sung-ki và Woo Do-hwan. Bộ phim được phát hành vào ngày 31 tháng 7 năm 2019. Sau khi bản thân bỗng nhiên sở hữu “Bàn tay diệt quỷ”, võ sĩ MMA Yong Hoo (Park Seo Joon thủ vai) đã dấn thân vào hành trình trừ tà, trục quỷ đối đầu với Giám Mục Bóng Tối (Woo Do Hwan) – tên quỷ Satan đột lốt người. Từ đó sự thật về cái chết của cha Yong Hoo cũng dần được hé lộ cũng như nguyên nhân anh trở thành “người được chọn",
            "maNhom": "GP08",
            "ngayKhoiChieu": "2021-03-09T00:00:00",
            "danhGia": 5,
            "hot": null,
            "dangChieu": null,
            "sapChieu": null
        },
    ],
    dangChieu: true,
    sapChieu: true,
    arrFilmDefault: [],
    filmDetail: {

    },
     thongTinPhim: {}

}

export const QuanLyPhimReducer = (state = stateDefault, action) => {
    switch (action.type) {
        case SET_DANH_SACH_PHIM: {
            state.arrFilm = action.arrFilm
            state.arrFilmDefault = state.arrFilm
            return { ...state }
        }
        case SET_FILM_DANG_CHIEU: {
            state.dangChieu = !state.dangChieu
            state.arrFilm = state.arrFilmDefault.filter((film) => film.dangChieu === state.dangChieu)
            return { ...state }

        }
        case SET_FILM_SAP_CHIEU: {
            state.sapChieu = !state.sapChieu
            state.arrFilm = state.arrFilmDefault.filter((film) => film.sapChieu === state.sapChieu)
            return { ...state }

        }

        case SET_CHI_TIET_PHIM: {
            state.filmDetail = action.filmDetail
            return {...state}
        }

        case SET_THONG_TIN_PHIM: {
            state.thongTinPhim = action.thongTinPhim
            return {...state}
        }
        default: return { ...state }
    }
}