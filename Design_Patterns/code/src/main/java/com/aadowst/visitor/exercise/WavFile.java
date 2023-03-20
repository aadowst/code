package com.aadowst.visitor.exercise;

import java.util.ArrayList;
import java.util.List;

public class WavFile {
    private List<Segment> segments = new ArrayList<>();

    public void add(Segment segment){
        segments.add(segment);
    }
    public void applyFilter(AudioFilter filter){
        for(Segment segment : segments){
            segment.applyFilter(filter);
        }
    }

    public static WavFile read(String fileName) {
        // Simulate reading a wav file and building the segments
        WavFile wavFile = new WavFile();
        wavFile.segments.add(new FormatSegment());
        wavFile.segments.add(new FactSegment());
        wavFile.segments.add(new FactSegment());
        wavFile.segments.add(new FactSegment());

        return wavFile;
    }

}
