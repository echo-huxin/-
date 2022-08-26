import { loginApi, logout, getInfo } from "@/api/user";
import { getToken, setToken, removeToken } from "@/utils/auth";
import { resetRouter } from "@/router";

const getDefaultState = () => {
  return {
    user: null, // 存储登录后的用户的信息
  };
};

const state = getDefaultState();

const mutations = {
  RESET_STATE: (state) => {
    Object.assign(state, getDefaultState());
  },
  // SET_TOKEN: (state, token) => {
  //   state.token = token
  // },
  // SET_NAME: (state, name) => {
  //   state.name = name
  // },
  // SET_AVATAR: (state, avatar) => {
  //   state.avatar = avatar
  // },
  SET_USER: (state, payload) => {
    state.user = payload;
  },
};

const actions = {
  // user login
  login({ commit }, userInfo) {
    // userInfo 是用户提交的数据，接下来，我们就应该把这个数据发送到服务器
    return new Promise((resolve, reject) => {
      loginApi(userInfo)
        .then((res) => {
          const { data } = res;
          if (data) {
            // 说明 data 里面有数据
            commit("SET_USER", data);
            resolve();
          } else {
            reject(res);
          }
        })
        .catch((error) => {
          reject(error);
        });
    });

    // const { username, password } = userInfo
    // return new Promise((resolve, reject) => {
    //   login({ username: username.trim(), password: password }).then(response => {
    //     const { data } = response
    //     commit('SET_TOKEN', data.token)
    //     setToken(data.token)
    //     resolve()
    //   }).catch(error => {
    //     reject(error)
    //   })
    // })
  },

  // 恢复登录状态
  getInfo({ commit, state }) {
    return new Promise((resolve, reject) => {
      // 发送请求
      getInfo().then((res) => {
        // 验证成功的情况
        // {
        //   "code": 0,
        //   "msg": "",
        //   "data": {
        //     "loginId": "yjisme",
        //     "name": "管理员",
        //     "id": "608530d2dfce8783ab52a45d"
        //   }
        // }
        // {"code":401,"msg":"未登录，或登录已过期","data":null} string 验证失败的请求

        if (typeof res === "string") {
          // 未登录，或者 token 已经过期
          res = JSON.parse(res);
          if (res.code === 401) {
            reject(res.msg);
          }
        } else {
          // 说明这个 token 是 OK 的，将用户信息放入到仓库
          commit("SET_USER", res.data);
          resolve();
        }
      });

      // getInfo(state.token).then(response => {
      //   const { data } = response

      //   if (!data) {
      //     return reject('Verification failed, please Login again.')
      //   }

      //   const { name, avatar } = data

      //   commit('SET_NAME', name)
      //   commit('SET_AVATAR', avatar)
      //   resolve(data)
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // user logout
  logout({ commit, state }) {
    return new Promise((resolve, reject) => {
      removeToken(); // must remove  token  first
      resetRouter();
      commit("RESET_STATE");
      resolve();
      // logout(state.token).then(() => {
      //   removeToken() // must remove  token  first
      //   resetRouter()
      //   commit('RESET_STATE')
      //   resolve()
      // }).catch(error => {
      //   reject(error)
      // })
    });
  },

  // remove token
  resetToken({ commit }) {
    return new Promise((resolve) => {
      removeToken(); // must remove  token  first
      commit("RESET_STATE");
      resolve();
    });
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
function Node(value) {
  this.value = value;
  this.next = null;
}
var node1 = new Node(1);
var node2 = new Node(2);
var node3 = new Node(3);
var node4 = new Node(4);
var node5 = new Node(5);

node1.next = node2;
node2.next = node3;
node3.next = node4;
node4.next = node5;
function bianLink2(root) {
  if (root == null) return;
  console.log(root.value);
  bianLink2(root.next);
}

function nizi(root) {
  if (root.next.next == null) {
    root.next.next = root;
    return root.next;
  } else {
    let result = nizi(root.next);
    root.next.next = root;
    root.next = null;
    return result;
  }
}

var newRoot = nizi(node1);
bianLink2(newRoot);
