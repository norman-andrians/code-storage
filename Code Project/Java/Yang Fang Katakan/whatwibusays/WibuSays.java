package whatwibusays;

public class WibuSays {
    public static void main(String[] args) {
       Terjemahkan terjemahkan = new Terjemahkan();
       Terjemahkan gaya = new Terjemahkan();
       Terjemahkan serialize = new Terjemahkan();
       
       boolean kesal = true;
       boolean wibu = true;
       
       terjemahkan.Serialize(serialize.type1);
       
       String wibuBerkata1 = terjemahkan.faktanya + terjemahkan.saya + "mau ngomong " + terjemahkan.tapi;
       String wibuBerkata2 = terjemahkan.saya + "hanya sedang menghemat energi dari pada mengobrol dengan kalian ";
       String wibuBerkata3 = "yang " + terjemahkan.unknown1 + terjemahkan.omongKosong;
       String wibuBerkata4 = "tapi " + terjemahkan.kamu + "nganggep " + terjemahkan.saya + "aneh" ;
       String wibuBerkata5 = terjemahkan.kamu + "pengen " + terjemahkan.saya + terjemahkan.bunuh;
       
       String fangBerkata = wibuBerkata1 + wibuBerkata2 + wibuBerkata3 + wibuBerkata4 + wibuBerkata5;
       
       if (wibu && kesal) {
           gaya.Tcih();
           System.out.println(fangBerkata);
       }
    }
}
