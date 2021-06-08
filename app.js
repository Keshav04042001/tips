var tips = [
  {
      para: 'YOUR DIET IS A BANK ACCOUNT. GOOD FOOD CHOICES ARE GOOD INVESTMENTS.',
  }, 
  {
      para: 'PROPER NUTRITION IS THE DIFFERENCE BETWEEN FEELING EXHAUSTED AND GETTING THE MOST OUT OF A WORKOUT.',
  },
  {
      para: 'EXERCISE IS KING. NUTRITION IS QUEEN. PUT THEM TOGETHER AND YOU’VE GOT A KINGDOM.',
  },
  {
      para: 'TO ENSURE GOOD HEALTH: EAT LIGHTLY, BREATHE DEEPLY, LIVE MODERATELY, CULTIVATE CHEERFULNESS AND MAINTAIN AN INTEREST IN LIFE.',
  },
  {
      para: 'TAKE CARE OF YOUR BODY. IT’S THE ONLY PLACE YOU HAVE TO LIVE.',
  },
  {
      para: 'Skincare is needed now to make your skin and face glowing and brightening, in addition to overcome problems skinface',
  },
  {
      para: 'Skincare is like a workout for your skin.',
  },
  {
      para: 'Take care of your skin and your confidence will take care of itself.',
  },
  {
      para: 'Use the correct cleanser for your skin type.',
  },
  {
      para: ' Vitamins should go on your skin, too.',
  },
  {
      para: 'Clean your makeup brushes regularly.',
  },
  {
      para: 'Wear sunscreen 365 days a year — rain or shine, indoors or out.',
  },
  {
      para: "Sun protection doesn't stop at sunscreen." ,
  },
  {
      para: 'Kick dryness at night',
  },
  {
      para: 'Limit bath time. Hot water and long showers or baths remove oils from your skin. Limit your bath or shower time, and use warm ',
  },
  {
      para: 'Avoid strong soaps. Strong soaps and detergents can strip oil from your skin. Instead, choose mild cleansers',
  },
  {
      para: 'Moisturize dry skin. If your skin is dry, use a moisturizer that fits your skin type.',
  },
  {
      para: 'A healthy diet can help you look and feel your best. Eat plenty of fruits, vegetables, whole grains and lean proteins. ',
  },
 
];

const card = document.querySelector(".card__inner");
card.addEventListener("click", function (e) {
  card.classList.toggle('is-flipped');
  var qt = document.querySelector('strong');
  var randomNum = randomNo();
  qt.innerHTML = tips[randomNum].para;
});
card.addEventListener("click", changeQt);
function changeQt(){
  var qt = document.querySelector('strong');
  var randomNum = randomNo();
  qt.innerHTML = tips[randomNum].para;
}
function randomNo() {
  return Math.floor(Math.random() * 17) + 1;
}
