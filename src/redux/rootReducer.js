import { combineReducers } from "redux";
import shopReducer from "./Shopping/shopping-reducers";

// Hàm combineReducers sẽ combine (hòa hợp) các reducer thành 1 reducer root
// Mỗi một reducers đại diện cho một phần feature của application state, và Mỗi một reducer thì có state parameter là khác nhau.
// Ví dụ 1 app có feature là xử lý đơn nước, 1 feature xử lý đơn điện, 1 feature xử lý đơn mạng, thì ta sẽ tạo 3 reducer: waterReducer(), electricReducer(), ethernetReducer()
// Sau đó khai báo hàm rootReducer = combineReducer({water: waterReducer, elec: electricReducer, ether: ethernetReducer})
const rootReducer = combineReducers({
  shop: shopReducer,
});
export default rootReducer;
