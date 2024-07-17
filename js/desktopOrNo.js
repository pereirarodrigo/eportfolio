function mobileDetect() {
    const md = new MobileDetect(window.navigator.userAgent);

    if (md.mobile() || md.tablet()) {
        return "Cell Phone or Tablet";
    } else {
        return "Desktop";
    }
}


setInterval(() => {
    const device = mobileDetect();

    if (device == "Cell Phone or Tablet"){
        
    }
}, 3000);