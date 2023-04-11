const copyright = document.getElementById("copyright");
const year = new Date().getFullYear();

function writeCopyright() {
    copyright.innerHTML = "&copy; " + year + " Lead Sales Hub. All rights reserved."
}

writeCopyright()