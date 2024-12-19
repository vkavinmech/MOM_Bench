
import TrainTicket from "../pageObject/train.js";
describe("train ticket",()=>{
    it("ticket",()=>{
        const book=new TrainTicket();
        book.url();
        book.From("cheennai");
        book.to("delhi");
        book.quota();
        book.date();
        book.class();
        book.submitform();

})
})