function cone(r, h) {
    let rSqr = r * r;
    let hSqr = h * h;
    let volume = (1 / 3) * Math.PI * rSqr * h;
    let s = rSqr + hSqr;
    s = Math.sqrt(s);
    let l = Math.PI * r * s;
    let b = Math.PI * rSqr;
    let totalArea = l + b;

    console.log(`volume = ${volume.toFixed(4)}\narea = ${totalArea.toFixed(4)}`);
}

cone(3.3, 7.8)