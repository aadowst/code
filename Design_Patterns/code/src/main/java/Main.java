import com.aadowst.strategy.BWFilter;
import com.aadowst.strategy.HighContrastFilter;
import com.aadowst.strategy.ImageStorage;
import com.aadowst.strategy.ImageStorageAlternative;
import com.aadowst.strategy.JpgCompressor;
import com.aadowst.strategy.PngCompressor;

public class Main {
	public static void main(String[] args) {
		// Pass the compressor and filter concrete classes when creating the imageStorage object;
		ImageStorage imageStorage = new ImageStorage(new JpgCompressor(), new BWFilter());
		imageStorage.store("file 1");

		// Pass the compressor and filter concrete classes to the imageStorageAlternative object when storing the file
		ImageStorageAlternative imageStorageAlternative = new ImageStorageAlternative();
		imageStorageAlternative.store("file 2", new PngCompressor(), new HighContrastFilter());
		imageStorageAlternative.store("file 3", new JpgCompressor(), new HighContrastFilter());
	}
}
