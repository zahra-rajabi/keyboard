let input = document.querySelector(".input");
///////////////////////////////////////////////
let q = document.querySelector(".q");
let w = document.querySelector(".w");
let e = document.querySelector(".e");
let r = document.querySelector(".r");
let t = document.querySelector(".t");
let y = document.querySelector(".y");
let u = document.querySelector(".u");
let i = document.querySelector(".i");
let o = document.querySelector(".o");
let p = document.querySelector(".p");
let a = document.querySelector(".a");
let s = document.querySelector(".s");
let d = document.querySelector(".d");
let f = document.querySelector(".f");
let g = document.querySelector(".g");
let h = document.querySelector(".h");
let j = document.querySelector(".j");
let k = document.querySelector(".k");
let l = document.querySelector(".l");
let z = document.querySelector(".z");
let x = document.querySelector(".x");
let c = document.querySelector(".c");
let v = document.querySelector(".v");
let b = document.querySelector(".b");
let n = document.querySelector(".n");
let m = document.querySelector(".m");
let btn = document.getElementsByTagName(p);
/////////////////////////////////////////////////
input.addEventListener("keydown", function (event) {
  if (event.keyCode == 81) {
    q.classList.add("active");
  } else if (event.keyCode == 87) {
    w.classList.add("active");
  } else if (event.keyCode == 69) {
    e.classList.add("active");
  } else if (event.keyCode == 82) {
    r.classList.add("active");
  } else if (event.keyCode == 84) {
    t.classList.add("active");
  } else if (event.keyCode == 89) {
    y.classList.add("active");
  } else if (event.keyCode == 85) {
    u.classList.add("active");
  } else if (event.keyCode == 73) {
    i.classList.add("active");
  } else if (event.keyCode == 79) {
    o.classList.add("active");
  } else if (event.keyCode == 80) {
    p.classList.add("active");
  } else if (event.keyCode == 65) {
    a.classList.add("active");
  } else if (event.keyCode == 83) {
    s.classList.add("active");
  } else if (event.keyCode == 68) {
    d.classList.add("active");
  } else if (event.keyCode == 70) {
    f.classList.add("active");
  } else if (event.keyCode == 71) {
    g.classList.add("active");
  } else if (event.keyCode == 72) {
    h.classList.add("active");
  } else if (event.keyCode == 74) {
    j.classList.add("active");
  } else if (event.keyCode == 75) {
    k.classList.add("active");
  } else if (event.keyCode == 76) {
    l.classList.add("active");
  } else if (event.keyCode == 90) {
    z.classList.add("active");
  } else if (event.keyCode == 88) {
    x.classList.add("active");
  } else if (event.keyCode == 67) {
    c.classList.add("active");
  } else if (event.keyCode == 86) {
    v.classList.add("active");
  } else if (event.keyCode == 66) {
    b.classList.add("active");
  } else if (event.keyCode == 78) {
    n.classList.add("active");
  } else if (event.keyCode == 77) {
    m.classList.add("active");
  }
});
input.addEventListener("keyup", function (event) {
  if (event.keyCode == 81) {
    q.classList.remove("active");
  } else if (event.keyCode == 87) {
    w.classList.remove("active");
  } else if (event.keyCode == 69) {
    e.classList.remove("active");
  } else if (event.keyCode == 82) {
    r.classList.remove("active");
  } else if (event.keyCode == 84) {
    t.classList.remove("active");
  } else if (event.keyCode == 89) {
    y.classList.remove("active");
  } else if (event.keyCode == 85) {
    u.classList.remove("active");
  } else if (event.keyCode == 73) {
    i.classList.remove("active");
  } else if (event.keyCode == 79) {
    o.classList.remove("active");
  } else if (event.keyCode == 80) {
    p.classList.remove("active");
  } else if (event.keyCode == 65) {
    a.classList.remove("active");
  } else if (event.keyCode == 83) {
    s.classList.remove("active");
  } else if (event.keyCode == 68) {
    d.classList.remove("active");
  } else if (event.keyCode == 70) {
    f.classList.remove("active");
  } else if (event.keyCode == 71) {
    g.classList.remove("active");
  } else if (event.keyCode == 72) {
    h.classList.remove("active");
  } else if (event.keyCode == 74) {
    j.classList.remove("active");
  } else if (event.keyCode == 75) {
    k.classList.remove("active");
  } else if (event.keyCode == 76) {
    l.classList.remove("active");
  } else if (event.keyCode == 90) {
    z.classList.remove("active");
  } else if (event.keyCode == 88) {
    x.classList.remove("active");
  } else if (event.keyCode == 67) {
    c.classList.remove("active");
  } else if (event.keyCode == 86) {
    v.classList.remove("active");
  } else if (event.keyCode == 66) {
    b.classList.remove("active");
  } else if (event.keyCode == 78) {
    n.classList.remove("active");
  } else if (event.keyCode == 77) {
    m.classList.remove("active");
  }
});
