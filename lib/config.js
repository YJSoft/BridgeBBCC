configData = {
	numChatMax:				20,
							// html에 한꺼번에 표시될 수 있는 메세지의 최대 갯수

	personalColor: 			true,
							// 트위치 닉네임 색깔 사용 여부 (일부 색깔이 고정된 테마에서는 사용되지 않음)

	badgeVisible: 			true,
							// 구독, 비트 등 뱃지 표시 여부 (일부 테마에서는 강제로 숨겨질 수 있음)

	themeURI:				"",
							// 불러올 테마가 저장된 주소. theme 폴더가 client.html과 같은 경로에 있다면 공란으로 둘 수 있다.

	theme:					"default",
							// 사용할 테마. (themeURI)/theme/(theme) 폴더의 파일을 사용

	themeName:				"",
							// 테마의 이름-theme로부터 import? (확인필요)

	msgExistDuration:		0,
							// 메세지가 애니메이션을 빼면 얼마나 오래 표시될 지

	msgAniDuration:			0,
							// 메세지 표시 애니메이션의 소요시간-theme로부터 import? (확인필요)

	debugLevel:				2,
							// 0:미표시, 1:브라우저 콘솔, 2:채팅 메세지

	useDisplayName:			true,
							// 한글 닉네임 사용여부 (미사용시 아이디로만 표시)

	loadCheerImgs:			true,
							// 비트 후원채팅을 이미지로 표시할지

	loadTwitchCons:			true,
							// 트위치 이모티콘과 구독콘을 불러올지

	consRealSubsOnly:		true,
							// @DEPRECATED 실제 구독자만 구독콘을 쓸 수 있게 함

	loadDcCons:				true,
							// 디시콘을 불러올지

	dcConsURI:				"",
							// 불러올 디시콘 리스트 파일이 저장된 주소. lib/dccon_list.js 파일이 client.html과 같은 경로에 있다면 공란으로 둘 수 있다.

    subMonthsMsg:			"☆ {!0:{months} 개월 }구독{0: 시작}! ☆",
							// 구독 메세지를 받았을 때 추가로 출력할 텍스트

    cheersMsg:				"☆ {!0:{bits} 비트 }후원 ! ☆",
							// 비트 후원을 받았을 때 추가로 출력할 텍스트

	raidMsg:				"☆ {!0:{raid} 명 }레이드 ! ☆",
							// 레이드를 받았을 때 추가로 출력할 텍스트
							
	loadClipPreview:		true,
							// 클립 미리보기를 이미지로 표시할지

	clipReplaceMsg:			"[ 클립 ]",
							// 클립 미리보기를 사용하지 않을 때의 대체 텍스트

    channel:				"#lastorder_dc",
							//접속할 채널로 다중 채널 접속시 ,로 구분 (ex. "#id1,#id2,#id3")
							
	retryInterval:			2,
							// 접속에 끊겼을 때 재접속 시도 간격(초)

	allMessageHandle: 		false,
							// IRC로부터 받은 처리되지 않은 메세지를 html에 표시
							// true로 설정시 불필요한 메세지가 표시될수 있다.

    muteUser:				["Nightbot"],
							//html에 표시하지 않을 유저 nickname (display-name과 트위치 id를 모두 사용 가능)
							
	deleteBanMsg:			true,
							// 차단된 유저의 메세지를 지울지 여부

    commands:				[{
								exe: "clear",
								msg: "!!clear"
							},
							{
								exe: "theme",
								msg: "!!theme"
							},
							{
								exe: "snippet",
								msg: "!!snippet"
							}],
							// 활성화시킬 명령어
							// 대부분의 경우 건드릴 필요 없음

	replaceMsgs:			[{
								orig:/^![a-zA-Z]+/,
								to:"{no_display}"
							}],
							// 봇 메세지 등을 대체
							// [{orig:"이전1", to:"이후1"},{orig:"이전1", to:"이후1"}] 처럼 입력

							// ! 아래 3개 값은 특별한 일이 없는한 변경하지 않아도 됨 !
	webSocket:				"wss://irc-ws.chat.twitch.tv:443",
							// 트위치 채팅 웹소켓 주소

	nick:					"justinfan16831",
							// 트위치 IRC에서 이용할 nickname
							// justinfan + 숫자 규격이면 익명 로그인 (채팅 전송 불가)
							// 익명을 사용하지 않을 이유가 없기에 변경 비권장

	pass:					"foobar",
							// 트위치 IRC에서 이용할 password
							// 익명 로그인시 아무거나 입력하면 됨
							// 익명을 사용하지 않을 이유가 없기에 변경 비권장
};