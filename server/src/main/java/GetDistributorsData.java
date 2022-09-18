import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.usermodel.XSSFWorkbook;

import java.io.FileInputStream;
import java.util.Iterator;

public class GetDistributorsData {

    private static final String name = "resources/Distributors.xlsx";
    public String getDistributorsData() {
        String cellValue = null;
        try {
            cellValue = "";
            FileInputStream file = new FileInputStream(name);
            Workbook workbook = new XSSFWorkbook(file);
            DataFormatter dataFormatter = new DataFormatter();
            Iterator<Sheet> sheets = workbook.sheetIterator();
            while (sheets.hasNext()) {
                Sheet sh = sheets.next();
                System.out.println("");
                System.out.println("Sheet name: " + sh.getSheetName());
                System.out.println("-----");
                Iterator<Row> iterator = sh.iterator();
                while (iterator.hasNext()) {
                    Row row = iterator.next();
                    Iterator<Cell> cellIterator = row.iterator();
                    while (cellIterator.hasNext()) {
                        Cell cell = cellIterator.next();
                        cellValue = dataFormatter.formatCellValue(cell);
                        System.out.print(cellValue + "\t");
                    }
                    System.out.println("");
                }

            }
            workbook.close();
        } catch (Exception e) {
            e.printStackTrace();
        }

        return cellValue;
    }
}
