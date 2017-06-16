TOTAL_CAT = 7;

function cV(name, show, entryNum)
{   
   this.name = name;
   this.show = show;
   this.eNum = entryNum;
   this.e = new Array(entryNum);
}
   
function iVe(eStart, eEnd, proto, iStart)
{
   this.eStart = eStart;
   this.eEnd = eEnd;
   this.proto = proto; //0 tcp 1udp 2all 3GRE
   this.iStart = iStart;
}

var c = new Array(TOTAL_CAT);
c[0] = new Array();
c[1] = new Array();
c[2] = new Array();
c[3] = new Array();
c[4] = new Array();
c[5] = new Array();
c[6] = new Array();

c[0][0] = new cV("Age of Empires","Age of Empires",2);
c[0][0].e[0] = new iVe("6073", "6073", "2", "6073");
c[0][0].e[1] = new iVe("2302", "2400", "2", "2302");

c[0][1] = new cV("Age of Empires 2: Age of Kings","Age of Empires 2: Age of Kings",2);
c[0][1].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][1].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][2] = new cV("Age of Empires III","Age of Empires III",2);
c[0][2].e[0] = new iVe("80", "80", "2", "80");
c[0][2].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][3] = new cV("Age of Mythology","Age of Mythology",3);
c[0][3].e[0] = new iVe("28800", "28805", "0", "28800");
c[0][3].e[1] = new iVe("2300", "2400", "1", "2300");
c[0][3].e[2] = new iVe("6073", "6073", "1", "6073");

c[0][4] = new cV("Alien vs. Predator 2","Alien vs. Predator 2",3);
c[0][4].e[0] = new iVe("2300", "2400", "0", "2300");
c[0][4].e[1] = new iVe("7000", "10000", "0", "7000");
c[0][4].e[2] = new iVe("27888", "27900", "1", "27888");

c[0][5] = new cV("Asherons Call","Asheron's Call",1);
c[0][5].e[0] = new iVe("9000", "9013", "1", "9000");

c[0][6] = new cV("Baldurs Gate","Baldur's Gate",2);
c[0][6].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][6].e[1] = new iVe("2300", "2399", "2", "2300");

c[0][7] = new cV("Baldurs Gate II: Shadows of Amn","Baldur's Gate II: Shadows of Amn",2);
c[0][7].e[0] = new iVe("6073", "6073", "2", "6073");
c[0][7].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][8] = new cV("Battlefield 1942","Battlefield 1942",5);
c[0][8].e[0] = new iVe("28900", "28900", "0", "28900");
c[0][8].e[1] = new iVe("14567", "14567", "1", "14567");
c[0][8].e[2] = new iVe("22000", "22000", "1", "22000");
c[0][8].e[3] = new iVe("23000", "23009", "1", "23000");
c[0][8].e[4] = new iVe("279", "279", "1", "279");

c[0][9] = new cV("Battlefield Vietnam","Battlefield Vietnam",3);
c[0][9].e[0] = new iVe("4755", "4755", "1", "4755");
c[0][9].e[1] = new iVe("23000", "23000", "1", "23000");
c[0][9].e[2] = new iVe("22000", "22000", "1", "22000");
c[0][9].e[3] = new iVe("27243", "?????", "1", "27243");

c[0][10] = new cV("Battlestations Midway","Battlestations Midway",3);
c[0][10].e[0] = new iVe("1042", "1042", "1", "1042");
c[0][10].e[1] = new iVe("2302", "2302", "1", "2302");
c[0][10].e[2] = new iVe("6500", "6500", "1", "6500");

c[0][11] = new cV("Battlefield Communicator","Battlefield Communicator",0);
c[0][11].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][12] = new cV("Black and White","Black and White",3);
c[0][12].e[0] = new iVe("6500", "6500", "2", "6500");
c[0][12].e[1] = new iVe("2611", "2612", "2", "2611");
c[0][12].e[2] = new iVe("6667", "27900", "2", "6667");

