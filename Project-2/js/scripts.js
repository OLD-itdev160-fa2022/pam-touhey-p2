//utility functions - by returning it then you don't have do it over and over
function get(element) {
    return document.getElementById(element);
}
//Return today's date, formatted
    var getTodaysDate = function() {
        var today = new Date();
        return today.toDateString();
    };

    //return DOM element by id
    var getEl = function(id) {
    return document.getElementById(id);
    };

    //write date
    var dateEl = getEl('date');
    dateEl.textContent = getTodaysDate();

    //package data array (Add in Data)
    var data = [
        {
            name: 'Regeneration 13',
            description: 'Latest Rengeneration for the Doctor',
            season: 'Series 13 - 2021',
            companions: "Graham O'Brien, Yasmin Khan, Ryan Sinclair, & Dan Lewis", 
            title: 'Flux',
            selector: 'p1'
        }
    ];

    function Package(data) {
        this.name = data.name;
        this.description = data.description;
        this.season = data.season;
        this.companions = data.companions;
        this.title = data.title;
        this.selector = data.selector;
    }
    
        //appropriate DOM elements utilizing the package selector property.
        var writePackageInfo = function (package) {
            //get reference tp Dom elements
            var selector =package.selector,
                nameEl = getEl(selector + '-name'),
                descEl = getEl(selector + '-description'),
                seasEl = getEl(selector + '-season'),
                compEl = getEl(selector + '-companions'),
                titlEl = getEl(selector + '-title');
    
            //write package to the DOM Elements
            nameEl.textContent = package.name;
            descEl.textContent = package.description;
            seasEl.textContent = package.season;
            compEl.textContent = package.companions;
            titlEl.textContent = package.title;
        };

    //Write package data one-by-one
    var information = new Package(data[0]);
    writePackageInfo(information);

//utility functions - by returning it then you don't have do it over and over
function get(element) {
    return document.getElementById(element);
}

    //application functions
function openModal(){
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    modal.classList.add('visible');
    backdrop.classList.add('visible');
}

function closeModal() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var modal = get('modal-dialog');
    var backdrop = get('modal-backdrop');

    //Clear Text
    title.value = '';
    text.value = '';

    //Hide Modal
    modal.classList.remove('visible');
    backdrop.classList.remove('visible');
}

function saveContent() {
    var title = get('edit-title-text');
    var text = get('edit-content-text');
    var content = get('display-content');

    //Create content elements (could use old text = value method)
    var newTitle = document.createElement('h2');
    var newTitleText = document.createTextNode(title.value);
    var newContent = document.createElement('p');
    var newContentText = document.createTextNode(text.value);

    //Add elements
    newTitle.appendChild(newTitleText);
    newContent.appendChild(newContentText);
    content.appendChild(newTitle);
    content.appendChild(newContent);

    closeModal();
}

//wire up event handler
window.addEventListener('load', function() {
    var newButton = get('new-button');
    var cancelButton = get('cancel-button');
    var saveButton = get('save-button');

    newButton.addEventListener('click', openModal);
    cancelButton.addEventListener('click', closeModal);
    saveButton.addEventListener('click', saveContent);
});

//If statement for fav doctor
var doctor = 9
var msg;

if (doctor <= 13) {
    msg = 'This is the best Doctor!'
}

var el = get('regeneration');
el.textContent = msg;

//loop showing different Doctors for the series
var favorites = [1, 4, 6];
var arrayLength = favorites.length;
var doctorNumber = 0;
var msg = '';
var i;

for (i = 0, i < arrayLength; i++;) {
    doctorNumber = (i + 1);
    msg += 'Favorite Doctor ' + doctorNumber + ': ';
    msg += favorites[i] + '<br />';
}

document.getElementById('loop').innerHTML = msg;