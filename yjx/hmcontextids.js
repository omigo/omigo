﻿var hmContextIds = new Array();
function hmGetContextId(query) {
    var urlParams;
    var match,
        pl = /\+/g,
        search = /([^&=]+)=?([^&]*)/g,
        decode = function (s) { return decodeURIComponent(s.replace(pl, " ")); },
    params = {};
    while (match = search.exec(query))
       params[decode(match[1])] = decode(match[2]);
    if (params["contextid"]) return decodeURIComponent(hmContextIds[params["contextid"]]);
    else return "";
}

hmContextIds["1021"]="index.htm";
hmContextIds["1426"]="xxz2_x2-101.htm";
hmContextIds["1416"]="xxz2_x2-091.htm";
hmContextIds["1554"]="xxz9_x9-220.htm";
hmContextIds["1146"]="tsz_tsz-106.htm";
hmContextIds["1147"]="tsz_tsz-107.htm";
hmContextIds["1023"]="tp.htm";
hmContextIds["1000"]="image_tp1.htm";
hmContextIds["1011"]="image_tp2.htm";
hmContextIds["1013"]="image_tp3.htm";
hmContextIds["1014"]="image_tp4.htm";
hmContextIds["1015"]="image_tp5.htm";
hmContextIds["1016"]="image_tp6.htm";
hmContextIds["1017"]="image_tp7.htm";
hmContextIds["1018"]="image_tp8.htm";
hmContextIds["1019"]="image_tp9.htm";
hmContextIds["1001"]="image_tp10.htm";
hmContextIds["1002"]="image_tp11.htm";
hmContextIds["1003"]="image_tp12.htm";
hmContextIds["1004"]="image_tp13.htm";
hmContextIds["1005"]="image_tp14.htm";
hmContextIds["1006"]="image_tp15.htm";
hmContextIds["1007"]="image_tp16.htm";
hmContextIds["1008"]="image_tp17.htm";
hmContextIds["1009"]="image_tp18.htm";
hmContextIds["1010"]="image_tp19.htm";
hmContextIds["1012"]="image_tp20.htm";
hmContextIds["1149"]="tsz_tsz.htm";
hmContextIds["1042"]="tsz_tsz-001.htm";
hmContextIds["1043"]="tsz_tsz-002.htm";
hmContextIds["1044"]="tsz_tsz-003.htm";
hmContextIds["1045"]="tsz_tsz-004.htm";
hmContextIds["1046"]="tsz_tsz-005.htm";
hmContextIds["1047"]="tsz_tsz-006.htm";
hmContextIds["1048"]="tsz_tsz-007.htm";
hmContextIds["1049"]="tsz_tsz-008.htm";
hmContextIds["1050"]="tsz_tsz-009.htm";
hmContextIds["1051"]="tsz_tsz-010.htm";
hmContextIds["1052"]="tsz_tsz-011.htm";
hmContextIds["1053"]="tsz_tsz-013.htm";
hmContextIds["1054"]="tsz_tsz-014.htm";
hmContextIds["1055"]="tsz_tsz-015.htm";
hmContextIds["1056"]="tsz_tsz-016.htm";
hmContextIds["1057"]="tsz_tsz-017.htm";
hmContextIds["1058"]="tsz_tsz-018.htm";
hmContextIds["1059"]="tsz_tsz-019.htm";
hmContextIds["1060"]="tsz_tsz-020.htm";
hmContextIds["1061"]="tsz_tsz-021.htm";
hmContextIds["1062"]="tsz_tsz-022.htm";
hmContextIds["1063"]="tsz_tsz-023.htm";
hmContextIds["1064"]="tsz_tsz-024.htm";
hmContextIds["1065"]="tsz_tsz-025.htm";
hmContextIds["1066"]="tsz_tsz-026.htm";
hmContextIds["1067"]="tsz_tsz-027.htm";
hmContextIds["1068"]="tsz_tsz-028.htm";
hmContextIds["1069"]="tsz_tsz-029.htm";
hmContextIds["1070"]="tsz_tsz-030.htm";
hmContextIds["1071"]="tsz_tsz-031.htm";
hmContextIds["1072"]="tsz_tsz-032.htm";
hmContextIds["1073"]="tsz_tsz-033.htm";
hmContextIds["1074"]="tsz_tsz-034.htm";
hmContextIds["1075"]="tsz_tsz-035.htm";
hmContextIds["1076"]="tsz_tsz-036.htm";
hmContextIds["1077"]="tsz_tsz-037.htm";
hmContextIds["1078"]="tsz_tsz-038.htm";
hmContextIds["1079"]="tsz_tsz-039.htm";
hmContextIds["1080"]="tsz_tsz-040.htm";
hmContextIds["1081"]="tsz_tsz-041.htm";
hmContextIds["1082"]="tsz_tsz-042.htm";
hmContextIds["1083"]="tsz_tsz-043.htm";
hmContextIds["1084"]="tsz_tsz-044.htm";
hmContextIds["1085"]="tsz_tsz-045.htm";
hmContextIds["1086"]="tsz_tsz-046.htm";
hmContextIds["1087"]="tsz_tsz-047.htm";
hmContextIds["1088"]="tsz_tsz-048.htm";
hmContextIds["1089"]="tsz_tsz-049.htm";
hmContextIds["1090"]="tsz_tsz-050.htm";
hmContextIds["1091"]="tsz_tsz-051.htm";
hmContextIds["1092"]="tsz_tsz-052.htm";
hmContextIds["1093"]="tsz_tsz-053.htm";
hmContextIds["1094"]="tsz_tsz-054.htm";
hmContextIds["1095"]="tsz_tsz-055.htm";
hmContextIds["1096"]="tsz_tsz-056.htm";
hmContextIds["1097"]="tsz_tsz-057.htm";
hmContextIds["1098"]="tsz_tsz-058.htm";
hmContextIds["1099"]="tsz_tsz-059.htm";
hmContextIds["1100"]="tsz_tsz-060.htm";
hmContextIds["1101"]="tsz_tsz-061.htm";
hmContextIds["1102"]="tsz_tsz-062.htm";
hmContextIds["1103"]="tsz_tsz-063.htm";
hmContextIds["1104"]="tsz_tsz-064.htm";
hmContextIds["1105"]="tsz_tsz-065.htm";
hmContextIds["1106"]="tsz_tsz-066.htm";
hmContextIds["1107"]="tsz_tsz-067.htm";
hmContextIds["1108"]="tsz_tsz-068.htm";
hmContextIds["1109"]="tsz_tsz-069.htm";
hmContextIds["1110"]="tsz_tsz-070.htm";
hmContextIds["1111"]="tsz_tsz-071.htm";
hmContextIds["1112"]="tsz_tsz-072.htm";
hmContextIds["1113"]="tsz_tsz-073.htm";
hmContextIds["1114"]="tsz_tsz-074.htm";
hmContextIds["1115"]="tsz_tsz-075.htm";
hmContextIds["1116"]="tsz_tsz-076.htm";
hmContextIds["1117"]="tsz_tsz-077.htm";
hmContextIds["1118"]="tsz_tsz-078.htm";
hmContextIds["1119"]="tsz_tsz-079.htm";
hmContextIds["1120"]="tsz_tsz-080.htm";
hmContextIds["1121"]="tsz_tsz-081.htm";
hmContextIds["1122"]="tsz_tsz-082.htm";
hmContextIds["1123"]="tsz_tsz-083.htm";
hmContextIds["1124"]="tsz_tsz-084.htm";
hmContextIds["1125"]="tsz_tsz-085.htm";
hmContextIds["1126"]="tsz_tsz-086.htm";
hmContextIds["1127"]="tsz_tsz-087.htm";
hmContextIds["1128"]="tsz_tsz-088.htm";
hmContextIds["1129"]="tsz_tsz-089.htm";
hmContextIds["1130"]="tsz_tsz-090.htm";
hmContextIds["1131"]="tsz_tsz-091.htm";
hmContextIds["1132"]="tsz_tsz-092.htm";
hmContextIds["1133"]="tsz_tsz-093.htm";
hmContextIds["1134"]="tsz_tsz-094.htm";
hmContextIds["1135"]="tsz_tsz-095.htm";
hmContextIds["1136"]="tsz_tsz-096.htm";
hmContextIds["1137"]="tsz_tsz-097.htm";
hmContextIds["1138"]="tsz_tsz-098.htm";
hmContextIds["1139"]="tsz_tsz-099.htm";
hmContextIds["1140"]="tsz_tsz-100.htm";
hmContextIds["1141"]="tsz_tsz-101.htm";
hmContextIds["1142"]="tsz_tsz-102.htm";
hmContextIds["1143"]="tsz_tsz-103.htm";
hmContextIds["1144"]="tsz_tsz-104.htm";
hmContextIds["1145"]="tsz_tsz-105.htm";
hmContextIds["1148"]="tsz_tsz-108.htm";
hmContextIds["1036"]="tsz_jszyxf-01.htm";
hmContextIds["1150"]="tsz_zyxcf-01.htm";
hmContextIds["1032"]="tsz_fxysh-01.htm";
hmContextIds["1024"]="tsz_fxwd-01.htm";
hmContextIds["1151"]="tsz_zyxcf-02.htm";
hmContextIds["1037"]="tsz_jszyxf-02.htm";
hmContextIds["1033"]="tsz_fxysh-02.htm";
hmContextIds["1025"]="tsz_fxwd-02.htm";
hmContextIds["1038"]="tsz_jszyxf-03.htm";
hmContextIds["1152"]="tsz_zyxcf-03.htm";
hmContextIds["1026"]="tsz_fxwd-03.htm";
hmContextIds["1034"]="tsz_fxysh-03.htm";
hmContextIds["1039"]="tsz_jszyxf-04.htm";
hmContextIds["1035"]="tsz_fxysh-04.htm";
hmContextIds["1027"]="tsz_fxwd-04.htm";
hmContextIds["1153"]="tsz_zyxcf-04.htm";
hmContextIds["1040"]="tsz_jszyxf-05.htm";
hmContextIds["1028"]="tsz_fxwd-05.htm";
hmContextIds["1029"]="tsz_fxwd-06.htm";
hmContextIds["1030"]="tsz_fxwd-07.htm";
hmContextIds["1031"]="tsz_fxwd-08.htm";
hmContextIds["1041"]="tsz_smnjb.htm";
