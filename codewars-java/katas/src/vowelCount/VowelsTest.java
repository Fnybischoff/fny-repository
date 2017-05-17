package vowelCount;

/**
 * Created by fnybischoff on 19/04/2017.
 */
import org.junit.Test;
import static org.junit.Assert.assertEquals;

public class VowelsTest {
    @Test
    public void testCase1() {
        assertEquals("Nope!", 5, Vowels.getCount("abracadabra"));
    }

}