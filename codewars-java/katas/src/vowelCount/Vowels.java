package vowelCount;

import jdk.nashorn.internal.runtime.regexp.joni.Regex;

/**
 * Created by fnybischoff on 19/04/2017.
 */
public class Vowels {

    public static int getCount(String str) {
        int vowelsCount = 0;
        for(int i=0;i<str.length();i++){
            char c = str.charAt(i);
            if(c=='a'||c=='e'||c=='i'||c=='o'||c=='u'){
                vowelsCount ++;
            }
        }
        return vowelsCount;
    }

}