c[0][13] = new cV("Black and White 2","Black and White 2",0);
c[0][13].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][14] = new cV("Call of Duty","Call of Duty",4);
c[0][14].e[0] = new iVe("28960", "28960", "0", "28960");
c[0][14].e[1] = new iVe("20500", "20500", "1", "20500");
c[0][14].e[2] = new iVe("20510", "20510", "1", "20510");
c[0][14].e[3] = new iVe("28960", "28960", "1", "28960");

c[0][15] = new cV("Call of Duty - United Offensive","Call of Duty - United Offensive",6);
c[0][15].e[0] = new iVe("28960", "28960", "0", "28960");
c[0][15].e[1] = new iVe("20500", "20500", "1", "20500");
c[0][15].e[2] = new iVe("20510", "20510", "1", "20510");
c[0][15].e[3] = new iVe("20600", "20600", "1", "20600");
c[0][15].e[4] = new iVe("20610", "20610", "1", "20610");
c[0][15].e[5] = new iVe("28960", "28960", "1", "28960");

c[0][16] = new cV("Call of Duty 2","Call of Duty 2",3);
c[0][16].e[0] = new iVe("20500", "20500", "2", "20500");
c[0][16].e[1] = new iVe("20510", "20510", "2", "20510");
c[0][16].e[2] = new iVe("28960", "28960", "2", "28960");

c[0][17] = new cV("Call of Duty 4","Call of Duty 4",1);
c[0][17].e[0] = new iVe("28960", "28960", "2", "28960");

c[0][18] = new cV("Civilization III","Civilization III",9);
c[0][18].e[0] = new iVe("3783", "3783", "0", "3783");
c[0][18].e[1] = new iVe("6500", "6500", "2", "6500");
c[0][18].e[2] = new iVe("6667", "6667", "0", "6667");
c[0][18].e[3] = new iVe("28900", "28900", "0", "28900");
c[0][18].e[4] = new iVe("29900", "29901", "0", "29900");
c[0][18].e[5] = new iVe("2302", "2400", "1", "2302");
c[0][18].e[6] = new iVe("6515", "6515", "1", "6515");
c[0][18].e[7] = new iVe("13139", "13139", "1", "13139");
c[0][18].e[8] = new iVe("27900", "27900", "1", "27900");

c[0][19] = new cV("Civilization IV","Civilization IV",3);
c[0][19].e[0] = new iVe("6500", "6500", "2", "6500");
c[0][19].e[1] = new iVe("2302", "2302", "1", "2302");
c[0][19].e[2] = new iVe("13139", "13139", "1", "13139");

c[0][20] = new cV("Close Combat","Close Combat",2);
c[0][20].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][20].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][21] = new cV("Close Combat III: The Russian Front","Close Combat III: The Russian Front",2);
c[0][21].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][21].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][22] = new cV("Close Combat IV","Close Combat IV",2);
c[0][22].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][22].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][23] = new cV("Close Combat V","Close Combat V",0);
c[0][23].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][23].e[1] = new iVe("2300", "2400", "2", "2300");

c[0][24] = new cV("Combat Flight Sim 2: WWII Pacific Theatre","Combat Flight Sim 2: WWII Pacific Theatre",0);
c[0][24].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][25] = new cV("Combat Flight Sim 2: WWII Europe Series","Combat Flight Sim 2: WWII Europe Series",0);
c[0][25].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][26] = new cV("Command and Conquer 3 TW","Command and Conquer 3 TW",5);
c[0][26].e[0] = new iVe("28910", "28910", "0", "28910");
c[0][26].e[1] = new iVe("29900", "29900", "0", "29900");
c[0][26].e[2] = new iVe("13139", "13139", "1", "13139");
c[0][26].e[3] = new iVe("27900", "27900", "1", "27900");
c[0][26].e[4] = new iVe("65000", "65000", "1", "65000");

