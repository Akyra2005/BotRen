let handler = m => m

handler.before = function (m) {
  let user = global.DATABASE.data.users[m.sender]
        let role = (user.level <= 2) ? 'Newbie'
          : ((user.level >= 2) && (user.level <= 4)) ? 'Trainee Hare V'
          : ((user.level >= 4) && (user.level <= 6)) ? 'Trainee Hare IV'
          : ((user.level >= 6) && (user.level <= 8)) ? 'Trainee Hare III'
          : ((user.level >= 8) && (user.level <= 10)) ? 'Trainee Hare II'
          : ((user.level >= 10) && (user.level <= 20)) ? 'Trainee Hare I'
          : ((user.level >= 20) && (user.level <= 30)) ? 'Bronze Lynx V'
          : ((user.level >= 30) && (user.level <= 40)) ? 'Bronze Lynx IV'
          : ((user.level >= 40) && (user.level <= 50)) ? 'Bronze Lynx IiI'
          : ((user.level >= 50) && (user.level <= 60)) ? 'Bronze Lynx II'
          : ((user.level >= 60) && (user.level <= 70)) ? 'Bronze Lynx I' 
          : ((user.level >= 70) && (user.level <= 80)) ? 'Silver Hound V' 
          : ((user.level >= 80) && (user.level <= 90)) ? 'Silver Hound IV' 
          : ((user.level >= 90) && (user.level <= 100)) ? 'Silver Hound III' 
          : ((user.level >= 100) && (user.level <= 110)) ? 'Silver Hound II'
          : ((user.level >= 110) && (user.level <= 120)) ? 'Silver Hound I'
          : ((user.level >= 120) && (user.level <= 130)) ? 'Grand Silver Hound V'
          : ((user.level >= 130) && (user.level <= 140)) ? 'Grand Silver Hound IV'
          : ((user.level >= 140) && (user.level <= 150)) ? 'Grand Silver Hound III'
          : ((user.level >= 150) && (user.level <= 160)) ? 'Grand Silver Hound II' 
          : ((user.level >= 160) && (user.level <= 170)) ? 'Grand Silver Hound I' 
          : ((user.level >= 170) && (user.level <= 180)) ? 'Gold Stallion V' 
          : ((user.level >= 180) && (user.level <= 190)) ? 'Gold Stallion IV' 
          : ((user.level >= 190) && (user.level <= 200)) ? 'Gold Stallion III' 
          : ((user.level >= 200) && (user.level <= 210)) ? 'Gold Stallion II' 
          : ((user.level >= 210) && (user.level <= 220)) ? 'Gold Stallion I'
          : ((user.level >= 220) && (user.level <= 230)) ? 'Platinum Bull V'
          : ((user.level >= 230) && (user.level <= 240)) ? 'Platinum Bull IV'
          : ((user.level >= 240) && (user.level <= 250)) ? 'Platinum Bull III'
          : ((user.level >= 250) && (user.level <= 260)) ? 'Platinum Bull II'
          : ((user.level >= 260) && (user.level <= 270)) ? 'Platinum Bull I'
          : ((user.level >= 270) && (user.level <= 280)) ? 'Diamond Deer V'  
          : ((user.level >= 280) && (user.level <= 290)) ? 'Diamond Deer IV' 
          : ((user.level >= 290) && (user.level <= 300)) ? 'Diamond Deer III' 
          : ((user.level >= 300) && (user.level <= 310)) ? 'Diamond Deer II'
          : ((user.level >= 310) && (user.level <= 320)) ? 'Diamond Deer I'
          : ((user.level >= 320) && (user.level <= 330)) ? 'Diamond Deer Glory V'
          : ((user.level >= 330) && (user.level <= 340)) ? 'Diamond Deer Glory IV'
          : ((user.level >= 340) && (user.level <= 350)) ? 'Diamond Deer Glory III'
          : ((user.level >= 350) && (user.level <= 360)) ? 'Diamond Deer Glory II'
          : ((user.level >= 360) && (user.level <= 370)) ? 'Diamond Deer Glory I'
          : ((user.level >= 370) && (user.level <= 380)) ? 'Grand Panther V'
          : ((user.level >= 380) && (user.level <= 390)) ? 'Grand Panther IV'
          : ((user.level >= 390) && (user.level <= 400)) ? 'Grand Panther III'
          : ((user.level >= 400) && (user.level <= 410)) ? 'Grand Panther II'
          : ((user.level >= 410) && (user.level <= 420)) ? 'Grand Panther I'
          : ((user.level >= 420) && (user.level <= 430)) ? 'Legendary Bear V'
          : ((user.level >= 430) && (user.level <= 440)) ? 'Legendary Bear IV'
          : ((user.level >= 440) && (user.level <= 450)) ? 'Legendary Bear III'
          : ((user.level >= 450) && (user.level <= 460)) ? 'Legendary Bear II'
          : ((user.level >= 460) && (user.level <= 470)) ? 'Legendary Bear I'
          : ((user.level >= 470) && (user.level <= 480)) ? 'Supreme Tiger V'
          : ((user.level >= 480) && (user.level <= 490)) ? 'Supreme Tiger IV' 
          : ((user.level >= 490) && (user.level <= 500)) ? 'Supreme Tiger IV'
          : ((user.level >= 500) && (user.level <= 600)) ? 'Supreme Tiger III'
          : ((user.level >= 600) && (user.level <= 700)) ? 'Supreme Tiger III'
          : ((user.level >= 700) && (user.level <= 800)) ? 'Supreme Tiger II'
          : ((user.level >= 800) && (user.level <= 900)) ? 'Supreme Tiger II'
          : ((user.level >= 900) && (user.level <= 1000)) ? 'Supreme Tiger I'
          : 'Ace Lion Top 10 ★'
  user.role = role
  return true
}

module.exports = handler
