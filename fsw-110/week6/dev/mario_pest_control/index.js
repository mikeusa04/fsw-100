function add(){
    fst = parseInt(myform.fst.value);
    snd = parseInt(myform.snd.value);
    thrd = parseInt(myform.thrd.value);
    sum = fst + snd + thrd;
    myform.result.value = sum;
    totalPrice = price + price1 + price2;
    myform1.result3.value = totalPrice;
}
function multiply(){
    a = parseInt(myform1.a.value);
    price = a * 5;
    myform1.result.value = price;
    b = parseInt(myform1.b.value);
    price1 = b * 7;
    myform1.result1.value = price1;
    c = parseInt(myform1.c.value);
    price2 = c * 11;
    myform1.result2.value = price2;
}