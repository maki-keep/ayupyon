tenor_list = [
               `https://media1.tenor.com/m/b1gCxQ-zXqoAAAAC/ayumu-uehara-love-live.gif`,
               `https://media1.tenor.com/m/34F1fBH4eacAAAAC/ayumu-ayu-bun.gif`,
               `https://media1.tenor.com/m/w8xu9PIXA1oAAAAd/love-live-yu.gif`,
               `https://media1.tenor.com/m/g3jec0mkNm8AAAAC/ayumu-uehara-love-live.gif`,
               `https://media1.tenor.com/m/pFhERtQdmaoAAAAC/love-live-love-live-nijigasaki-school-idol-club.gif`,
               `https://media1.tenor.com/m/iCL1-VtJrV8AAAAC/ayumu-uehara.gif`,
               `https://media1.tenor.com/m/FXhu2VnjANMAAAAC/love-live-nijigasaki.gif`,
               `https://media1.tenor.com/m/WQUbJFBXqrgAAAAC/love-live-love-live-superstar.gif`,
               `https://media1.tenor.com/m/lpw4aP4SDtAAAAAd/snakes-animal.gif`,
               `https://media1.tenor.com/m/TGSLeQGN2G8AAAAC/ai-miyashita-keke-tang.gif`
             ];
ayumu_index = 0;
pyon = () => {
  ayumu = document.getElementById(`uehara-ayumu`);
  ayumu.src = tenor_list[ayumu_index];
  ayumu.style.display = `block`;
  if(ayumu_index == 7){
    button_pyon.innerHTML = `Kanon?`;
  }else if(ayumu_index == 8){
    button_pyon.innerHTML = `Python?`;
  }else if(ayumu_index == 9){
    button_pyon.innerHTML = `Pyon Python? HAHAA!`;
  }else{
    button_pyon.innerHTML = `PYON!`;
  }
  // go to next image
  ayumu_index++;
  // cycle back to first image when reaching last image
  if(ayumu_index == tenor_list.length){
    ayumu_index = 0;
  }
}
button_pyon = document.getElementById(`pyon`);
button_pyon.addEventListener(`click`, pyon);
