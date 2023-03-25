import java.util.ArrayList;
import java.util.Arrays;

// Runtime:  9 ms (beats 52.25%)
// Memory:  47.4 MB (beats 52.58%)

public class Merge_Intervals_23_03_25 {
	public int[][] merge(int[][] intervals) {
		ArrayList<int[]> answer = new ArrayList<>();
		Arrays.sort(intervals, (a,b) -> a[0] - b[0]);
		int start = intervals[0][0];
		int end = intervals[0][1];
		for (int index = 1; index < intervals.length; index++){
			if(end >= intervals[index][0]){
				end = Math.max(end, intervals[index][1]);
			} else {
				answer.add(new int[]{start, end});
				start = intervals[index][0];
				end = intervals[index][1];
			}
		}
		answer.add(new int[]{start, end});
		return answer.toArray(new int[0][]);
	}

}
