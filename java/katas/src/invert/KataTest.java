package invert;

/**
 * Created by fnybischoff on 19/04/2017.
 */
import org.junit.Test;
import static org.junit.Assert.assertEquals;
import java.util.Arrays;

public class KataTest {
    @Test
    public void testSomething() {

        int[] input = new int[] {-1,-2,-3,-4,-5};
        int[] expected = new int[] {1,2,3,4,5};
        assertEquals(Arrays.toString(expected), Arrays.toString(Kata.invert(input)));

        input = new int[] {-1,2,-3,4,-5};
        expected = new int[] {1,-2,3,-4,5};
        assertEquals(Arrays.toString(expected), Arrays.toString(Kata.invert(input)));

        input = new int[] {};
        expected = new int[] {};
        assertEquals(Arrays.toString(expected), Arrays.toString(Kata.invert(input)));

        input = new int[] {0};
        expected = new int[] {0};
        assertEquals(Arrays.toString(expected), Arrays.toString(Kata.invert(input)));
    }
}