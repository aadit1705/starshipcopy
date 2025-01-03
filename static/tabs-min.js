const keys = {
    end: 35,
    home: 36,
    left: 37,
    up: 38,
    right: 39,
    down: 40,
    delete: 46
}
  , direction = {
    37: -1,
    38: -1,
    39: 1,
    40: 1
}
  , delay = 0
  , TabsReady = () => {
    queryAll('[role="tablist"]').forEach(e => {
        const t = e.parentNode.querySelectorAll('[role="tab"]')
          , a = e.parentNode.querySelectorAll('[role="tabpanel"]');
        for (i = 0; i < t.length; ++i)
            addListeners(t, a, i)
    }
    )
}
;
function addListeners(e, t, a) {
    e[a].addEventListener("click", a => clickEventListener(a, e, t)),
    e[a].addEventListener("keydown", a => keydownEventListener(a, e, t)),
    e[a].addEventListener("keyup", a => keyupEventListener(a, e, t)),
    e[a].index = a
}
function clickEventListener(e, t, a) {
    activateTab(t, e.target, a, !1)
}
function keydownEventListener(e, t, a) {
    switch (e.keyCode) {
    case keys.end:
        e.preventDefault(),
        activateTab(t, t[t.length - 1], a);
        break;
    case keys.home:
        e.preventDefault(),
        activateTab(t, t[0], a);
        break;
    case keys.up:
    case keys.down:
        determineOrientation(e, t, a)
    }
}
function keyupEventListener(e, t, a) {
    switch (e.keyCode) {
    case keys.left:
    case keys.right:
        determineOrientation(e, t, a);
        break;
    case keys.delete:
        determineDeletable(e, t, a)
    }
}
function determineOrientation(e, t, a) {
    var n = e.keyCode
      , r = !1;
    n !== keys.left && n !== keys.right || (r = !0),
    r && switchTabOnArrowPress(e, t, a)
}
function switchTabOnArrowPress(e, t, a) {
    var n = e.keyCode;
    for (x = 0; x < t.length; x++)
        t[x].addEventListener("focus", e => focusEventHandler(e, t, a));
    if (direction[n]) {
        var r = e.target;
        void 0 !== r.index && (t[r.index + direction[n]] ? t[r.index + direction[n]].focus() : n === keys.left || n === keys.up ? focusLastTab(t) : n !== keys.right && n != keys.down || focusFirstTab(t))
    }
}
function activateTab(e, t, a, n) {
    n = n || !0,
    deactivateTabs(e, a),
    t.removeAttribute("tabindex"),
    t.setAttribute("aria-selected", "true");
    var r = t.getAttribute("aria-controls");
    document.getElementById(r).removeAttribute("hidden"),
    t.getAttribute("data-tab-bg") && document.querySelector('[data-tab-bg="' + t.getAttribute("data-tab-bg") + '"]').removeAttribute("hidden"),
    n && t.focus()
}
function deactivateTabs(e, a) {
    for (t = 0; t < e.length; t++)
        e[t].setAttribute("tabindex", "-1"),
        e[t].setAttribute("aria-selected", "false"),
        e[t].removeEventListener("focus", t => focusEventHandler(t, e)),
        e[t].getAttribute("data-tab-bg") && document.querySelector('[data-tab-bg="' + e[t].getAttribute("data-tab-bg") + '"]').setAttribute("hidden", "hidden");
    for (p = 0; p < a.length; p++)
        a[p].setAttribute("hidden", "hidden")
}
function focusFirstTab(e) {
    e[0].focus()
}
function focusLastTab(e) {
    e[e.length - 1].focus()
}
function determineDeletable(e, t, a) {
    target = e.target,
    null !== target.getAttribute("data-deletable") && (deleteTab(e, target),
    generateArrays(),
    target.index - 1 < 0 ? activateTab(t, t[0], a) : activateTab(t, t[target.index - 1], a))
}
function deleteTab(e) {
    var t = e.target
      , a = document.getElementById(t.getAttribute("aria-controls"));
    t.parentElement.removeChild(t),
    a.parentElement.removeChild(a)
}
function focusEventHandler(e, t, a) {
    var n = e.target;
    setTimeout( () => checkTabFocus(n, t, a), delay)
}
function checkTabFocus(e, t, a) {
    focused = document.activeElement,
    e === focused && activateTab(t, e, a, !1)
}
"loading" != document.readyState ? TabsReady() : document.addEventListener("DOMContentLoaded", TabsReady);
