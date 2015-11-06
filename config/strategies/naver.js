var passport = require('passport'),
	url = require('url'),
	NaverStrategy = require('passport-naver').Strategy,
	config = require('../config'),
	users = require('../../app/controllers/users.server.controller');

/*
	패스포트 모듈, 페이스북 전략 객체, 환경구성 파일, USer몽구스 모델, Users컨트롤러를 require로 올리는 작업부터 시작한다.
	그후 passport.use() 메소드를 사용해 전략을 등록하고 FacebookStrategy객체의 인스턴스를 생성한다.
	전략 생성자는 페이스북 애플리케이션 정보와 사용자를 인증하려 시도할깨 나중에 호출될
	콜백 함수를 인수로 받는다. = 인수를 다섯개 받으며 각각은 http 요청객체, 향후 요청을 인증하는 토큰 객체,
	새로운 접근 토큰을 얻기위한 토큰, 사용자 프로필 객체, 인증과정이 끝났을때 호출되는 done콜백

	콜백함수 내부에서 페이스북 프로필 정보와 현재 사용자를 인증하기 위해 직전에
	생성한 컨트롤러의 saveOauthUserProfile() 메소드를 사용해 새로운 사용자 객체를 생성할 것이다.
*/

module.exports = function() {
	passport.use(new NaverStrategy({
		clientID : config.naver.clientID,
		clientSecret : config.naver.clientSecret,
		callbackURL : config.naver.callbackURL, //인증 성공후 전환할 페이지 설정
		passReqToCallback : true //리퀘스트를 리다이렉트(전환)한다는 의미
	}, function(req, accessToken, refreshToken, profile, done) {
		var providerData = profile._json;
		providerData.accessToken = accessToken;
		providerData.refreshToken = refreshToken;

		var providerUserProfile = {
			firstName : profile.name.givenName,
			lastName : profile.name.familyName,
			fullName : profile.displayName,
			email : profile.emails[0].value,
			username : profile.username,
			provider : 'naver',
			providerId : profile.id,
			providerData: providerData
		};

		users.saveOAuthuserProfile(req, providerUserProfile, done);
	}));
};