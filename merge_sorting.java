import java.util.Arrays;
public class merge_sorting{
    public  void split_array(int[] array){
        if(array.length<2){
            return;
        }
        int mid = (int)Math.floor(array.length/2);
        int u []= new int[mid];
        for(int i =0;i<mid;i++){
            u[i]=array[i];
        }
        int k[] = new int[array.length-mid];
        for(var i=mid;i<array.length;i++){
            k[i-mid]=array[i];
        }
        split_array(u);
        split_array(k);
        merge(u, k, array);
    }
    public  void merge(int list1[],int list2[],int final_list[]){
        int i=0,j=0,k=0;
        while (i<list1.length && j<list2.length) {
            if(list1[i]<list2[j]){
                final_list[k++]=list1[i++];
            }
            else{
                final_list[k++]=list2[j++];
            }
        }
        while (i<list1.length) {
            final_list[k++]=list1[i++];
        }
        while (j<list2.length) {
            final_list[k++]=list2[j++];
        }
    }
    public static void main(String[] args) {
        var a = new merge_sorting();
        int array[] = {19,29,39,50,70,2,4,5,7,8,11,-10};
        a.split_array(array);
        System.out.println(Arrays.toString(array));
        
        }    
}

