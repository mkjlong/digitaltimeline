var year = 2024
const elements = $(`.y${year}`)


$(".courselist > ul > li").on("mouseover",function(event){
    document.querySelector(`.courselist[year="${year}"] > h3`).innerHTML = this.getAttribute("code")
})

$(".courselist > ul > li").on("mouseout",function(event){
    document.querySelector(`body > div.courselist[year="${year}"] > h3`).innerHTML = "Courses"
})


document.onkeydown=function(event){
    if(event.key == "ArrowLeft"){
        $(".hide").removeClass("hidden")
        if(year == 2024)return;
        elements.toggleClass(`y${year}`)
        year -= 1
        elements.toggleClass(`y${year}`)
    }else if(event.key == "ArrowRight"){
        $(".hide").removeClass("hidden")

        if(year==2026){
            party.confetti(document.querySelector(`.event[year='2026']`));
        }

        if(year == 2027)return;
        elements.toggleClass(`y${year}`)
        year += 1
        elements.toggleClass(`y${year}`)
    }
}




$(".event").click(function(event){

    if($(this).attr("year") == "2027" && year == 2026)party.confetti(document.querySelector(`.event[year='2026']`));

    if($(this).attr("year") == year.toString())return;
    elements.toggleClass(`y${year}`)
    year = $(this).attr("year")
    elements.toggleClass(`y${year}`)
})

$("nav > button:nth-child(1)").click(function(){
    $(".timeline").show();
    $(document.body).addClass("timeline")
    $("h1").html("My Career Pathway Timeline")
    $(`.program`).addClass("hidden")
})
$("nav > button:nth-child(2),#program").click(function(){
    $(".timeline:not(body)").hide();
    $(document.body).removeClass("timeline")
    $(`.hide:not([year=${year}])`).addClass("hidden")
    $(`.program`).removeClass("hidden")
    $("h1").html("My Program")
})