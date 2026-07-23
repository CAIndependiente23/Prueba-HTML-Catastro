var wms_layers = [];

var format_CABAMANZANAS_0 = new ol.format.GeoJSON();
var features_CABAMANZANAS_0 = format_CABAMANZANAS_0.readFeatures(json_CABAMANZANAS_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABAMANZANAS_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABAMANZANAS_0.addFeatures(features_CABAMANZANAS_0);
var lyr_CABAMANZANAS_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CABAMANZANAS_0, 
                style: style_CABAMANZANAS_0,
                popuplayertitle: 'CABA MANZANAS',
                interactive: true,
                title: '<img src="styles/legend/CABAMANZANAS_0.png" /> CABA MANZANAS'
            });
var format_ESPVERDEPB_1 = new ol.format.GeoJSON();
var features_ESPVERDEPB_1 = format_ESPVERDEPB_1.readFeatures(json_ESPVERDEPB_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPVERDEPB_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPVERDEPB_1.addFeatures(features_ESPVERDEPB_1);
var lyr_ESPVERDEPB_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPVERDEPB_1, 
                style: style_ESPVERDEPB_1,
                popuplayertitle: 'ESP VERDE PÚB',
                interactive: true,
                title: '<img src="styles/legend/ESPVERDEPB_1.png" /> ESP VERDE PÚB'
            });
var format_BP_2 = new ol.format.GeoJSON();
var features_BP_2 = format_BP_2.readFeatures(json_BP_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_BP_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_BP_2.addFeatures(features_BP_2);
var lyr_BP_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_BP_2, 
                style: style_BP_2,
                popuplayertitle: 'BP',
                interactive: true,
                title: '<img src="styles/legend/BP_2.png" /> BP'
            });
var format_ESPVERDESCAT_3 = new ol.format.GeoJSON();
var features_ESPVERDESCAT_3 = format_ESPVERDESCAT_3.readFeatures(json_ESPVERDESCAT_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPVERDESCAT_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPVERDESCAT_3.addFeatures(features_ESPVERDESCAT_3);
var lyr_ESPVERDESCAT_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPVERDESCAT_3, 
                style: style_ESPVERDESCAT_3,
                popuplayertitle: 'ESP VERDES CAT',
                interactive: true,
                title: '<img src="styles/legend/ESPVERDESCAT_3.png" /> ESP VERDES CAT'
            });
var format_ESPVERDEPRIVADO_4 = new ol.format.GeoJSON();
var features_ESPVERDEPRIVADO_4 = format_ESPVERDEPRIVADO_4.readFeatures(json_ESPVERDEPRIVADO_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ESPVERDEPRIVADO_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ESPVERDEPRIVADO_4.addFeatures(features_ESPVERDEPRIVADO_4);
var lyr_ESPVERDEPRIVADO_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ESPVERDEPRIVADO_4, 
                style: style_ESPVERDEPRIVADO_4,
                popuplayertitle: 'ESP VERDE PRIVADO',
                interactive: true,
                title: '<img src="styles/legend/ESPVERDEPRIVADO_4.png" /> ESP VERDE PRIVADO'
            });
var format_Autopistas_5 = new ol.format.GeoJSON();
var features_Autopistas_5 = format_Autopistas_5.readFeatures(json_Autopistas_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Autopistas_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Autopistas_5.addFeatures(features_Autopistas_5);
var lyr_Autopistas_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Autopistas_5, 
                style: style_Autopistas_5,
                popuplayertitle: 'Autopistas',
                interactive: true,
                title: '<img src="styles/legend/Autopistas_5.png" /> Autopistas'
            });
var format_CABASILUETA_6 = new ol.format.GeoJSON();
var features_CABASILUETA_6 = format_CABASILUETA_6.readFeatures(json_CABASILUETA_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CABASILUETA_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CABASILUETA_6.addFeatures(features_CABASILUETA_6);
var lyr_CABASILUETA_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CABASILUETA_6, 
                style: style_CABASILUETA_6,
                popuplayertitle: 'CABA SILUETA',
                interactive: true,
                title: '<img src="styles/legend/CABASILUETA_6.png" /> CABA SILUETA'
            });
