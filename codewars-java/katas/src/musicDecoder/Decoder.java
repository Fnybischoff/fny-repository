package musicDecoder;

/**
 * Created by fnybischoff on 21/04/2017.
 */
import java.util.*;
import java.util.regex.*;

public class Decoder {
    public int[] uncompress(final String music) {
        List<String> items = new ArrayList<String>(Arrays.asList(music.split(",")));
        int[] result =new int[];
        System.out.println(items);

        for(int i=0;i<items.size();i++){
            if(items.get(i).indexOf("*")>0){
                String[] divided = items.get(i).split("*");
                int count = 0;
                while(count < divided[1]){
                    count++;
                }
                items.set(i, divided[0]);
            }
        }

        int i=0;
        for(String str:items){
            result[i]=Integer.parseInt(str);//Exception in this line
            i++;
        }
        System.out.println("result: "+result);
        return result;
    }
}
