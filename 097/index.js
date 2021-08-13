function helloWorld() {
  const [, H] = [].shift.name.toUpperCase();
  const [E] = [].entries.name;
  const [L] = [].lastIndexOf.name;
  const [, O] = [].toString.name;

  const [, a] = false.toString();
  const zero = Math.PI - Math.PI;
  const space = a.charCodeAt(zero) - a.toUpperCase().charCodeAt(zero);

  const [, , , , W] = [].copyWithin.name;
  const [, , , R] = [].entries.name;
  const [, , D] = [].reduce.name;
  const exclame = space + [true].length;

  return (
    H +
    E +
    L +
    L +
    O +
    String.fromCharCode(space) +
    W +
    O +
    R +
    L +
    D +
    String.fromCharCode(exclame)
  );
}

console.log(helloWorld(), "Hello world!");