var format_CallejeroJerarqua_7 = new ol.format.GeoJSON();
var features_CallejeroJerarqua_7 = format_CallejeroJerarqua_7.readFeatures(json_CallejeroJerarqua_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CallejeroJerarqua_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CallejeroJerarqua_7.addFeatures(features_CallejeroJerarqua_7);
var lyr_CallejeroJerarqua_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CallejeroJerarqua_7, 
                style: style_CallejeroJerarqua_7,
                popuplayertitle: 'Callejero Jerarquía',
                interactive: true,
    title: 'Callejero Jerarquía<br />\
    <img src="styles/legend/CallejeroJerarqua_7_0.png" /> AUTOPISTA<br />\
    <img src="styles/legend/CallejeroJerarqua_7_1.png" /> AVENIDA<br />\
    <img src="styles/legend/CallejeroJerarqua_7_2.png" /> BAJADA AUTOPISTA<br />\
    <img src="styles/legend/CallejeroJerarqua_7_3.png" /> BOULEVARD<br />\
    <img src="styles/legend/CallejeroJerarqua_7_4.png" /> CALLE<br />\
    <img src="styles/legend/CallejeroJerarqua_7_5.png" /> CALLE PASAJE PARTICULAR<br />\
    <img src="styles/legend/CallejeroJerarqua_7_6.png" /> CALLE PEATONAL<br />\
    <img src="styles/legend/CallejeroJerarqua_7_7.png" /> ENLACE AUTOPISTA<br />\
    <img src="styles/legend/CallejeroJerarqua_7_8.png" /> PASAJE<br />\
    <img src="styles/legend/CallejeroJerarqua_7_9.png" /> PASAJE PARTICULAR<br />\
    <img src="styles/legend/CallejeroJerarqua_7_10.png" /> PASAJE PUBLICO<br />\
    <img src="styles/legend/CallejeroJerarqua_7_11.png" /> PASAJE PEATONAL<br />\
    <img src="styles/legend/CallejeroJerarqua_7_12.png" /> PUENTE<br />\
    <img src="styles/legend/CallejeroJerarqua_7_13.png" /> SENDERO<br />\
    <img src="styles/legend/CallejeroJerarqua_7_14.png" /> SUBIDA AUTOPISTA<br />\
    <img src="styles/legend/CallejeroJerarqua_7_15.png" /> TUNEL<br />\
    <img src="styles/legend/CallejeroJerarqua_7_16.png" /> <br />' });
var format_Z5_ELEMENTOS_5_JUN_8 = new ol.format.GeoJSON();
var features_Z5_ELEMENTOS_5_JUN_8 = format_Z5_ELEMENTOS_5_JUN_8.readFeatures(json_Z5_ELEMENTOS_5_JUN_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z5_ELEMENTOS_5_JUN_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z5_ELEMENTOS_5_JUN_8.addFeatures(features_Z5_ELEMENTOS_5_JUN_8);
var lyr_Z5_ELEMENTOS_5_JUN_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z5_ELEMENTOS_5_JUN_8, 
                style: style_Z5_ELEMENTOS_5_JUN_8,
                popuplayertitle: 'Z5_ELEMENTOS_5_JUN',
                interactive: true,
                title: '<img src="styles/legend/Z5_ELEMENTOS_5_JUN_8.png" /> Z5_ELEMENTOS_5_JUN'
            });
var format_SUMBRCICC_9 = new ol.format.GeoJSON();
var features_SUMBRCICC_9 = format_SUMBRCICC_9.readFeatures(json_SUMBRCICC_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_SUMBRCICC_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_SUMBRCICC_9.addFeatures(features_SUMBRCICC_9);
var lyr_SUMBRCICC_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_SUMBRCICC_9, 
                style: style_SUMBRCICC_9,
                popuplayertitle: 'SUM-BR-CI-CC',
                interactive: true,
                title: '<img src="styles/legend/SUMBRCICC_9.png" /> SUM-BR-CI-CC'
            });
var format_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10 = new ol.format.GeoJSON();
var features_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10 = format_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.readFeatures(json_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.addFeatures(features_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10);
var lyr_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10, 
                style: style_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10,
                popuplayertitle: 'Z3_ELEMENTOS_23_JUN_SIN_CORREGIR',
                interactive: true,
                title: '<img src="styles/legend/Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.png" /> Z3_ELEMENTOS_23_JUN_SIN_CORREGIR'
            });
var format_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11 = new ol.format.GeoJSON();
var features_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11 = format_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.readFeatures(json_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.addFeatures(features_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11);
var lyr_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11, 
                style: style_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11,
                popuplayertitle: 'Z2_ELEMENTOS_2_JUL_SIN_CORREGIR',
                interactive: true,
                title: '<img src="styles/legend/Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.png" /> Z2_ELEMENTOS_2_JUL_SIN_CORREGIR'
            });
var format_ELEMENTOSBRSUMCCCIZ1_12 = new ol.format.GeoJSON();
var features_ELEMENTOSBRSUMCCCIZ1_12 = format_ELEMENTOSBRSUMCCCIZ1_12.readFeatures(json_ELEMENTOSBRSUMCCCIZ1_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ELEMENTOSBRSUMCCCIZ1_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ELEMENTOSBRSUMCCCIZ1_12.addFeatures(features_ELEMENTOSBRSUMCCCIZ1_12);
var lyr_ELEMENTOSBRSUMCCCIZ1_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ELEMENTOSBRSUMCCCIZ1_12, 
                style: style_ELEMENTOSBRSUMCCCIZ1_12,
                popuplayertitle: 'ELEMENTOS BR SUM CC CI Z1',
                interactive: true,
                title: '<img src="styles/legend/ELEMENTOSBRSUMCCCIZ1_12.png" /> ELEMENTOS BR SUM CC CI Z1'
            });
var group_ZONA_1 = new ol.layer.Group({
                                layers: [lyr_ELEMENTOSBRSUMCCCIZ1_12,],
                                fold: 'close',
                                title: 'ZONA_1'});
