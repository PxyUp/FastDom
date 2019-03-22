export function setNodeAttrs(
    node: HTMLElement | Element,
    attrs: { [key: string]: string },
  ) {
    Object.keys(attrs).forEach(key => {
      node.setAttribute(key, attrs[key]);
    });
  }

  export function addNodeListener(
    node: HTMLElement | Document,
    listeners: { [key: string]: any | Array<any> },
  ) {
    if(!listeners) {
        return;
    }
    Object.keys(listeners).forEach(event => {
      if (!Array.isArray(listeners[event])) {
        node.addEventListener(event, listeners[event]);
        return;
      }
      listeners[event].forEach((callback: any) => {
        node.addEventListener(event, callback);
      });
    });
  }
  
  export function removeNodeListener(
    node: HTMLElement | Document,
    listeners: { [key: string]: any | Array<any> },
  ) {
    if(!listeners) {
        return;
    }
    Object.keys(listeners).forEach(event => {
      if (!Array.isArray(listeners[event])) {
        node.removeEventListener(event, listeners[event]);
        return;
      }
      listeners[event].forEach((callback: any) => {
        node.removeEventListener(event, callback);
      });
    });
  }