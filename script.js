function button11() {
	window.location.href="m1.html";
}
function button22() {
	window.location.href="m2.html";
}
function Method1() {
	var av1 = document.input.av1.value;
	var av2 = document.input.av2.value;
	var bv1 = document.input.bv1.value;
	var bv2 = document.input.bv2.value;
	var cv1 = document.input.cv1.value;
	var cv2 = document.input.cv2.value;
	var d = Number((av1 * bv2) - (av2 * bv1));
	var dx = Number((cv1 * bv2) - (cv2 * bv1));
	var dy = Number((cv1 * av2) - (cv2 * av1));
	var x = Number(dx / d);
	var y = Number(dy / d);
	document.getElementById("xv").value = x;
	document.getElementById("yv").value = y;
}
function Method2() {
	var a1 = document.input1.a1.value;
	var a2 = document.input1.a2.value;
	var a3 = document.input1.a3.value;
	var b1 = document.input1.b1.value;
	var b2 = document.input1.b2.value;
	var b3 = document.input1.b3.value;
	var c1 = document.input1.c1.value;
	var c2 = document.input1.c2.value;
	var c3 = document.input1.c3.value;
	var t1 = document.input1.t1.value;
	var t2 = document.input1.t2.value;
	var t3 = document.input1.t3.value;

	var dd = Number((a1 * ((b2 * c3) - (b3 * c2))) - (b1 * ((a2 * c3) - (a3 * c2))) + (c1 * ((a2 * b3) - (a3 * b2))));

	var ddx = Number((t1 * ((b2 * c3) - (c2 * b3))) - (b1 * ((t2 * c3) - (c2 * t3))) + (c1 * ((t2 * b3) - (t3 * b2))));

	var ddy = Number((a1 * ((t2 * c3) - (c2 * t3))) - (t1 * ((a2 * c3) - (c2 * a3))) + (c1 * ((t2 * a3) - (a2 * t3))));

	var ddz = Number((a1 * ((b2 * t3) - (t2 * b3))) - (b1 * ((a2 * t3) - (t2 * a3))) + (t1 * ((a2 * b3) - (b2 * a3))));

	var xx = Number(ddx / dd);
	var yy = Number(ddy / dd);
	var zz = Number(ddz / dd);

	document.getElementById("x11").value = xx;
	document.getElementById("y11").value = yy;
	document.getElementById("z11").value = zz;


}