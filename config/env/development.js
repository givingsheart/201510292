module.exports = {
	//개발자 옵션
	sessionSecret: 'givingsheart',
	//몽고 디비 연결 주소
	// mongodb://username:password@hostname:port/database
	db: 'mongodb://localhost/mean-book',
	facebook: {
		clientID : '934524183286742',
		clientSecret : '8f14c6f09a1cb314779a9ae26a7b6715',
		callbackURL : 'http://givingsheart.com:3000/oauth/facebook/callback'
	},
	twitter: {
		clientID : 'TdYuIPLANVe5MChS58o30Ozd9',
		clientSecret : 'AZmBDbnkJeQN9nqkEvEcvMHq2454y0lpI7wMbnYazbhFEJGUZy',
		callbackURL : 'http://givingsheart.com:3000/oauth/twitter/callback'
	},
	google: {
		clientID : '601297471147-mlf1fid0bkao9iv7sbi26i92c4ou2vpk.apps.googleusercontent.com',
		clientSecret : 'Y_od3xNa6wQiE291cB4DfcwO',
		callbackURL : 'http://givingsheart.com:3000/oauth/google/callback'
	},
	naver: {
		clientID : 'ylFUfaFYeZXiYlKYKWWn',
		clientSecret : 'Xky6E7t2gp',
		callbackURL : 'http://givingsheart.com:3000/oauth/naver/callback'
	},
	daum: {
		clientID : '2878490111971122002',
		clientSecret : '5738aede9fd05a70a2f00bdf61888103',
		callbackURL : 'http://givingsheart.com:3000/oauth/daum/callback'
	},
};