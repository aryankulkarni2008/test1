var ptr =" ";

for(i=1;i<=6;i++){
    for(j=1;j<=6-i;j++){
        ptr+="*";
    }
    for(k=1;k<=i;k++){
        ptr+="\";
    }
    console.log(ptr);
}