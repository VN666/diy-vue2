import { observe } from "./observer/index.js";

export function initState (vm) {
  let opts = vm.$options;
  if (opts.data) initData(vm);
  if (opts.props) initProps(vm);
  if (opts.watch) initWatch(vm);
  if (opts.methods) initMethods(vm);
  if (opts.computed) initComputed(vm);
}

function proxy (vm, source, key) {
  Object.defineProperty(vm, key, {
    get () {
      return vm[source][key];
    },
    set (newValue) {
      vm[source][key] = newValue;
    }
  });
}

function initData (vm) {
  let data = vm.$options.data;
  data = vm._data = typeof data === "function" ? data.call(vm) : data;
  for (let key in data) {
    proxy(vm, "_data", key);
  }
  observe(data);
}

function initProps (vm) {}

function initWatch (vm) {}

function initMethods (vm) {}

function initComputed (vm) {}