//CBC Direct Station URLs: http://www.cbc.ca/radio/includes/streams.html
//Some Canadien station URLs: http://radiovibrations.com/rsd/
//Some Canadien station URLs: http://www.surfmusic.de/country/canada.html
//Streema: http://streema.com/
//streamon stuff:
// http://ais.streamon.fm:8000/ais/CKDV-48k.aac --- CKDV-FM
// http://ais.streamon.fm:8000/ais/JRfm-48k.aac --- JRFM
// http://cfis.streamon.fm:8000/cfis-48k.aac --- CFIS-FM
// http://ais.streamon.fm:8000/ais/CKKN-48k.aac -- CKKN-FM
// http://cjsi.streamon.fm:8000/CJSI-48k.aac -- CJSI-FM (note to self: Add to Favourites.json)
// http://cfex.streamon.fm:8000/CFEX-48k.aac -- CJFEX-FM
// http://ckua.streamon.fm:8000/CKUA-48k.aac -- CKUA-FM
// http://ais.streamon.fm:8000/ais/CKWD-48k.aac -- CKWD
// http://ais.streamon.fm:8000/ais/CKCE-48k.aac -- CKCE-FM
// http://cjca.streamon.fm:8000/CJCA-48k.aac -- CJCA
// http://cjsr.streamon.fm:8000/CJSR-48k.aac -- CJSR-FM
// http://ckea.streamon.fm:8000/CKEA-48k.aac -- CKEA-FM
// http://cklb.streamon.fm:8000/CKLB-48k.aac -- CKLB-FM (Note to self: Add to Favourites.json)

//StreamTheWorld API Example: http://playerservices.streamtheworld.com/api/livestream-redirect/CKSTAMAAC.aac

//NewCap Streams Example: http://newcap.leanstream.co/CKULFM-MP3 ()

