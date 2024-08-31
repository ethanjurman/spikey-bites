const nutrients = [
  { id: "2047", name: "Energy (Atwater General Factors)", unitName: "KCAL" },
  { id: "2048", name: "Energy (Atwater Specific Factors)", unitName: "KCAL" },
  { id: "1001", name: "Solids", unitName: "G" },
  { id: "1002", name: "Nitrogen", unitName: "G" },
  { id: "1003", name: "Protein", unitName: "G" },
  { id: "1004", name: "Total lipid (fat)", unitName: "G" },
  { id: "1005", name: "Carbohydrate, by difference", unitName: "G" },
  { id: "1006", name: "Fiber, crude (DO NOT USE - Archived)", unitName: "G" },
  { id: "1007", name: "Ash", unitName: "G" },
  { id: "1008", name: "Energy", unitName: "KCAL" },
  { id: "1009", name: "Starch", unitName: "G" },
  { id: "1010", name: "Sucrose", unitName: "G" },
  { id: "1011", name: "Glucose", unitName: "G" },
  { id: "1012", name: "Fructose", unitName: "G" },
  { id: "1013", name: "Lactose", unitName: "G" },
  { id: "1014", name: "Maltose", unitName: "G" },
  { id: "1015", name: "Amylose", unitName: "G" },
  { id: "1016", name: "Amylopectin", unitName: "G" },
  { id: "1017", name: "Pectin", unitName: "G" },
  { id: "1018", name: "Alcohol, ethyl", unitName: "G" },
  { id: "1019", name: "Pentosan", unitName: "G" },
  { id: "1020", name: "Pentoses", unitName: "G" },
  { id: "1021", name: "Hemicellulose", unitName: "G" },
  { id: "1022", name: "Cellulose", unitName: "G" },
  { id: "1023", name: "pH", unitName: "PH" },
  { id: "1024", name: "Specific Gravity", unitName: "SP_GR" },
  { id: "1025", name: "Organic acids", unitName: "G" },
  { id: "1026", name: "Acetic acid", unitName: "MG" },
  { id: "1027", name: "Aconitic acid", unitName: "MG" },
  { id: "1028", name: "Benzoic acid", unitName: "MG" },
  { id: "1029", name: "Chelidonic acid", unitName: "MG" },
  { id: "1030", name: "Chlorogenic acid", unitName: "MG" },
  { id: "1031", name: "Cinnamic acid", unitName: "MG" },
  { id: "1032", name: "Citric acid", unitName: "MG" },
  { id: "1033", name: "Fumaric acid", unitName: "MG" },
  { id: "1034", name: "Galacturonic acid", unitName: "MG" },
  { id: "1035", name: "Gallic acid", unitName: "MG" },
  { id: "1036", name: "Glycolic acid", unitName: "MG" },
  { id: "1037", name: "Isocitric acid", unitName: "MG" },
  { id: "1038", name: "Lactic acid", unitName: "MG" },
  { id: "1039", name: "Malic acid", unitName: "MG" },
  { id: "1040", name: "Oxaloacetic acid", unitName: "MG" },
  { id: "1041", name: "Oxalic acid", unitName: "MG" },
  { id: "1042", name: "Phytic acid", unitName: "MG" },
  { id: "1043", name: "Pyruvic acid", unitName: "MG" },
  { id: "1044", name: "Quinic acid", unitName: "MG" },
  { id: "1045", name: "Salicylic acid", unitName: "MG" },
  { id: "1046", name: "Succinic acid", unitName: "MG" },
  { id: "1047", name: "Tartaric acid", unitName: "MG" },
  { id: "1048", name: "Ursolic acid", unitName: "MG" },
  { id: "1049", name: "Solids, non-fat", unitName: "G" },
  { id: "1050", name: "Carbohydrate, by summation", unitName: "G", },
  { id: "1051", name: "Water", unitName: "G" },
  { id: "1052", name: "Adjusted Nitrogen", unitName: "G" },
  { id: "1053", name: "Adjusted Protein", unitName: "G" },
  { id: "1054", name: "Piperine", unitName: "G" },
  { id: "1055", name: "Mannitol", unitName: "G" },
  { id: "1056", name: "Sorbitol", unitName: "G" },
  { id: "1057", name: "Caffeine", unitName: "MG" },
  { id: "1058", name: "Theobromine", unitName: "MG" },
  { id: "1059", name: "Nitrates", unitName: "MG" },
  { id: "1060", name: "Nitrites", unitName: "MG" },
  { id: "1061", name: "Nitrosamine,total", unitName: "MG" },
  { id: "1062", name: "Energy", unitName: "kJ" },
  { id: "1063", name: "Sugars, Total", unitName: "G", },
  { id: "1064", name: "Solids, soluble", unitName: "G" },
  { id: "1065", name: "Glycogen", unitName: "G" },
  { id: "1066", name: "Fiber, neutral detergent (DO NOT USE - Archived)", unitName: "G" },
  { id: "1067", name: "Reducing sugars", unitName: "G" },
  { id: "1068", name: "Beta-glucans", unitName: "G" },
  { id: "1069", name: "Oligosaccharides", unitName: "G" },
  { id: "1070", name: "Nonstarch polysaccharides", unitName: "G" },
  { id: "1071", name: "Resistant starch", unitName: "G" },
  { id: "1072", name: "Carbohydrate, other", unitName: "G" },
  { id: "1073", name: "Arabinose", unitName: "G" },
  { id: "1074", name: "Xylose", unitName: "G" },
  { id: "1075", name: "Galactose", unitName: "G" },
  { id: "1076", name: "Raffinose", unitName: "G" },
  { id: "1077", name: "Stachyose", unitName: "G" },
  { id: "1078", name: "Xylitol", unitName: "G" },
  { id: "1079", name: "Fiber, total dietary", unitName: "G" },
  { id: "1080", name: "Lignin", unitName: "G" },
  { id: "1081", name: "Ribose", unitName: "G" },
  { id: "1082", name: "Fiber, soluble", unitName: "G" },
  { id: "1083", name: "Theophylline", unitName: "MG" },
  { id: "1084", name: "Fiber, insoluble", unitName: "G" },
  { id: "1085", name: "Total fat (NLEA)", unitName: "G" },
  { id: "1086", name: "Total sugar alcohols", unitName: "G" },
  { id: "1087", name: "Calcium, Ca", unitName: "MG" },
  { id: "1088", name: "Chlorine, Cl", unitName: "MG" },
  { id: "1089", name: "Iron, Fe", unitName: "MG" },
  { id: "1090", name: "Magnesium, Mg", unitName: "MG" },
  { id: "1091", name: "Phosphorus, P", unitName: "MG" },
  { id: "1092", name: "Potassium, K", unitName: "MG" },
  { id: "1093", name: "Sodium, Na", unitName: "MG" },
  { id: "1094", name: "Sulfur, S", unitName: "MG" },
  { id: "1095", name: "Zinc, Zn", unitName: "MG" },
  { id: "1096", name: "Chromium, Cr", unitName: "UG" },
  { id: "1097", name: "Cobalt, Co", unitName: "UG" },
  { id: "1098", name: "Copper, Cu", unitName: "MG" },
  { id: "1099", name: "Fluoride, F", unitName: "UG" },
  { id: "1100", name: "Iodine, I", unitName: "UG" },
  { id: "1101", name: "Manganese, Mn", unitName: "MG" },
  { id: "1102", name: "Molybdenum, Mo", unitName: "UG" },
  { id: "1103", name: "Selenium, Se", unitName: "UG" },
  { id: "1104", name: "Vitamin A, IU", unitName: "IU" },
  { id: "1105", name: "Retinol", unitName: "UG" },
  { id: "1106", name: "Vitamin A, RAE", unitName: "UG" },
  { id: "1107", name: "Carotene, beta", unitName: "UG" },
  { id: "1108", name: "Carotene, alpha", unitName: "UG" },
  { id: "1109", name: "Vitamin E (alpha-tocopherol)", unitName: "MG" },
  { id: "1110", name: "Vitamin D (D2 + D3), International Units", unitName: "IU" },
  { id: "1111", name: "Vitamin D2 (ergocalciferol)", unitName: "UG" },
  { id: "1112", name: "Vitamin D3 (cholecalciferol)", unitName: "UG" },
  { id: "1113", name: "25-hydroxycholecalciferol", unitName: "UG" },
  { id: "1114", name: "Vitamin D (D2 + D3)", unitName: "UG" },
  { id: "1115", name: "25-hydroxyergocalciferol", unitName: "UG" },
  { id: "1116", name: "Phytoene", unitName: "UG" },
  { id: "1117", name: "Phytofluene", unitName: "UG" },
  { id: "1118", name: "Carotene, gamma", unitName: "UG" },
  { id: "1119", name: "Zeaxanthin", unitName: "UG", },
  { id: "1120", name: "Cryptoxanthin, beta", unitName: "UG" },
  { id: "1121", name: "Lutein", unitName: "UG", },
  { id: "1122", name: "Lycopene", unitName: "UG" },
  { id: "1123", name: "Lutein + zeaxanthin", unitName: "UG" },
  { id: "1124", name: "Vitamin E (label entry primarily)", unitName: "IU" },
  { id: "1125", name: "Tocopherol, beta", unitName: "MG" },
  { id: "1126", name: "Tocopherol, gamma", unitName: "MG" },
  { id: "1127", name: "Tocopherol, delta", unitName: "MG" },
  { id: "1128", name: "Tocotrienol, alpha", unitName: "MG" },
  { id: "1129", name: "Tocotrienol, beta", unitName: "MG" },
  { id: "1130", name: "Tocotrienol, gamma", unitName: "MG" },
  { id: "1131", name: "Tocotrienol, delta", unitName: "MG" },
  { id: "1132", name: "Aluminum, Al", unitName: "UG" },
  { id: "1133", name: "Antimony, Sb", unitName: "UG" },
  { id: "1134", name: "Arsenic, As", unitName: "UG" },
  { id: "1135", name: "Barium, Ba", unitName: "UG" },
  { id: "1136", name: "Beryllium, Be", unitName: "UG" },
  { id: "1137", name: "Boron, B", unitName: "UG" },
  { id: "1138", name: "Bromine, Br", unitName: "UG" },
  { id: "1139", name: "Cadmium, Cd", unitName: "UG" },
  { id: "1140", name: "Gold, Au", unitName: "UG" },
  { id: "1141", name: "Iron, heme", unitName: "MG" },
  { id: "1142", name: "Iron, non-heme", unitName: "MG" },
  { id: "1143", name: "Lead, Pb", unitName: "UG" },
  { id: "1144", name: "Lithium, Li", unitName: "UG" },
  { id: "1145", name: "Mercury, Hg", unitName: "UG" },
  { id: "1146", name: "Nickel, Ni", unitName: "UG" },
  { id: "1147", name: "Rubidium, Rb", unitName: "UG" },
  { id: "1148", name: "Fluoride - DO NOT USE; use 313", unitName: "UG" },
  { id: "1149", name: "Salt, NaCl", unitName: "MG" },
  { id: "1150", name: "Silicon, Si", unitName: "UG" },
  { id: "1151", name: "Silver, Ag", unitName: "UG" },
  { id: "1152", name: "Strontium, Sr", unitName: "UG" },
  { id: "1153", name: "Tin, Sn", unitName: "UG" },
  { id: "1154", name: "Titanium, Ti", unitName: "UG" },
  { id: "1155", name: "Vanadium, V", unitName: "UG" },
  { id: "1156", name: "Vitamin A, RE", unitName: "MCG_RE" },
  { id: "1157", name: "Carotene", unitName: "MCG_RE" },
  { id: "1158", name: "Vitamin E", unitName: "MG_ATE" },
  { id: "1159", name: "cis-beta-Carotene", unitName: "UG" },
  { id: "1160", name: "cis-Lycopene", unitName: "UG" },
  { id: "1161", name: "cis-Lutein/Zeaxanthin", unitName: "UG", },
  { id: "1162", name: "Vitamin C, total ascorbic acid", unitName: "MG" },
  { id: "1163", name: "Vitamin C, reduced ascorbic acid", unitName: "MG" },
  { id: "1164", name: "Vitamin C, dehydro ascorbic acid", unitName: "MG" },
  { id: "1165", name: "Thiamin", unitName: "MG" },
  { id: "1166", name: "Riboflavin", unitName: "MG" },
  { id: "1167", name: "Niacin", unitName: "MG" },
  { id: "1168", name: "Niacin from tryptophan, determined", unitName: "MG" },
  { id: "1169", name: "Niacin equivalent N406 +N407", unitName: "MG" },
  { id: "1170", name: "Pantothenic acid", unitName: "MG" },
  { id: "1171", name: "Vitamin B-6, pyridoxine, alcohol form", unitName: "MG" },
  { id: "1172", name: "Vitamin B-6, pyridoxal, aldehyde form", unitName: "MG" },
  { id: "1173", name: "Vitamin B-6, pyridoxamine, amine form", unitName: "MG" },
  { id: "1174", name: "Vitamin B-6, N411 + N412 +N413", unitName: "MG" },
  { id: "1175", name: "Vitamin B-6", unitName: "MG" },
  { id: "1176", name: "Biotin", unitName: "UG" },
  { id: "1177", name: "Folate, total", unitName: "UG" },
  { id: "1178", name: "Vitamin B-12", unitName: "UG" },
  { id: "1179", name: "Folate, free", unitName: "UG" },
  { id: "1180", name: "Choline, total", unitName: "MG" },
  { id: "1181", name: "Inositol", unitName: "MG" },
  { id: "1182", name: "Inositol phosphate", unitName: "MG" },
  { id: "1183", name: "Vitamin K (Menaquinone-4)", unitName: "UG" },
  { id: "1184", name: "Vitamin K (Dihydrophylloquinone)", unitName: "UG" },
  { id: "1185", name: "Vitamin K (phylloquinone)", unitName: "UG" },
  { id: "1186", name: "Folic acid", unitName: "UG" },
  { id: "1187", name: "Folate, food", unitName: "UG" },
  { id: "1188", name: "5-methyl tetrahydrofolate (5-MTHF)", unitName: "UG" },
  { id: "1189", name: "Folate, not 5-MTHF", unitName: "UG" },
  { id: "1190", name: "Folate, DFE", unitName: "UG" },
  { id: "1191", name: "10-Formyl folic acid (10HCOFA)", unitName: "UG" },
  { id: "1192", name: "5-Formyltetrahydrofolic acid (5-HCOH4", unitName: "UG" },
  { id: "1193", name: "Tetrahydrofolic acid (THF)", unitName: "UG" },
  { id: "1194", name: "Choline, free", unitName: "MG" },
  { id: "1195", name: "Choline, from phosphocholine", unitName: "MG" },
  { id: "1196", name: "Choline, from phosphotidyl choline", unitName: "MG" },
  { id: "1197", name: "Choline, from glycerophosphocholine", unitName: "MG" },
  { id: "1198", name: "Betaine", unitName: "MG" },
  { id: "1199", name: "Choline, from sphingomyelin", unitName: "MG" },
  { id: "1200", name: "p-Hydroxy benzoic acid", unitName: "MG" },
  { id: "1201", name: "Caffeic acid", unitName: "MG" },
  { id: "1202", name: "p-Coumaric acid", unitName: "MG" },
  { id: "1203", name: "Ellagic acid", unitName: "MG" },
  { id: "1204", name: "Ferrulic acid", unitName: "MG" },
  { id: "1205", name: "Gentisic acid", unitName: "MG" },
  { id: "1206", name: "Tyrosol", unitName: "MG" },
  { id: "1207", name: "Vanillic acid", unitName: "MG" },
  { id: "1208", name: "Phenolic acids, total", unitName: "MG" },
  { id: "1209", name: "Polyphenols, total", unitName: "MG" },
  { id: "1210", name: "Tryptophan", unitName: "G" },
  { id: "1211", name: "Threonine", unitName: "G" },
  { id: "1212", name: "Isoleucine", unitName: "G" },
  { id: "1213", name: "Leucine", unitName: "G" },
  { id: "1214", name: "Lysine", unitName: "G" },
  { id: "1215", name: "Methionine", unitName: "G" },
  { id: "1216", name: "Cystine", unitName: "G" },
  { id: "1217", name: "Phenylalanine", unitName: "G" },
  { id: "1218", name: "Tyrosine", unitName: "G" },
  { id: "1219", name: "Valine", unitName: "G" },
  { id: "1220", name: "Arginine", unitName: "G" },
  { id: "1221", name: "Histidine", unitName: "G" },
  { id: "1222", name: "Alanine", unitName: "G" },
  { id: "1223", name: "Aspartic acid", unitName: "G" },
  { id: "1224", name: "Glutamic acid", unitName: "G" },
  { id: "1225", name: "Glycine", unitName: "G" },
  { id: "1226", name: "Proline", unitName: "G" },
  { id: "1227", name: "Serine", unitName: "G" },
  { id: "1228", name: "Hydroxyproline", unitName: "G" },
  { id: "1229", name: "Cysteine and methionine(sulfer containig AA)", unitName: "G" },
  { id: "1230", name: "Phenylalanine and tyrosine (aromatic  AA)", unitName: "G" },
  { id: "1231", name: "Asparagine", unitName: "G" },
  { id: "1232", name: "Cysteine", unitName: "G" },
  { id: "1233", name: "Glutamine", unitName: "G" },
  { id: "1234", name: "Taurine", unitName: "G" },
  { id: "1235", name: "Sugars, added", unitName: "G" },
  { id: "1236", name: "Sugars, intrinsic", unitName: "G" },
  { id: "1237", name: "Calcium, added", unitName: "MG" },
  { id: "1238", name: "Iron, added", unitName: "MG" },
  { id: "1239", name: "Calcium, intrinsic", unitName: "MG" },
  { id: "1240", name: "Iron, intrinsic", unitName: "MG" },
  { id: "1241", name: "Vitamin C, added", unitName: "MG" },
  { id: "1242", name: "Vitamin E, added", unitName: "MG" },
  { id: "1243", name: "Thiamin, added", unitName: "MG" },
  { id: "1244", name: "Riboflavin, added", unitName: "MG" },
  { id: "1245", name: "Niacin, added", unitName: "MG" },
  { id: "1246", name: "Vitamin B-12, added", unitName: "UG" },
  { id: "1247", name: "Vitamin C, intrinsic", unitName: "MG" },
  { id: "1248", name: "Vitamin E, intrinsic", unitName: "MG" },
  { id: "1249", name: "Thiamin, intrinsic", unitName: "MG" },
  { id: "1250", name: "Riboflavin, intrinsic", unitName: "MG" },
  { id: "1251", name: "Niacin, intrinsic", unitName: "MG" },
  { id: "1252", name: "Vitamin B-12, intrinsic", unitName: "UG" },
  { id: "1253", name: "Cholesterol", unitName: "MG" },
  { id: "1254", name: "Glycerides", unitName: "G" },
  { id: "1255", name: "Phospholipids", unitName: "G" },
  { id: "1256", name: "Glycolipids", unitName: "G" },
  { id: "1257", name: "Fatty acids, total trans", unitName: "G" },
  { id: "1258", name: "Fatty acids, total saturated", unitName: "G" },
  { id: "1259", name: "SFA 4:0", unitName: "G" },
  { id: "1260", name: "SFA 6:0", unitName: "G" },
  { id: "1261", name: "SFA 8:0", unitName: "G" },
  { id: "1262", name: "SFA 10:0", unitName: "G" },
  { id: "1263", name: "SFA 12:0", unitName: "G" },
  { id: "1264", name: "SFA 14:0", unitName: "G" },
  { id: "1265", name: "SFA 16:0", unitName: "G" },
  { id: "1266", name: "SFA 18:0", unitName: "G" },
  { id: "1267", name: "SFA 20:0", unitName: "G" },
  { id: "1268", name: "MUFA 18:1", unitName: "G" },
  { id: "1269", name: "PUFA 18:2", unitName: "G" },
  { id: "1270", name: "PUFA 18:3", unitName: "G" },
  { id: "1271", name: "PUFA 20:4", unitName: "G" },
  { id: "1272", name: "PUFA 22:6 n-3 (DHA)", unitName: "G" },
  { id: "1273", name: "SFA 22:0", unitName: "G" },
  { id: "1274", name: "MUFA 14:1", unitName: "G" },
  { id: "1275", name: "MUFA 16:1", unitName: "G" },
  { id: "1276", name: "PUFA 18:4", unitName: "G" },
  { id: "1277", name: "MUFA 20:1", unitName: "G" },
  { id: "1278", name: "PUFA 20:5 n-3 (EPA)", unitName: "G" },
  { id: "1279", name: "MUFA 22:1", unitName: "G" },
  { id: "1280", name: "PUFA 22:5 n-3 (DPA)", unitName: "G" },
  { id: "1281", name: "TFA 14:1 t", unitName: "G" },
  { id: "1283", name: "Phytosterols", unitName: "MG" },
  { id: "1284", name: "Ergosterol", unitName: "MG" },
  { id: "1285", name: "Stigmasterol", unitName: "MG" },
  { id: "1286", name: "Campesterol", unitName: "MG" },
  { id: "1287", name: "Brassicasterol", unitName: "MG" },
  { id: "1288", name: "Beta-sitosterol", unitName: "MG" },
  { id: "1289", name: "Campestanol", unitName: "MG" },
  { id: "1290", name: "Unsaponifiable matter (lipids)", unitName: "G" },
  { id: "1291", name: "Fatty acids, other than 607-615, 617-621, 624-632, 652-654, 686-689)", unitName: "G" },
  { id: "1292", name: "Fatty acids, total monounsaturated", unitName: "G" },
  { id: "1293", name: "Fatty acids, total polyunsaturated", unitName: "G" },
  { id: "1294", name: "Beta-sitostanol", unitName: "MG" },
  { id: "1295", name: "Delta-7-avenasterol", unitName: "MG" },
  { id: "1296", name: "Delta-5-avenasterol", unitName: "MG" },
  { id: "1297", name: "Alpha-spinasterol", unitName: "MG" },
  { id: "1298", name: "Phytosterols, other", unitName: "MG" },
  { id: "1299", name: "SFA 15:0", unitName: "G" },
  { id: "1300", name: "SFA 17:0", unitName: "G" },
  { id: "1301", name: "SFA 24:0", unitName: "G" },
  { id: "1302", name: "Wax Esters(Total Wax)", unitName: "G" },
  { id: "1303", name: "TFA 16:1 t", unitName: "G" },
  { id: "1304", name: "TFA 18:1 t", unitName: "G" },
  { id: "1305", name: "TFA 22:1 t", unitName: "G" },
  { id: "1306", name: "TFA 18:2 t not further defined", unitName: "G" },
  { id: "1307", name: "PUFA 18:2 i", unitName: "G" },
  { id: "1308", name: "PUFA 18:2 t,c", unitName: "G" },
  { id: "1309", name: "PUFA 18:2 c,t", unitName: "G" },
  { id: "1310", name: "TFA 18:2 t,t", unitName: "G" },
  { id: "1311", name: "PUFA 18:2 CLAs", unitName: "G" },
  { id: "1312", name: "MUFA 24:1 c", unitName: "G" },
  { id: "1313", name: "PUFA 20:2 n-6 c,c", unitName: "G" },
  { id: "1314", name: "MUFA 16:1 c", unitName: "G" },
  { id: "1315", name: "MUFA 18:1 c", unitName: "G" },
  { id: "1316", name: "PUFA 18:2 n-6 c,c", unitName: "G" },
  { id: "1317", name: "MUFA 22:1 c", unitName: "G" },
  { id: "1318", name: "Fatty acids, saturated, other", unitName: "G" },
  { id: "1319", name: "Fatty acids, monounsat., other", unitName: "G" },
  { id: "1320", name: "Fatty acids, polyunsat., other", unitName: "G" },
  { id: "1321", name: "PUFA 18:3 n-6 c,c,c", unitName: "G" },
  { id: "1322", name: "SFA 19:0", unitName: "G" },
  { id: "1323", name: "MUFA 17:1", unitName: "G" },
  { id: "1324", name: "PUFA 16:2", unitName: "G" },
  { id: "1325", name: "PUFA 20:3", unitName: "G" },
  { id: "1326", name: "Fatty acids, total sat., NLEA", unitName: "G" },
  { id: "1327", name: "Fatty acids, total monounsat., NLEA", unitName: "G" },
  { id: "1328", name: "Fatty acids, total polyunsat., NLEA", unitName: "G" },
  { id: "1329", name: "Fatty acids, total trans-monoenoic", unitName: "G" },
  { id: "1330", name: "Fatty acids, total trans-dienoic", unitName: "G" },
  { id: "1331", name: "Fatty acids, total trans-polyenoic", unitName: "G" },
  { id: "1332", name: "SFA 13:0", unitName: "G" },
  { id: "1333", name: "MUFA 15:1", unitName: "G" },
  { id: "1334", name: "PUFA 22:2", unitName: "G" },
  { id: "1335", name: "SFA 11:0", unitName: "G" },
  { id: "1336", name: "ORAC, Hydrophyllic", unitName: "UMOL_TE", },
  { id: "1337", name: "ORAC, Lipophillic", unitName: "UMOL_TE", },
  { id: "1338", name: "ORAC, Total", unitName: "UMOL_TE", },
  { id: "1339", name: "Total Phenolics", unitName: "MG_GAE", },
  { id: "1340", name: "Daidzein", unitName: "MG" },
  { id: "1341", name: "Genistein", unitName: "MG" },
  { id: "1342", name: "Glycitein", unitName: "MG" },
  { id: "1343", name: "Isoflavones", unitName: "MG" },
  { id: "1344", name: "Biochanin A", unitName: "MG" },
  { id: "1345", name: "Formononetin", unitName: "MG" },
  { id: "1346", name: "Coumestrol", unitName: "MG" },
  { id: "1347", name: "Flavonoids, total", unitName: "MG" },
  { id: "1348", name: "Anthocyanidins", unitName: "MG" },
  { id: "1349", name: "Cyanidin", unitName: "MG" },
  { id: "1350", name: "Proanthocyanidin (dimer-A linkage)", unitName: "MG" },
  { id: "1351", name: "Proanthocyanidin monomers", unitName: "MG" },
  { id: "1352", name: "Proanthocyanidin dimers", unitName: "MG" },
  { id: "1353", name: "Proanthocyanidin trimers", unitName: "MG" },
  { id: "1354", name: "Proanthocyanidin 4-6mers", unitName: "MG" },
  { id: "1355", name: "Proanthocyanidin 7-10mers", unitName: "MG" },
  { id: "1356", name: "Proanthocyanidin polymers (>10mers)", unitName: "MG" },
  { id: "1357", name: "Delphinidin", unitName: "MG" },
  { id: "1358", name: "Malvidin", unitName: "MG" },
  { id: "1359", name: "Pelargonidin", unitName: "MG" },
  { id: "1360", name: "Peonidin", unitName: "MG" },
  { id: "1361", name: "Petunidin", unitName: "MG" },
  { id: "1362", name: "Flavans, total", unitName: "MG" },
  { id: "1363", name: "Catechins, total", unitName: "MG" },
  { id: "1364", name: "Catechin", unitName: "MG" },
  { id: "1365", name: "Epigallocatechin", unitName: "MG" },
  { id: "1366", name: "Epicatechin", unitName: "MG" },
  { id: "1367", name: "Epicatechin-3-gallate", unitName: "MG" },
  { id: "1368", name: "Epigallocatechin-3-gallate", unitName: "MG" },
  { id: "1369", name: "Procyanidins, total", unitName: "MG" },
  { id: "1370", name: "Theaflavins", unitName: "MG" },
  { id: "1371", name: "Thearubigins", unitName: "MG" },
  { id: "1372", name: "Flavanones, total", unitName: "MG" },
  { id: "1373", name: "Eriodictyol", unitName: "MG" },
  { id: "1374", name: "Hesperetin", unitName: "MG" },
  { id: "1375", name: "Isosakuranetin", unitName: "MG" },
  { id: "1376", name: "Liquiritigenin", unitName: "MG" },
  { id: "1377", name: "Naringenin", unitName: "MG" },
  { id: "1378", name: "Flavones, total", unitName: "MG" },
  { id: "1379", name: "Apigenin", unitName: "MG" },
  { id: "1380", name: "Chrysoeriol", unitName: "MG" },
  { id: "1381", name: "Diosmetin", unitName: "MG" },
  { id: "1382", name: "Luteolin", unitName: "MG" },
  { id: "1383", name: "Nobiletin", unitName: "MG" },
  { id: "1384", name: "Sinensetin", unitName: "MG" },
  { id: "1385", name: "Tangeretin", unitName: "MG" },
  { id: "1386", name: "Flavonols, total", unitName: "MG" },
  { id: "1387", name: "Isorhamnetin", unitName: "MG" },
  { id: "1388", name: "Kaempferol", unitName: "MG" },
  { id: "1389", name: "Limocitrin", unitName: "MG" },
  { id: "1390", name: "Myricetin", unitName: "MG" },
  { id: "1391", name: "Quercetin", unitName: "MG" },
  { id: "1392", name: "Theogallin", unitName: "MG" },
  { id: "1393", name: "Theaflavin -3,3' -digallate", unitName: "MG" },
  { id: "1394", name: "Theaflavin -3' -gallate", unitName: "MG", },
  { id: "1395", name: "Theaflavin -3 -gallate", unitName: "MG", },
  { id: "1396", name: "(+) -Gallo catechin", unitName: "MG", },
  { id: "1397", name: "(+)-Catechin 3-gallate", unitName: "MG", },
  { id: "1398", name: "(+)-Gallocatechin 3-gallate", unitName: "MG", },
  { id: "1399", name: "Mannose", unitName: "G" },
  { id: "1400", name: "Triose", unitName: "G" },
  { id: "1401", name: "Tetrose", unitName: "G" },
  { id: "1402", name: "Other Saccharides", unitName: "G" },
  { id: "1403", name: "Inulin", unitName: "G" },
  { id: "1404", name: "PUFA 18:3 n-3 c,c,c (ALA)", unitName: "G" },
  { id: "1405", name: "PUFA 20:3 n-3", unitName: "G" },
  { id: "1406", name: "PUFA 20:3 n-6", unitName: "G" },
  { id: "1407", name: "PUFA 20:4 n-3", unitName: "G" },
  { id: "1408", name: "PUFA 20:4 n-6", unitName: "G" },
  { id: "1409", name: "PUFA 18:3i", unitName: "G" },
  { id: "1410", name: "PUFA 21:5", unitName: "G" },
  { id: "1411", name: "PUFA 22:4", unitName: "G" },
  { id: "1412", name: "MUFA 18:1-11 t (18:1t n-7)", unitName: "G" },
  { id: "1413", name: "MUFA 18:1-11 c (18:1c n-7)", unitName: "G" },
  { id: "1414", name: "PUFA 20:3 n-9", unitName: "G" },
  { id: "2000", name: "Total Sugars", unitName: "G" },
  { id: "2003", name: "SFA 5:0", unitName: "G" },
  { id: "2004", name: "SFA 7:0", unitName: "G" },
  { id: "2005", name: "SFA 9:0", unitName: "G" },
  { id: "2006", name: "SFA 21:0", unitName: "G" },
  { id: "2007", name: "SFA 23:0", unitName: "G" },
  { id: "2008", name: "MUFA 12:1", unitName: "G" },
  { id: "2009", name: "MUFA 14:1 c", unitName: "G" },
  { id: "2010", name: "MUFA 17:1 c", unitName: "G" },
  { id: "2011", name: "TFA 17:1 t", unitName: "G" },
  { id: "2012", name: "MUFA 20:1 c", unitName: "G" },
  { id: "2013", name: "TFA 20:1 t", unitName: "G" },
  { id: "2014", name: "MUFA 22:1 n-9", unitName: "G" },
  { id: "2015", name: "MUFA 22:1 n-11", unitName: "G" },
  { id: "2016", name: "PUFA 18:2 c", unitName: "G" },
  { id: "2017", name: "TFA 18:2 t", unitName: "G" },
  { id: "2018", name: "PUFA 18:3 c", unitName: "G" },
  { id: "2019", name: "TFA 18:3 t", unitName: "G" },
  { id: "2020", name: "PUFA 20:3 c", unitName: "G" },
  { id: "2021", name: "PUFA 22:3", unitName: "G" },
  { id: "2022", name: "PUFA 20:4c", unitName: "G" },
  { id: "2023", name: "PUFA 20:5c", unitName: "G" },
  { id: "2024", name: "PUFA 22:5 c", unitName: "G" },
  { id: "2025", name: "PUFA 22:6 c", unitName: "G" },
  { id: "2026", name: "PUFA 20:2 c", unitName: "G" },
  { id: "2027", name: "Proximate", unitName: "G" },
  { id: "2028", name: "trans-beta-Carotene", unitName: "UG" },
  { id: "2029", name: "trans-Lycopene", unitName: "UG", },
  { id: "2032", name: "Cryptoxanthin, alpha", unitName: "UG" },
  { id: "2033", name: "Total dietary fiber (AOAC 2011.25)", unitName: "G" },
  { id: "2034", name: "Insoluble dietary fiber (IDF)", unitName: "G", },
  { id: "2035", name: "Soluble dietary fiber (SDFP+SDFS)", unitName: "G", },
  { id: "2036", name: "Soluble dietary fiber (SDFP)", unitName: "G" },
  { id: "2037", name: "Soluble dietary fiber (SDFS)", unitName: "G" },
  { id: "2038", name: "High Molecular Weight Dietary Fiber (HMWDF)", unitName: "G" },
  { id: "2039", name: "Carbohydrates", unitName: "G" },
  { id: "2040", name: "Other carotenoids", unitName: "UG" },
  { id: "2041", name: "Tocopherols and tocotrienols", unitName: "MG", },
  { id: "2042", name: "Amino acids", unitName: "G" },
  { id: "2043", name: "Minerals", unitName: "MG" },
  { id: "2044", name: "Lipids", unitName: "G" },
  { id: "2045", name: "Proximates", unitName: "G" },
  { id: "2046", name: "Vitamins and Other Components", unitName: "G" },
  { id: "2055", name: "Total Tocopherols", unitName: "MG" },
  { id: "2054", name: "Total Tocotrienols", unitName: "MG" },
  { id: "2053", name: "Stigmastadiene", unitName: "MG" },
  { id: "2052", name: "Delta-7-Stigmastenol", unitName: "MG" },
  { id: "2049", name: "Daidzin", unitName: "MG" },
  { id: "2050", name: "Genistin", unitName: "MG" },
  { id: "2051", name: "Glycitin", unitName: "MG" },
  { id: "2057", name: "Ergothioneine", unitName: "MG" },
  { id: "2058", name: "Beta-glucan", unitName: "G" },
  { id: "2059", name: "Vitamin D4", unitName: "UG" },
  { id: "2060", name: "Ergosta-7-enol", unitName: "MG" },
  { id: "2061", name: "Ergosta-7,22-dienol", unitName: "MG" },
  { id: "2062", name: "Ergosta-5,7-dienol", unitName: "MG" },
  { id: "2063", name: "Verbascose", unitName: "G" },
  { id: "2064", name: "Oligosaccharides", unitName: "MG" },
  { id: "2065", name: "Low Molecular Weight Dietary Fiber (LMWDF)", unitName: "G" },
  { id: "2068", name: "Vitamin E", unitName: "MG" },
  { id: "2067", name: "Vitamin A", unitName: "UG" },
  { id: "2069", name: "Glutathione", unitName: "MG" },
]

const nutrientsElement = document.getElementById("nutrients")
nutrients.forEach(item => {
  const newOption = document.createElement("option")
  newOption.value = `${item.name} (${item.unitName})`;
  nutrientsElement.appendChild(newOption)
})