var group_ZONA_2 = new ol.layer.Group({
                                layers: [lyr_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11,],
                                fold: 'close',
                                title: 'ZONA_2'});
var group_ZONA_3 = new ol.layer.Group({
                                layers: [lyr_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10,],
                                fold: 'close',
                                title: 'ZONA_3'});
var group_ZONA_4 = new ol.layer.Group({
                                layers: [lyr_SUMBRCICC_9,],
                                fold: 'close',
                                title: 'ZONA_4'});
var group_ZONA_5 = new ol.layer.Group({
                                layers: [lyr_Z5_ELEMENTOS_5_JUN_8,],
                                fold: 'close',
                                title: 'ZONA_5'});
var group_BASE = new ol.layer.Group({
                                layers: [lyr_CABAMANZANAS_0,lyr_ESPVERDEPB_1,lyr_BP_2,lyr_ESPVERDESCAT_3,lyr_ESPVERDEPRIVADO_4,lyr_Autopistas_5,lyr_CABASILUETA_6,lyr_CallejeroJerarqua_7,],
                                fold: 'close',
                                title: 'BASE'});

lyr_CABAMANZANAS_0.setVisible(true);lyr_ESPVERDEPB_1.setVisible(true);lyr_BP_2.setVisible(true);lyr_ESPVERDESCAT_3.setVisible(true);lyr_ESPVERDEPRIVADO_4.setVisible(true);lyr_Autopistas_5.setVisible(true);lyr_CABASILUETA_6.setVisible(true);lyr_CallejeroJerarqua_7.setVisible(true);lyr_Z5_ELEMENTOS_5_JUN_8.setVisible(true);lyr_SUMBRCICC_9.setVisible(true);lyr_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.setVisible(true);lyr_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.setVisible(true);lyr_ELEMENTOSBRSUMCCCIZ1_12.setVisible(true);
var layersList = [group_BASE,group_ZONA_5,group_ZONA_4,group_ZONA_3,group_ZONA_2,group_ZONA_1];
lyr_CABAMANZANAS_0.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ZONA': 'ZONA', });
lyr_ESPVERDEPB_1.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'nom_mapa': 'nom_mapa', 'barrio': 'barrio', 'comuna': 'comuna', 'ubicacion': 'ubicacion', 'clasificac': 'clasificac', 'tiene_pati': 'tiene_pati', 'apadrinada': 'apadrinada', 'decreto': 'decreto', 'fecha_decr': 'fecha_decr', 'ordenanza_': 'ordenanza_', 'fecha_orde': 'fecha_orde', 'boletin_of': 'boletin_of', 'fecha_bole': 'fecha_bole', 'area': 'area', 'perimetro': 'perimetro', 'observacio': 'observacio', });
lyr_BP_2.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NOMBRE': 'NOMBRE', 'NOM_MAP': 'NOM_MAP', 'TIPO_ASENT': 'TIPO_ASENT', 'MANZANA': 'MANZANA', 'OBSERV': 'OBSERV', 'ALIAS': 'ALIAS', 'NOM_y_MZA': 'NOM_y_MZA', 'Superficie': 'Superficie', 'Brio_inter': 'Brio_inter', 'comuna': 'comuna', });
lyr_ESPVERDESCAT_3.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SECCION': 'SECCION', 'MANZANA': 'MANZANA', 'PARCELA': 'PARCELA', 'SMP': 'SMP', 'TIPO_EV': 'TIPO_EV', 'NOMBRE_EV': 'NOMBRE_EV', 'UBICACION': 'UBICACION', 'OBS': 'OBS', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'LEY': 'LEY', 'FECHA_LEY': 'FECHA_LEY', 'ORDENANZA': 'ORDENANZA', 'FECHA_ORD': 'FECHA_ORD', 'DECRETO': 'DECRETO', 'FECHA_DEC': 'FECHA_DEC', 'BOLETIN_OF': 'BOLETIN_OF', 'FECHA_BO': 'FECHA_BO', 'FUENTE1': 'FUENTE1', 'FUENTE2': 'FUENTE2', 'FUENTE3': 'FUENTE3', 'FUENTE4': 'FUENTE4', 'NIVEL': 'NIVEL', });
lyr_ESPVERDEPRIVADO_4.set('fieldAliases', {'fid': 'fid', 'id_ev_priv': 'id_ev_priv', 'nombre': 'nombre', 'fuente': 'fuente', 'ubicacion': 'ubicacion', 'Decreto': 'Decreto', 'Ordenaza': 'Ordenaza', 'Boletin': 'Boletin', 'fecha_decr': 'fecha_decr', 'fecha_orde': 'fecha_orde', 'fecha_bole': 'fecha_bole', 'Nombre_ori': 'Nombre_ori', 'Observacio': 'Observacio', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'area': 'area', 'perimeter': 'perimeter', 'TIPO_ESPAC': 'TIPO_ESPAC', 'nom_mapa': 'nom_mapa', });
lyr_Autopistas_5.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', });
lyr_CABASILUETA_6.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'OBJETO': 'OBJETO', 'COMUNAS': 'COMUNAS', 'BARRIOS': 'BARRIOS', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', });
lyr_CallejeroJerarqua_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nomanter': 'nomanter', 'nom_mapa': 'nom_mapa', 'tipo_c': 'tipo_c', 'long': 'long', 'sentido': 'sentido', 'cod_sent': 'cod_sent', 'observa': 'observa', 'bicisenda': 'bicisenda', 'lado_ciclo': 'lado_ciclo', 'recorrid_x': 'recorrid_x', 'ciclo_obse': 'ciclo_obse', 'tooltip_bi': 'tooltip_bi', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', 'ffcc': 'ffcc', 'tipo_ffcc': 'tipo_ffcc', 'COMUNA': 'COMUNA', 'COM_PAR': 'COM_PAR', 'COM_IMPAR': 'COM_IMPAR', 'BARRIO': 'BARRIO', 'BARRIO_PAR': 'BARRIO_PAR', 'BARRIO_IMP': 'BARRIO_IMP', });
lyr_Z5_ELEMENTOS_5_JUN_8.set('fieldAliases', {'fid': 'fid', 'Tipo Eleme': 'Tipo Eleme', 'Nombre Ele': 'Nombre Ele', 'Fecha rele': 'Fecha rele', 'Comuna': 'Comuna', 'Sector': 'Sector', 'Calle': 'Calle', 'Altura': 'Altura', 'Intersecci': 'Intersecci', 'Nombre E_1': 'Nombre E_1', 'Tipo Ele_1': 'Tipo Ele_1', 'Direcci�': 'Direcci�', 'Direcci�_1': 'Direcci�_1', 'dist_m': 'dist_m', 'CONTROL': 'CONTROL', });
lyr_SUMBRCICC_9.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', });
lyr_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.set('fieldAliases', {'fid': 'fid', 'Tipo Elemento': 'Tipo Elemento', 'Nombre Elemento': 'Nombre Elemento', 'Fecha relevamiento': 'Fecha relevamiento', 'Comuna': 'Comuna', 'Sector': 'Sector', 'Calle': 'Calle', 'Altura': 'Altura', 'Interseccion': 'Interseccion', 'Direcci�n Normalizada': 'Direcci�n Normalizada', 'Direcci�n Normalizada (ArcGIS)': 'Direcci�n Normalizada (ArcGIS)', 'layer': 'layer', 'path': 'path', });
lyr_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.set('fieldAliases', {'fid': 'fid', 'Tipo Elemento': 'Tipo Elemento', 'Nombre Elemento': 'Nombre Elemento', 'Fecha relevamiento': 'Fecha relevamiento', 'Comuna': 'Comuna', 'Sector': 'Sector', 'Calle': 'Calle', 'Altura': 'Altura', 'Interseccion': 'Interseccion', 'Direcci�n Normalizada': 'Direcci�n Normalizada', 'Direcci�n Normalizada (ArcGIS)': 'Direcci�n Normalizada (ArcGIS)', 'layer': 'layer', 'path': 'path', 'Nombre Elemento descarga': 'Nombre Elemento descarga', 'Tipo Elemento Descarga': 'Tipo Elemento Descarga', });
lyr_ELEMENTOSBRSUMCCCIZ1_12.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'text': 'text', 'Datos SUM BR CC CI Z1_fid': 'Datos SUM BR CC CI Z1_fid', 'Datos SUM BR CC CI Z1_n': 'Datos SUM BR CC CI Z1_n', 'Datos SUM BR CC CI Z1_Tipo Elemento': 'Datos SUM BR CC CI Z1_Tipo Elemento', 'Datos SUM BR CC CI Z1_Fecha relevamiento': 'Datos SUM BR CC CI Z1_Fecha relevamiento', 'Datos SUM BR CC CI Z1_Comuna': 'Datos SUM BR CC CI Z1_Comuna', 'Datos SUM BR CC CI Z1_Sector': 'Datos SUM BR CC CI Z1_Sector', 'Datos SUM BR CC CI Z1_Calle': 'Datos SUM BR CC CI Z1_Calle', 'Datos SUM BR CC CI Z1_Altura': 'Datos SUM BR CC CI Z1_Altura', 'Datos SUM BR CC CI Z1_Interseccion': 'Datos SUM BR CC CI Z1_Interseccion', 'Datos SUM BR CC CI Z1_Reja Vertical (sumidero) (2)': 'Datos SUM BR CC CI Z1_Reja Vertical (sumidero) (2)', 'Datos SUM BR CC CI Z1_Tipo': 'Datos SUM BR CC CI Z1_Tipo', 'Datos SUM BR CC CI Z1_Cantidad': 'Datos SUM BR CC CI Z1_Cantidad', 'Datos SUM BR CC CI Z1_Tipo_1': 'Datos SUM BR CC CI Z1_Tipo_1', 'Datos SUM BR CC CI Z1_Cantidad_1': 'Datos SUM BR CC CI Z1_Cantidad_1', 'Datos SUM BR CC CI Z1_Tapa': 'Datos SUM BR CC CI Z1_Tapa', 'Datos SUM BR CC CI Z1_Marco': 'Datos SUM BR CC CI Z1_Marco', 'Datos SUM BR CC CI Z1_Tiene elemento antivandálico': 'Datos SUM BR CC CI Z1_Tiene elemento antivandálico', 'Datos SUM BR CC CI Z1_Requiere revisita': 'Datos SUM BR CC CI Z1_Requiere revisita', 'Datos SUM BR CC CI Z1_Estado': 'Datos SUM BR CC CI Z1_Estado', 'Datos SUM BR CC CI Z1_Largo [m]': 'Datos SUM BR CC CI Z1_Largo [m]', 'Datos SUM BR CC CI Z1_Ancho [m]': 'Datos SUM BR CC CI Z1_Ancho [m]', 'Datos SUM BR CC CI Z1_Profundidad [m]': 'Datos SUM BR CC CI Z1_Profundidad [m]', 'Datos SUM BR CC CI Z1_Diametro Nominal [mm]': 'Datos SUM BR CC CI Z1_Diametro Nominal [mm]', 'Datos SUM BR CC CI Z1_Material (2)': 'Datos SUM BR CC CI Z1_Material (2)', 'Datos SUM BR CC CI Z1_"Tapada inicio': 'Datos SUM BR CC CI Z1_"Tapada inicio', 'Datos SUM BR CC CI Z1_field_26': 'Datos SUM BR CC CI Z1_field_26', 'Datos SUM BR CC CI Z1_field_27': 'Datos SUM BR CC CI Z1_field_27', 'Datos SUM BR CC CI Z1_field_28': 'Datos SUM BR CC CI Z1_field_28', 'Datos SUM BR CC CI Z1_field_29': 'Datos SUM BR CC CI Z1_field_29', 'Datos SUM BR CC CI Z1_field_30': 'Datos SUM BR CC CI Z1_field_30', 'Datos SUM BR CC CI Z1_field_31': 'Datos SUM BR CC CI Z1_field_31', 'Datos SUM BR CC CI Z1_field_32': 'Datos SUM BR CC CI Z1_field_32', 'Datos SUM BR CC CI Z1_field_33': 'Datos SUM BR CC CI Z1_field_33', 'Datos SUM BR CC CI Z1_field_34': 'Datos SUM BR CC CI Z1_field_34', 'Datos SUM BR CC CI Z1_field_35': 'Datos SUM BR CC CI Z1_field_35', 'Datos SUM BR CC CI Z1_field_36': 'Datos SUM BR CC CI Z1_field_36', 'Datos SUM BR CC CI Z1_field_37': 'Datos SUM BR CC CI Z1_field_37', 'Datos SUM BR CC CI Z1_field_38': 'Datos SUM BR CC CI Z1_field_38', 'Datos SUM BR CC CI Z1_field_39': 'Datos SUM BR CC CI Z1_field_39', 'Datos SUM BR CC CI Z1_field_40': 'Datos SUM BR CC CI Z1_field_40', 'Datos SUM BR CC CI Z1_field_41': 'Datos SUM BR CC CI Z1_field_41', });
lyr_CABAMANZANAS_0.set('fieldImages', {'fid': '', 'ID': 'Range', 'ZONA': 'TextEdit', });
lyr_ESPVERDEPB_1.set('fieldImages', {'fid': '', 'id': 'Range', 'nombre': 'TextEdit', 'nom_mapa': 'TextEdit', 'barrio': 'TextEdit', 'comuna': 'TextEdit', 'ubicacion': 'TextEdit', 'clasificac': 'TextEdit', 'tiene_pati': 'TextEdit', 'apadrinada': 'TextEdit', 'decreto': 'TextEdit', 'fecha_decr': 'TextEdit', 'ordenanza_': 'TextEdit', 'fecha_orde': 'TextEdit', 'boletin_of': 'TextEdit', 'fecha_bole': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'observacio': 'TextEdit', });
lyr_BP_2.set('fieldImages', {'fid': '', 'Id': '', 'NOMBRE': '', 'NOM_MAP': '', 'TIPO_ASENT': '', 'MANZANA': '', 'OBSERV': '', 'ALIAS': '', 'NOM_y_MZA': '', 'Superficie': '', 'Brio_inter': '', 'comuna': '', });
lyr_ESPVERDESCAT_3.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SECCION': 'TextEdit', 'MANZANA': 'TextEdit', 'PARCELA': 'TextEdit', 'SMP': 'TextEdit', 'TIPO_EV': 'TextEdit', 'NOMBRE_EV': 'TextEdit', 'UBICACION': 'TextEdit', 'OBS': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'LEY': 'TextEdit', 'FECHA_LEY': 'TextEdit', 'ORDENANZA': 'TextEdit', 'FECHA_ORD': 'TextEdit', 'DECRETO': 'TextEdit', 'FECHA_DEC': 'TextEdit', 'BOLETIN_OF': 'TextEdit', 'FECHA_BO': 'DateTime', 'FUENTE1': 'TextEdit', 'FUENTE2': 'TextEdit', 'FUENTE3': 'TextEdit', 'FUENTE4': 'TextEdit', 'NIVEL': 'TextEdit', });
lyr_ESPVERDEPRIVADO_4.set('fieldImages', {'fid': '', 'id_ev_priv': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'ubicacion': 'TextEdit', 'Decreto': 'TextEdit', 'Ordenaza': 'TextEdit', 'Boletin': 'TextEdit', 'fecha_decr': 'TextEdit', 'fecha_orde': 'TextEdit', 'fecha_bole': 'TextEdit', 'Nombre_ori': 'TextEdit', 'Observacio': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'TIPO_ESPAC': 'TextEdit', 'nom_mapa': 'TextEdit', });
lyr_Autopistas_5.set('fieldImages', {'fid': '', 'NOMBRE': 'TextEdit', });
lyr_CABASILUETA_6.set('fieldImages', {'fid': '', 'ID': 'Range', 'OBJETO': 'TextEdit', 'COMUNAS': 'TextEdit', 'BARRIOS': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_CallejeroJerarqua_7.set('fieldImages', {'fid': '', 'id': 'Range', 'codigo': 'Range', 'nomoficial': 'TextEdit', 'alt_izqini': 'Range', 'alt_izqfin': 'Range', 'alt_derini': 'Range', 'alt_derfin': 'Range', 'nomanter': 'TextEdit', 'nom_mapa': 'TextEdit', 'tipo_c': 'TextEdit', 'long': 'TextEdit', 'sentido': 'TextEdit', 'cod_sent': 'Range', 'observa': 'TextEdit', 'bicisenda': 'TextEdit', 'lado_ciclo': 'TextEdit', 'recorrid_x': 'TextEdit', 'ciclo_obse': 'TextEdit', 'tooltip_bi': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', 'ffcc': 'TextEdit', 'tipo_ffcc': 'TextEdit', 'COMUNA': 'Range', 'COM_PAR': 'Range', 'COM_IMPAR': 'Range', 'BARRIO': 'TextEdit', 'BARRIO_PAR': 'TextEdit', 'BARRIO_IMP': 'TextEdit', });
lyr_Z5_ELEMENTOS_5_JUN_8.set('fieldImages', {'fid': 'TextEdit', 'Tipo Eleme': '', 'Nombre Ele': '', 'Fecha rele': '', 'Comuna': 'TextEdit', 'Sector': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Intersecci': '', 'Nombre E_1': '', 'Tipo Ele_1': '', 'Direcci�': '', 'Direcci�_1': '', 'dist_m': 'TextEdit', 'CONTROL': 'TextEdit', });
lyr_SUMBRCICC_9.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', });
lyr_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.set('fieldImages', {'fid': 'TextEdit', 'Tipo Elemento': 'TextEdit', 'Nombre Elemento': 'TextEdit', 'Fecha relevamiento': 'TextEdit', 'Comuna': 'TextEdit', 'Sector': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Interseccion': 'TextEdit', 'Direcci�n Normalizada': 'TextEdit', 'Direcci�n Normalizada (ArcGIS)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', });
lyr_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.set('fieldImages', {'fid': 'TextEdit', 'Tipo Elemento': 'TextEdit', 'Nombre Elemento': 'TextEdit', 'Fecha relevamiento': 'TextEdit', 'Comuna': 'TextEdit', 'Sector': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Interseccion': 'TextEdit', 'Direcci�n Normalizada': 'TextEdit', 'Direcci�n Normalizada (ArcGIS)': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Nombre Elemento descarga': 'TextEdit', 'Tipo Elemento Descarga': 'TextEdit', });
lyr_ELEMENTOSBRSUMCCCIZ1_12.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'text': 'TextEdit', 'Datos SUM BR CC CI Z1_fid': 'TextEdit', 'Datos SUM BR CC CI Z1_n': 'TextEdit', 'Datos SUM BR CC CI Z1_Tipo Elemento': 'TextEdit', 'Datos SUM BR CC CI Z1_Fecha relevamiento': 'TextEdit', 'Datos SUM BR CC CI Z1_Comuna': 'TextEdit', 'Datos SUM BR CC CI Z1_Sector': 'TextEdit', 'Datos SUM BR CC CI Z1_Calle': 'TextEdit', 'Datos SUM BR CC CI Z1_Altura': 'TextEdit', 'Datos SUM BR CC CI Z1_Interseccion': 'TextEdit', 'Datos SUM BR CC CI Z1_Reja Vertical (sumidero) (2)': 'TextEdit', 'Datos SUM BR CC CI Z1_Tipo': 'TextEdit', 'Datos SUM BR CC CI Z1_Cantidad': 'TextEdit', 'Datos SUM BR CC CI Z1_Tipo_1': 'TextEdit', 'Datos SUM BR CC CI Z1_Cantidad_1': 'TextEdit', 'Datos SUM BR CC CI Z1_Tapa': 'TextEdit', 'Datos SUM BR CC CI Z1_Marco': 'TextEdit', 'Datos SUM BR CC CI Z1_Tiene elemento antivandálico': 'TextEdit', 'Datos SUM BR CC CI Z1_Requiere revisita': 'TextEdit', 'Datos SUM BR CC CI Z1_Estado': 'TextEdit', 'Datos SUM BR CC CI Z1_Largo [m]': 'TextEdit', 'Datos SUM BR CC CI Z1_Ancho [m]': 'TextEdit', 'Datos SUM BR CC CI Z1_Profundidad [m]': 'TextEdit', 'Datos SUM BR CC CI Z1_Diametro Nominal [mm]': 'TextEdit', 'Datos SUM BR CC CI Z1_Material (2)': 'TextEdit', 'Datos SUM BR CC CI Z1_"Tapada inicio': 'TextEdit', 'Datos SUM BR CC CI Z1_field_26': 'TextEdit', 'Datos SUM BR CC CI Z1_field_27': 'TextEdit', 'Datos SUM BR CC CI Z1_field_28': 'TextEdit', 'Datos SUM BR CC CI Z1_field_29': 'TextEdit', 'Datos SUM BR CC CI Z1_field_30': 'TextEdit', 'Datos SUM BR CC CI Z1_field_31': 'TextEdit', 'Datos SUM BR CC CI Z1_field_32': 'TextEdit', 'Datos SUM BR CC CI Z1_field_33': 'TextEdit', 'Datos SUM BR CC CI Z1_field_34': 'TextEdit', 'Datos SUM BR CC CI Z1_field_35': 'TextEdit', 'Datos SUM BR CC CI Z1_field_36': 'TextEdit', 'Datos SUM BR CC CI Z1_field_37': 'TextEdit', 'Datos SUM BR CC CI Z1_field_38': 'TextEdit', 'Datos SUM BR CC CI Z1_field_39': 'TextEdit', 'Datos SUM BR CC CI Z1_field_40': 'TextEdit', 'Datos SUM BR CC CI Z1_field_41': 'TextEdit', });
lyr_CABAMANZANAS_0.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ZONA': 'no label', });
lyr_ESPVERDEPB_1.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nombre': 'no label', 'nom_mapa': 'no label', 'barrio': 'no label', 'comuna': 'no label', 'ubicacion': 'no label', 'clasificac': 'no label', 'tiene_pati': 'no label', 'apadrinada': 'no label', 'decreto': 'no label', 'fecha_decr': 'no label', 'ordenanza_': 'no label', 'fecha_orde': 'no label', 'boletin_of': 'no label', 'fecha_bole': 'no label', 'area': 'no label', 'perimetro': 'no label', 'observacio': 'no label', });
lyr_BP_2.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'NOMBRE': 'no label', 'NOM_MAP': 'no label', 'TIPO_ASENT': 'no label', 'MANZANA': 'no label', 'OBSERV': 'no label', 'ALIAS': 'no label', 'NOM_y_MZA': 'no label', 'Superficie': 'no label', 'Brio_inter': 'no label', 'comuna': 'no label', });
lyr_ESPVERDESCAT_3.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SECCION': 'no label', 'MANZANA': 'no label', 'PARCELA': 'no label', 'SMP': 'no label', 'TIPO_EV': 'no label', 'NOMBRE_EV': 'no label', 'UBICACION': 'no label', 'OBS': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', 'LEY': 'no label', 'FECHA_LEY': 'no label', 'ORDENANZA': 'no label', 'FECHA_ORD': 'no label', 'DECRETO': 'no label', 'FECHA_DEC': 'no label', 'BOLETIN_OF': 'no label', 'FECHA_BO': 'no label', 'FUENTE1': 'no label', 'FUENTE2': 'no label', 'FUENTE3': 'no label', 'FUENTE4': 'no label', 'NIVEL': 'no label', });
lyr_ESPVERDEPRIVADO_4.set('fieldLabels', {'fid': 'no label', 'id_ev_priv': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'ubicacion': 'no label', 'Decreto': 'no label', 'Ordenaza': 'no label', 'Boletin': 'no label', 'fecha_decr': 'no label', 'fecha_orde': 'no label', 'fecha_bole': 'no label', 'Nombre_ori': 'no label', 'Observacio': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'area': 'no label', 'perimeter': 'no label', 'TIPO_ESPAC': 'no label', 'nom_mapa': 'no label', });
lyr_Autopistas_5.set('fieldLabels', {'fid': 'no label', 'NOMBRE': 'no label', });
lyr_CABASILUETA_6.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'OBJETO': 'no label', 'COMUNAS': 'no label', 'BARRIOS': 'no label', 'PERIMETRO': 'no label', 'AREA': 'no label', });
lyr_CallejeroJerarqua_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nomanter': 'no label', 'nom_mapa': 'no label', 'tipo_c': 'no label', 'long': 'no label', 'sentido': 'no label', 'cod_sent': 'no label', 'observa': 'no label', 'bicisenda': 'no label', 'lado_ciclo': 'no label', 'recorrid_x': 'no label', 'ciclo_obse': 'no label', 'tooltip_bi': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', 'ffcc': 'no label', 'tipo_ffcc': 'no label', 'COMUNA': 'no label', 'COM_PAR': 'no label', 'COM_IMPAR': 'no label', 'BARRIO': 'no label', 'BARRIO_PAR': 'no label', 'BARRIO_IMP': 'no label', });
lyr_Z5_ELEMENTOS_5_JUN_8.set('fieldLabels', {'fid': 'no label', 'Tipo Eleme': 'no label', 'Nombre Ele': 'no label', 'Fecha rele': 'no label', 'Comuna': 'no label', 'Sector': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Intersecci': 'no label', 'Nombre E_1': 'no label', 'Tipo Ele_1': 'no label', 'Direcci�': 'no label', 'Direcci�_1': 'no label', 'dist_m': 'no label', 'CONTROL': 'no label', });
lyr_SUMBRCICC_9.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', });
lyr_Z3_ELEMENTOS_23_JUN_SIN_CORREGIR_10.set('fieldLabels', {'fid': 'no label', 'Tipo Elemento': 'no label', 'Nombre Elemento': 'no label', 'Fecha relevamiento': 'no label', 'Comuna': 'no label', 'Sector': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Interseccion': 'no label', 'Direcci�n Normalizada': 'no label', 'Direcci�n Normalizada (ArcGIS)': 'no label', 'layer': 'no label', 'path': 'no label', });
lyr_Z2_ELEMENTOS_2_JUL_SIN_CORREGIR_11.set('fieldLabels', {'fid': 'no label', 'Tipo Elemento': 'no label', 'Nombre Elemento': 'no label', 'Fecha relevamiento': 'no label', 'Comuna': 'no label', 'Sector': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Interseccion': 'no label', 'Direcci�n Normalizada': 'no label', 'Direcci�n Normalizada (ArcGIS)': 'no label', 'layer': 'no label', 'path': 'no label', 'Nombre Elemento descarga': 'no label', 'Tipo Elemento Descarga': 'no label', });
lyr_ELEMENTOSBRSUMCCCIZ1_12.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'text': 'no label', 'Datos SUM BR CC CI Z1_fid': 'no label', 'Datos SUM BR CC CI Z1_n': 'no label', 'Datos SUM BR CC CI Z1_Tipo Elemento': 'no label', 'Datos SUM BR CC CI Z1_Fecha relevamiento': 'no label', 'Datos SUM BR CC CI Z1_Comuna': 'no label', 'Datos SUM BR CC CI Z1_Sector': 'no label', 'Datos SUM BR CC CI Z1_Calle': 'no label', 'Datos SUM BR CC CI Z1_Altura': 'no label', 'Datos SUM BR CC CI Z1_Interseccion': 'no label', 'Datos SUM BR CC CI Z1_Reja Vertical (sumidero) (2)': 'no label', 'Datos SUM BR CC CI Z1_Tipo': 'no label', 'Datos SUM BR CC CI Z1_Cantidad': 'no label', 'Datos SUM BR CC CI Z1_Tipo_1': 'no label', 'Datos SUM BR CC CI Z1_Cantidad_1': 'no label', 'Datos SUM BR CC CI Z1_Tapa': 'no label', 'Datos SUM BR CC CI Z1_Marco': 'no label', 'Datos SUM BR CC CI Z1_Tiene elemento antivandálico': 'no label', 'Datos SUM BR CC CI Z1_Requiere revisita': 'no label', 'Datos SUM BR CC CI Z1_Estado': 'no label', 'Datos SUM BR CC CI Z1_Largo [m]': 'no label', 'Datos SUM BR CC CI Z1_Ancho [m]': 'no label', 'Datos SUM BR CC CI Z1_Profundidad [m]': 'no label', 'Datos SUM BR CC CI Z1_Diametro Nominal [mm]': 'no label', 'Datos SUM BR CC CI Z1_Material (2)': 'no label', 'Datos SUM BR CC CI Z1_"Tapada inicio': 'no label', 'Datos SUM BR CC CI Z1_field_26': 'no label', 'Datos SUM BR CC CI Z1_field_27': 'no label', 'Datos SUM BR CC CI Z1_field_28': 'no label', 'Datos SUM BR CC CI Z1_field_29': 'no label', 'Datos SUM BR CC CI Z1_field_30': 'no label', 'Datos SUM BR CC CI Z1_field_31': 'no label', 'Datos SUM BR CC CI Z1_field_32': 'no label', 'Datos SUM BR CC CI Z1_field_33': 'no label', 'Datos SUM BR CC CI Z1_field_34': 'no label', 'Datos SUM BR CC CI Z1_field_35': 'no label', 'Datos SUM BR CC CI Z1_field_36': 'no label', 'Datos SUM BR CC CI Z1_field_37': 'no label', 'Datos SUM BR CC CI Z1_field_38': 'no label', 'Datos SUM BR CC CI Z1_field_39': 'no label', 'Datos SUM BR CC CI Z1_field_40': 'no label', 'Datos SUM BR CC CI Z1_field_41': 'no label', });
lyr_ELEMENTOSBRSUMCCCIZ1_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});