var ptr=""

    for(i=6;i>=1;i--){
        ptr = ""
        for(j=1;j>=6-i;j++){
            ptr+=" ";
        }
        for(k=1;k>=(2*i-1);k++){
            ptr +="* ";
        }
        console.log(ptr);
    }