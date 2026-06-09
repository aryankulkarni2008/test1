var ptr = ""
for (i = 1; i <= 4; i++) {
   for (j = 1; j <=4-i; j++) {
       ptr += " ";
    }
    for (k = 1; k <= i; k++) {
       ptr += " *";
    }
    ptr += "\n";
}
for (i = 4; i >= 1; i--) {
    for (j = 1; j <=4-i; j++) {
        ptr += " ";
    }
    for (k = i; k >= 1; k--) {
        ptr += " *";
    }
    ptr += "\n";
}
console.log(ptr);