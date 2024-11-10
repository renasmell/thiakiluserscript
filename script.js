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

        function doOnSatisfy(conditionFn, fn, timeout = 50) {
        if (conditionFn()) return fn();

        return setTimeout(() => doOnSatisfy(conditionFn, fn, timeout), timeout);
    }
    function setToVersion() {
        console.log('pluh')
        if (document.querySelector('.badge.badge-info').innerHTML === "1.8.9") return;
        document.querySelector('.dropdown-toggle').click()
        Array.from(document.querySelectorAll('.list-group-item.list-group-item-action')).filter(e => e.innerHTML == "22")[0].click()
    }
    let url = window.location.href;
    if (url === "https://mcp.thiakil.com/#/search") {
        doOnSatisfy(() => document.getElementById("name-search"), setToVersion);
    } else if (url === "https://mcp.thiakil.com/#/classes") {
        doOnSatisfy(() => (document.querySelector('table.table-striped.table-bordered.table-hover')), () => {
            setToVersion();
            document.querySelector(".nav-link").click();
        });
    } else if (url === "https://mcp.thiakil.com/#/compare") {
        doOnSatisfy(() => (document.querySelector('.fade.alert.alert-info.show')), () => {
            setToVersion();
            document.querySelector(".nav-link").click();
        });
    }
})();
