public class Main{

    public static void main(String args[]){

        int arr[][] = {{1,0,0},
                       {0,1,0},
                       {0,0,1}};


        for(int i = 0; i<arr.length; i++){
            for(int j = 0; j<arr[0].length; j++){
                System.out.print(arr[i][j]+" ");
            }System.out.print("\n");
        }

        for(int i = 0; i<arr.length; i++){
            if(arr[i][0]==arr[i][1] && arr[0][0]==arr[0][2]){
                System.out.println("match");
                break;
            }
        }

        for(int i = 0; i<arr.length; i++){
            if(arr[0][i]==arr[1][i] && arr[0][i]==arr[2][i]){
                System.out.println("match");
                break;
            }
        }

        if(arr[0][0]==arr[1][1] && arr[0][0]==arr[2][2]){
            System.out.println("match");
        }

        if(arr[0][2]==arr[1][1] && arr[0][2]==arr[2][0]){
            System.out.println("match");
        }

    }
}
