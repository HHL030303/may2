/*
 * 日期控件
 * 
 * 作者：黄磊
 * 
 * 邮箱：xfhxbb@yeah.net
 * 
 * Copyright 2016
 * 
 * 创建于：2016-01-08
 */
window.lCalendar = function() {
	var a = function() {
		this.gearDate, this.minY = 1900, this.minM = 1, this.minD = 1, this.maxY = 2099, this.maxM = 12, this.maxD = 31
	};
	return a.prototype = {
		init: function(a) {
			if(this.type = a.type, this.trigger = document.querySelector(a.trigger), null != this.trigger.getAttribute("data-lcalendar")) {
				var b = this.trigger.getAttribute("data-lcalendar").split(","),
					c = b[0].split("-");
				this.minY = ~~c[0], this.minM = ~~c[1], this.minD = ~~c[2];
				var d = b[1].split("-");
				this.maxY = ~~d[0], this.maxM = ~~d[1], this.maxD = ~~d[2]
			}
			this.bindEvent(this.type)
		},
		bindEvent: function(a) {
			function b(a) {
				t.gearDate = document.createElement("div"), t.gearDate.className = "gearDate", t.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="date_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div><div><div class="gear date_dd" data-datetype="date_dd"></div><div class="date_grid"><div>日</div></div></div></div></div></div>', document.body.appendChild(t.gearDate), c();
				var b = t.gearDate.querySelector(".lcalendar_cancel");
				b.addEventListener("touchstart", p);
				var d = t.gearDate.querySelector(".lcalendar_finish");
				d.addEventListener("touchstart", q);
				var e = t.gearDate.querySelector(".date_yy"),
					f = t.gearDate.querySelector(".date_mm"),
					g = t.gearDate.querySelector(".date_dd");
				e.addEventListener("touchstart", k), f.addEventListener("touchstart", k), g.addEventListener("touchstart", k), e.addEventListener("touchmove", l), f.addEventListener("touchmove", l), g.addEventListener("touchmove", l), e.addEventListener("touchend", m), f.addEventListener("touchend", m), g.addEventListener("touchend", m)
			}

			function c() {
				var a = new Date,
					b = {
						yy: a.getYear(),
						mm: a.getMonth(),
						dd: a.getDate() - 1
					};
				/^\d{4}-\d{1,2}-\d{1,2}$/.test(t.trigger.value) ? (rs = t.trigger.value.match(/(^|-)\d{1,4}/g), b.yy = rs[0] - t.minY, b.mm = rs[1].replace(/-/g, "") - 1, b.dd = rs[2].replace(/-/g, "") - 1) : b.yy = b.yy + 1900 - t.minY, t.gearDate.querySelector(".date_yy").setAttribute("val", b.yy), t.gearDate.querySelector(".date_mm").setAttribute("val", b.mm), t.gearDate.querySelector(".date_dd").setAttribute("val", b.dd), h()
			}

			function d(a) {
				t.gearDate = document.createElement("div"), t.gearDate.className = "gearDatetime", t.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="datetime_roll"><div><div class="gear date_yy" data-datetype="date_yy"></div><div class="date_grid"><div>年</div></div></div><div><div class="gear date_mm" data-datetype="date_mm"></div><div class="date_grid"><div>月</div></div></div><div><div class="gear date_dd" data-datetype="date_dd"></div><div class="date_grid"><div>日</div></div></div><div><div class="gear time_hh" data-datetype="time_hh"></div><div class="date_grid"><div>时</div></div></div><div><div class="gear time_mm" data-datetype="time_mm"></div><div class="date_grid"><div>分</div></div></div></div></div></div>', document.body.appendChild(t.gearDate), e();
				var b = t.gearDate.querySelector(".lcalendar_cancel");
				b.addEventListener("touchstart", p);
				var c = t.gearDate.querySelector(".lcalendar_finish");
				c.addEventListener("touchstart", r);
				var d = t.gearDate.querySelector(".date_yy"),
					f = t.gearDate.querySelector(".date_mm"),
					g = t.gearDate.querySelector(".date_dd"),
					h = t.gearDate.querySelector(".time_hh"),
					i = t.gearDate.querySelector(".time_mm");
				d.addEventListener("touchstart", k), f.addEventListener("touchstart", k), g.addEventListener("touchstart", k), h.addEventListener("touchstart", k), i.addEventListener("touchstart", k), d.addEventListener("touchmove", l), f.addEventListener("touchmove", l), g.addEventListener("touchmove", l), h.addEventListener("touchmove", l), i.addEventListener("touchmove", l), d.addEventListener("touchend", m), f.addEventListener("touchend", m), g.addEventListener("touchend", m), h.addEventListener("touchend", m), i.addEventListener("touchend", m)
			}

			function e() {
				var a = new Date,
					b = {
						yy: a.getYear(),
						mm: a.getMonth(),
						dd: a.getDate() - 1,
						hh: a.getHours(),
						mi: a.getMinutes()
					};
				/^\d{4}-\d{1,2}-\d{1,2}\s\d{2}:\d{2}$/.test(t.trigger.value) ? (rs = t.trigger.value.match(/(^|-|\s|:)\d{1,4}/g), b.yy = rs[0] - t.minY, b.mm = rs[1].replace(/-/g, "") - 1, b.dd = rs[2].replace(/-/g, "") - 1, b.hh = parseInt(rs[3].replace(/\s0?/g, "")), b.mi = parseInt(rs[4].replace(/:0?/g, ""))) : b.yy = b.yy + 1900 - t.minY, t.gearDate.querySelector(".date_yy").setAttribute("val", b.yy), t.gearDate.querySelector(".date_mm").setAttribute("val", b.mm), t.gearDate.querySelector(".date_dd").setAttribute("val", b.dd), h(), t.gearDate.querySelector(".time_hh").setAttribute("val", b.hh), t.gearDate.querySelector(".time_mm").setAttribute("val", b.mi), i()
			}

			function f(a) {
				t.gearDate = document.createElement("div"), t.gearDate.className = "gearDate", t.gearDate.innerHTML = '<div class="date_ctrl slideInUp"><div class="date_btn_box"><div class="date_btn lcalendar_cancel">取消</div><div class="date_btn lcalendar_finish">确定</div></div><div class="date_roll_mask"><div class="time_roll"><div><div class="gear time_hh" data-datetype="time_hh"></div><div class="date_grid"><div>时</div></div></div><div><div class="gear time_mm" data-datetype="time_mm"></div><div class="date_grid"><div>分</div></div></div></div></div></div>', document.body.appendChild(t.gearDate), g();
				var b = t.gearDate.querySelector(".lcalendar_cancel");
				b.addEventListener("touchstart", p);
				var c = t.gearDate.querySelector(".lcalendar_finish");
				c.addEventListener("touchstart", s);
				var d = t.gearDate.querySelector(".time_hh"),
					e = t.gearDate.querySelector(".time_mm");
				d.addEventListener("touchstart", k), e.addEventListener("touchstart", k), d.addEventListener("touchmove", l), e.addEventListener("touchmove", l), d.addEventListener("touchend", m), e.addEventListener("touchend", m)
			}

			function g() {
				var a = new Date,
					b = {
						hh: a.getHours(),
						mm: a.getMinutes()
					};
				/^\d{2}:\d{2}$/.test(t.trigger.value) && (rs = t.trigger.value.match(/(^|:)\d{2}/g), b.hh = parseInt(rs[0].replace(/^0?/g, "")), b.mm = parseInt(rs[1].replace(/:0?/g, ""))), t.gearDate.querySelector(".time_hh").setAttribute("val", b.hh), t.gearDate.querySelector(".time_mm").setAttribute("val", b.mm), i()
			}

			function h() {
				var a = t.maxY - t.minY + 1,
					b = t.gearDate.querySelector(".date_yy"),
					c = "";
				if(b && b.getAttribute("val")) {
					for(var d = parseInt(b.getAttribute("val")), e = 0; a - 1 >= e; e++) c += "<div class='tooth'>" + (t.minY + e) + "</div>";
					b.innerHTML = c;
					var f = Math.floor(parseFloat(b.getAttribute("top")));
					if(isNaN(f)) b.style["-webkit-transform"] = "translate3d(0," + (8 - 2 * d) + "em,0)", b.setAttribute("top", 8 - 2 * d + "em");
					else {
						f % 2 == 0 ? f = f : f += 1, f > 8 && (f = 8);
						var g = 8 - 2 * (a - 1);
						g > f && (f = g), b.style["-webkit-transform"] = "translate3d(0," + f + "em,0)", b.setAttribute("top", f + "em"), d = Math.abs(f - 8) / 2, b.setAttribute("val", d)
					}
					var h = t.gearDate.querySelector(".date_mm");
					if(h && h.getAttribute("val")) {
						c = "";
						var i = parseInt(h.getAttribute("val")),
							k = 11,
							l = 0;
						d == a - 1 && (k = t.maxM - 1), 0 == d && (l = t.minM - 1);
						for(var e = 0; k - l + 1 > e; e++) c += "<div class='tooth'>" + (l + e + 1) + "</div>";
						h.innerHTML = c, i > k ? (i = k, h.setAttribute("val", i)) : l > i && (i = k, h.setAttribute("val", i)), h.style["-webkit-transform"] = "translate3d(0," + (8 - 2 * (i - l)) + "em,0)", h.setAttribute("top", 8 - 2 * (i - l) + "em");
						var m = t.gearDate.querySelector(".date_dd");
						if(m && m.getAttribute("val")) {
							c = "";
							var n = parseInt(m.getAttribute("val")),
								o = j(d, i),
								p = o - 1,
								q = 0;
							d == a - 1 && t.maxM == i + 1 && (p = t.maxD - 1), 0 == d && t.minM == i + 1 && (q = t.minD - 1);
							for(var e = 0; p - q + 1 > e; e++) c += "<div class='tooth'>" + (q + e + 1) + "</div>";
							m.innerHTML = c, n > p ? (n = p, m.setAttribute("val", n)) : q > n && (n = q, m.setAttribute("val", n)), m.style["-webkit-transform"] = "translate3d(0," + (8 - 2 * (n - q)) + "em,0)", m.setAttribute("top", 8 - 2 * (n - q) + "em")
						}
					}
				}
			}

			function i() {
				var a = t.gearDate.querySelector(".time_hh");
				if(a && a.getAttribute("val")) {
					for(var b = "", c = parseInt(a.getAttribute("val")), d = 0; 23 >= d; d++) b += "<div class='tooth'>" + d + "</div>";
					a.innerHTML = b, a.style["-webkit-transform"] = "translate3d(0," + (8 - 2 * c) + "em,0)", a.setAttribute("top", 8 - 2 * c + "em");
					var e = t.gearDate.querySelector(".time_mm");
					if(e && e.getAttribute("val")) {
						for(var b = "", f = parseInt(e.getAttribute("val")), d = 0; 59 >= d; d++) b += "<div class='tooth'>" + d + "</div>";
						e.innerHTML = b, e.style["-webkit-transform"] = "translate3d(0," + (8 - 2 * f) + "em,0)", e.setAttribute("top", 8 - 2 * f + "em")
					}
				}
			}

			function j(a, b) {
				return 1 == b ? (a += t.minY, a % 4 == 0 && a % 100 != 0 || a % 400 == 0 && a % 4e3 != 0 ? 29 : 28) : 3 == b || 5 == b || 8 == b || 10 == b ? 30 : 31
			}

			function k(a) {
				a.preventDefault();
				for(var b = a.target;;) {
					if(b.classList.contains("gear")) break;
					b = b.parentElement
				}
				clearInterval(b["int_" + b.id]), b["old_" + b.id] = a.targetTouches[0].screenY, b["o_t_" + b.id] = (new Date).getTime();
				var c = b.getAttribute("top");
				c ? b["o_d_" + b.id] = parseFloat(c.replace(/em/g, "")) : b["o_d_" + b.id] = 0
			}

			function l(a) {
				a.preventDefault();
				for(var b = a.target;;) {
					if(b.classList.contains("gear")) break;
					b = b.parentElement
				}
				b["new_" + b.id] = a.targetTouches[0].screenY, b["n_t_" + b.id] = (new Date).getTime();
				var c = 18 * (b["new_" + b.id] - b["old_" + b.id]) / 370;
				b["pos_" + b.id] = b["o_d_" + b.id] + c, b.style["-webkit-transform"] = "translate3d(0," + b["pos_" + b.id] + "em,0)", b.setAttribute("top", b["pos_" + b.id] + "em")
			}

			function m(a) {
				a.preventDefault();
				for(var b = a.target;;) {
					if(b.classList.contains("gear")) break;
					b = b.parentElement
				}
				var c = (b["new_" + b.id] - b["old_" + b.id]) / (b["n_t_" + b.id] - b["o_t_" + b.id]);
				Math.abs(c) <= .2 ? b["spd_" + b.id] = 0 > c ? -.08 : .08 : Math.abs(c) <= .5 ? b["spd_" + b.id] = 0 > c ? -.16 : .16 : b["spd_" + b.id] = c / 2, b["pos_" + b.id] || (b["pos_" + b.id] = 0), n(b)
			}

			function n(a) {
				var b = 0,
					c = !1,
					d = t.maxY - t.minY + 1;
				clearInterval(a["int_" + a.id]), a["int_" + a.id] = setInterval(function() {
					var e = a["pos_" + a.id],
						f = a["spd_" + a.id] * Math.exp(-.03 * b);
					if(e += f, Math.abs(f) > .1);
					else {
						f = .1;
						var g = 2 * Math.round(e / 2);
						Math.abs(e - g) < .02 ? c = !0 : e > g ? e -= f : e += f
					}
					switch(e > 8 && (e = 8, c = !0), a.dataset.datetype) {
						case "date_yy":
							var h = 8 - 2 * (d - 1);
							if(h > e && (e = h, c = !0), c) {
								var i = Math.abs(e - 8) / 2;
								o(a, i), clearInterval(a["int_" + a.id])
							}
							break;
						case "date_mm":
							var k = t.gearDate.querySelector(".date_yy"),
								l = parseInt(k.getAttribute("val")),
								m = 11,
								n = 0;
							l == d - 1 && (m = t.maxM - 1), 0 == l && (n = t.minM - 1);
							var h = 8 - 2 * (m - n);
							if(h > e && (e = h, c = !0), c) {
								var i = Math.abs(e - 8) / 2 + n;
								o(a, i), clearInterval(a["int_" + a.id])
							}
							break;
						case "date_dd":
							var k = t.gearDate.querySelector(".date_yy"),
								p = t.gearDate.querySelector(".date_mm"),
								l = parseInt(k.getAttribute("val")),
								q = parseInt(p.getAttribute("val")),
								r = j(l, q),
								s = r - 1,
								u = 0;
							l == d - 1 && t.maxM == q + 1 && (s = t.maxD - 1), 0 == l && t.minM == q + 1 && (u = t.minD - 1);
							var h = 8 - 2 * (s - u);
							if(h > e && (e = h, c = !0), c) {
								var i = Math.abs(e - 8) / 2 + u;
								o(a, i), clearInterval(a["int_" + a.id])
							}
							break;
						case "time_hh":
							if(-38 > e && (e = -38, c = !0), c) {
								var i = Math.abs(e - 8) / 2;
								o(a, i), clearInterval(a["int_" + a.id])
							}
							break;
						case "time_mm":
							if(-110 > e && (e = -110, c = !0), c) {
								var i = Math.abs(e - 8) / 2;
								o(a, i), clearInterval(a["int_" + a.id])
							}
					}
					a["pos_" + a.id] = e, a.style["-webkit-transform"] = "translate3d(0," + e + "em,0)", a.setAttribute("top", e + "em"), b++
				}, 30)
			}

			function o(a, b) {
				b = Math.round(b), a.setAttribute("val", b), /date/.test(a.dataset.datetype) ? h() : i()
			}

			function p(a) {
				a.preventDefault();
				var b = new CustomEvent("input");
				t.trigger.dispatchEvent(b), document.body.removeChild(t.gearDate)
			}

			function q(a) {
				var b = t.maxY - t.minY + 1,
					c = parseInt(Math.round(t.gearDate.querySelector(".date_yy").getAttribute("val"))),
					d = parseInt(Math.round(t.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
				d = d > 9 ? d : "0" + d;
				var e = parseInt(Math.round(t.gearDate.querySelector(".date_dd").getAttribute("val"))) + 1;
				e = e > 9 ? e : "0" + e, t.trigger.value = c % b + t.minY + "-" + d + "-" + e, p(a)
			}

			function r(a) {
				var b = t.maxY - t.minY + 1,
					c = parseInt(Math.round(t.gearDate.querySelector(".date_yy").getAttribute("val"))),
					d = parseInt(Math.round(t.gearDate.querySelector(".date_mm").getAttribute("val"))) + 1;
				d = d > 9 ? d : "0" + d;
				var e = parseInt(Math.round(t.gearDate.querySelector(".date_dd").getAttribute("val"))) + 1;
				e = e > 9 ? e : "0" + e;
				var f = parseInt(Math.round(t.gearDate.querySelector(".time_hh").getAttribute("val")));
				f = f > 9 ? f : "0" + f;
				var g = parseInt(Math.round(t.gearDate.querySelector(".time_mm").getAttribute("val")));
				g = g > 9 ? g : "0" + g, t.trigger.value = c % b + t.minY + "-" + d + "-" + e + " " + (f.length < 2 ? "0" : "") + f + (g.length < 2 ? ":0" : ":") + g, p(a)
			}

			function s(a) {
				var b = parseInt(Math.round(t.gearDate.querySelector(".time_hh").getAttribute("val")));
				b = b > 9 ? b : "0" + b;
				var c = parseInt(Math.round(t.gearDate.querySelector(".time_mm").getAttribute("val")));
				c = c > 9 ? c : "0" + c, t.trigger.value = (b.length < 2 ? "0" : "") + b + (c.length < 2 ? ":0" : ":") + c, p(a)
			}
			var t = this;
			t.trigger.addEventListener("click", {
				date: b,
				datetime: d,
				time: f
			}[a])
		}
	}, a
}();
/*! 最后修改于： 2016-01-29  03:42:29 */