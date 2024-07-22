function firstNonRepeatedChar(str) {
 // Write your code here
	arr=[]
	for(i=0;i<str.length;i++){
		ch=str.charAt(i)
		cnt=0
		for(j=0;j<str.length;j++){
			if(str.charAt(j)==ch)
				cnt++
		}
		if(cnt==1)
			return ch
	}
	
	return null
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
