import {
  appRouter
} from '@/router/router';
import Util from '@/libs/util';

const app = {
  state: {
    // 缓存页面元素信息对象
    cachePage: [],
    // 登录用户
    userInfo: [],
    // 是否全屏
    isFullScreen: false,
    // 当前已经打开的页面路由信息
    pageOpenedList: [{
      title: '首页',
      path: '',
      name: 'home_index'
    }],
    // 当前页面名称
    currentPageName: '',
    // 当前打开的页面信息
    currentPath: [{
      title: '首页',
      path: '',
      name: 'home_index'
    }],
    // 系统路由信息
    routers: [...appRouter],
    // 打开的Tab页签信息
    tabList: [],
    // 未读消息数量
    messageCount: 0,
    // 在这里定义你不想要缓存的页面的name属性值(参见路由配置router.js)
    dontCache: ['text-editor', 'artical-publish']
  },
  mutations: {
    // 设置打开的Tab页面信息
    setTabList(state, list) {
      state.tabList.push(...list);
    },
    // 关闭Tab页面 并销毁页面信息
    closePage(state, name) {
      state.cachePage.forEach((item, index) => {
        if (item === name) {
          state.cachePage.splice(index, 1);
        }
      });
    },
    // 初始化缓存页面，并判断是否在本地缓存中已经存在，如果存在，则从本地缓存加载页面缓存
    initCachepage(state) {
      if (sessionStorage.cachePage) {
        state.cachePage = JSON.parse(sessionStorage.cachePage);
      }
    },
    // 删除移除Tab页面
    removeTab(state, name) {
      state.pageOpenedList.map((item, index) => {
        if (item.name === name) {
          state.pageOpenedList.splice(index, 1);
        }
      });
    },
    // 获取当前已经打开的页面；同时会在缓存中获取缓存的页面信息
    pageOpenedList(state, get) {
      let openedPage = state.pageOpenedList[get.index];
      if (get.argu) {
        openedPage.argu = get.argu;
      }
      if (get.query) {
        openedPage.query = get.query;
      }
      state.pageOpenedList.splice(get.index, 1, openedPage);
      sessionStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
    },
    // 关闭所有Tab页面
    clearAllTabs(state, vm) {
      state.pageOpenedList.splice(0);
      state.cachePage.length = 0;
      sessionStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
      vm.$router.push({
        path: '/'
      });
    },
    // 移除其他Tab页面
    clearOtherTabs(state, vm) {
      let currentName = vm.$route.name;
      let currentIndex = 0;
      state.pageOpenedList.forEach((item, index) => {
        if (item.name === currentName) {
          currentIndex = index;
        }
      });
      if (currentIndex === 0) {
        state.pageOpenedList.splice(1);
      } else {
        state.pageOpenedList.splice(currentIndex + 1);
        state.pageOpenedList.splice(1, currentIndex - 1);
      }
      let newCachepage = state.cachePage.filter(item => {
        return item === currentName;
      });
      state.cachePage = newCachepage;
      sessionStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
    },
    // 从缓存中加载页面并设置已经打开的页面列表
    setOpenedList(state) {
      state.pageOpenedList = sessionStorage.pageOpenedList ?
        JSON.parse(sessionStorage.pageOpenedList) :
        [];
    },
    // 设置当前页面地址
    setCurrentPath(state, pathArr) {
      state.currentPath = pathArr;
    },
    // 设置当前页面名称
    setCurrentPageName(state, name) {
      state.currentPageName = name;
    },
    /**
     * 设置消息未读数
     * @param {*} state 状态管理
     * @param {*} count 消息未读数
     */
    setMessageCount(state, count) {
      state.messageCount = count;
    },
    /**
     * 设置用户信息
     * @param {*} state 状态管理
     * @param {*} info 用户信息
     */
    setUserInfo(state, info) {
      state.userInfo = info;
    },
    /**
     * 设置打开的页面Tab
     * @param {*} state 状态管理器
     * @param {*} tagObj 打开的页面信息
     */
    increateTab(state, tagObj) {
      if (!Util.oneOf(tagObj.name, state.dontCache)) {
        state.cachePage.push(tagObj.name);
        sessionStorage.cachePage = JSON.stringify(state.cachePage);
      }
      state.pageOpenedList.push(tagObj);
      sessionStorage.pageOpenedList = JSON.stringify(state.pageOpenedList);
    }
  }
};

export default app;