c[0][27] = new cV("Command and Conquer Generals","Command and Conquer Generals",7);
c[0][27].e[0] = new iVe("80", "80", "0", "80");
c[0][27].e[1] = new iVe("6667", "6667", "0", "6667");
c[0][27].e[2] = new iVe("28910", "28910", "0", "28910");
c[0][27].e[3] = new iVe("29900", "29900", "0", "29900");
c[0][27].e[4] = new iVe("29920", "29920", "0", "29920");
c[0][27].e[5] = new iVe("4321", "4321", "1", "4321");
c[0][27].e[6] = new iVe("27900", "27900", "1", "27900");

c[0][28] = new cV("Dark Reign","Dark Reign",0);
c[0][28].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][29] = new cV("Dark Reign 2","Dark Reign 2",1);
c[0][29].e[0] = new iVe("26214", "26214", "2", "26214");

c[0][30] = new cV("Delta Force","Delta Force",4);
c[0][30].e[0] = new iVe("3100", "3100", "2", "3100");
c[0][30].e[1] = new iVe("3199", "3199", "0", "3199");
c[0][30].e[2] = new iVe("3568", "3568", "1", "3568");
c[0][30].e[3] = new iVe("3999", "3999", "1", "3999");

c[0][31] = new cV("Delta Force II","Delta Force II",1);
c[0][31].e[0] = new iVe("3568", "3569", "1", "3568");

c[0][32] = new cV("Diablo","Diablo",2);
c[0][32].e[0] = new iVe("4000", "4000", "0", "4000");
c[0][32].e[1] = new iVe("6112", "6119", "2", "6112");

c[0][33] = new cV("Diablo II: Lord of Destruction","Diablo II: Lord of Destruction",2);
c[0][33].e[0] = new iVe("4000", "4000", "0", "4000");
c[0][33].e[1] = new iVe("6112", "6119", "2", "6112");

c[0][34] = new cV("DirecX 7-8 Games","DirecX 7-8 Games",3);
c[0][34].e[0] = new iVe("47624", "47624", "0", "47624");
c[0][34].e[1] = new iVe("6073", "6073", "0", "6073");
c[0][34].e[2] = new iVe("2300", "2400", "2", "2300");

c[0][35] = new cV("Doom I-II-III","Doom I-II-III",1);
c[0][35].e[0] = new iVe("666", "666", "2", "666");

c[0][36] = new cV("Dune 2000","Dune 2000",1);
c[0][36].e[0] = new iVe("4000", "4000", "1", "4000");

c[0][37] = new cV("Dragon Age: Origins","Dragon Age: Origins",1);
c[0][37].e[0] = new iVe("4010", "4016", "1", "4010");

c[0][38] = new cV("Dungeons and Dragons Online","Dungeons & Dragons Online",2);
c[0][38].e[0] = new iVe("2900", "2910", "1", "2900");
c[0][38].e[1] = new iVe("9000", "9010", "1", "9000");

c[0][39] = new cV("F-16 Mig. 29","F-16 Mig. 29",1);
c[0][39].e[0] = new iVe("3862", "3863", "1", "3862");

c[0][40] = new cV("F-22 Lightning 3","F-22 Lightning 3",3);
c[0][40].e[0] = new iVe("3875", "3875", "1", "3875");
c[0][40].e[1] = new iVe("4533", "4534", "1", "4533");
c[0][40].e[2] = new iVe("4660", "4670", "1", "4660");

c[0][41] = new cV("F-22 Raptor","F-22 Raptor",1);
c[0][41].e[0] = new iVe("3874", "3875", "1", "3874");

c[0][42] = new cV("Fighter Ace II","Fighter Ace II",1);
c[0][42].e[0] = new iVe("50000", "50100", "0", "50000");

c[0][43] = new cV("Flight Simulator 2000 / 2002","Flight Simulator 2000 / 2002",2);
c[0][43].e[0] = new iVe("2300", "2400", "2", "2300");
c[0][43].e[1] = new iVe("47624", "47624", "0", "47624");

c[0][44] = new cV("Flight Simulator 2004","Flight Simulator 2004",2);
c[0][44].e[0] = new iVe("6073", "6073", "1", "6073");
c[0][44].e[1] = new iVe("23456", "23456", "1", "23456");

