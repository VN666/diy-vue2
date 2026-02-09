import { initState } from "./initState.js";

export function initMixin (Vue) {
  Vue.prototype._init = function (options) {
    console.log(options);
    const vm = this;
    vm.$options = options;
  
    initState(vm);

  }
}