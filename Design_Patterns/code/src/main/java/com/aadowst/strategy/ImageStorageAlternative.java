package com.aadowst.strategy;

public class ImageStorageAlternative {
	public void store(String fileName, Compressor compressor, Filter filter){
		compressor.compress(fileName);
		filter.apply(fileName);
	}
}