var stations_custom = {
    "vancouver": [
        {
            name: "CBC Radio One - CBC Vancouver",
            logo: "images/vancouver/CBC_RadioOne.jpg",
            url: "http://cbc_r1_vcr.akacast.akamaistream.net/7/723/451661/v1/rc.akacast.akamaistream.net/cbc_r1_vcr"
        },
        {
            name: "CBC Radio 2 Vancouver",
            logo: "images/vancouver/CBC_Radio_2.png",
            url: "http://cbc_r2_vcr.akacast.akamaistream.net/7/773/451661/v1/rc.akacast.akamaistream.net/cbc_r2_vcr"
        },
        {
            name: "AM 730",
            logo: "images/vancouver/AM 730.jpg",
            url: "http://live.leanstream.co/CHMJAM-MP3?type=.mp3&playertype=dplayer"
        },
        {
            name: "TSN 1040",
            logo: "images/vancouver/TSN 1040.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CKSTAMAAC.aac"
        },
        {
            name: "Spice Radio",
            logo: "images/vancouver/Spice Radio.png",
            url: "http://d2e1wsg2gpoq0n.cloudfront.net/livecf/CJRJ/playlist.m3u8"
        },
        {
            name: "Ici Musique Vancouver",
            logo: "images/vancouver/Ici Musique Vancouver.png",
            url: "http://7bvan0.akacast.akamaistream.net/7/286/177417/v1/rc.akacast.akamaistream.net/7BVAN0"
        },
        {
            name: "93.7 JRfm",
            logo: "images/vancouver/93.7 JRfm.png",
            url: "http://ais.streamon.fm:8000/ais/JRfm-48k.aac"
        },
    ],
	"kamloops": [
        {
            name: "CBC Radio One - CBC Kamloops",
            logo: "images/kamloops/CBC_RadioOne.jpg",
            url: "http://cbc_r1_kam.akacast.akamaistream.net/7/440/451661/v1/rc.akacast.akamaistream.net/cbc_r1_kam"
        },
        {
            name: "CBC Radio 2",
            logo: "images/kamloops/CBC_Radio_2.png",
            url: "http://cbc_r2_ipt.akacast.akamaistream.net/7/669/451661/v1/rc.akacast.akamaistream.net/cbc_r2_ipt"
        },
        {
            name: "Radio NL 610 AM",
            logo: "images/kamloops/Radio NL 610 AM.png",
            url: "http://ice10.securenetsystems.net/CHNLAM"
        },
        {
            name: "The X",
            logo: "images/kamloops/92.5 FM The X.png",
            url: "http://thexaudio.tru.ca:8002/;stream.mp3"
        },
        {
            name: "Ici Radio-Canada Première",
            logo: "images/kamloops/Ici Radio-Canada Première.png",
            url: "http://d2e1wsg2gpoq0n.cloudfront.net/livecf/CJRJ/playlist.m3u8"
        },
        {
            name: "97.5 The River",
            logo: "images/kamloops/97.5 The River.png",
            url: "http://ice5.securenetsystems.net/CKRV"
        },
        {
            name: "CIFM-FM Kamloops",
            logo: "images/kamloops/CIFM-FM Kamloops.png",
            url: "http://ais.streamon.fm:8000/ais/CIFM-48k.aac"
        },
		{
            name: "New Country 103.1",
            logo: "images/kamloops/New Country 103.1.png",
            url: "http://ice8.securenetsystems.net/CJKC"
        },
    ],
	"princegeorge": [
		{
            name: "CBC Radio One - CBC Prince George",
            logo: "images/princegeorge/CBC_RadioOne.jpg",
            url: "http://cbc_r1_prg.akacast.akamaistream.net/7/966/451661/v1/rc.akacast.akamaistream.net/cbc_r1_prg"
        },
		{
            name: "CBC Radio 2",
            logo: "images/princegeorge/CBC_Radio_2.png",
            url: "http://cbc_r2_ipt.akacast.akamaistream.net/7/669/451661/v1/rc.akacast.akamaistream.net/cbc_r2_ipt"
        },
		{
            name: "CFURadio 88.7 FM",
            logo: "images/princegeorge/CFURadio 88.7 FM.jpg",
            url: "http://142.207.5.73:8001/"
        },
        {
            name: "Boomer Radio",
            logo: "images/princegeorge/Boomer Radio.png",
            url: "http://cfis.streamon.fm:8000/cfis-48k.aac"
        },
        {
            name: "94.3 The GOAT",
            logo: "images/princegeorge/94.3 The GOAT.png",
            url: "http://srv1.hotdogradio.com:8000/CIRX"
        },
		{
            name: "Ici Radio-Canada Première",
            logo: "images/kamloops/Ici Radio-Canada Première.png",
            url: "http://d2e1wsg2gpoq0n.cloudfront.net/livecf/CJRJ/playlist.m3u8"
        },
		{
            name: "Country 97 FM",
            logo: "images/princegeorge/Country 97 FM.jpg",
            url: "http://srv1.hotdogradio.com:8000/CJCI"
        },
		{
            name: "99-3 The Drive",
            logo: "images/princegeorge/99-3 The Drive.png",
            url: "http://ais.streamon.fm:8000/ais/CKDV-48k.aac"
        },
		{
            name: "101.3 The River",
            logo: "images/princegeorge/101.3 The River.png",
            url: "http://ais.streamon.fm:8000/ais/CKKN-48k.aac"
        },
	],
	"edmonton": [
		{
            name: "CBC Radio One - CBC Edmonton",
            logo: "images/princegeorge/CBC_RadioOne.jpg",
            url: "http://cbc_r1_edm.akacast.akamaistream.net/7/904/451661/v1/rc.akacast.akamaistream.net/cbc_r1_edm"
        },		
		{
            name: "CBC Radio 2 CBC Edmonton",
            logo: "images/princegeorge/CBC_Radio_2.png",
            url: "http://cbc_r2_edm.akacast.akamaistream.net/7/40/451661/v1/rc.akacast.akamaistream.net/cbc_r2_edm"
        },		
		{
            name: "CBC Radio 2 CBC Edmonton",
            logo: "images/princegeorge/CBC_Radio_2.png",
            url: "http://cbc_r2_edm.akacast.akamaistream.net/7/40/451661/v1/rc.akacast.akamaistream.net/cbc_r2_edm"
        },
		{
            name: "Ici Musique Edmonton",
            logo: "images/calgary/Ici Musique Calgary.png",
            url: "http://sp01radio.akacast.akamaistream.net/7/481/177425/v1/rc.akacast.akamaistream.net/SP01RADIO"
        },	
		{
            name: "Ici Radio-Canada Première",
            logo: "images/kamloops/Ici Radio-Canada Première.png",
            url: "http://d2e1wsg2gpoq0n.cloudfront.net/livecf/CJRJ/playlist.m3u8"
        },
		{
            name: "CKUA Radio Network",
            logo: "images/calgary/CKUA Radio Network.png",
            url: "http://ckua.streamon.fm:8000/CKUA-48k.aac"
        },
		{
            name: "630 CHED",
            logo: "images/edmonton/630 CHED.png",
            url: "http://live.leanstream.co/CHEDAM-MP3"
        },		
		{
            name: "iNews880",
            logo: "images/edmonton/iNews880.png",
            url: "http://live.leanstream.co/CHQTAM-MP3"
        },		
		{
            name: "AM930 The Light",
            logo: "images/edmonton/AM930 The Light.png",
            url: "http://cjca.streamon.fm:8000/CJCA-48k.aac"
        },
		{
            name: "TSN 1260 Edmonton",
            logo: "images/edmonton/TSN 1260 Edmonton.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CFRNAM.mp3"
        },		
		{
            name: "CJSR FM88",
            logo: "images/edmonton/CJSR FM88.png",
            url: "http://cjsr.streamon.fm:8000/CJSR-48k.aac"
        },		
		{
            name: "Kiss 91.7",
            logo: "images/edmonton/Kiss 91.7.png",
            url: "http://edm917.akacast.akamaistream.net/7/518/118520/v1/rogers.akacast.akamaistream.net/edm917"
        },
		{
            name: "92.5 Fresh Radio",
            logo: "images/edmonton/92.5 Fresh Radio.png",
            url: "http://live.leanstream.co/CKNGFM-MP3"
        },		
		{
            name: "95.7 Cruz FM",
            logo: "images/edmonton/95.7 Cruz FM.png",
            url: "http://ckea.streamon.fm:8000/CKEA-48k.aac"
        },		
		{
            name: "Capital 96.3",
            logo: "images/edmonton/Capital 96.3.png",
            url: "http://newcap.leanstream.co/CKRAFM-MP3"
        },		
		{
            name: "K-97",
            logo: "images/edmonton/K-97.png",
            url: "http://newcap.leanstream.co/CIRKFM-MP3"
        },		
		{
            name: "CFWE",
            logo: "images/edmonton/CFWE.jpg",
            url: "http://live.leanstream.co/CFWEFM"
        },		
		{
            name: "Up! 99.3",
            logo: "images/edmonton/Up99.3.png",
            url: "http://ais.streamon.fm:8000/ais/CIUP-48k.aac"
        },		
		{
            name: "102.3 Now! Radio",
            logo: "images/edmonton/102.3 Now! Radio.png",
            url: "http://ckno.streamon.fm:8000/CKNO-96k.aac"
        },		{
            name: "103.9 CISN Country",
            logo: "images/edmonton/103.9 CISN Country.png",
            url: "http://live.leanstream.co/CISNFM-MP3"
        },		
		{
            name: "Shine FM Edmonton",
            logo: "images/calgary/Shine_FM_Edmonton.png",
            url: "http://cjsi.streamon.fm:8000/CJSI-48k.aac"
        },	            
		{
			name: "Hot 107 FM",
            logo: "images/calgary/Hot 107 FM.png",
            url: "http://cjnw.streamon.fm:8000/CJNW-48k.aac"
        },	
		
	],
	"calgary": [
		{
            name: "CBC Radio One - CBC Calgary",
            logo: "images/princegeorge/CBC_RadioOne.jpg",
            url: "http://cbc_r1_cgy.akacast.akamaistream.net/7/298/451661/v1/rc.akacast.akamaistream.net/cbc_r1_cgy"
        },
		{
            name: "CBC Radio 2",
            logo: "images/princegeorge/CBC_Radio_2.png",
            url: "http://cbc_r2_ipt.akacast.akamaistream.net/7/669/451661/v1/rc.akacast.akamaistream.net/cbc_r2_ipt"
        },
		{
            name: "Shine FM",
            logo: "images/calgary/Shine FM.jpg",
            url: "http://cjsi.streamon.fm:8000/CJSI-48k.aac"
        },		
		{
            name: "Ici Musique Alberta",
            logo: "images/calgary/Ici Musique Calgary.png",
            url: "http://sp01radio.akacast.akamaistream.net/7/481/177425/v1/rc.akacast.akamaistream.net/SP01RADIO"
        },		
		{
            name: "90.3 Amp Radio",
            logo: "images/calgary/90.3 Amp Radio.png",
            url: "http://newcap.leanstream.co/CKMPFM"
        },		
		{
            name: "CJSW",
            logo: "images/calgary/CJSW.png",
            url: "http://stream.cjsw.com/cjsw.mp3"
        },		
		{
            name: "X92.9",
            logo: "images/calgary/CJSW.png",
            url: "http://cfex.streamon.fm:8000/CFEX-48k.aac"
        },		
		{
            name: "CKUA Radio Network",
            logo: "images/calgary/CKUA Radio Network.png",
            url: "http://ckua.streamon.fm:8000/CKUA-48k.aac"
        },		
		{
            name: "Fairchild Radio",
            logo: "images/calgary/Fairchild Radio.png",
            url: "http://icecast01.eseenet.com:8000/am1430"
        },		
		{
            name: "Wild 95.3",
            logo: "images/calgary/Wild 95.3.png",
            url: "http://ais.streamon.fm:8000/ais/CKWD-48k.aac"
        },		
		{
            name: "Kiss 95.9",
            logo: "images/calgary/Kiss 95.9.png",
            url: "http://cal959.akacast.akamaistream.net/7/300/80900/v1/rogers.akacast.akamaistream.net/cal959"
        },		
		{
            name: "Soft Rock 97.7",
            logo: "images/calgary/Soft Rock 97.7.jpg",
            url: "http://rawlco.leanstream.co/CHUPFM-MP3"
        },		
		{
            name: "101.5 Kool FM",
            logo: "images/calgary/101.5 Kool FM.png",
            url: "http://ais.streamon.fm:8000/ais/CKCE-48k.aac"
        },		
		{
            name: "XL103",
            logo: "images/calgary/XL103.png",
            url: "http://newcap.leanstream.co/CFXLFM-MP3"
        },		
		{
            name: "Ici Radio-Canada Première",
            logo: "images/kamloops/Ici Radio-Canada Première.png",
            url: "http://d2e1wsg2gpoq0n.cloudfront.net/livecf/CJRJ/playlist.m3u8"
        },		
		{
            name: "Country 105",
            logo: "images/calgary/Country 105.png",
            url: "http://live.leanstream.co/CKRYFM"
        },		
		{
            name: "RED FM Calgary",
            logo: "images/calgary/RED FM Calgary.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CKYRFM.mp3"
        },		
		{
            name: "Q107",
            logo: "images/calgary/Q107.png",
            url: "http://live.leanstream.co/CILQFM-MP3"
        },
		 	
    ],
	"princerupert": [
        {
            name: "CBC Radio One",
            logo: "images/princerupert/CBC Radio One 860AM.png",
            url: "http://cbc_r1_prg.akacast.akamaistream.net/7/966/451661/v1/rc.akacast.akamaistream.net/cbc_r1_prg"
        },
     ],	
	
	
	"thunderbay": [
            {
              name: "CBC Radio One CBC Thunder Bay",
              logo: "images/thunderbay/CBC Radio One.png",
              url: "http://cbc_r1_tba.akacast.akamaistream.net/7/245/451661/v1/rc.akacast.akamaistream.net/cbc_r1_tba"
            },
            {
              name: "Coutnry 105",
              logo: "images/thunderbay/Coutnry 105.png",
              url: "http://cktg.streamon.fm:8000/CKTG-48k.aac"
            },
			{
              name: "91.5 CKPR",
              logo: "images/thunderbay/91.5 CKPR.jpg",
              url: "http://ckpr.streamon.fm:8000/CKPR-48k.aac"
             },
			{
              name: "LU Radio",
              logo: "images/thunderbay/LU Radio.png",
              url: "http://luradio-server.lakeheadu.ca:8000/stereo128.mp3"
            },
			{
              name: "UCB Canada",
              logo: "images/thunderbay/UCB Canada.png",
              url: "http://s7.viastreaming.net:8930/;stream.mp3"
            },
		
	],
	 "montreal": [
        {
            name: "CBC Radio One CBC Montreal",
            logo: "images/montreal/CBC Radio One CBC Montreal.svg",
            url: "http://cbc_r1_mtl.akacast.akamaistream.net/7/35/451661/v1/rc.akacast.akamaistream.net/cbc_r1_mtl"
        },        
		{
            name: "CBC Radio 2 CBC Montreal",
            logo: "images/montreal/CBC Radio 2.png",
            url: "http://cbc_r2_ipt.akacast.akamaistream.net/7/669/451661/v1/rc.akacast.akamaistream.net/cbc_r2_ipt"
        },		
		{
            name: "TSN 690 Montréal",
            logo: "images/montreal/TSN 690 Montreal.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CKGMAMAAC.aac"
        },		
		{
            name: "CJAD 800/Newstalk 800 CJAD",
            logo: "images/montreal/CJAD 800.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CJADAMAAC.aac"
        },
		{
            name: "CJMS Le 1040 AM",
            logo: "images/montreal/CJMS Le 1040 AM.PNG",
            url: "http://cjms1040.ca:8860/;stream.mp3"
        },
		{
            name: "Radio Énergie 94.3",
            logo: "images/montreal/Radio Énergie 94.3.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CKMFFMAAC_SC"
        },			
		{
            name: "Virgin Radio",
            logo: "images/montreal/Virgin Radio Montreal.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CJFMFMAAC_SC"
        },	 		
		{
            name: "91.9 Sports",
            logo: "images/montreal/91.9 Sports.jpg",
            url: "http://icecast-cklx.rncm.ca/cklx.mp3"
        },	 		
		{
            name: "CKOI 96.9",
            logo: "images/montreal/CKOI 96.9.png",
            url: "http://icecast.cogecomedia.com:8000/ckoi.mp3"
        },	 		
		{
            name: "Ici Musique",
            logo: "images/montreal/Ici Musique.jpg",
            url: "http://7QMTL0.akacast.akamaistream.net:80/7/445/177407/v1/rc.akacast.akamaistream.net/7QMTL0"
        },	 		
		{
            name: "CIBL 101.5 | La radio indépendante de Montréal",
            logo: "images/montreal/CIBL 101.5.PNG",
            url: "http://stream02.ustream.ca/cibl128.mp3"
        },	 
		 
    ],	
	"halifax": [
        {
            name: "CBC Radio One",
            logo: "images/halifax/CBC Radio One 91.5 FM.svg",
            url: "http://cbc_r1_hfx.akacast.akamaistream.net/7/981/451661/v1/rc.akacast.akamaistream.net/cbc_r1_hfx"
        },        
		{
            name: "CBC Radio 2 Halifax",
            logo: "images/halifax/CBC_Radio_2.png",
            url: "http://cbc_r2_hfx.akacast.akamaistream.net/7/917/451661/v1/rc.akacast.akamaistream.net/cbc_r2_hfx"
        },		
		{
            name: "Ici Musique Halifax",
            logo: "images/calgary/Ici Musique Calgary.png",
            url: "http://sp01radio.akacast.akamaistream.net/7/481/177425/v1/rc.akacast.akamaistream.net/SP01RADIO"
        },	        
		{
            name: "Ici Radio-Canada Première",
            logo: "images/kamloops/Ici Radio-Canada Première.png",
            url: "http://2emct0.akacast.akamaistream.net/7/750/177393/v1/rc.akacast.akamaistream.net/2EMCT0"
        },		
		{
            name: "CKDU 88.1 FM",
            logo: "images/halifax/CKDU 88.1 FM.png",
            url: "http://129.173.68.178:9750/ckdu_1_on_air_high.mp3"
        },			
		{
            name: "89.9 The Wave",
            logo: "images/halifax/89.9 The Wave.gif",
            url: "http://chns.streamon.fm:8000/CHNS-48k.aac"
        },			
		{
            name: "Harvesters FM",
            logo: "images/halifax/Harvesters FM.png",
            url: "http://ic2.christiannetcast.com/cjlu-fm"
        },			
		{
            name: "Mix 96.5",
            logo: "images/halifax/Mix 96.5.png",
            url: "http://newcap.leanstream.co/CKULFM-MP3"
        },			
		{
            name: "Middle East Radio Halifax | CHHU-FM 99.1 FM",
            logo: "images/halifax/Middle East Radio Halifax.png",
            url: "http://s6.voscast.com:10604/;stream.mp3"
        },			
		{
            name: "FX101.9",
            logo: "images/halifax/FX101.9.jpg",
            url: "http://chfx.streamon.fm:8000/CHFX-48k.aac"
        },			
		{
            name: "Q104",
            logo: "images/halifax/Q104.png",
            url: "http://newcap.leanstream.co/CFRQFM-MP3"
        },	
     ],			
	 "yellowknife": [
        {
            name: "CBC Radio One - CBC Yellowknife",
            logo: "images/yellowknife/CBC Radio One 98.9 FM.svg",
            url: "http://cbc_r1_ykn.akacast.akamaistream.net/7/369/451661/v1/rc.akacast.akamaistream.net/cbc_r1_ykn"
        }, 	        
		{
            name: "CBC Radio 2",
            logo: "images/yellowknife/CBC Radio 2.svg",
            url: " 	http://cbc_r2_ipt.akacast.akamaistream.net/7/669/451661/v1/rc.akacast.akamaistream.net/cbc_r2_ipt"
        }, 			
		{
            name: "Ici Radio-Canada Première",
            logo: "images/yellowknife/Ici Radio-Canada Première.png",
            url: "http://2emct0.akacast.akamaistream.net/7/750/177393/v1/rc.akacast.akamaistream.net/2EMCT0"
        },			
		{
            name: "100.1 Moose FM",
            logo: "images/yellowknife/100.1 Moose FM.png",
            url: "http://ckfu.streamon.fm:8000/CKFU-48k.aac"
        },		
		{
            name: "CKLB Radio 101.9",
            logo: "images/yellowknife/CKLB.png",
            url: "http://cklb.streamon.fm:8000/CKLB-48k.aac"
        },			
		{
            name: "Radio Taïga",
            logo: "images/yellowknife/CIVR.png",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CIVRaac.aac"
        },	
    "yukon": [
        {
            name: "CBC Radio One - CBC North",
            logo: "http://www.cbc.ca/mediacentre/content/images/620x296-CBC_RadioOne.jpg",
            url: "http://www.cbc.ca/listen/live/radio1/whitehorse"
        },
        {
            name: "CBC Radio 2",
            logo: "http://www.cbc.ca/mediacentre/content/images/Radio2_Logo_highres.png",
            url: "http://www.cbc.ca/listen/live/radio2/pacific"
        },
        {
        //City: Whitehorse: https://en.wikipedia.org/wiki/CHON-FM
            name: "CHON FM",
            logo: "https://cdn-radiotime-logos.tunein.com/s12582d.png",
            url: "http://stream.nnby.ca:8042/stream"
        },
    ],
