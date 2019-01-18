var link = "http://cdn.p30download.com/?b=p30dl-tutorial&f=Udemy.The.Complete.Python.and.JavaScript.Course.Build.Projects_p30download.com.part1.rar";
var linkSayisi = 8;

function rasgeleSunucu () : string{
    var servers = ["//cld1.","//cld3.","//cld5.","//cld7.","//cld9."];
    var sunucuAdet = servers.length;
    var rasgeleSayi = Math.floor(Math.random()*5);
    var rasgeleSunucu = servers[rasgeleSayi];
    return rasgeleSunucu;
}

function linkTemizle (link:string) : string {
    var firstPart = link.replace("/?b=","/");
    var secondPart = firstPart.replace("&f=","/");
    return secondPart;
}

function linkUret(link:string, linkSayisi:number) : string[] {
    var parcaLink = link.split("part",1)+"part";
    var linkler=[];

    for (let index = 1; index < linkSayisi+1; index++) {
        var finalLink = parcaLink.replace("//",rasgeleSunucu());
        linkler.push(finalLink+index+".rar")
    }
    
    return linkler;
}

var indir = linkTemizle(link);
var final = linkUret(indir,linkSayisi);
console.log(final)
console.log("final");

