var __create = Object.create;
var __getProtoOf = Object.getPrototypeOf;
var __defProp = Object.defineProperty;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __toESM = (mod, isNodeMode, target) => {
  target = mod != null ? __create(__getProtoOf(mod)) : {};
  const to = isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target;
  for (let key of __getOwnPropNames(mod))
    if (!__hasOwnProp.call(to, key))
      __defProp(to, key, {
        get: () => mod[key],
        enumerable: true
      });
  return to;
};
var __require = /* @__PURE__ */ ((x) => typeof require !== "undefined" ? require : typeof Proxy !== "undefined" ? new Proxy(x, {
  get: (a, b) => (typeof require !== "undefined" ? require : a)[b]
}) : x)(function(x) {
  if (typeof require !== "undefined")
    return require.apply(this, arguments);
  throw Error('Dynamic require of "' + x + '" is not supported');
});

// src/adapter/react/client.ts
import { createElement } from "react";
import ReactDOM from "react-dom";
var ReactClientAdapter;
try {
  const { createRoot, hydrateRoot } = await import("react-dom/client");
  ReactClientAdapter = {
    createElement,
    hydrate(reactNode, domNode) {
      return hydrateRoot(domNode, reactNode);
    },
    render(reactNode, domNode) {
      createRoot(domNode).render(reactNode);
    }
  };
} catch (e) {
  ReactClientAdapter = {
    createElement,
    hydrate(reactNode, domNode) {
      return ReactDOM.hydrate(reactNode, domNode);
    },
    render(reactNode, domNode) {
      ReactDOM.render(reactNode, domNode);
    }
  };
}
var client_default = ReactClientAdapter;
export {
  client_default as default
};
