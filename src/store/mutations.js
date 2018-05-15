/**
 * Created by Administrator on 2017/3/1 0001.
 */
export const getMsg = (state, payload) => {
  state.msg = payload.msg;
  state.msg = "sb";
  $("#app").css("color","red")
}
export const getTest = (state, payload) => {
  console.log(payload)
  state.test = payload.test;
}

