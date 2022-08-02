import java.util.HashMap;
import java.util.Set;

public class TrackList{
    HashMap<String, String> myTrackList = new HashMap<String, String>();

    public void addSongs(){
    myTrackList.put("Hard Days Night", "It's been a hard day's night");
    myTrackList.put("Help", "I need somebody (Help) not just anybody (Help) you know I need someone, help");
    myTrackList.put("Yesterday", "Yesterday, all my troubles seemed so far away now it looks as though they're here to stay Oh, I believe in yesterday");
    myTrackList.put("Let It Be", "When I find myself in times of trouble Mother Mary comes to me Speaking words of wisdom Let it be");

    }

    public String getLyrics (String title){
        String lyrics = myTrackList.get(title);
        return lyrics;
    }

    public void getAllTracks(){
        Set<String> tracks = myTrackList.keySet();
        for(String track: tracks ){
            System.out.println(track);
            System.out.println(myTrackList.get(track));
        }
    }

}