export const fun = ({commit}) => {
  commit({
    type: 'getMsg',     //对应mutation.js中的getMsg方法
    msg: '我是修改后的数据'
  });
};

export const testfun = ({commit}) => {
  commit({
    type: 'getTest',     //对应mutation.js中的getMsg方法
    test: '我是修改后的数据'
  });
};
export const denglu = ({commit}) => {
  commit({
    type: 'denglu',     //对应mutation.js中的getMsg方法
  });
};

