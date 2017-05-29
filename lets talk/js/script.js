jQuery('document').ready(function() {

	var score = 0;

	var anim = jQuery('#animation').clone();
	jQuery('#animation').remove();

	var quest = jQuery('#question').clone();
	jQuery('#question').remove();

	var game = jQuery('#game').clone();
	jQuery('#game').remove();

	var image = jQuery('#win_image').clone();
	jQuery('#win_image').remove();

	jQuery('#go').on('click', function() {

		var name = jQuery('#name').val();

		jQuery('body').css('background', 'linear-gradient(45deg, #B066FE, #63E2FF)');

		jQuery('#wrapper').append(quest);
		jQuery('#wrapper').append(anim);

		jQuery('.change').html(', ' + name + '!');

	});

	jQuery('#wrapper').on('click', '#send', function() {

		var answer = jQuery('#feel').val();

		if (answer == "хорошо" || answer == "Хорошо") {
			jQuery('.play').html('Я рад, что у тебя всё хорошо, друг!');
		} else if (answer == "плохо" || answer == "Плохо") {
			jQuery('.play').html('Всё наладится, друг!');
		} else {
			jQuery('.play').html('Давай сыграем?!');
		}

		jQuery('#wrapper').append(game);
	});

	jQuery('#wrapper').on('click', '#tuk', function() {

		score += 1;
		jQuery('#score').html('Счёт: ' + score);

		if (score === 12) {
			jQuery('#win').html('Ты почти близок к победе!');
		} else if (score == 23) {
			jQuery('#win').html('Поздравляю! Это славная победа!');
			jQuery('#wrapper').append(image);
		} else if (score == 100) {
			jQuery('#win').html('Ты превзошёл мои ожидания! Теперь ты бог этой игры!');
		}
	});

});