import{J as t}from"./tsparticles-engine-1e3d91c8.js";class e{init(){}isEnabled(e){return!t()&&!e.destroyed&&e.container.actualOptions.interactivity.events.onHover.parallax.enable}move(e){const a=e.container,n=a.actualOptions.interactivity.events.onHover.parallax;if(t()||!n.enable)return;const i=n.force,o=a.interactivity.mouse.position;if(!o)return;const s=a.canvas.size,r=s.width/2,c=s.height/2,l=n.smooth,v=e.getRadius()/i,p=(o.x-r)*v,u=(o.y-c)*v,{offset:y}=e;y.x+=(p-y.x)/l,y.y+=(u-y.y)/l}}async function a(t,a=!0){await t.addMover("parallax",(()=>new e),a)}export{a as l};
