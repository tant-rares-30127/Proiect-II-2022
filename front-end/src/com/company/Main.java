package com.company;
import java.io.File;
import java.io.FileNotFoundException;
import java.util.Scaner

public class Main {

    public static void main(String[] args) {

        try{
            File myObj = new File("one_second_show_sample.txt");
            Scanner myReader= new Scanner(myObj);
            while(myReader.hasNextLine){
                String data= myReader.nextLine();

            }
        }
    }
}
