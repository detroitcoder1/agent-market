/*
PNotify 3.2.0 sciactive.com/pnotify/
(C) 2015 Hunter Perrin; Google, Inc.
license Apache-2.0
*/
! function (t, i) {
    "function" == typeof define && define.amd ? define("pnotify", ["jquery"], function (s) {
        return i(s, t)
    }) : "object" == typeof exports && "undefined" != typeof module ? module.exports = i(require("jquery"), global || t) : t.PNotify = i(t.jQuery, t)
}("undefined" != typeof window ? window : this, function (t, i) {
    var s = function (i) {
        var e, o, n = {
            dir1: "down",
            dir2: "left",
            push: "bottom",
            spacing1: 36,
            spacing2: 36,
            context: t("body"),
            modal: !1
        },
            a = t(i),
            r = function () {
                o = t("body"), c.prototype.options.stack.context = o, a = t(i), a.bind("resize", function () {
                    e && clearTimeout(e), e = setTimeout(function () {
                        c.positionAll(!0)
                    }, 10)
                })
            },
            h = function (i) {
                var s = t("<div />", {
                    class: "ui-pnotify-modal-overlay"
                });
                return s.prependTo(i.context), i.overlay_close && s.click(function () {
                    c.removeStack(i)
                }), s
            },
            c = function (t) {
                this.state = "initializing", this.timer = null, this.animTimer = null, this.styles = null, this.elem = null, this.container = null, this.title_container = null, this.text_container = null, this.animating = !1, this.timerHide = !1, this.parseOptions(t), this.init()
            };
        return t.extend(c.prototype, {
            version: "3.2.0",
            options: {
                title: !1,
                title_escape: !1,
                text: !1,
                text_escape: !1,
                styling: "brighttheme",
                addclass: "",
                cornerclass: "",
                auto_display: !0,
                width: "300px",
                min_height: "16px",
                type: "notice",
                icon: !0,
                animation: "fade",
                animate_speed: "normal",
                shadow: !0,
                hide: !0,
                delay: 8e3,
                mouse_reset: !0,
                remove: !0,
                insert_brs: !0,
                destroy: !0,
                stack: n
            },
            modules: {},
            runModules: function (t, i) {
                var s;
                for (var e in this.modules) s = "object" == typeof i && e in i ? i[e] : i, "function" == typeof this.modules[e][t] && (this.modules[e].notice = this, this.modules[e].options = "object" == typeof this.options[e] ? this.options[e] : {}, this.modules[e][t](this, "object" == typeof this.options[e] ? this.options[e] : {}, s))
            },
            init: function () {
                var i = this;
                return this.modules = {}, t.extend(!0, this.modules, c.prototype.modules), "object" == typeof this.options.styling ? this.styles = this.options.styling : this.styles = c.styling[this.options.styling], this.elem = t("<div />", {
                    class: "ui-pnotify " + this.options.addclass,
                    css: {
                        display: "none"
                    },
                    "aria-live": "assertive",
                    "aria-role": "alertdialog",
                    mouseenter: function (t) {
                        if (i.options.mouse_reset && "out" === i.animating) {
                            if (!i.timerHide) return;
                            i.cancelRemove()
                        }
                        i.options.hide && i.options.mouse_reset && i.cancelRemove()
                    },
                    mouseleave: function (t) {
                        i.options.hide && i.options.mouse_reset && "out" !== i.animating && i.queueRemove(), c.positionAll()
                    }
                }), "fade" === this.options.animation && this.elem.addClass("ui-pnotify-fade-" + this.options.animate_speed), this.container = t("<div />", {
                    class: this.styles.container + " ui-pnotify-container " + ("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice),
                    role: "alert"
                }).appendTo(this.elem), "" !== this.options.cornerclass && this.container.removeClass("ui-corner-all").addClass(this.options.cornerclass), this.options.shadow && this.container.addClass("ui-pnotify-shadow"), !1 !== this.options.icon && t("<div />", {
                    class: "ui-pnotify-icon"
                }).append(t("<span />", {
                    class: !0 === this.options.icon ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon
                })).prependTo(this.container), this.title_container = t("<h4 />", {
                    class: "ui-pnotify-title"
                }).appendTo(this.container), !1 === this.options.title ? this.title_container.hide() : this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), this.text_container = t("<div />", {
                    class: "ui-pnotify-text",
                    "aria-role": "alert"
                }).appendTo(this.container), !1 === this.options.text ? this.text_container.hide() : this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), "string" == typeof this.options.width && this.elem.css("width", this.options.width), "string" == typeof this.options.min_height && this.container.css("min-height", this.options.min_height), "top" === this.options.stack.push ? c.notices = t.merge([this], c.notices) : c.notices = t.merge(c.notices, [this]), "top" === this.options.stack.push && this.queuePosition(!1, 1), this.options.stack.animation = !1, this.runModules("init"), this.state = "closed", this.options.auto_display && this.open(), this
            },
            update: function (i) {
                var s = this.options;
                return this.parseOptions(s, i), this.elem.removeClass("ui-pnotify-fade-slow ui-pnotify-fade-normal ui-pnotify-fade-fast"), "fade" === this.options.animation && this.elem.addClass("ui-pnotify-fade-" + this.options.animate_speed), this.options.cornerclass !== s.cornerclass && this.container.removeClass("ui-corner-all " + s.cornerclass).addClass(this.options.cornerclass), this.options.shadow !== s.shadow && (this.options.shadow ? this.container.addClass("ui-pnotify-shadow") : this.container.removeClass("ui-pnotify-shadow")), !1 === this.options.addclass ? this.elem.removeClass(s.addclass) : this.options.addclass !== s.addclass && this.elem.removeClass(s.addclass).addClass(this.options.addclass), !1 === this.options.title ? this.title_container.slideUp("fast") : this.options.title !== s.title && (this.options.title_escape ? this.title_container.text(this.options.title) : this.title_container.html(this.options.title), !1 === s.title && this.title_container.slideDown(200)), !1 === this.options.text ? this.text_container.slideUp("fast") : this.options.text !== s.text && (this.options.text_escape ? this.text_container.text(this.options.text) : this.text_container.html(this.options.insert_brs ? String(this.options.text).replace(/\n/g, "<br />") : this.options.text), !1 === s.text && this.text_container.slideDown(200)), this.options.type !== s.type && this.container.removeClass(this.styles.error + " " + this.styles.notice + " " + this.styles.success + " " + this.styles.info).addClass("error" === this.options.type ? this.styles.error : "info" === this.options.type ? this.styles.info : "success" === this.options.type ? this.styles.success : this.styles.notice), (this.options.icon !== s.icon || !0 === this.options.icon && this.options.type !== s.type) && (this.container.find("div.ui-pnotify-icon").remove(), !1 !== this.options.icon && t("<div />", {
                    class: "ui-pnotify-icon"
                }).append(t("<span />", {
                    class: !0 === this.options.icon ? "error" === this.options.type ? this.styles.error_icon : "info" === this.options.type ? this.styles.info_icon : "success" === this.options.type ? this.styles.success_icon : this.styles.notice_icon : this.options.icon
                })).prependTo(this.container)), this.options.width !== s.width && this.elem.animate({
                    width: this.options.width
                }), this.options.min_height !== s.min_height && this.container.animate({
                    minHeight: this.options.min_height
                }), this.options.hide ? s.hide || this.queueRemove() : this.cancelRemove(), this.queuePosition(!0), this.runModules("update", s), this
            },
            open: function () {
                this.state = "opening", this.runModules("beforeOpen");
                var t = this;
                return this.elem.parent().length || this.elem.appendTo(this.options.stack.context ? this.options.stack.context : o), "top" !== this.options.stack.push && this.position(!0), this.animateIn(function () {
                    t.queuePosition(!0), t.options.hide && t.queueRemove(), t.state = "open", t.runModules("afterOpen")
                }), this
            },
            remove: function (s) {
                this.state = "closing", this.timerHide = !!s, this.runModules("beforeClose");
                var e = this;
                return this.timer && (i.clearTimeout(this.timer), this.timer = null), this.animateOut(function () {
                    if (e.state = "closed", e.runModules("afterClose"), e.queuePosition(!0), e.options.remove && e.elem.detach(), e.runModules("beforeDestroy"), e.options.destroy && null !== c.notices) {
                        var i = t.inArray(e, c.notices); -1 !== i && c.notices.splice(i, 1)
                    }
                    e.runModules("afterDestroy")
                }), this
            },
            get: function () {
                return this.elem
            },
            parseOptions: function (i, s) {
                this.options = t.extend(!0, {}, c.prototype.options), this.options.stack = c.prototype.options.stack;
                for (var e, o = [i, s], n = 0; n < o.length && void 0 !== (e = o[n]) ; n++)
                    if ("object" != typeof e) this.options.text = e;
                    else
                        for (var a in e) this.modules[a] ? t.extend(!0, this.options[a], e[a]) : this.options[a] = e[a]
            },
            animateIn: function (t) {
                this.animating = "in";
                var i = this,
                    s = function () {
                        i.animTimer && clearTimeout(i.animTimer), "in" === i.animating && (i.elem.is(":visible") ? (t && t.call(), i.animating = !1) : i.animTimer = setTimeout(s, 40))
                    };
                "fade" === this.options.animation ? (this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend", s).addClass("ui-pnotify-in"), this.elem.css("opacity"), this.elem.addClass("ui-pnotify-fade-in"), this.animTimer = setTimeout(s, 650)) : (this.elem.addClass("ui-pnotify-in"), s())
            },
            animateOut: function (i) {
                this.animating = "out";
                var s = this,
                    e = function () {
                        if (s.animTimer && clearTimeout(s.animTimer), "out" === s.animating)
                            if ("0" != s.elem.css("opacity") && s.elem.is(":visible")) s.animTimer = setTimeout(e, 40);
                            else {
                                if (s.elem.removeClass("ui-pnotify-in"), s.options.stack.overlay) {
                                    var o = !1;
                                    t.each(c.notices, function (t, i) {
                                        i != s && i.options.stack === s.options.stack && "closed" != i.state && (o = !0)
                                    }), o || s.options.stack.overlay.hide()
                                }
                                i && i.call(), s.animating = !1
                            }
                    };
                "fade" === this.options.animation ? (this.elem.one("webkitTransitionEnd mozTransitionEnd MSTransitionEnd oTransitionEnd transitionend", e).removeClass("ui-pnotify-fade-in"), this.animTimer = setTimeout(e, 650)) : (this.elem.removeClass("ui-pnotify-in"), e())
            },
            position: function (t) {
                var i = this.options.stack,
                    s = this.elem;
                if (void 0 === i.context && (i.context = o), i) {
                    "number" != typeof i.nextpos1 && (i.nextpos1 = i.firstpos1), "number" != typeof i.nextpos2 && (i.nextpos2 = i.firstpos2), "number" != typeof i.addpos2 && (i.addpos2 = 0);
                    var e = !s.hasClass("ui-pnotify-in");
                    if (!e || t) {
                        i.modal && (i.overlay ? i.overlay.show() : i.overlay = h(i)), s.addClass("ui-pnotify-move");
                        var n, r, c;
                        switch (i.dir1) {
                            case "down":
                                c = "top";
                                break;
                            case "up":
                                c = "bottom";
                                break;
                            case "left":
                                c = "right";
                                break;
                            case "right":
                                c = "left"
                        }
                        n = parseInt(s.css(c).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(n) && (n = 0), void 0 !== i.firstpos1 || e || (i.firstpos1 = n, i.nextpos1 = i.firstpos1);
                        var p;
                        switch (i.dir2) {
                            case "down":
                                p = "top";
                                break;
                            case "up":
                                p = "bottom";
                                break;
                            case "left":
                                p = "right";
                                break;
                            case "right":
                                p = "left"
                        }
                        switch (r = parseInt(s.css(p).replace(/(?:\..*|[^0-9.])/g, "")), isNaN(r) && (r = 0), void 0 !== i.firstpos2 || e || (i.firstpos2 = r, i.nextpos2 = i.firstpos2), ("down" === i.dir1 && i.nextpos1 + s.height() > (i.context.is(o) ? a.height() : i.context.prop("scrollHeight")) || "up" === i.dir1 && i.nextpos1 + s.height() > (i.context.is(o) ? a.height() : i.context.prop("scrollHeight")) || "left" === i.dir1 && i.nextpos1 + s.width() > (i.context.is(o) ? a.width() : i.context.prop("scrollWidth")) || "right" === i.dir1 && i.nextpos1 + s.width() > (i.context.is(o) ? a.width() : i.context.prop("scrollWidth"))) && (i.nextpos1 = i.firstpos1, i.nextpos2 += i.addpos2 + (void 0 === i.spacing2 ? 25 : i.spacing2), i.addpos2 = 0), "number" == typeof i.nextpos2 && (i.animation ? s.css(p, i.nextpos2 + "px") : (s.removeClass("ui-pnotify-move"), s.css(p, i.nextpos2 + "px"), s.css(p), s.addClass("ui-pnotify-move"))), i.dir2) {
                            case "down":
                            case "up":
                                s.outerHeight(!0) > i.addpos2 && (i.addpos2 = s.height());
                                break;
                            case "left":
                            case "right":
                                s.outerWidth(!0) > i.addpos2 && (i.addpos2 = s.width())
                        }
                        switch ("number" == typeof i.nextpos1 && (i.animation ? s.css(c, i.nextpos1 + "px") : (s.removeClass("ui-pnotify-move"), s.css(c, i.nextpos1 + "px"), s.css(c), s.addClass("ui-pnotify-move"))), i.dir1) {
                            case "down":
                            case "up":
                                i.nextpos1 += s.height() + (void 0 === i.spacing1 ? 25 : i.spacing1);
                                break;
                            case "left":
                            case "right":
                                i.nextpos1 += s.width() + (void 0 === i.spacing1 ? 25 : i.spacing1)
                        }
                    }
                    return this
                }
            },
            queuePosition: function (t, i) {
                return e && clearTimeout(e), i || (i = 10), e = setTimeout(function () {
                    c.positionAll(t)
                }, i), this
            },
            cancelRemove: function () {
                return this.timer && i.clearTimeout(this.timer), this.animTimer && i.clearTimeout(this.animTimer), "closing" === this.state && (this.state = "open", this.animating = !1, this.elem.addClass("ui-pnotify-in"), "fade" === this.options.animation && this.elem.addClass("ui-pnotify-fade-in")), this
            },
            queueRemove: function () {
                var t = this;
                return this.cancelRemove(), this.timer = i.setTimeout(function () {
                    t.remove(!0)
                }, isNaN(this.options.delay) ? 0 : this.options.delay), this
            }
        }), t.extend(c, {
            notices: [],
            reload: s,
            removeAll: function () {
                t.each(c.notices, function (t, i) {
                    i.remove && i.remove(!1)
                })
            },
            removeStack: function (i) {
                t.each(c.notices, function (t, s) {
                    s.remove && s.options.stack === i && s.remove(!1)
                })
            },
            positionAll: function (i) {
                if (e && clearTimeout(e), e = null, c.notices && c.notices.length) t.each(c.notices, function (t, s) {
                    var e = s.options.stack;
                    e && (e.overlay && e.overlay.hide(), e.nextpos1 = e.firstpos1, e.nextpos2 = e.firstpos2, e.addpos2 = 0, e.animation = i)
                }), t.each(c.notices, function (t, i) {
                    i.position()
                });
                else {
                    var s = c.prototype.options.stack;
                    s && (delete s.nextpos1, delete s.nextpos2)
                }
            },
            styling: {
                brighttheme: {
                    container: "brighttheme",
                    notice: "brighttheme-notice",
                    notice_icon: "brighttheme-icon-notice",
                    info: "brighttheme-info",
                    info_icon: "brighttheme-icon-info",
                    success: "brighttheme-success",
                    success_icon: "brighttheme-icon-success",
                    error: "brighttheme-error",
                    error_icon: "brighttheme-icon-error"
                },
                bootstrap3: {
                    container: "alert",
                    notice: "alert-warning",
                    notice_icon: "glyphicon glyphicon-exclamation-sign",
                    info: "alert-info",
                    info_icon: "glyphicon glyphicon-info-sign",
                    success: "alert-success",
                    success_icon: "glyphicon glyphicon-ok-sign",
                    error: "alert-danger",
                    error_icon: "glyphicon glyphicon-warning-sign"
                }
            }
        }), c.styling.fontawesome = t.extend({}, c.styling.bootstrap3), t.extend(c.styling.fontawesome, {
            notice_icon: "fa fa-exclamation-circle",
            info_icon: "fa fa-info",
            success_icon: "fa fa-check",
            error_icon: "fa fa-warning"
        }), i.document.body ? r() : t(r), c
    };
    return s(i)
});
//# sourceMappingURL=pnotify.js.map