c[0][45] = new cV("GameSpy","GameSpy",10);
c[0][45].e[0] = new iVe("3783", "3783", "0", "3783");
c[0][45].e[1] = new iVe("6500", "6500", "2", "6500");
c[0][45].e[2] = new iVe("6515", "6515", "0", "6515");
c[0][45].e[3] = new iVe("6667", "6667", "0", "6667");
c[0][45].e[4] = new iVe("13139", "13139", "0", "13139");
c[0][45].e[5] = new iVe("27900", "27900", "0", "27900");
c[0][45].e[6] = new iVe("28900", "28900", "0", "28900");
c[0][45].e[7] = new iVe("29900", "29901", "0", "29900");
c[0][45].e[8] = new iVe("6700", "6700", "1", "6700");
c[0][45].e[9] = new iVe("8871", "8871", "1", "8871");

c[0][46] = new cV("Ghost Recon: Advanced Warfighter 2","Ghost Recon: Advanced Warfighter 2",8);
c[0][46].e[0] = new iVe("3783", "3783", "0", "3783");
c[0][46].e[1] = new iVe("6667", "6667", "0", "6667");
c[0][46].e[2] = new iVe("28900", "28900", "0", "28900");
c[0][46].e[3] = new iVe("29900", "29901", "0", "29900");
c[0][46].e[4] = new iVe("6500", "6500", "1", "6500");
c[0][46].e[5] = new iVe("6515", "6515", "1", "6515");
c[0][46].e[6] = new iVe("13139", "13139", "1", "13139");
c[0][46].e[7] = new iVe("27900", "27900", "1", "27900");

c[0][47] = new cV("GNUtella","GNUtella",1);
c[0][47].e[0] = new iVe("6346", "6346", "2", "6346");

c[0][48] = new cV("Guild Wars","Guild Wars",1);
c[0][48].e[0] = new iVe("6112", "6112", "2", "6112");

c[0][49] = new cV("Half Life","Half Life",2);
c[0][49].e[0] = new iVe("27015", "27015", "0", "27015");
c[0][49].e[1] = new iVe("27010", "27010", "0", "27010");

c[0][50] = new cV("Half Life II","Half Life II",5);
c[0][50].e[0] = new iVe("1200", "1200", "1", "1200");
c[0][50].e[1] = new iVe("2700", "2700", "1", "2700");
c[0][50].e[2] = new iVe("27015", "27015", "2", "27015");
c[0][50].e[3] = new iVe("27020", "27020", "2", "27020");
c[0][50].e[4] = new iVe("27021", "27050", "0", "27021");

c[0][51] = new cV("Halo - Combat Evolved","Halo - Combat Evolved",1);
c[0][51].e[0] = new iVe("2302", "2303", "1", "2302");

c[0][52] = new cV("Heretic II","Heretic II",1);
c[0][52].e[0] = new iVe("28910", "28910", "2", "28910");

c[0][53] = new cV("Hexen II","Hexen II",1);
c[0][53].e[0] = new iVe("26900", "26900", "2", "26900");

c[0][54] = new cV("Jedi Knight II: Jedi Quest","Jedi Knight II: Jedi Quest",0);
c[0][54].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][55] = new cV("Kali","Kali",2);
c[0][55].e[0] = new iVe("6666", "6666", "1", "6666");
c[0][55].e[1] = new iVe("2213", "2218", "1", "2213");

c[0][56] = new cV("KaZaA","KaZaA",1);
c[0][56].e[0] = new iVe("1214", "1214", "0", "1214");

c[0][57] = new cV("Lord of the Rings Online","Lord of the Rings Online",2);
c[0][57].e[0] = new iVe("2900", "2910", "1", "2900");
c[0][57].e[1] = new iVe("9000", "9010", "1", "9000");

c[0][58] = new cV("Lord of the Rings: Battle for Middle Earth","Lord of the Rings: Battle for Middle Earth",1);
c[0][58].e[0] = new iVe("8088", "28088", "1", "8088");

