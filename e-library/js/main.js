var slider = document.getElementById("slider");
var gallary = [
  "images/undraw_road_to_knowledge_m8s0.png",
  "images/undraw_Bibliophile_re_xarc.png",
  "images/undraw_Studying_re_deca.png",
  "images/undraw_online_reading_np7n.png",
  "images/undraw_writer_q06d.png",
  "images/undraw_Book_lover_re_rwjy.png",
  "images/undraw_education_f8ru.png",
];
var counter = 0;

function swip() {
  slider.style = `background:url(${gallary[counter]}) no-repeat center/contain`;
  counter++;
  if (counter == gallary.length) counter = 0;
}


setInterval(swip, 2500);
