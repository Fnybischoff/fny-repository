package findMaxMinList;
/**
 * Created by fnybischoff on 19/04/2017.
 */
import static org.junit.Assert.assertEquals;
import org.junit.Test;

public class KataTest {
    private Kata kata = new Kata();

    @Test
    public void testExamples() {
        assertEquals(-110, kata.min(new int[]{-52, 56, 30, 29, -54, 0, -110}));
        assertEquals(0, kata.min(new int[]{42, 54, 65, 87, 0}));
        assertEquals(566, kata.max(new int[]{4,6,2,1,9,63,-134,566}));
        assertEquals(5, kata.max(new int[]{5}));
    }
}