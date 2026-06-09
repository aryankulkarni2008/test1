var ptr=""

for(i=4;i<=1;i--){
    for(j=3;j<=i;j++){
        ptr+=" "
    }
    for(k=i;k>=1;k--){
        ptr+="*";
    }
    ptr+="\n";
}
console.log(ptr);
