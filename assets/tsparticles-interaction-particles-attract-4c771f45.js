import{P as t,g as e}from"./tsparticles-engine-1e3d91c8.js";class a extends t{constructor(t){super(t)}clear(){}init(){}async interact(t){const a=this.container,i=t.retina.attractDistance??a.retina.attractDistance,n=t.getPosition(),o=a.particles.quadTree.queryCircle(n,i);for(const s of o){if(t===s||!s.options.move.attract.enable||s.destroyed||s.spawning)continue;const a=s.getPosition(),{dx:i,dy:o}=e(n,a),r=t.options.move.attract.rotate,c=i/(1e3*r.x),l=o/(1e3*r.y),y=s.size.value/t.size.value,p=1/y;t.velocity.x-=c*y,t.velocity.y-=l*y,s.velocity.x+=c*p,s.velocity.y+=l*p}}isEnabled(t){return t.options.move.attract.enable}reset(){}}async function i(t,e=!0){await t.addInteractor("particlesAttract",(t=>new a(t)),e)}export{i as l};
