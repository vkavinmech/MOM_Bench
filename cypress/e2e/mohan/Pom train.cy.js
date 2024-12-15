
import train from "../Page object/IRCTC";
describe("train ticket",()=>{
    it("ticket booking",()=>{
        const book=new train();
        book.url();
        book.From("Erode");
        book.to("chennai");
        book.quota();
        book.date();
        book.class();
        book.submit();

})
})