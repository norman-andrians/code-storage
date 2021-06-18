package MainClass;

import java.util.Scanner;

public class BonusHarga {
    public static void main(String[] args) {
        // TODO code application logic here
        Scanner inp = new Scanner(System.in);
        
        int hargabSetrika = 1500000;
        int hargabPayung = 1000000;
        int hargabBallpoint = 500000;
        
        int hargaPersatu = 500000;
        
        System.out.println("Menentukan Jumlah harga dan bonus yang di beli");
        System.out.println("Oleh Norman Andrians ;p\n"); // hapus aja
        System.out.println("Harga Barang = " + hargaPersatu + "\n");
        System.out.print("Silahkan Masukan Jumlah Barang yang ingin anda beli: ");
            int barang = inp.nextInt();
            int total = barang * hargaPersatu;
        
        System.out.println("\n" + "Anda Membeli " + barang + " Barang Yang Anda Beli");
        System.out.println("Harga Total Beli = " + total);
        
        if (total >= hargabSetrika) {
            bonus.DapatBonus(bonus.setrika);
        }
        else if (total >= hargabPayung) {
            bonus.DapatBonus(bonus.payung);
        }
        else if (total >= hargabBallpoint) {
            bonus.DapatBonus(bonus.ballpoint);
        }
        else {
            bonus.DapatBonus("Selamat Datang Kembali!");
        }
    }
}
