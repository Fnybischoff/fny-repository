package musicDecoder;

/**
 * Created by fnybischoff on 21/04/2017.
 */
import java.util.ArrayList;
import java.util.List;

import static org.junit.Assert.*;
import org.junit.Test;



public class MainTest {
    @Test
    public void basicTests() {
        test("2 identical numbers",new int[] {1,2,2,3},"1,2*2,3");
        test("3 consecutive numbers, ascending",new int[] {1,3,4,5,7},"1,3-5,7");
        test("3 consecutive numbers, descending",new int[] {1,5,4,3,7},"1,5-3,7");
        test("3 numbers with same interval, descending",new int[] {1,10,8,6,7},"1,10-6/2,7");
    }

    private void test(String description,int[] raw,String encoded) {
        System.out.println(encoded);
        assertArrayEquals(description,raw,new Decoder().uncompress(encoded));
    }

    private String solution(int[] raw) {
        List<String> encoded=new ArrayList<String>();
        for(int i=0; i<raw.length; ++i) {
            int j=i;
            boolean isLast=i==raw.length-1;
            if(isLast) {
                encoded.add(""+raw[i]);
            } else {
                Integer diff=raw[j+1]-raw[j];
                if(diff==0) {
                    while(j<raw.length-1 && raw[j+1]==raw[j]) ++j;
                    encoded.add(raw[i]+"*"+(j-i+1));
                    i=j;
                } else {
                    while(j<raw.length-1 && raw[j+1]==raw[j]+diff) ++j;
                    if(j-i<=1) {
                        encoded.add(""+raw[i]);
                    } else {
                        encoded.add(raw[i]+"-"+raw[j]+(Math.abs(diff)==1?"":("/"+Math.abs(diff))));
                        i=j;
                    }
                }
            }
        }
        return String.join(",",encoded.toArray(new String[] {}));
    }

    private int rnd(int min,int max) {
        return new Double(Math.floor((Math.random() * (max+1)))).intValue()+min;
    }
}