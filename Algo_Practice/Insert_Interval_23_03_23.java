import java.util.LinkedList;
import java.util.List;

public class Insert_Interval_23_03_23{
	public int[][] insert(int[][] intervals, int[] newInterval) {
        List<int[]> result = new LinkedList<>();

				int index = 0;
				// Add all the intervals that end before the newInterval starts
				while(index < intervals.length && intervals[index][1] < newInterval[0] ){
					result.add(intervals[index]);
					index++;
				}

				// Add all the intervals that overlap (they start at/before newInterval ends)
				while(index < intervals.length && intervals[index][0] <= newInterval[1]){
					newInterval[0] = Math.min(newInterval[0], intervals[index][0]);
					newInterval[1] = Math.min(newInterval[1], intervals[index][1]);
					index++;
				}
				result.add(newInterval);

				// Add all remaining intervals
				while(index < intervals.length){
					result.add(intervals[index]);
					index++;
				}

				return result.toArray(new int[result.size()][]);
	}

}
