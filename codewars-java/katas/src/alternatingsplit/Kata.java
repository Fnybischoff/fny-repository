package alternatingsplit;

/**
 * Created by fnybischoff on 20/04/2017.
 */
public class Kata {

    public static String encrypt(final String text, final int n) {
        if(text.length() <=0 || n <= 0){
            return text;
        }
        else{
            String result = text;
            int count = 1;
            while(count <= n){
                String everyOther = "";
                String everyRemain = "";
                char[] initialArr = result.toCharArray();
                for(int i=1;i<initialArr.length;i+=2){
                    everyOther += initialArr[i];
                }
                for(int j=0;j<initialArr.length;j+=2){
                    everyRemain += initialArr[j];
                }
                result = everyOther+everyRemain;
                count ++;
            }
            return result;
        }
    }

    public static String decrypt(final String encryptedText, final int n) {
        if(encryptedText.length() <=0 || n <= 0){
            return encryptedText;
        }
        else{
            String result = encryptedText;
            int count = 1;
            while(count <= n){
                String everyRemain = result.substring(result.length()/2);
                String everyOther = result.substring(0,result.length()/2);
                result = "";
                if(everyRemain.length()>everyOther.length()){
                    for(int i=0;i<everyOther.length();i++) {
                        result = result + everyRemain.charAt(i) + everyOther.charAt(i);
                    }
                    result += everyRemain.charAt(everyRemain.length()-1);
                }
                else if(everyRemain.length() == everyOther.length()){
                    for(int i=0;i<everyOther.length();i++) {
                        result = result + everyRemain.charAt(i) + everyOther.charAt(i);
                    }
                }
                else if(everyRemain.length() < everyOther.length()){
                    for(int i=0;i<everyRemain.length();i++) {
                        result = result + everyRemain.charAt(i) + everyOther.charAt(i);
                    }
                    result += everyOther.charAt(everyOther.length()-1);
                }
                count ++;
            }
            return result;
        }
    }

}