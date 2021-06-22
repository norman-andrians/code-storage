package whatwibusays;

public class Terjemahkan {
    public String faktanya = "jitsuwa";
    public String saya = "Watashi";
    public String unknown1 = "mendouksane";
    public String tapi = "demo";
    public String omongKosong = "kudarane yo";
    public String kamu = "omae tachi";
    public String bunuh = "korosu";
    
    public String type1 = "type 1";
    
    public void Tcih() {
        System.out.println("Tcih");
    }
    
    public void Serialize(String type) {
        if (type == type1) {
            faktanya = faktanya + " ";
            saya = saya + " ";
            unknown1 = unknown1 + " ";
            tapi = tapi + " ";
            omongKosong = omongKosong + ", ";
            kamu = kamu + " ";
        }
        
    }
}
