import { history } from "../../../App"
import { QuanLyPhimService } from "../../../services/QuanLyPhimService"
import { SET_DANH_SACH_PHIM, SET_THONG_TIN_PHIM } from "./QuanLyPhimType.js"


export const layDanhSachPhimAction = (tenPhim = '') => {
    return async (dispatch) => {
        try {
            const result = await QuanLyPhimService.layDanhSachPhim(tenPhim)

            console.log('result', result)
            // đưa lên reducer
            dispatch({
                type: SET_DANH_SACH_PHIM,
                arrFilm: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}

export const themPhimUploadHinhAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await QuanLyPhimService.themPhimUploadHinh(formData)
            alert('Thêm phim thành công!')
            console.log("result: ", result);

            

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const CapNhatPhimUploadAction = (formData) => {
    return async (dispatch) => {
        try {
            let result = await QuanLyPhimService.capNhatPhimUpload(formData)
            alert('Cập nhật phim thành công!')
            console.log("result: ", result);
            dispatch(layDanhSachPhimAction())
            history.push('/admin/films')

        } catch (errors) {
            console.log('errors', errors.response?.data)
        }
    }
}

export const layThongTinPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await QuanLyPhimService.layThongTinPhim(maPhim)

            console.log('result', result)
            dispatch({
                type: SET_THONG_TIN_PHIM,
                thongTinPhim: result.data.content
            })

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}

export const xoaPhimAction = (maPhim) => {
    return async (dispatch) => {
        try {
            const result = await QuanLyPhimService.xoaPhim(maPhim)

            console.log('result', result.data.content)
           alert('Xóa phim thành công !')

           dispatch(layDanhSachPhimAction())

        } catch (errors) {
            console.log('errors', errors)
        }
    }
}