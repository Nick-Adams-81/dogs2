package com.example.server.xlnsReaders;

import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;
import java.io.FileInputStream;
import java.util.Iterator;

public class DistributorsReader {

    public static void main(String[] args) {

        final String name = "resources/Distributors.xlsx";
        try {
            FileInputStream file = new FileInputStream(name);
            Workbook workbook = new XSSFWorkbook(file);
            DataFormatter dataFormatter = new DataFormatter();
            Iterator<Sheet> sheets = workbook.sheetIterator();
            while (sheets.hasNext()) {
                Sheet sh = sheets.next();
                System.out.println("Sheet Name: " + sh.getSheetName());
                System.out.println("------");
                Iterator<Row> iterator = sh.iterator();
                while (iterator.hasNext()) {
                    Row row = iterator.next();
                    Iterator<Cell> cellIterator = row.iterator();
                    while (cellIterator.hasNext()) {
                        Cell cell = cellIterator.next();
                        String cellValue = dataFormatter.formatCellValue(cell);
                        System.out.print(cellValue + "\t");
                    }
                    System.out.println("");
                }
            }
            workbook.close();
        } catch (Exception e) {
            e.printStackTrace();
        }
    }
}



