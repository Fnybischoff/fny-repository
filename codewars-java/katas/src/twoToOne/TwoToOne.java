/**
 * Created by fnybischoff on 19/04/2017.
 */

/*
Take 2 strings s1 and s2 including only letters from ato z. Return a new sorted string, the longest possible, containing distinct letters, - each taken only once - coming from s1 or s2.
Examples:

a = "xyaabbbccccdefww"
b = "xxxxyyyyabklmopq"
longest(a, b) -> "abcdefklmopqwxy"

a = "abcdefghijklmnopqrstuvwxyz"
longest(a, a) -> "abcdefghijklmnopqrstuvwxyz"

*/

package twoToOne;
import java.util.Arrays;

public class TwoToOne {

    public static String longest (String s1, String s2) {
        String all = s1 + s2;

        String unique = "";
        for(int i=0; i<all.length(); i++){
            char c = all.charAt(i);
            if(unique.indexOf(c)<0){
                unique += c;
            }
        }
        char[] charArray = unique.toCharArray();
        Arrays.sort(charArray);
        String result = new String(charArray);
        return result;
    }
}