c[0][59] = new cV("Lord of the Rings: Battle for Middle Earth 2","Lord of the Rings: Battle for Middle Earth 2",1);
c[0][59].e[0] = new iVe("8088", "65535", "1", "8088");

c[0][60] = new cV("Lord of the Rings: War of the Rings","Lord of the Rings: War of the Rings",1);
c[0][60].e[0] = new iVe("7175", "7175", "0", "7175");

c[0][61] = new cV("Madden 06","Madden 06",5);
c[0][61].e[0] = new iVe("13500", "13500", "0", "13500");
c[0][61].e[1] = new iVe("28400", "28499", "0", "28400");
c[0][61].e[2] = new iVe("32768", "65535", "0", "32768");
c[0][61].e[3] = new iVe("1795", "1795", "1", "1795");
c[0][61].e[4] = new iVe("1797", "1797", "1", "1797");

c[0][62] = new cV("Madden 07","Madden 07",2);
c[0][62].e[0] = new iVe("1795", "1795", "1", "1795");
c[0][62].e[1] = new iVe("1797", "1797", "1", "1797");

c[0][63] = new cV("MechWarrior 3","MechWarrior 3",0);
c[0][63].e[0] = new iVe("?????", "?????", "?????", "?????");

c[0][64] = new cV("MechWarrior 4","MechWarrior 4 - Black Knight / Mercenaries / Vengeance",3);
c[0][64].e[0] = new iVe("27999", "27999", "0", "27999");
c[0][64].e[1] = new iVe("28805", "28808", "0", "28805");
c[0][64].e[2] = new iVe("28800", "28800", "1", "28800");

c[0][65] = new cV("MSN Gaming Zone","MSN Gaming Zone",2);
c[0][65].e[0] = new iVe("6667", "6667", "0", "6667");
c[0][65].e[1] = new iVe("28800", "29000", "0", "28800");

c[0][66] = new cV("Need For Speed 3","Need For Speed 3",1);
c[0][66].e[0] = new iVe("1030", "1030", "1", "1030");

c[0][67] = new cV("Need for Speed Porsche","Need for Speed Porsche",1);
c[0][67].e[0] = new iVe("9442", "9442", "1", "9442");

c[0][68] = new cV("Outlaws","Outlaws",1);
c[0][68].e[0] = new iVe("5310", "5310", "0", "5310");

c[0][69] = new cV("Rainbow 6","Rainbow 6",1);
c[0][69].e[0] = new iVe("2346", "2346", "0", "2346");

c[0][70] = new cV("Rouge Spear","Rouge Spear",1);
c[0][70].e[0] = new iVe("2346", "2346", "0", "2346");

c[0][71] = new cV("Starcraft","Starcraft",1);
c[0][71].e[0] = new iVe("6112", "6112", "1", "6112");

c[0][72] = new cV("Star Wars","Star Wars",2);
c[0][72].e[0] = new iVe("44453", "44453", "1", "44453");
c[0][72].e[1] = new iVe("44462", "44463", "1", "44462");

c[0][73] = new cV("Supreme Commander","Supreme Commander",3);
c[0][73].e[0] = new iVe("6112", "6112", "1", "6112");
c[0][73].e[1] = new iVe("9103", "9103", "1", "9103");
c[0][73].e[2] = new iVe("30350", "30350", "1", "30350");

c[0][74] = new cV("Tabula Rasa","Tabula Rasa",2);
c[0][74].e[0] = new iVe("8001", "8001", "0", "8001");
c[0][74].e[1] = new iVe("8101", "8104", "0", "8101");

c[0][75] = new cV("Tiberian Sun","Tiberian Sun",2);
c[0][75].e[0] = new iVe("4000", "4000", "0", "4000");
c[0][75].e[1] = new iVe("1140", "1234", "2", "1140");

