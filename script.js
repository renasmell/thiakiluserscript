// ==UserScript==
// @name        MCP Auto 1.8.9
// @namespace   https://tampermonkey.net/
// @version     0.1
// @description Automatically sets mapping version to 1.8.9 on MCP website
// @author      renascent
// @match       https://mcp.thiakil.com/*
// @grant       none
// ==/UserScript==

(function() {
    'use strict';

    function doOnLoad(element, fn, timeout = 50) {
        if (document.querySelector(element)) return fn();

        return setTimeout(() => doOnLoad(element, fn, timeout), timeout);
    }

    doOnLoad(".badge.badge-info", () => {

        if (document.querySelector('.badge.badge-info').innerHTML === "1.8.9") return;
        document.querySelector('.dropdown-toggle').click()
        Array.from(document.querySelectorAll('.list-group-item.list-group-item-action')).filter(e => e.innerHTML == "22")[0].click()
        doOnLoad('table.table-striped.table-bordered.table-hover', () => document.querySelector(".nav-link").click())

    })
})();
