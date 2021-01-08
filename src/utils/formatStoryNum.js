function re(str) {
  str += "";
  return str
    .split("")
    .reverse()
    .join("");
}

export default function toRMB(num) {
  var tmp = "";
  for (var i = 1; i <= re(num).length; i++) {
    tmp += re(num)[i - 1];
    if (i % 3 == 0 && i != re(num).length) {
      tmp += ",";
    }
  }
  return re(tmp);
}
