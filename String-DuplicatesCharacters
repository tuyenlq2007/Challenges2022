Program to find the duplicate characters in a string 

#java
public class DuplicateCharacters {  
     public static void main(String[] args) {  
        String string1 = "Great responsibility";  
        int count;  
        //Converts given string into character array  
        char string[] = string1.toCharArray();  
        System.out.println("Duplicate characters in a given string: ");  
        //Counts each character present in the string  
        for(int i = 0; i <string.length; i++) {  
            count = 1;  
            for(int j = i+1; j <string.length; j++) {  
                if(string[i] == string[j] && string[i] != ' ') {  
                    count++;  
                    //Set string[j] to 0 to avoid printing visited character  
                    string[j] = '0';  
                }  
            }   

            //A character is considered as duplicate if count is greater than 1   

            if(count > 1 && string[i] != '0')  
                System.out.println(string[i]);  
        }  
    }  
}   

#javascript 
var string="Greatresponsibility";
var strin=string.split('');
var count;
for(let i=0;i<strin.length;i++){
count=1;
for(let j=i+1;j<strin.length;j++){
if(strin[j]==strin[i]){
count++;
strin[j]='0'
}
}
if(count>1 && strin[i]!='0') console.log(strin[i])
}
