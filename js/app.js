$(document).ready(function() {
    var tastePref = {
        'spicy': 'Are ye a fan of spicy drinks?',
        'strong': 'Do ye like yer drinks strong?',
        'salty': 'Do ye like it with a salty tang?',
        'bitter': 'Are ye a lubber who likes it bitter?',
        'sweet': 'Would ye like a bit of sweetness with yer poison?',
        'fruity': 'Are ye one for a fruity finish?'
    };

    var Ingredient = function(type, value) {
        this.type = type;
        this.value = value;
    };


    var Pantry = function(spicy, strong, salty, bitter, sweet, fruity) {
        this.spicy = spicy;
        this.strong = strong;
        this.salty = salty;
        this.bitter = bitter;
        this.sweet = sweet;
        this.fruity = fruity;
    };


    var piratePantry = new Pantry([new Ingredient('spicy', 'ghost pepper')], [new Ingredient('strong', 'glug of rum'),
        new Ingredient('strong', 'slug of whiskey'),
        new Ingredient('strong', 'splash of gin')
    ], [new Ingredient('salty', 'olive on a stick'),
        new Ingredient('salty', 'salt-dusted rim'),
        new Ingredient('salty', 'rasher of bacon')
    ], [new Ingredient('bitter', 'shake of bitters'),
        new Ingredient('bitter', 'splash of tonic'),
        new Ingredient('bitter', 'twist of lemon peel')
    ], [new Ingredient('sweet', 'sugar cube'),
        new Ingredient('sweet', 'spoonful of honey'),
        new Ingredient('sweet', 'splash of cola')
    ], [new Ingredient('fruity', 'slice of orange'),
        new Ingredient('fruity', 'dash of cassis'),
        new Ingredient('fruity', 'cherry on top')
    ]);

    var preferences = {};

    for (var question in tastePref) {
        $('#drinkQuestions').append(tastePref[question] + '<input type="checkbox" value="' + question + '"> <br>');
    }

    $('#drinks').on('submit', function(e) {
        e.preventDefault();
        var array = $('input:checked');
        if (array.length == 0) {
            alert("Choose a drink option");
        } else {
        	for (var i = 0; i < array.length; i++) {
        		preferences[$(array[i]).val()] = true;
        	}
        	for (var value in preferences) {
        		console.log(piratePantry[value][0].value);
        		$('#drinkAnswers').append(piratePantry[value][0].value + '<br>');
        	}
        	// [0] in line 61 to be replaced with Math.floor random number
        	// array?? If statement within else? 
        }
    });
});