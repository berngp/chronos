(function(){(function(e){return typeof require=="function"&&typeof exports=="object"&&typeof module=="object"?module.exports=e:typeof define=="function"&&define.amd?define([],function(){return e}):chai.use(e)})(function(e,t){var n,r,i;return r=t.inspect,n=t.flag,e.Assertion.addMethod("trigger",function(e,t){var i;return t==null&&(t={}),i=n(this,"whenActions")||[],i.push({negate:n(this,"negate"),before:function(t){return this.callback=sinon.spy(),n(t,"object").on(e,this.callback)},after:function(i){var s,o;return s=n(i,"negate"),n(i,"negate",this.negate),i.assert(this.callback.called,"expected to trigger "+e,"expected not to trigger "+e),t["with"]!=null&&i.assert((o=this.callback).calledWith.apply(o,t["with"]),"expected trigger to be called with "+r(t["with"])+", but was called with "+r(this.callback.args[0])+".","expected trigger not to be called with "+r(t["with"])+", but was"),n(i,"negate",s)}}),n(this,"whenActions",i)}),e.Assertion.addProperty("route",function(){return n(this,"routing",!0)}),i=function(e,t,i){var s,o,u,a,f,l,c;i==null&&(i={}),o=Backbone.history,Backbone.history=new Backbone.History,a=sinon.stub(e,t),this.assert(e._bindRoutes!=null,"provided router is not a Backbone.Router"),e._bindRoutes();if(i.considering!=null){c=i.considering;for(f=0,l=c.length;f<l;f++)s=c[f],s._bindRoutes()}Backbone.history.options={root:"/"},u=n(this,"object"),Backbone.history.loadUrl(u),Backbone.history=o,e[t].restore(),this.assert(a.calledOnce,"expected `"+u+"` to route to "+t,"expected `"+u+"` not to route to "+t);if(i["arguments"]!=null)return this.assert(a.calledWith.apply(a,i.arguments),"expected `"+t+"` to be called with "+r(i.arguments)+", but was called with "+r(a.args[0])+" instead","expected `"+t+"` not to be called with "+r(i.arguments)+", but was")},e.Assertion.overwriteProperty("to",function(e){return function(){return n(this,"routing")?i:e.apply(this,arguments)}}),e.Assertion.addMethod("call",function(e){var t,r;return r=n(this,"object"),t=n(this,"whenActions")||[],t.push({negate:n(this,"negate"),before:function(t){return this.originalMethod=r[e],this.spy=sinon.spy(),r[e]=this.spy,typeof r.delegateEvents=="function"?r.delegateEvents():void 0},after:function(t){return r[e]=this.originalMethod,typeof r.delegateEvents=="function"&&r.delegateEvents(),t.assert(this.spy.callCount>0,this.spy.printf("expected %n to have been called at least once"),this.spy.printf("expected %n to not have been called"))}}),n(this,"whenActions",t)})})}).call(this);