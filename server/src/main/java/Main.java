

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.File;
import java.io.FileInputStream;
import java.util.Iterator;

import static spark.Spark.*;

public class Main {


    private static final String name = "resources/Inventory.xlsx";

    public static void main(String[] args) {

        try {
            FileInputStream file = new FileInputStream(name);
            Workbook workbook = new XSSFWorkbook(file);
            DataFormatter dataFormatter = new DataFormatter();
            Iterator<Sheet> sheets = workbook.sheetIterator();
            while(sheets.hasNext()) {
                Sheet sh = sheets.next();
                System.out.println("Sheet name: " + sh.getSheetName());
                System.out.println("-----");
                Iterator<Row> iterator = sh.iterator();
                while(iterator.hasNext()) {
                    Row row = iterator.next();
                    Iterator<Cell> cellIterator = row.iterator();
                    while(cellIterator.hasNext()) {
                        Cell cell = cellIterator.next();
                        String cellValue = dataFormatter.formatCellValue(cell);
                        System.out.println(cellValue + "\t");
                    }
                    System.out.println("");
                }

            }
            workbook.close();
        } catch(Exception e) {
            e.printStackTrace();
        }


//        //This is required to allow GET and POST requests with the header 'content-type'
//        options("/*",
//                (request, response) -> {
//                    response.header("Access-Control-Allow-Headers",
//                            "content-type");
//
//                    response.header("Access-Control-Allow-Methods",
//                            "GET, POST");
//
//
//                    return "OK";
//                });
//
//        //This is required to allow the React app to communicate with this API
//        before((request, response) -> response.header("Access-Control-Allow-Origin", "http://localhost:3000"));
//
//        String world = "world";
//        //TODO: Return JSON containing the candies for which the stock is less than 25% of it's capacity
//        get("/low-stock", (request, response) -> {
//            return "hello " + world;
//        });
//
//
//        //TODO: Return JSON containing the total cost of restocking candy
//        post("/restock-cost", (request, response) -> {
//            return null;
//        });

    }
}
