function  add(a,b,...c){
	var sum=0;
	for (let i=0;i<c.length;i++){
	sum=sum+c[i];
	}
	return a+b+sum;
}
console.log(add(10,20,30,40,55));