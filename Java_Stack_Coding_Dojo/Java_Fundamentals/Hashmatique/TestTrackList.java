import java.util.HashMap;

public class TestTrackList{

    public static void main(String[] args){

        TrackList lister = new TrackList();
        lister.addSongs();
        String lyrics1 = lister.getLyrics("Hard Days Night");
        System.out.println(lyrics1);

        lister.getAllTracks();
    }
}