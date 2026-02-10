import { ArrayMethods } from "./arr.js";

export function observe (data) {
  if (typeof data !== "object" || data == null) return; 
  
  return new Observer(data);
}

class Observer {
  constructor (value) {
    Object.defineProperty(value, "__ob__", {
      enumerable: false,
      value: this
    });

    if (Array.isArray(value)) {
      value.__proto__= ArrayMethods;
      this.observeArray(value);
    }
    else this.walk(value);
  }

  walk (data) {
    let keys = Object.keys(data);
    for (let i = 0; i < keys.length; i++) {
      let key = keys[i];
      let value = data[key];
      defineReactive(data, key, value);
    }
  }

  observeArray (value) {
    for (let i = 0; i < value.length; i++) {
      observe(value[i]);
    }
  }
}

function defineReactive (data, key, value) {
  observe(value);
  Object.defineProperty(data, key, {
    get () {
      return value;
    },
    set (newValue) {
      if (newValue === value) return;
      observe(newValue);
      value = newValue;
    }
  })
}