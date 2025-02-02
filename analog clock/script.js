setInterval(() => {
    // console.log("hi abdullah");
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();
    var hrotation = 30 * htime + mtime / 2;
    var mrotation = 6 * mtime;
    var srotation = 6 * stime;
    hours.style.transform = `rotate(${hrotation}deg)`
    minutes.style.transform = `rotate(${mrotation}deg)`
    seconds.style.transform = `rotate(${srotation}deg)`
}, 1000);