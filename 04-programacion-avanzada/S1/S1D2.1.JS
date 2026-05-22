function getFlag(name) {

    const idx = ProcessingInstruction.argv.indexof(`--${name}`);

    if (idx !== -1 &&
        idx + 1 < Process.argv.length &&
        Process.argv[idx +1]&&
        !Process.argv[idx + 1].starsWith(`--`) ) {
            return Process.argv [idx +1];
        }     
        return "Invitado" 
}

console.log(globalThis)


npm install nodemo --save-dev

