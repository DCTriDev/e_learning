import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AdminSrv from "../../Services/admin.service";
export const fetchUserList = createAsyncThunk(
  "userList/fetchListUser",
  async () => {
    let result = await AdminSrv.getUserList();
    return result.data;
  }
);

const initialState = {
  listUser: [],
  listUserClone: [],
};
const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    deleteUser: (state, action) => {
      state.listUser = [...state.listUser].filter((item) => {
        return item.taiKhoan !== action.payload;
      });
    },
    searchUser: (state, action) => {
      if (action.payload.trim().length === 0) {
        state.listUser = [...state.listUserClone];
      } else {
        state.listUser = [...state.listUserClone].filter((item) => {
          return (
            item.hoTen
              .toLowerCase()
              .trim()
              .search(action.payload.toLowerCase().trim()) !== -1 ||
            item.taiKhoan
              .toLowerCase()
              .trim()
              .search(action.payload.toLowerCase().trim()) !== -1
          );
        });
      }
    },
  },
  extraReducers: {
    [fetchUserList.fulfilled]: (state, action) => {
      state.listUser = action.payload;
      state.listUserClone = action.payload;
    },
  },
});
export const { deleteUser, searchUser } = adminSlice.actions;
export default adminSlice.reducer;
