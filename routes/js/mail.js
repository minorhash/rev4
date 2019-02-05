var snde = require('snd-ema');
var db=require("roblo")

// === glob =============================
var name,mail,item,unit
//var 18n=require("../../../../i18n/shop/ja.son")

var senEma=function(name,mail,sku,unit){
var selmer=db.skuMer(sku)
var sub="この度はご予約ありがとうございます。<br>"

    var tx1="以下の通り、ご予約を承りましたので、ご案内申し上げます。<br>"
    var tx2="このメールは、お客様のご予約に関する大切なメールです。<br>"
    var tx3="イベントが終了するまで保存してください。<br>"
    var ln1="-------------------------------------------------<br>"
    var ev1="[ ご予約内容 ]<br>"
    var ev2="イベント名："+selmer.name+"<br>"
    var ev3="会場名:"+selmer.des+"<br>"
    var ev4="日程:"+selmer.dat+"<br>"
    var ev5="枚数:"+unit+"<br>"
    var ev6="単価:"+(selmer.pri).toLocaleString()+"yen<br>"
    var ev7="合計:"+(selmer.pri*unit).toLocaleString()+"yen<br>"
    var ln1="--------------------------------------------------<br>"
    var not1="注意事項<br><br>"
    var not2="イベント当日会場にて、入場の受付をさせて頂きます。<br>"
    var not3="お支払いは、当日受け付けに現金のみとさせて頂きます。<br>"
    var not4="チケットの発送はございませんので、ご注意ください。<br>"
    var ln1="--------------------------------------------------<br>"
    var not5="※本メールは、お客様のご予約を受付けた時点で送信される自動配信メールです。<br>"
    var not6="ご返信頂いてもお答えできません。<br>"
    var ln1="--------------------------------------------------<br>"
    var add1="株式会社トムスミュージック<br>"
    var add2="〒164-0001 東京都中野区中野3-1-31<br>"
    var add3="info@tmsmusic.tokyo"

    var mes=name+"さま<br><br>"+sub+tx1+tx2+tx3+ln1
        +ev1+ev2+ev3+ev4+ev5+ev6+ev7+ln1
        +not1+not2+not3+not4+ln1
        +not5+not6+ln1
    +add1+add2+add3

    //return mes
    snde.trEma(mail,sub,mes);

}


module.exports=senEma

