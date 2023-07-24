import{v as t,t as i,w as n,x as e,E as o,i as s}from"./tsparticles-engine-1e3d91c8.js";class a{constructor(){this.opacity=.5}load(t){t&&void 0!==t.opacity&&(this.opacity=t.opacity)}}class c{constructor(){this.distance=80,this.links=new a,this.radius=60}get lineLinked(){return this.links}set lineLinked(t){this.links=t}get line_linked(){return this.links}set line_linked(t){this.links=t}load(t){t&&(void 0!==t.distance&&(this.distance=t.distance),this.links.load(t.links??t.lineLinked??t.line_linked),void 0!==t.radius&&(this.radius=t.radius))}}function r(t,o,s,a){const c=t.actualOptions.interactivity.modes.connect;if(c)return function(t,o,s,a){const c=Math.floor(s.getRadius()/o.getRadius()),r=o.getFillColor(),d=s.getFillColor();if(!r||!d)return;const l=o.getPosition(),u=s.getPosition(),h=i(r,d,o.getRadius(),s.getRadius()),p=t.createLinearGradient(l.x,l.y,u.x,u.y);return p.addColorStop(0,n(r,a)),p.addColorStop(c>1?1:c,e(h,a)),p.addColorStop(1,n(d,a)),p}(o,s,a,c.links.opacity)}function d(i,n,e){i.canvas.draw((o=>{const s=r(i,o,n,e);if(!s)return;const a=n.getPosition(),c=e.getPosition();var d,l,u;d=o,l=n.retina.linksWidth??0,u=s,t(d,a,c),d.lineWidth=l,d.strokeStyle=u,d.stroke()}))}class l extends o{constructor(t){super(t)}clear(){}init(){const t=this.container,i=t.actualOptions.interactivity.modes.connect;i&&(t.retina.connectModeDistance=i.distance*t.retina.pixelRatio,t.retina.connectModeRadius=i.radius*t.retina.pixelRatio)}async interact(){const t=this.container;if(t.actualOptions.interactivity.events.onHover.enable&&"pointermove"===t.interactivity.status){const i=t.interactivity.mouse.position;if(!t.retina.connectModeDistance||t.retina.connectModeDistance<0||!t.retina.connectModeRadius||t.retina.connectModeRadius<0||!i)return;const n=Math.abs(t.retina.connectModeRadius),e=t.particles.quadTree.queryCircle(i,n,(t=>this.isEnabled(t)));let o=0;for(const s of e){const i=s.getPosition();for(const n of e.slice(o+1)){const e=n.getPosition(),o=Math.abs(t.retina.connectModeDistance),a=Math.abs(i.x-e.x),c=Math.abs(i.y-e.y);a<o&&c<o&&d(t,s,n)}++o}}}isEnabled(t){const i=this.container,n=i.interactivity.mouse,e=((null==t?void 0:t.interactivity)??i.actualOptions.interactivity).events;return!(!e.onHover.enable||!n.position)&&s("connect",e.onHover.mode)}loadModeOptions(t,...i){t.connect||(t.connect=new c);for(const n of i)t.connect.load(null==n?void 0:n.connect)}reset(){}}async function u(t,i=!0){await t.addInteractor("externalConnect",(t=>new l(t)),i)}export{u as l};
