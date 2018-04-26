var source = [
function myFunction(p1, p2) {
    return p1 * p2;              // The function returns the product of p1 and p2
}
];

var options = {
  undef: true
};
var predef = {
  foo: false
};

JSHINT(source, options, predef);

console.log(JSHINT.data());