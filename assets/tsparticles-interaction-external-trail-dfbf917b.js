import{F as t,E as i,i as s}from"./tsparticles-engine-1e3d91c8.js";class a{constructor(){this.delay=1,this.pauseOnStop=!1,this.quantity=1}load(i){i&&(void 0!==i.delay&&(this.delay=i.delay),void 0!==i.quantity&&(this.quantity=i.quantity),void 0!==i.particles&&(this.particles=t({},i.particles)),void 0!==i.pauseOnStop&&(this.pauseOnStop=i.pauseOnStop))}}class o extends i{constructor(t){super(t),this._delay=0}clear(){}init(){}async interact(t){var i,s,a,o;const e=this.container,{interactivity:n}=e;if(!e.retina.reduceFactor)return;const l=e.actualOptions.interactivity.modes.trail;if(!l)return;const r=1e3*l.delay/this.container.retina.reduceFactor;if(this._delay<r&&(this._delay+=t.value),this._delay<r)return;const c=!(l.pauseOnStop&&(n.mouse.position===this._lastPosition||(null==(i=n.mouse.position)?void 0:i.x)===(null==(s=this._lastPosition)?void 0:s.x)&&(null==(a=n.mouse.position)?void 0:a.y)===(null==(o=this._lastPosition)?void 0:o.y))),d=e.interactivity.mouse.position;d?this._lastPosition={...d}:delete this._lastPosition,c&&e.particles.push(l.quantity,e.interactivity.mouse,l.particles),this._delay-=r}isEnabled(t){const i=this.container,a=i.actualOptions,o=i.interactivity.mouse,e=((null==t?void 0:t.interactivity)??a.interactivity).events;return o.clicking&&o.inside&&!!o.position&&s("trail",e.onClick.mode)||o.inside&&!!o.position&&s("trail",e.onHover.mode)}loadModeOptions(t,...i){t.trail||(t.trail=new a);for(const s of i)t.trail.load(null==s?void 0:s.trail)}reset(){}}async function e(t,i=!0){await t.addInteractor("externalTrail",(t=>new o(t)),i)}export{e as l};
