const s=[...document.querySelectorAll(".cls-aos-X, .cls-aos-Y")],t=new IntersectionObserver(function(s,t){for(let e of s)e.isIntersecting?(e.target.classList.add(e.target.classList.contains("cls-aos-X")?"cls-translateX":"cls-translateY"),e.target.classList.contains("cls-aos-Y")&&t.unobserve(e.target)):e.target.classList.remove("cls-translateX","cls-translateY")},{root:null,rootMargin:"0px",threshold:.3});s.forEach(s=>t.observe(s));
//# sourceMappingURL=index.173d3ba2.js.map
