'use strict';

var userDialog = document.querySelector('.setup');
userDialog.classList.remove('hidden');

document.querySelector('.setup-similar').classList.remove('hidden');

var WIZARD_NAMES = ['Иван ', 'Хуан Себастьян ', 'Мария ', 'Кристоф ', 'Виктор ', 'Юлия ', 'Люпита ' , 'Вашингтон '];

var WIZARD_SURNAMES = ['да Марья', 'Верон', 'Мирабелла', 'Вальц', 'Онопко', 'Топольницкая', 'Нионго' , 'Ирвинг'];

var WIZARD_COATCOLORS = ['rgb(101, 137, 164)', 'rgb(241, 43, 107)', 'rgb(146, 100, 161)', 'rgb(56, 159, 117)', 'rgb(215, 210, 55)', 'rgb(0, 0, 0)'];

var WIZARD_EYESCOLORS = ['black', 'red', 'blue', 'yellow', 'green'];
 

var similarListElement = document.querySelector('.setup-similar-list');

var similarWizardTemplate = document.querySelector('#similar-wizard-template').content.querySelector('.setup-similar-item');
 
var wizards = [];

for (var i = 0; i <= 3; i++) {
  wizards.push({name: WIZARD_NAMES[Math.floor(Math.random() * WIZARD_NAMES.length)] +
                WIZARD_SURNAMES[Math.floor(Math.random() * WIZARD_SURNAMES.length)],
                coatColor: WIZARD_COATCOLORS[Math.floor(Math.random() * WIZARD_COATCOLORS.length)],
               eyesColor: WIZARD_EYESCOLORS[Math.floor(Math.random() * WIZARD_EYESCOLORS.length)]});
}

var createWizard = function(wizard) {
  var wizardElement = similarWizardTemplate.cloneNode(true);

  wizardElement.querySelector('.setup-similar-label').textContent = wizard.name;
  
  wizardElement.querySelector('.wizard-coat').style.fill = wizard.coatColor;

  wizardElement.querySelector('.wizard-eyes').style.fill = wizard.coatColor;

  return wizardElement;
}

var fragment = document.createDocumentFragment();
for (var i = 0; i < wizards.length; i++) {
  fragment.appendChild(createWizard(wizards[i]));
}

similarListElement.appendChild(fragment);

userDialog.querySelector('.setup-similar').classList.remove('hidden');