c[0][76] = new cV("Ultima","Ultima",5);
c[0][76].e[0] = new iVe("5001", "5010", "0", "5001");
c[0][76].e[1] = new iVe("7775", "7777", "0", "7775");
c[0][76].e[2] = new iVe("8800", "8900", "0", "8800");
c[0][76].e[3] = new iVe("9999", "9999", "0", "9999");
c[0][76].e[4] = new iVe("7875", "7875", "0", "7875");

c[0][77] = new cV("Quake 3 Server","Quake 3 Server",1);
c[0][77].e[0] = new iVe("27660", "27665", "1", "27660");

c[0][78] = new cV("Quake 2 Server","Quake 2 Server",1);
c[0][78].e[0] = new iVe("27910", "27910", "1", "27910");

c[0][79] = new cV("World of Warcraft","World of Warcraft",3);
c[0][79].e[0] = new iVe("3724", "3724", "0", "3724");
c[0][79].e[1] = new iVe("6112", "6112", "0", "6112");
c[0][79].e[2] = new iVe("6881", "6999", "0", "6881");


c[1][0] = new cV("PS-2 or PS-3","PS-2 or PS-3",2);
c[1][0].e[0] = new iVe("4658", "4659", "0", "4658");
c[1][0].e[1] = new iVe("4658", "4659", "1", "4658");

c[1][1] = new cV("Wii","Wii",4);
c[1][1].e[0] = new iVe("28910", "28910", "0", "28910");
c[1][1].e[1] = new iVe("29900", "29900", "0", "29900");
c[1][1].e[2] = new iVe("29901", "29901", "0", "29901");
c[1][1].e[3] = new iVe("29920", "29920", "0", "29920");

c[1][2] = new cV("Xbox-360","Xbox-360",5);
c[1][2].e[0] = new iVe("53", "53", "0", "53");
c[1][2].e[1] = new iVe("53", "53", "1", "53");
c[1][2].e[2] = new iVe("88", "88", "1", "88");
c[1][2].e[3] = new iVe("3074", "3074", "0", "3074");
c[1][2].e[4] = new iVe("3074", "3074", "1", "3074");

c[1][3] = new cV("Xbox 360 Kinect","Xbox 360 Kinect",2);
c[1][3].e[0] = new iVe("1863", "1863", "0", "1863");
c[1][3].e[1] = new iVe("1863", "1863", "1", "1863");

c[2][0] = new cV("IPSec", "IPSec", 2);
c[2][0].e[0] = new iVe("500", "500", "1", "500");
c[2][0].e[1] = new iVe("4500", "4500", "1", "4500");

c[2][1] = new cV("L2TP", "L2TP", 1);
c[2][1].e[0] = new iVe("1701", "1701", "1", "1701");

c[2][2] = new cV("PPTP", "PPTP", 2);
c[2][2].e[0] = new iVe("1723", "1723", "0", "1723");
c[2][2].e[1] = new iVe("0", "0", "3", "0");

c[2][3] = new cV("Shiva VPN", "Shiva VPN", 2);
c[2][3].e[0] = new iVe("2233", "2233", "0", "2233");
c[2][3].e[1] = new iVe("2233", "2233", "1", "2233");

c[2][4] = new cV("SSL VPN", "SSL VPN", 1);
c[2][4].e[0] = new iVe("443", "443", "0", "443");


c[3][0] = new cV("DirecTV Receiver 1","DirecTV Receiver 1",1);
c[3][0].e[0] = new iVe("27161", "27163", "0", "27161");

c[3][1] = new cV("DirecTV Receiver 2","DirecTV Receiver 2",1);
c[3][1].e[0] = new iVe("27164", "27166", "0", "27164");

c[3][2] = new cV("DirecTV Receiver 3","DirecTV Receiver 3",1);
c[3][2].e[0] = new iVe("27167", "27169", "0", "27167");

c[3][3] = new cV("DirecTV Receiver 4","DirecTV Receiver 4",1);
c[3][3].e[0] = new iVe("27170", "27172", "0", "27170");

