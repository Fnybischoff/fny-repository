package invert;

/**
 * Created by fnybischoff on 19/04/2017.
 */
public class Kata {
    public static int[] invert(int[] array) {
        int[] arr = new int[array.length];
        for(int i=0;i<array.length;i++){
            arr[i] = array[i]*-1;
        }
        return arr;
    }
}