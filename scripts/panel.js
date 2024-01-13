function ShowNav(content){
    $("#content-"+!content).hide();    
    $("#"+content).toggle();  
}


$(document).ready(function () {

    $("#potreby, #dezerty, #napoje, #rychle, .milaInfo, .cornyInfo, .snickersInfo, .twixInfo, .bountyInfo, .mentosInfo, .bebeInfo, .tictacInfo ").hide();
  
    $("#navSnacks").click(function () {
      $("#snacks").show();
      $("#dezerty, #napoje, #rychle, #potreby").hide();
    });
    $("#navDeserts").click(function () {
      $("#dezerty").show();
      $("#snacks, #napoje, #rychle, #potreby").hide();
    });
    $("#navDrinks").click(function () {
      $("#napoje").show();
      $("#snacks, #dezerty, #rychle, #potreby").hide();
    });
    $("#navFastFood").click(function () {
      $("#rychle").show();
      $("#dezerty, #napoje, #snacks, #potreby").hide();
    });
    $("#navPotreby").click(function () {
      $("#potreby").show();
      $("#dezerty, #napoje, #snacks, #rychle").hide();
    });
  
    /* SHOVAT INFO PO KLIKNUTI NAV */
  
    $("#navDeserts, #navSnacks, #navDrinks, #navFastFood, #navPotreby").click(function () {
      $(".milaInfo, .cornyInfo, .snickersInfo, .twixInfo, .bountyInfo, .mentosInfo, .bebeInfo, .tictacInfo, .spickaInfo, .tiramisuInfo, .roladaInfo, .venecekInfo, .laskonkaInfo, .kokoskaInfo, .vetrnikInfo, .floridaInfo, .colaInfo, .kofolaInfo, .caprisunInfo, .brambachInfo, .mattoniInfo, .cajInfo, .aquilaInfo, .riverInfo, .parekInfo, .hoveziInfo, .kureciInfo, .hamburgerInfo, .bagetaInfo, .sandwichInfo, .maggiInfo, .toastInfo, .propiskaInfo, .gumaInfo, .pravitkoInfo, .kalkulackaInfo, .nuzkyInfo").hide();
    });
  
    /* SNACKS */
  
    $(".milaItem").click(function () {
      $(".snacksInfo").hide();
      $(".milaInfo").show();
    });
    $(".cornyItem").click(function () {
      $(".snacksInfo").hide();
      $(".cornyInfo").show();
    });
    $(".snickersItem").click(function () {
      $(".snacksInfo").hide();
      $(".snickersInfo").show();
    });
    $(".twixItem").click(function () {
      $(".snacksInfo").hide();
      $(".twixInfo").show();
    });
    $(".bountyItem").click(function () {
      $(".snacksInfo").hide();
      $(".bountyInfo").show();
    });
    $(".mentosItem").click(function () {
      $(".snacksInfo").hide();
      $(".mentosInfo").show();
    });
    $(".bebeItem").click(function () {
      $(".snacksInfo").hide();
      $(".bebeInfo").show();
    });
    $(".tictacItem").click(function () {
      $(".snacksInfo").hide();
      $(".tictacInfo").show();
    });
  
    /* DEZERTY  */
  
    $(".spickaItem").click(function () {
      $(".dezertsInfo").hide();
      $(".spickaInfo").show();
    });
    $(".tiramisuItem").click(function () {
      $(".dezertsInfo").hide();
      $(".tiramisuInfo").show();
    });
    $(".roladaItem").click(function () {
      $(".dezertsInfo").hide();
      $(".roladaInfo").show();
    });
    $(".venecekItem").click(function () {
      $(".dezertsInfo").hide();
      $(".venecekInfo").show();
    });
    $(".vetrnikItem").click(function () {
      $(".dezertsInfo").hide();
      $(".vetrnikInfo").show();
    });
    $(".laskonkaItem").click(function () {
      $(".dezertsInfo").hide();
      $(".laskonkaInfo").show();
    });
    $(".kokoskaItem").click(function () {
      $(".dezertsInfo").hide();
      $(".kokoskaInfo").show();
    });
    $(".floridaItem").click(function () {
      $(".dezertsInfo").hide();
      $(".fporidaInfo").show();
    });
  
    /* NAPOJE INFOOOO */
  
    $(".colaItem").click(function () {
      $(".napojeInfo").hide();
      $(".colaInfo").show();
    });
    $(".kofolaItem").click(function () {
      $(".napojeInfo").hide();
      $(".kofolaInfo").show();
    });
    $(".caprisunItem").click(function () {
      $(".napojeInfo").hide();
      $(".caprisunInfo").show();
    });
    $(".brambachItem").click(function () {
      $(".napojeInfo").hide();
      $(".brambachInfo").show();
    });
    $(".mattoniItem").click(function () {
      $(".napojeInfo").hide();
      $(".mattoniInfo").show();
    });
    $(".cajItem").click(function () {
      $(".napojeInfo").hide();
      $(".cajInfo").show();
    });
    $(".aquilaItem").click(function () {
      $(".napojeInfo").hide();
      $(".aquilaInfo").show();
    });
    $(".riverItem").click(function () {
      $(".napojeInfo").hide();
      $(".riverInfo").show();
    });
  
    /* RYCHLE INFOOOOO */
  
    $(".parekItem").click(function () {
      $(".rychleInfo").hide();
      $(".parekInfo").show();
    });
    $(".hoveziItem").click(function () {
      $(".rychleInfo").hide();
      $(".hoveziInfo").show();
    });
    $(".kureciItem").click(function () {
      $(".rychleInfo").hide();
      $(".kureciInfo").show();
    });
    $(".hamburgerItem").click(function () {
      $(".rychleInfo").hide();
      $(".hamburgerInfo").show();
    });
    $(".bagetaItem").click(function () {
      $(".rychleInfo").hide();
      $(".bagetaInfo").show();
    });
    $(".sandwichItem").click(function () {
      $(".rychleInfo").hide();
      $(".sandwichInfo").show();
    });
    $(".maggiItem").click(function () {
      $(".rychleInfo").hide();
      $(".maggiInfo").show();
    });
    $(".toastItem").click(function () {
      $(".rychleInfo").hide();
      $(".toastInfo").show();
    });
  
  
  /* POTREBY */
  
  $(".propiskaItem").click(function () {
    $(".potrebyInfo").hide();
    $(".propiskaInfo").show();
  });
  $(".gumaItem").click(function () {
    $(".potrebyInfo").hide();
    $(".gumaInfo").show();
  });
  $(".pravitkoItem").click(function () {
    $(".potrebyInfo").hide();
    $(".pravitkoInfo").show();
  });
  $(".kalkulackaItem").click(function () {
    $(".potrebyInfo").hide();
    $(".kalkulackaInfo").show();
  });
  $(".nuzkyItem").click(function () {
    $(".potrebyInfo").hide();
    $(".nuzkyInfo").show();
  });
                                                       
  });
