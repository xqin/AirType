$(document).ready(function () {
	$('.userInput').focus();
	horizontalCenter($('.appLogo'));
	horizontalCenter($('.header'));
	horizontalCenter($('.mainWindow'));
	minBrowser();
});

$(window).resize(function () {
	horizontalCenter($('.appLogo'));
	horizontalCenter($('.header'));
	horizontalCenter($('.mainWindow'));
	minBrowser();
});

function minBrowser() {
	var windowHeight = $(window).height();

	if (windowHeight > 430) {
		headerHeight();
		verticalCenter($('.mainWindow'));
		$('footer').removeAttr('style');
	}

	if (windowHeight < 430) {
		$('footer').css('top', '400px');
	}
}

function headerHeight() {
	var headerHight = $(window).height() / 2 - $('.mainWindow').height() / 2 - 50;
	$('.header').css('height', headerHight);
}

function showErrorMessageNoBtn(msgTitle, msgDetail) {
	$('.errorNoBtn').css('top', 0);
	$('.errorMsg').html(msgTitle + '<br><span>' + msgDetail + '</span>');
}

function showErrorMessage1Col(msgTitle, msgDetail, btn) {
	$('.error1Col').css('top', 0);
	$('.errorMsg').html(msgTitle + '<br><span>' + msgDetail + '</span>');
	$('.btn1Col').html(btn);
}

function showErrorMessage2Col(msgTitle, msgDetail, btnLeft, btnRight) {
	$('.error2Col').css('top', 0);
	$('.errorMsg').html(msgTitle + '<br><span>' + msgDetail + '</span>');
	$('.btn2ColLeft').html(btnLeft);
	$('.btn2ColRight').html(btnRight);
}

function dismissErrorMessage() {
	$('.error').css('top', '130px');
}


function horizontalCenter(horDiv) {

	var windowWidth = $(horDiv).parent().width();

	var divWidth = $(horDiv).width();

	var divLeft = (windowWidth / 2) - (divWidth / 2);

	$(horDiv).css('left', divLeft);

	return divLeft;
}

function verticalCenter(verDiv) {

	var windowHeight = $(window).height();

	var divHeight = $(verDiv).height();

	var divTop = (windowHeight / 2) - (divHeight / 2);

	$(verDiv).css('top', divTop);

	return divTop;
}

function hVCenter(hVCenterDiv) {

	var divTop = verticalCenter(hVCenterDiv);
	var divLeft = horizontalCenter(hVCenterDiv);

	$(hVCenterDiv).css({
		'top': divTop,
		'left': divLeft,
	});
}
