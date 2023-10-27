function maxExtension(...valores) {
    let m=0;
    for (let i=0;i<=valores.length;i++){
        if (valores[i]>m){
            m=valores[i];
        }
    }
    return m;
}