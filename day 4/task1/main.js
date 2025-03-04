var promp = parseInt(window.prompt("Enter a number"));
promp = promp +1
for (var i = 1; i < promp; i++) {
    document.writeln(`<h${i}>This is heading ${i}</h${i}>`);
}
