function cerrarSubMenu2() {
    if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2) > div").style.display == "") {
    	document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2) > div").style.display = "block";
    } else if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2) > div").style.display == "block") {
        document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2) > div").style.display = "none";
    } else if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2) > div").style.display == "none") {
        document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2) > div").style.display = "block";
    }
}

if (window.screen.width <= 950) {
	document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(2)").addEventListener("click", cerrarSubMenu2);
}

function cerrarSubMenu3() {
    if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3) > div").style.display == "") {
    	document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3) > div").style.display = "block";
    } else if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3) > div").style.display == "block") {
        document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3) > div").style.display = "none";
    } else if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3) > div").style.display == "none") {
        document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3) > div").style.display = "block";
    }
}

if (window.screen.width <= 950) {
	document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(3)").addEventListener("click", cerrarSubMenu3);
}

function cerrarSubMenu4() {
    if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4) > div").style.display == "") {
    	document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4) > div").style.display = "block";
    } else if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4) > div").style.display == "block") {
        document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4) > div").style.display = "none";
    } else if (document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4) > div").style.display == "none") {
        document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4) > div").style.display = "block";
    }
}

if (window.screen.width <= 950) {
	document.querySelector("body > header > div > div.nav-btn > div > ul > li:nth-child(4)").addEventListener("click", cerrarSubMenu4);
}