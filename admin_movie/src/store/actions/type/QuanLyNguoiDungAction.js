import { QuanLyNguoiDungService} from "../../../services/QuanLyNguoiDungService"
import { DANG_KY_ACTION, DANG_NHAP_ACTION, LAY_DANH_SACH_NGUOI_DUNG, SET_THONG_TIN_NGUOI_DUNG, SET_THONG_TIN_USER } from "./QuanLyNguoiDungType.js"
import { history } from '../../../App'
export const dangNhapAction = (thongTinDangNhap) => {
    return async (dispatch) => {
        try {
            const result = await QuanLyNguoiDungService.dangNhap(thongTinDangNhap)
            console.log("result: ", result);
            if (result.status === 200) {
                dispatch({
                    type: DANG_NHAP_ACTION,
                    thongTinDangNhap: result.data.content,

                })
                // chuyển hướng đăng nhập về trang trước đó

                history.push('/home')

            }
        } catch (error) {
            console.log("error: ", error);

        }
    }
}

export const dangKyAction = (thongTinDangKy) => {
    return async (dispatch) => {
        try {
            const result = await QuanLyNguoiDungService.dangKy(thongTinDangKy)
            alert('Đăng ký tài khoản thành công !')
            console.log("result: ", result);
            if (result.status === 200) {
                dispatch({
                    type: DANG_KY_ACTION,
                    thongTinDangKy: result.data.content,

                })
                
                history.push('/login')

            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}



export const layThongTinNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await QuanLyNguoiDungService.layThongTinNguoiDung(taiKhoan)

            console.log("result: ", result);

            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,

                })
            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}

export const capNhatThongTinNguoiDungAction = (formData) => {
    return async dispatch => {
        try {
            const result = await QuanLyNguoiDungService.capNhatThongTinNguoiDung(formData)
            alert('Cập nhật tài khoản thành công !')
            console.log("result: ", result);

            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_NGUOI_DUNG,
                    thongTinNguoiDung: result.data.content,

                })
            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}

// ADMIN
export const layDanhSachNguoiDungAction = (taiKhoan = '') => {
    return async dispatch => {
        try {
            const result = await QuanLyNguoiDungService.layDanhSachNguoiDung(taiKhoan)
            console.log("result: ", result);

            if (result.status === 200) {
                dispatch({
                    type: LAY_DANH_SACH_NGUOI_DUNG,
                    arrUserDefault: result.data.content,

                })
            }
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}

export const layThongTinUserAction = (taiKhoan) => {
    return async dispatch => {
        try {
            const result = await QuanLyNguoiDungService.layThongTinUser(taiKhoan)
            console.log("result: ", result);
            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_USER,
                    thongTinUser: result.data.content[0]
                })
            }
            
        } catch (error) {
            console.log("error: ", error.response.data);

        }
    }
}

export const themNguoiDungAction = (thongTin) => {
    return async dispatch => {
        try {
            const result = await QuanLyNguoiDungService.themNguoiDung(thongTin)
            alert('Thêm người dùng thành công !')
            console.log("result: ", result.data.content);   

            history.push('/admin/user');
            
        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}

export const capNhatNguoiDungAction = (taiKhoan) => {
    return async dispatch => {
        try {
            let result = await QuanLyNguoiDungService.capNhatNguoiDung(taiKhoan)
            alert('Cập nhật người dùng thành công !')
            console.log("result: ", result); 
            if (result.status === 200) {
                dispatch({
                    type: SET_THONG_TIN_USER,
                    thongTinUser: result.data.content,

                })
            }

            dispatch(layDanhSachNguoiDungAction());
            history.push('/admin/user');

        } catch (error) {
            console.log("error: ", error.response?.data);

        }
    }
}
