//CBC Direct Station URLs: http://www.cbc.ca/radio/includes/streams.html
//Some Canadien station URLs: http://radiovibrations.com/rsd/
//streamon stuff:
// http://ais.streamon.fm:8000/ais/CKDV-48k.aac --- CKDV-FM
// http://cfis.streamon.fm:8000/cfis-48k.aac --- CFIS-FM
// http://ais.streamon.fm:8000/ais/CKKN-48k.aac -- CKKN-FM
// http://cjsi.streamon.fm:8000/CJSI-48k.aac -- CJSI-FM (note to self: Add to Favourites.json)
// http://cfex.streamon.fm:8000/CFEX-48k.aac -- CJFEX-FM
// http://ckua.streamon.fm:8000/CKUA-48k.aac -- CKUA-FM
// http://ais.streamon.fm:8000/ais/CKWD-48k.aac -- CKWD
// http://ais.streamon.fm:8000/ais/CKCE-48k.aac -- CKCE-FM

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
            url: " 	http://cbc_r2_vcr.akacast.akamaistream.net/7/773/451661/v1/rc.akacast.akamaistream.net/cbc_r2_vcr"
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
            url: "http://7bvan0.akacast.akamaistream.net/7/286/177417/v1/rc.akacast.akamaistream.net/7BVAN0"
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
            url: " 	http://cbc_r1_prg.akacast.akamaistream.net/7/966/451661/v1/rc.akacast.akamaistream.net/cbc_r1_prg"
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
            logo: "images/kamloops/Country 105.png",
            url: "http://live.leanstream.co/CKRYFM"
        },		
		{
            name: "RED FM Calgary",
            logo: "images/kamloops/RED FM Calgary.jpg",
            url: "http://playerservices.streamtheworld.com/api/livestream-redirect/CKYRFM.mp3"
        },		
		{
            name: "Q107",
            logo: "images/kamloops/Q107",
            url: "http://live.leanstream.co/CILQFM-MP3"
        },
		 	
    ],
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
