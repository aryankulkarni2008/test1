var ptr =""
for ( i = 1; i<=5;i++){
    for(j=1;j<=6-i;j++){
        ptr +=" ";

    }
    for(k=1;k>=1;k++){
        if(i==1||i==5||k==1||k==i){
        ptr +=" *"; 
        }else{
            ptr+=" ";
        }
    }
    ptr += "\n";
    
}console.log(ptr);