package leetSpeak;

/**
 * Created by fnybischoff on 20/04/2017.
 */
class Kata {
    static String toLeetSpeak(final String speak) {
        String alphabet = "A@B8C(E3G6H#I!L1O0S$T7Z2";
        String dontTranslate = "ABCEGHILOTZ";
        String result = "";
        for(int i=0;i<speak.length();i++){
            if(alphabet.indexOf(speak.charAt(i))<0 && dontTranslate.indexOf(speak.charAt(i)) <0){
                result += speak.charAt(i);
            }
            else{
                result += alphabet.charAt(1 + alphabet.indexOf(speak.charAt(i)));
            }
        }
        return result;
    }
}