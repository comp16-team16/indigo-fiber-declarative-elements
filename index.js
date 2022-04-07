Object.prototype.on=function(u){u(this)};HTMLElement.prototype.copy=function(p){for(let n in p)n.startsWith('x')&&p[n](v=>this[n.slice(1)]=v||n.startsWith('on')&&(this[n]=v));return this}