c[3][4] = new cV("ITunes Music Share","ITunes Music Share",2);
c[3][4].e[0] = new iVe("3689", "3689", "0", "3689");
c[3][4].e[1] = new iVe("3689", "3689", "1", "3689");

c[3][5] = new cV("Net2Phone","Net2Phone",5);
c[3][5].e[0] = new iVe("6801", "6809", "0", "6801");
c[3][5].e[1] = new iVe("20000", "20000", "0", "20000");
c[3][5].e[2] = new iVe("6613", "6613", "1", "6613");
c[3][5].e[3] = new iVe("6801", "6809", "1", "6801");
c[3][5].e[4] = new iVe("20000", "20000", "1", "20000");

c[3][6] = new cV("NetFone","NetFone",1);
c[3][6].e[0] = new iVe("10200", "10200", "0", "10200");

c[3][7] = new cV("Netmeeting","Netmeeting",7);
c[3][7].e[0] = new iVe("1024", "1064", "0", "1024");
c[3][7].e[1] = new iVe("1503", "1503", "0", "1503");
c[3][7].e[2] = new iVe("1720", "1720", "0", "1720");
c[3][7].e[3] = new iVe("1731", "1731", "0", "1731");
c[3][7].e[4] = new iVe("522", "522", "0", "522");
c[3][7].e[5] = new iVe("389", "389", "0", "389");
c[3][7].e[6] = new iVe("1024", "1064", "1", "1024");

c[3][8] = new cV("Slingbox","Slingbox",1);
c[3][8].e[0] = new iVe("5001", "5001", "0", "5001");

c[3][9] = new cV("VoiceWing","VoiceWing",3);
c[3][9].e[0] = new iVe("69", "69", "1", "69");
c[3][9].e[1] = new iVe("5060", "5060", "1", "5060");
c[3][9].e[2] = new iVe("16384", "16392", "1", "16384");

c[3][10] = new cV("Webphone","Webphone",3);
c[3][10].e[0] = new iVe("6801", "6801", "0", "6801");
c[3][10].e[1] = new iVe("21845", "21845", "0", "21845");
c[3][10].e[2] = new iVe("21845", "21845", "1", "21845");

c[3][11] = new cV("Sorenson Video Phone","Sorenson Video Phone",8);
c[3][11].e[0] = new iVe("1720", "1720", "0", "1720");
c[3][11].e[1] = new iVe("1720", "1720", "1", "1720");
c[3][11].e[2] = new iVe("15328", "15348", "0", "15328");
c[3][11].e[3] = new iVe("15328", "15348", "1", "15328");
c[3][11].e[4] = new iVe("49153", "49153", "0", "49153");
c[3][11].e[5] = new iVe("49153", "49153", "1", "49153");
c[3][11].e[6] = new iVe("50060", "50060", "0", "50060");
c[3][11].e[7] = new iVe("50060", "50060", "1", "50060");

c[4][0] = new cV("Gnutella","Gnutella",3);
c[4][0].e[0] = new iVe("1214", "1214", "0", "1214");
c[4][0].e[1] = new iVe("6346", "6346", "0", "6346");
c[4][0].e[2] = new iVe("6346", "6346", "1", "6346");

c[4][1] = new cV("Laplink","Laplink",2);
c[4][1].e[0] = new iVe("1547", "1547", "0", "1547");
c[4][1].e[1] = new iVe("1547", "1547", "1", "1547");

c[4][2] = new cV("NetBIOS","NetBIOS",2);
c[4][2].e[0] = new iVe("137", "137", "0", "137");
c[4][2].e[1] = new iVe("137", "137", "1", "137");

c[4][3] = new cV("PCAnywhere","PCAnywhere",4);
c[4][3].e[0] = new iVe("5631", "5631", "0", "5631");
c[4][3].e[1] = new iVe("65301", "65301", "0", "65301");
c[4][3].e[2] = new iVe("22", "22", "1", "22");
c[4][3].e[3] = new iVe("5632", "5632", "1", "5632");

c[4][4] = new cV("Remote Administrator","Remote Administrator",2);
c[4][4].e[0] = new iVe("4899", "4899", "0", "4899");
c[4][4].e[1] = new iVe("4899", "4899", "1", "4899");

c[4][5] = new cV("Remote Anything","Remote Anything",2);
c[4][5].e[0] = new iVe("3999", "4000", "0", "3999");
c[4][5].e[1] = new iVe("3996", "3998", "1", "3996");

c[4][6] = new cV("Remote AnyWhere","Remote AnyWhere",1);
c[4][6].e[0] = new iVe("2000", "2000", "0", "2000");

c[4][7] = new cV("Remote Desktop Connection","Remote Desktop Connection",2);
c[4][7].e[0] = new iVe("3389", "3389", "0", "3389");
c[4][7].e[1] = new iVe("3389", "3389", "1", "3389");

c[4][8] = new cV("VNC","VNC",3);
c[4][8].e[0] = new iVe("5500", "5500", "0", "5500");
c[4][8].e[1] = new iVe("5800", "5800", "0", "5800");
c[4][8].e[2] = new iVe("5900", "5900", "0", "5900");

c[4][9] = new cV("Windows 2000 Terminal","Windows 2000 Terminal",2);
c[4][9].e[0] = new iVe("3389", "3389", "0", "3389");
c[4][9].e[1] = new iVe("3389", "3389", "1", "3389");

c[5][0] = new cV("DNS Server", "DNS Server", 1);
c[5][0].e[0] = new iVe("53", "53", "1", "53");

c[5][1] = new cV("FTP Server", "FTP Server", 2);
c[5][1].e[0] = new iVe("20", "20", "0", "20");
c[5][1].e[1] = new iVe("21", "21", "0", "21");

c[5][2] = new cV("IMAP Server", "IMAP Server", 3);
c[5][2].e[0] = new iVe("143", "143", "0", "143");
c[5][2].e[1] = new iVe("585", "585", "0", "585");
c[5][2].e[2] = new iVe("993", "993", "0", "993");

c[5][3] = new cV("IRC Server", "IRC Server", 3);
c[5][3].e[0] = new iVe("194", "194", "0", "194");
c[5][3].e[1] = new iVe("5100", "5100", "0", "5100");
c[5][3].e[2] = new iVe("6667", "6667", "0", "6667");

c[5][4] = new cV("LDAP Server", "LDAP Server", 2);
c[5][4].e[0] = new iVe("389", "389", "0", "389");
c[5][4].e[1] = new iVe("636", "636", "0", "636");

c[5][5] = new cV("Lotus", "Lotus", 1);
c[5][5].e[0] = new iVe("1352", "1352", "0", "1352");

c[5][6] = new cV("NNTP", "NNTP", 1);
c[5][6].e[0] = new iVe("119", "119", "0", "119");

c[5][7] = new cV("POP 2 Server", "POP 2 Server", 1);
c[5][7].e[0] = new iVe("109", "109", "0", "109");

c[5][8] = new cV("POP 3 Server", "POP 3 Server", 1);
c[5][8].e[0] = new iVe("110", "110", "0", "110");

c[5][9] = new cV("Remotely Possible Server", "Remotely Possible Server", 1);
c[5][9].e[0] = new iVe("799", "799", "0", "799");

c[5][10] = new cV("Quick Time 4 Server","Quick Time 4 Server",2);
c[5][10].e[0] = new iVe("554", "554", "0", "554");
c[5][10].e[1] = new iVe("6970", "7000", "1", "6970");

//c[5][11] = new cV("SMTP Mail Server", "SMTP Mail Server", 1);
//c[5][11].e[0] = new iVe("25", "25", "0", "25");

//c[5][12] = new cV("Telnet Server", "Telnet Server", 1);
//c[5][12].e[0] = new iVe("23", "23", "0", "23");

c[5][11] = new cV("Web Server", "Web Server", 2);
c[5][11].e[0] = new iVe("80", "80", "0", "80");
c[5][11].e[1] = new iVe("443", "443", "0", "443");

