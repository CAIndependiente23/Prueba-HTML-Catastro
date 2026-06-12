var wms_layers = [];

var format_vias_circulacion_0 = new ol.format.GeoJSON();
var features_vias_circulacion_0 = format_vias_circulacion_0.readFeatures(json_vias_circulacion_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_vias_circulacion_0 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_vias_circulacion_0.addFeatures(features_vias_circulacion_0);
var lyr_vias_circulacion_0 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_vias_circulacion_0, 
                style: style_vias_circulacion_0,
                popuplayertitle: 'vias_circulacion',
                interactive: true,
                title: '<img src="styles/legend/vias_circulacion_0.png" /> vias_circulacion'
            });
var format_Partidos_2022copiar_1 = new ol.format.GeoJSON();
var features_Partidos_2022copiar_1 = format_Partidos_2022copiar_1.readFeatures(json_Partidos_2022copiar_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Partidos_2022copiar_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Partidos_2022copiar_1.addFeatures(features_Partidos_2022copiar_1);
var lyr_Partidos_2022copiar_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Partidos_2022copiar_1, 
                style: style_Partidos_2022copiar_1,
                popuplayertitle: 'Partidos_2022 copiar',
                interactive: true,
                title: '<img src="styles/legend/Partidos_2022copiar_1.png" /> Partidos_2022 copiar'
            });
var format_caba_manzanas_2 = new ol.format.GeoJSON();
var features_caba_manzanas_2 = format_caba_manzanas_2.readFeatures(json_caba_manzanas_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caba_manzanas_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caba_manzanas_2.addFeatures(features_caba_manzanas_2);
var lyr_caba_manzanas_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caba_manzanas_2, 
                style: style_caba_manzanas_2,
                popuplayertitle: 'caba_manzanas',
                interactive: true,
                title: '<img src="styles/legend/caba_manzanas_2.png" /> caba_manzanas'
            });
var format_barrios_populares_3 = new ol.format.GeoJSON();
var features_barrios_populares_3 = format_barrios_populares_3.readFeatures(json_barrios_populares_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_barrios_populares_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_barrios_populares_3.addFeatures(features_barrios_populares_3);
var lyr_barrios_populares_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_barrios_populares_3, 
                style: style_barrios_populares_3,
                popuplayertitle: 'barrios_populares',
                interactive: true,
                title: '<img src="styles/legend/barrios_populares_3.png" /> barrios_populares'
            });
var format_espacio_verde_publicoespacio_verde_publicoshp_4 = new ol.format.GeoJSON();
var features_espacio_verde_publicoespacio_verde_publicoshp_4 = format_espacio_verde_publicoespacio_verde_publicoshp_4.readFeatures(json_espacio_verde_publicoespacio_verde_publicoshp_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacio_verde_publicoespacio_verde_publicoshp_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacio_verde_publicoespacio_verde_publicoshp_4.addFeatures(features_espacio_verde_publicoespacio_verde_publicoshp_4);
var lyr_espacio_verde_publicoespacio_verde_publicoshp_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espacio_verde_publicoespacio_verde_publicoshp_4, 
                style: style_espacio_verde_publicoespacio_verde_publicoshp_4,
                popuplayertitle: 'espacio_verde_publico — espacio_verde_publico.shp',
                interactive: true,
                title: '<img src="styles/legend/espacio_verde_publicoespacio_verde_publicoshp_4.png" /> espacio_verde_publico — espacio_verde_publico.shp'
            });
var format_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5 = new ol.format.GeoJSON();
var features_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5 = format_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.readFeatures(json_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.addFeatures(features_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5);
var lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5, 
                style: style_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5,
                popuplayertitle: 'espacios-verdes-catastrales — espacios verdes/catastro_espacios_verdes_08042020.shp',
                interactive: true,
                title: '<img src="styles/legend/espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.png" /> espacios-verdes-catastrales — espacios verdes/catastro_espacios_verdes_08042020.shp'
            });
var format_espacioverdeprivadoespacio_verde_privado_wgs84shp_6 = new ol.format.GeoJSON();
var features_espacioverdeprivadoespacio_verde_privado_wgs84shp_6 = format_espacioverdeprivadoespacio_verde_privado_wgs84shp_6.readFeatures(json_espacioverdeprivadoespacio_verde_privado_wgs84shp_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_6.addFeatures(features_espacioverdeprivadoespacio_verde_privado_wgs84shp_6);
var lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_espacioverdeprivadoespacio_verde_privado_wgs84shp_6, 
                style: style_espacioverdeprivadoespacio_verde_privado_wgs84shp_6,
                popuplayertitle: 'espacio-verde-privado — espacio_verde_privado_wgs84.shp',
                interactive: true,
                title: '<img src="styles/legend/espacioverdeprivadoespacio_verde_privado_wgs84shp_6.png" /> espacio-verde-privado — espacio_verde_privado_wgs84.shp'
            });
var format_callejeroetiqueta_7 = new ol.format.GeoJSON();
var features_callejeroetiqueta_7 = format_callejeroetiqueta_7.readFeatures(json_callejeroetiqueta_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_callejeroetiqueta_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_callejeroetiqueta_7.addFeatures(features_callejeroetiqueta_7);
var lyr_callejeroetiqueta_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_callejeroetiqueta_7, 
                style: style_callejeroetiqueta_7,
                popuplayertitle: 'callejero etiqueta',
                interactive: true,
                title: 'callejero etiqueta'
            });
var format_caba_callejerojerarquia_8 = new ol.format.GeoJSON();
var features_caba_callejerojerarquia_8 = format_caba_callejerojerarquia_8.readFeatures(json_caba_callejerojerarquia_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caba_callejerojerarquia_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caba_callejerojerarquia_8.addFeatures(features_caba_callejerojerarquia_8);
var lyr_caba_callejerojerarquia_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caba_callejerojerarquia_8, 
                style: style_caba_callejerojerarquia_8,
                popuplayertitle: 'caba_callejero jerarquia',
                interactive: true,
    title: 'caba_callejero jerarquia<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_0.png" /> AUTOPISTA<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_1.png" /> AVENIDA<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_2.png" /> BAJADA AUTOPISTA<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_3.png" /> BOULEVARD<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_4.png" /> CALLE<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_5.png" /> CALLE PASAJE PARTICULAR<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_6.png" /> CALLE PEATONAL<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_7.png" /> ENLACE AUTOPISTA<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_8.png" /> PASAJE<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_9.png" /> PASAJE PARTICULAR<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_10.png" /> PASAJE PUBLICO<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_11.png" /> PASAJE PEATONAL<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_12.png" /> PUENTE<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_13.png" /> SENDERO<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_14.png" /> SUBIDA AUTOPISTA<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_15.png" /> TUNEL<br />\
    <img src="styles/legend/caba_callejerojerarquia_8_16.png" /> <br />' });
var format_autopistas_9 = new ol.format.GeoJSON();
var features_autopistas_9 = format_autopistas_9.readFeatures(json_autopistas_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_autopistas_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_autopistas_9.addFeatures(features_autopistas_9);
var lyr_autopistas_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_autopistas_9, 
                style: style_autopistas_9,
                popuplayertitle: 'autopistas',
                interactive: true,
                title: '<img src="styles/legend/autopistas_9.png" /> autopistas'
            });
var format_caba_siluetacopiar_10 = new ol.format.GeoJSON();
var features_caba_siluetacopiar_10 = format_caba_siluetacopiar_10.readFeatures(json_caba_siluetacopiar_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_caba_siluetacopiar_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_caba_siluetacopiar_10.addFeatures(features_caba_siluetacopiar_10);
var lyr_caba_siluetacopiar_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_caba_siluetacopiar_10, 
                style: style_caba_siluetacopiar_10,
                popuplayertitle: 'caba_silueta copiar',
                interactive: true,
                title: '<img src="styles/legend/caba_siluetacopiar_10.png" /> caba_silueta copiar'
            });
var format_PBA_CURSOS_AGUA_11 = new ol.format.GeoJSON();
var features_PBA_CURSOS_AGUA_11 = format_PBA_CURSOS_AGUA_11.readFeatures(json_PBA_CURSOS_AGUA_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_PBA_CURSOS_AGUA_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_PBA_CURSOS_AGUA_11.addFeatures(features_PBA_CURSOS_AGUA_11);
var lyr_PBA_CURSOS_AGUA_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_PBA_CURSOS_AGUA_11, 
                style: style_PBA_CURSOS_AGUA_11,
                popuplayertitle: 'PBA_CURSOS_AGUA',
                interactive: true,
                title: '<img src="styles/legend/PBA_CURSOS_AGUA_11.png" /> PBA_CURSOS_AGUA'
            });
var format_CURSOS_AGUA_12 = new ol.format.GeoJSON();
var features_CURSOS_AGUA_12 = format_CURSOS_AGUA_12.readFeatures(json_CURSOS_AGUA_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_CURSOS_AGUA_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_CURSOS_AGUA_12.addFeatures(features_CURSOS_AGUA_12);
var lyr_CURSOS_AGUA_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_CURSOS_AGUA_12, 
                style: style_CURSOS_AGUA_12,
                popuplayertitle: 'CURSOS_AGUA',
                interactive: true,
                title: '<img src="styles/legend/CURSOS_AGUA_12.png" /> CURSOS_AGUA'
            });
var format_RIOS_3CUENCAS_13 = new ol.format.GeoJSON();
var features_RIOS_3CUENCAS_13 = format_RIOS_3CUENCAS_13.readFeatures(json_RIOS_3CUENCAS_13, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RIOS_3CUENCAS_13 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RIOS_3CUENCAS_13.addFeatures(features_RIOS_3CUENCAS_13);
var lyr_RIOS_3CUENCAS_13 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RIOS_3CUENCAS_13, 
                style: style_RIOS_3CUENCAS_13,
                popuplayertitle: 'RIOS_3CUENCAS',
                interactive: true,
                title: '<img src="styles/legend/RIOS_3CUENCAS_13.png" /> RIOS_3CUENCAS'
            });
var format_ConductosLongitudes_14 = new ol.format.GeoJSON();
var features_ConductosLongitudes_14 = format_ConductosLongitudes_14.readFeatures(json_ConductosLongitudes_14, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConductosLongitudes_14 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConductosLongitudes_14.addFeatures(features_ConductosLongitudes_14);
var lyr_ConductosLongitudes_14 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConductosLongitudes_14, 
                style: style_ConductosLongitudes_14,
                popuplayertitle: 'Conductos - Longitudes',
                interactive: true,
                title: '<img src="styles/legend/ConductosLongitudes_14.png" /> Conductos - Longitudes'
            });
var format_Z5_RP_5_JUN_15 = new ol.format.GeoJSON();
var features_Z5_RP_5_JUN_15 = format_Z5_RP_5_JUN_15.readFeatures(json_Z5_RP_5_JUN_15, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z5_RP_5_JUN_15 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z5_RP_5_JUN_15.addFeatures(features_Z5_RP_5_JUN_15);
var lyr_Z5_RP_5_JUN_15 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z5_RP_5_JUN_15, 
                style: style_Z5_RP_5_JUN_15,
                popuplayertitle: 'Z5_RP_5_JUN',
                interactive: true,
                title: '<img src="styles/legend/Z5_RP_5_JUN_15.png" /> Z5_RP_5_JUN'
            });
var format_Z5_ELEMENTOS_5_JUN_16 = new ol.format.GeoJSON();
var features_Z5_ELEMENTOS_5_JUN_16 = format_Z5_ELEMENTOS_5_JUN_16.readFeatures(json_Z5_ELEMENTOS_5_JUN_16, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z5_ELEMENTOS_5_JUN_16 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z5_ELEMENTOS_5_JUN_16.addFeatures(features_Z5_ELEMENTOS_5_JUN_16);
var lyr_Z5_ELEMENTOS_5_JUN_16 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z5_ELEMENTOS_5_JUN_16, 
                style: style_Z5_ELEMENTOS_5_JUN_16,
                popuplayertitle: 'Z5_ELEMENTOS_5_JUN',
                interactive: true,
                title: '<img src="styles/legend/Z5_ELEMENTOS_5_JUN_16.png" /> Z5_ELEMENTOS_5_JUN'
            });
var format_Z4_ELEMENTOS_5_JUN_17 = new ol.format.GeoJSON();
var features_Z4_ELEMENTOS_5_JUN_17 = format_Z4_ELEMENTOS_5_JUN_17.readFeatures(json_Z4_ELEMENTOS_5_JUN_17, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z4_ELEMENTOS_5_JUN_17 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z4_ELEMENTOS_5_JUN_17.addFeatures(features_Z4_ELEMENTOS_5_JUN_17);
var lyr_Z4_ELEMENTOS_5_JUN_17 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z4_ELEMENTOS_5_JUN_17, 
                style: style_Z4_ELEMENTOS_5_JUN_17,
                popuplayertitle: 'Z4_ELEMENTOS_5_JUN',
                interactive: true,
                title: '<img src="styles/legend/Z4_ELEMENTOS_5_JUN_17.png" /> Z4_ELEMENTOS_5_JUN'
            });
var format_ConductosZ4_18 = new ol.format.GeoJSON();
var features_ConductosZ4_18 = format_ConductosZ4_18.readFeatures(json_ConductosZ4_18, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConductosZ4_18 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConductosZ4_18.addFeatures(features_ConductosZ4_18);
var lyr_ConductosZ4_18 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConductosZ4_18, 
                style: style_ConductosZ4_18,
                popuplayertitle: 'Conductos Z4',
                interactive: true,
                title: '<img src="styles/legend/ConductosZ4_18.png" /> Conductos Z4'
            });
var format_RPZ1_19 = new ol.format.GeoJSON();
var features_RPZ1_19 = format_RPZ1_19.readFeatures(json_RPZ1_19, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_RPZ1_19 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_RPZ1_19.addFeatures(features_RPZ1_19);
var lyr_RPZ1_19 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_RPZ1_19, 
                style: style_RPZ1_19,
                popuplayertitle: 'RP Z1',
                interactive: true,
                title: '<img src="styles/legend/RPZ1_19.png" /> RP Z1'
            });
var format_Z1_ELEMENTOS_9_JUN_20 = new ol.format.GeoJSON();
var features_Z1_ELEMENTOS_9_JUN_20 = format_Z1_ELEMENTOS_9_JUN_20.readFeatures(json_Z1_ELEMENTOS_9_JUN_20, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Z1_ELEMENTOS_9_JUN_20 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Z1_ELEMENTOS_9_JUN_20.addFeatures(features_Z1_ELEMENTOS_9_JUN_20);
var lyr_Z1_ELEMENTOS_9_JUN_20 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Z1_ELEMENTOS_9_JUN_20, 
                style: style_Z1_ELEMENTOS_9_JUN_20,
                popuplayertitle: 'Z1_ELEMENTOS_9_JUN',
                interactive: true,
                title: '<img src="styles/legend/Z1_ELEMENTOS_9_JUN_20.png" /> Z1_ELEMENTOS_9_JUN'
            });
var format_ConductosZ1_21 = new ol.format.GeoJSON();
var features_ConductosZ1_21 = format_ConductosZ1_21.readFeatures(json_ConductosZ1_21, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_ConductosZ1_21 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_ConductosZ1_21.addFeatures(features_ConductosZ1_21);
var lyr_ConductosZ1_21 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_ConductosZ1_21, 
                style: style_ConductosZ1_21,
                popuplayertitle: 'Conductos Z1',
                interactive: true,
                title: '<img src="styles/legend/ConductosZ1_21.png" /> Conductos Z1'
            });
var group_ZONA1 = new ol.layer.Group({
                                layers: [lyr_RPZ1_19,lyr_Z1_ELEMENTOS_9_JUN_20,lyr_ConductosZ1_21,],
                                fold: 'close',
                                title: 'ZONA 1'});
var group_ZONA_4 = new ol.layer.Group({
                                layers: [lyr_Z4_ELEMENTOS_5_JUN_17,lyr_ConductosZ4_18,],
                                fold: 'close',
                                title: 'ZONA_4'});
var group_ZONA_5 = new ol.layer.Group({
                                layers: [lyr_ConductosLongitudes_14,lyr_Z5_RP_5_JUN_15,lyr_Z5_ELEMENTOS_5_JUN_16,],
                                fold: 'close',
                                title: 'ZONA_5'});
var group_ZONAS = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'ZONAS'});
var group_CUERPOSDEAGUA = new ol.layer.Group({
                                layers: [lyr_PBA_CURSOS_AGUA_11,lyr_CURSOS_AGUA_12,lyr_RIOS_3CUENCAS_13,],
                                fold: 'close',
                                title: 'CUERPOS DE AGUA'});
var group_BASE = new ol.layer.Group({
                                layers: [lyr_vias_circulacion_0,lyr_Partidos_2022copiar_1,lyr_caba_manzanas_2,lyr_barrios_populares_3,lyr_espacio_verde_publicoespacio_verde_publicoshp_4,lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5,lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_6,lyr_callejeroetiqueta_7,lyr_caba_callejerojerarquia_8,lyr_autopistas_9,lyr_caba_siluetacopiar_10,],
                                fold: 'close',
                                title: 'BASE'});

lyr_vias_circulacion_0.setVisible(true);lyr_Partidos_2022copiar_1.setVisible(true);lyr_caba_manzanas_2.setVisible(true);lyr_barrios_populares_3.setVisible(true);lyr_espacio_verde_publicoespacio_verde_publicoshp_4.setVisible(true);lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.setVisible(true);lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_6.setVisible(true);lyr_callejeroetiqueta_7.setVisible(true);lyr_caba_callejerojerarquia_8.setVisible(true);lyr_autopistas_9.setVisible(true);lyr_caba_siluetacopiar_10.setVisible(true);lyr_PBA_CURSOS_AGUA_11.setVisible(true);lyr_CURSOS_AGUA_12.setVisible(true);lyr_RIOS_3CUENCAS_13.setVisible(true);lyr_ConductosLongitudes_14.setVisible(true);lyr_Z5_RP_5_JUN_15.setVisible(true);lyr_Z5_ELEMENTOS_5_JUN_16.setVisible(true);lyr_Z4_ELEMENTOS_5_JUN_17.setVisible(true);lyr_ConductosZ4_18.setVisible(true);lyr_RPZ1_19.setVisible(true);lyr_Z1_ELEMENTOS_9_JUN_20.setVisible(true);lyr_ConductosZ1_21.setVisible(true);
var layersList = [group_BASE,group_CUERPOSDEAGUA,group_ZONA_5,group_ZONA_4,group_ZONA1];
lyr_vias_circulacion_0.set('fieldAliases', {'fid': 'fid', 'nomencla': 'nomencla', 'codigo': 'codigo', 'tipo': 'tipo', 'nombre': 'nombre', 'desdei': 'desdei', 'desded': 'desded', 'hastai': 'hastai', 'hastad': 'hastad', 'codloc': 'codloc', 'codaglo': 'codaglo', 'link': 'link', });
lyr_Partidos_2022copiar_1.set('fieldAliases', {'fid': 'fid', 'COD_CEN': 'COD_CEN', 'PARTIDO': 'PARTIDO', 'CABECERA': 'CABECERA', });
lyr_caba_manzanas_2.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'ZONA': 'ZONA', });
lyr_barrios_populares_3.set('fieldAliases', {'fid': 'fid', 'Id': 'Id', 'NOMBRE': 'NOMBRE', 'NOM_MAP': 'NOM_MAP', 'TIPO_ASENT': 'TIPO_ASENT', 'MANZANA': 'MANZANA', 'OBSERV': 'OBSERV', 'ALIAS': 'ALIAS', 'NOM_y_MZA': 'NOM_y_MZA', 'Superficie': 'Superficie', 'Brio_inter': 'Brio_inter', 'comuna': 'comuna', });
lyr_espacio_verde_publicoespacio_verde_publicoshp_4.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'nombre': 'nombre', 'nom_mapa': 'nom_mapa', 'barrio': 'barrio', 'comuna': 'comuna', 'ubicacion': 'ubicacion', 'clasificac': 'clasificac', 'tiene_pati': 'tiene_pati', 'apadrinada': 'apadrinada', 'decreto': 'decreto', 'fecha_decr': 'fecha_decr', 'ordenanza_': 'ordenanza_', 'fecha_orde': 'fecha_orde', 'boletin_of': 'boletin_of', 'fecha_bole': 'fecha_bole', 'area': 'area', 'perimetro': 'perimetro', 'observacio': 'observacio', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.set('fieldAliases', {'fid': 'fid', 'OBJECTID': 'OBJECTID', 'SECCION': 'SECCION', 'MANZANA': 'MANZANA', 'PARCELA': 'PARCELA', 'SMP': 'SMP', 'TIPO_EV': 'TIPO_EV', 'NOMBRE_EV': 'NOMBRE_EV', 'UBICACION': 'UBICACION', 'OBS': 'OBS', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'SUPERFICIE': 'SUPERFICIE', 'LEY': 'LEY', 'FECHA_LEY': 'FECHA_LEY', 'ORDENANZA': 'ORDENANZA', 'FECHA_ORD': 'FECHA_ORD', 'DECRETO': 'DECRETO', 'FECHA_DEC': 'FECHA_DEC', 'BOLETIN_OF': 'BOLETIN_OF', 'FECHA_BO': 'FECHA_BO', 'FUENTE1': 'FUENTE1', 'FUENTE2': 'FUENTE2', 'FUENTE3': 'FUENTE3', 'FUENTE4': 'FUENTE4', 'NIVEL': 'NIVEL', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_6.set('fieldAliases', {'fid': 'fid', 'id_ev_priv': 'id_ev_priv', 'nombre': 'nombre', 'fuente': 'fuente', 'ubicacion': 'ubicacion', 'Decreto': 'Decreto', 'Ordenaza': 'Ordenaza', 'Boletin': 'Boletin', 'fecha_decr': 'fecha_decr', 'fecha_orde': 'fecha_orde', 'fecha_bole': 'fecha_bole', 'Nombre_ori': 'Nombre_ori', 'Observacio': 'Observacio', 'BARRIO': 'BARRIO', 'COMUNA': 'COMUNA', 'area': 'area', 'perimeter': 'perimeter', 'TIPO_ESPAC': 'TIPO_ESPAC', 'nom_mapa': 'nom_mapa', });
lyr_callejeroetiqueta_7.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nomanter': 'nomanter', 'nom_mapa': 'nom_mapa', 'tipo_c': 'tipo_c', 'long': 'long', 'sentido': 'sentido', 'cod_sent': 'cod_sent', 'observa': 'observa', 'bicisenda': 'bicisenda', 'lado_ciclo': 'lado_ciclo', 'recorrid_x': 'recorrid_x', 'ciclo_obse': 'ciclo_obse', 'tooltip_bi': 'tooltip_bi', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', 'ffcc': 'ffcc', 'tipo_ffcc': 'tipo_ffcc', 'COMUNA': 'COMUNA', 'COM_PAR': 'COM_PAR', 'COM_IMPAR': 'COM_IMPAR', 'BARRIO': 'BARRIO', 'BARRIO_PAR': 'BARRIO_PAR', 'BARRIO_IMP': 'BARRIO_IMP', });
lyr_caba_callejerojerarquia_8.set('fieldAliases', {'fid': 'fid', 'id': 'id', 'codigo': 'codigo', 'nomoficial': 'nomoficial', 'alt_izqini': 'alt_izqini', 'alt_izqfin': 'alt_izqfin', 'alt_derini': 'alt_derini', 'alt_derfin': 'alt_derfin', 'nomanter': 'nomanter', 'nom_mapa': 'nom_mapa', 'tipo_c': 'tipo_c', 'long': 'long', 'sentido': 'sentido', 'cod_sent': 'cod_sent', 'observa': 'observa', 'bicisenda': 'bicisenda', 'lado_ciclo': 'lado_ciclo', 'recorrid_x': 'recorrid_x', 'ciclo_obse': 'ciclo_obse', 'tooltip_bi': 'tooltip_bi', 'red_jerarq': 'red_jerarq', 'red_tp': 'red_tp', 'ffcc': 'ffcc', 'tipo_ffcc': 'tipo_ffcc', 'COMUNA': 'COMUNA', 'COM_PAR': 'COM_PAR', 'COM_IMPAR': 'COM_IMPAR', 'BARRIO': 'BARRIO', 'BARRIO_PAR': 'BARRIO_PAR', 'BARRIO_IMP': 'BARRIO_IMP', });
lyr_autopistas_9.set('fieldAliases', {'fid': 'fid', 'NOMBRE': 'NOMBRE', });
lyr_caba_siluetacopiar_10.set('fieldAliases', {'fid': 'fid', 'ID': 'ID', 'OBJETO': 'OBJETO', 'COMUNAS': 'COMUNAS', 'BARRIOS': 'BARRIOS', 'PERIMETRO': 'PERIMETRO', 'AREA': 'AREA', });
lyr_PBA_CURSOS_AGUA_11.set('fieldAliases', {'fid': 'fid', 'gid': 'gid', 'entidad': 'entidad', 'objeto': 'objeto', 'fna': 'fna', 'gna': 'gna', 'nam': 'nam', 'hyp': 'hyp', 'fdc': 'fdc', 'sag': 'sag', });
lyr_CURSOS_AGUA_12.set('fieldAliases', {'fid': 'fid', 'UNION': 'UNION', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'PROVINCIA': 'PROVINCIA', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', });
lyr_RIOS_3CUENCAS_13.set('fieldAliases', {'fid': 'fid', 'UNION': 'UNION', 'TIPO': 'TIPO', 'NOMBRE': 'NOMBRE', 'REGIMEN': 'REGIMEN', 'NAVEGABILI': 'NAVEGABILI', 'PROVINCIA': 'PROVINCIA', 'PAIS': 'PAIS', 'OBSERVACIO': 'OBSERVACIO', 'HOJA': 'HOJA', 'FUENTE': 'FUENTE', });
lyr_ConductosLongitudes_14.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparen': 'transparen', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', 'path': 'path', 'fid_2': 'fid_2', 'handle_2': 'handle_2', 'block_2': 'block_2', 'etype_2': 'etype_2', 'space_2': 'space_2', 'layer_2': 'layer_2', 'olinetype_2': 'olinetype_2', 'linetype_2': 'linetype_2', 'color_2': 'color_2', 'ocolor_2': 'ocolor_2', 'color24_2': 'color24_2', 'transparen_2': 'transparen_2', 'lweight_2': 'lweight_2', 'linewidth_2': 'linewidth_2', 'ltscale_2': 'ltscale_2', 'visible_2': 'visible_2', 'thickness_2': 'thickness_2', 'ext_2': 'ext_2', 'height': 'height', 'text': 'text', 'angle': 'angle', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'Longitud': 'Longitud', });
lyr_Z5_RP_5_JUN_15.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'path': 'path', 'Nro. RP': 'Nro. RP', 'Datos RP_f': 'Datos RP_f', 'Datos RP_1': 'Datos RP_1', 'Datos RP_2': 'Datos RP_2', 'Datos RP_3': 'Datos RP_3', 'Datos RP_4': 'Datos RP_4', 'Datos RP_5': 'Datos RP_5', 'Datos RP_6': 'Datos RP_6', 'Datos RP_7': 'Datos RP_7', 'Datos RP_8': 'Datos RP_8', 'Datos RP_9': 'Datos RP_9', 'Datos RP10': 'Datos RP10', 'Datos RP11': 'Datos RP11', 'Datos RP12': 'Datos RP12', 'Datos RP13': 'Datos RP13', 'Datos RP14': 'Datos RP14', 'Datos RP15': 'Datos RP15', 'Datos RP_N': 'Datos RP_N', 'Datos RP16': 'Datos RP16', 'Datos RP17': 'Datos RP17', 'Datos RP18': 'Datos RP18', 'Datos RP19': 'Datos RP19', 'Datos RP20': 'Datos RP20', 'Datos RP21': 'Datos RP21', 'Datos RP22': 'Datos RP22', 'Datos RP23': 'Datos RP23', 'Datos RP24': 'Datos RP24', 'Datos RP25': 'Datos RP25', 'Datos RP26': 'Datos RP26', 'Datos RP_(': 'Datos RP_(', 'Datos RP_fid': 'Datos RP_fid', 'Datos RP_field_2': 'Datos RP_field_2', 'Datos RP_field_3': 'Datos RP_field_3', 'Datos RP_field_4': 'Datos RP_field_4', 'Datos RP_field_5': 'Datos RP_field_5', 'Datos RP_field_6': 'Datos RP_field_6', 'Datos RP_field_7': 'Datos RP_field_7', 'Datos RP_field_8': 'Datos RP_field_8', 'Datos RP_field_9': 'Datos RP_field_9', 'Datos RP_field_10': 'Datos RP_field_10', 'Datos RP_field_11': 'Datos RP_field_11', 'Datos RP_field_12': 'Datos RP_field_12', 'Datos RP_field_13': 'Datos RP_field_13', 'Datos RP_field_14': 'Datos RP_field_14', 'Datos RP_field_15': 'Datos RP_field_15', 'Datos RP_field_16': 'Datos RP_field_16', 'Datos RP_Nexo': 'Datos RP_Nexo', 'Datos RP_field_18': 'Datos RP_field_18', 'Datos RP_field_19': 'Datos RP_field_19', 'Datos RP_field_20': 'Datos RP_field_20', 'Datos RP_field_21': 'Datos RP_field_21', 'Datos RP_field_22': 'Datos RP_field_22', 'Datos RP_field_23': 'Datos RP_field_23', 'Datos RP_field_24': 'Datos RP_field_24', 'Datos RP_field_25': 'Datos RP_field_25', 'Datos RP_field_26': 'Datos RP_field_26', 'Datos RP_field_27': 'Datos RP_field_27', 'Datos RP_field_28': 'Datos RP_field_28', 'Datos RP_(2) Hormigon (H), PVC, PEAD; PRFV; HF (Hierro Fundido); Asbesto Cemento (AC)': 'Datos RP_(2) Hormigon (H), PVC, PEAD; PRFV; HF (Hierro Fundido); Asbesto Cemento (AC)', });
lyr_Z5_ELEMENTOS_5_JUN_16.set('fieldAliases', {'fid': 'fid', 'Tipo Eleme': 'Tipo Eleme', 'Nombre Ele': 'Nombre Ele', 'Fecha rele': 'Fecha rele', 'Comuna': 'Comuna', 'Sector': 'Sector', 'Calle': 'Calle', 'Altura': 'Altura', 'Intersecci': 'Intersecci', 'Nombre E_1': 'Nombre E_1', 'Tipo Ele_1': 'Tipo Ele_1', 'Direcci�': 'Direcci�', 'Direcci�_1': 'Direcci�_1', 'dist_m': 'dist_m', 'CONTROL': 'CONTROL', });
lyr_Z4_ELEMENTOS_5_JUN_17.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'name': 'name', 'solid': 'solid', 'associative': 'associative', 'hstyle': 'hstyle', 'hpattern': 'hpattern', 'doubleflag': 'doubleflag', 'angle': 'angle', 'scale': 'scale', 'deflines': 'deflines', 'path': 'path', 'fid_2': 'fid_2', 'handle_2': 'handle_2', 'block_2': 'block_2', 'etype_2': 'etype_2', 'space_2': 'space_2', 'layer_2': 'layer_2', 'olinetype_2': 'olinetype_2', 'linetype_2': 'linetype_2', 'color_2': 'color_2', 'ocolor_2': 'ocolor_2', 'color24_2': 'color24_2', 'transparency_2': 'transparency_2', 'lweight_2': 'lweight_2', 'linewidth_2': 'linewidth_2', 'ltscale_2': 'ltscale_2', 'visible_2': 'visible_2', 'thickness_2': 'thickness_2', 'ext_2': 'ext_2', 'height': 'height', 'text': 'text', 'angle_2': 'angle_2', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', 'path_2': 'path_2', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', 'fid_3': 'fid_3', 'Tipo Elemento': 'Tipo Elemento', 'Nombre Elemento': 'Nombre Elemento', 'Fecha relevamiento': 'Fecha relevamiento', 'Comuna': 'Comuna', 'Sector': 'Sector', 'Calle': 'Calle', 'Altura': 'Altura', 'Interseccion': 'Interseccion', 'Nexo/Conducto_Nombre Elemento descarga': 'Nexo/Conducto_Nombre Elemento descarga', 'Nexo/Conducto_Tipo Elemento Descarga': 'Nexo/Conducto_Tipo Elemento Descarga', 'Direcci�n Normalizada': 'Direcci�n Normalizada', 'Direcci�n Normalizada (ArcGIS)': 'Direcci�n Normalizada (ArcGIS)', });
lyr_ConductosZ4_18.set('fieldAliases', {'fid': 'fid', 'layer': 'layer', 'n': 'n', 'distance': 'distance', 'Longitud': 'Longitud', });
lyr_RPZ1_19.set('fieldAliases', {'fid': 'fid', 'N° Reja': 'N° Reja', 'begin': 'begin', 'end': 'end', 'RP Z1 DATOS_Fecha relevamiento': 'RP Z1 DATOS_Fecha relevamiento', 'RP Z1 DATOS_Comuna': 'RP Z1 DATOS_Comuna', 'RP Z1 DATOS_Sector': 'RP Z1 DATOS_Sector', 'RP Z1 DATOS_Altura calle inicio': 'RP Z1 DATOS_Altura calle inicio', 'RP Z1 DATOS_Altura calle fin': 'RP Z1 DATOS_Altura calle fin', 'RP Z1 DATOS_Calle': 'RP Z1 DATOS_Calle', 'RP Z1 DATOS_Estado Reja': 'RP Z1 DATOS_Estado Reja', 'RP Z1 DATOS_Tipo Reja': 'RP Z1 DATOS_Tipo Reja', 'RP Z1 DATOS_Tiene elemento antivandálico': 'RP Z1 DATOS_Tiene elemento antivandálico', 'RP Z1 DATOS_Altura canaleta inicio [m]': 'RP Z1 DATOS_Altura canaleta inicio [m]', 'RP Z1 DATOS_Ancho canaleta [m]': 'RP Z1 DATOS_Ancho canaleta [m]', 'RP Z1 DATOS_Distancia a LM inicio [m]': 'RP Z1 DATOS_Distancia a LM inicio [m]', 'RP Z1 DATOS_Longitud [m]': 'RP Z1 DATOS_Longitud [m]', 'RP Z1 DATOS_Altura canaleta fin [m]': 'RP Z1 DATOS_Altura canaleta fin [m]', 'RP Z1 DATOS_Distancia a LM fin [m]': 'RP Z1 DATOS_Distancia a LM fin [m]', 'RP Z1 DATOS_Diametro Nominal [mm]': 'RP Z1 DATOS_Diametro Nominal [mm]', 'RP Z1 DATOS_Material (2)': 'RP Z1 DATOS_Material (2)', 'RP Z1 DATOS_"Tapada inicio': 'RP Z1 DATOS_"Tapada inicio', 'RP Z1 DATOS_field_20': 'RP Z1 DATOS_field_20', 'RP Z1 DATOS_field_21': 'RP Z1 DATOS_field_21', 'RP Z1 DATOS_field_22': 'RP Z1 DATOS_field_22', 'RP Z1 DATOS_field_23': 'RP Z1 DATOS_field_23', 'RP Z1 DATOS_field_24': 'RP Z1 DATOS_field_24', 'RP Z1 DATOS_field_25': 'RP Z1 DATOS_field_25', 'RP Z1 DATOS_field_26': 'RP Z1 DATOS_field_26', 'RP Z1 DATOS_field_27': 'RP Z1 DATOS_field_27', 'RP Z1 DATOS_field_28': 'RP Z1 DATOS_field_28', });
lyr_Z1_ELEMENTOS_9_JUN_20.set('fieldAliases', {'fid': 'fid', 'Tipo Elemento': 'Tipo Elemento', 'Nombre Elemento': 'Nombre Elemento', 'Fecha relevamiento': 'Fecha relevamiento', 'Comuna': 'Comuna', 'Sector': 'Sector', 'Calle': 'Calle', 'Altura': 'Altura', 'Interseccion': 'Interseccion', 'Nexo/Conducto_Tipo Elemento Descarga': 'Nexo/Conducto_Tipo Elemento Descarga', });
lyr_ConductosZ1_21.set('fieldAliases', {'fid': 'fid', 'handle': 'handle', 'block': 'block', 'etype': 'etype', 'space': 'space', 'layer': 'layer', 'olinetype': 'olinetype', 'linetype': 'linetype', 'color': 'color', 'ocolor': 'ocolor', 'color24': 'color24', 'transparency': 'transparency', 'lweight': 'lweight', 'linewidth': 'linewidth', 'ltscale': 'ltscale', 'visible': 'visible', 'thickness': 'thickness', 'ext': 'ext', 'width': 'width', 'path': 'path', 'fid_2': 'fid_2', 'handle_2': 'handle_2', 'block_2': 'block_2', 'etype_2': 'etype_2', 'space_2': 'space_2', 'layer_2': 'layer_2', 'olinetype_2': 'olinetype_2', 'linetype_2': 'linetype_2', 'color_2': 'color_2', 'ocolor_2': 'ocolor_2', 'color24_2': 'color24_2', 'transparency_2': 'transparency_2', 'lweight_2': 'lweight_2', 'linewidth_2': 'linewidth_2', 'ltscale_2': 'ltscale_2', 'visible_2': 'visible_2', 'thickness_2': 'thickness_2', 'ext_2': 'ext_2', 'height': 'height', 'text': 'text', 'angle': 'angle', 'widthscale': 'widthscale', 'oblique': 'oblique', 'style': 'style', 'textgen': 'textgen', 'alignh': 'alignh', 'alignv': 'alignv', 'interlin': 'interlin', 'path_2': 'path_2', 'n': 'n', 'distance': 'distance', 'feature_x': 'feature_x', 'feature_y': 'feature_y', 'nearest_x': 'nearest_x', 'nearest_y': 'nearest_y', });
lyr_vias_circulacion_0.set('fieldImages', {'fid': '', 'nomencla': 'TextEdit', 'codigo': 'TextEdit', 'tipo': 'TextEdit', 'nombre': 'TextEdit', 'desdei': 'TextEdit', 'desded': 'TextEdit', 'hastai': 'TextEdit', 'hastad': 'TextEdit', 'codloc': 'TextEdit', 'codaglo': 'TextEdit', 'link': 'TextEdit', });
lyr_Partidos_2022copiar_1.set('fieldImages', {'fid': '', 'COD_CEN': 'TextEdit', 'PARTIDO': 'TextEdit', 'CABECERA': 'TextEdit', });
lyr_caba_manzanas_2.set('fieldImages', {'fid': '', 'ID': 'Range', 'ZONA': 'TextEdit', });
lyr_barrios_populares_3.set('fieldImages', {'fid': '', 'Id': '', 'NOMBRE': '', 'NOM_MAP': '', 'TIPO_ASENT': '', 'MANZANA': '', 'OBSERV': '', 'ALIAS': '', 'NOM_y_MZA': '', 'Superficie': '', 'Brio_inter': '', 'comuna': '', });
lyr_espacio_verde_publicoespacio_verde_publicoshp_4.set('fieldImages', {'fid': '', 'id': 'Range', 'nombre': 'TextEdit', 'nom_mapa': 'TextEdit', 'barrio': 'TextEdit', 'comuna': 'TextEdit', 'ubicacion': 'TextEdit', 'clasificac': 'TextEdit', 'tiene_pati': 'TextEdit', 'apadrinada': 'TextEdit', 'decreto': 'TextEdit', 'fecha_decr': 'TextEdit', 'ordenanza_': 'TextEdit', 'fecha_orde': 'TextEdit', 'boletin_of': 'TextEdit', 'fecha_bole': 'TextEdit', 'area': 'TextEdit', 'perimetro': 'TextEdit', 'observacio': 'TextEdit', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.set('fieldImages', {'fid': '', 'OBJECTID': 'TextEdit', 'SECCION': 'TextEdit', 'MANZANA': 'TextEdit', 'PARCELA': 'TextEdit', 'SMP': 'TextEdit', 'TIPO_EV': 'TextEdit', 'NOMBRE_EV': 'TextEdit', 'UBICACION': 'TextEdit', 'OBS': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'TextEdit', 'SUPERFICIE': 'TextEdit', 'LEY': 'TextEdit', 'FECHA_LEY': 'TextEdit', 'ORDENANZA': 'TextEdit', 'FECHA_ORD': 'TextEdit', 'DECRETO': 'TextEdit', 'FECHA_DEC': 'TextEdit', 'BOLETIN_OF': 'TextEdit', 'FECHA_BO': 'DateTime', 'FUENTE1': 'TextEdit', 'FUENTE2': 'TextEdit', 'FUENTE3': 'TextEdit', 'FUENTE4': 'TextEdit', 'NIVEL': 'TextEdit', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_6.set('fieldImages', {'fid': '', 'id_ev_priv': 'TextEdit', 'nombre': 'TextEdit', 'fuente': 'TextEdit', 'ubicacion': 'TextEdit', 'Decreto': 'TextEdit', 'Ordenaza': 'TextEdit', 'Boletin': 'TextEdit', 'fecha_decr': 'TextEdit', 'fecha_orde': 'TextEdit', 'fecha_bole': 'TextEdit', 'Nombre_ori': 'TextEdit', 'Observacio': 'TextEdit', 'BARRIO': 'TextEdit', 'COMUNA': 'Range', 'area': 'TextEdit', 'perimeter': 'TextEdit', 'TIPO_ESPAC': 'TextEdit', 'nom_mapa': 'TextEdit', });
lyr_callejeroetiqueta_7.set('fieldImages', {'fid': '', 'id': 'Range', 'codigo': 'Range', 'nomoficial': 'TextEdit', 'alt_izqini': 'Range', 'alt_izqfin': 'Range', 'alt_derini': 'Range', 'alt_derfin': 'Range', 'nomanter': 'TextEdit', 'nom_mapa': 'TextEdit', 'tipo_c': 'TextEdit', 'long': 'TextEdit', 'sentido': 'TextEdit', 'cod_sent': 'Range', 'observa': 'TextEdit', 'bicisenda': 'TextEdit', 'lado_ciclo': 'TextEdit', 'recorrid_x': 'TextEdit', 'ciclo_obse': 'TextEdit', 'tooltip_bi': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', 'ffcc': 'TextEdit', 'tipo_ffcc': 'TextEdit', 'COMUNA': 'Range', 'COM_PAR': 'Range', 'COM_IMPAR': 'Range', 'BARRIO': 'TextEdit', 'BARRIO_PAR': 'TextEdit', 'BARRIO_IMP': 'TextEdit', });
lyr_caba_callejerojerarquia_8.set('fieldImages', {'fid': '', 'id': 'Range', 'codigo': 'Range', 'nomoficial': 'TextEdit', 'alt_izqini': 'Range', 'alt_izqfin': 'Range', 'alt_derini': 'Range', 'alt_derfin': 'Range', 'nomanter': 'TextEdit', 'nom_mapa': 'TextEdit', 'tipo_c': 'TextEdit', 'long': 'TextEdit', 'sentido': 'TextEdit', 'cod_sent': 'Range', 'observa': 'TextEdit', 'bicisenda': 'TextEdit', 'lado_ciclo': 'TextEdit', 'recorrid_x': 'TextEdit', 'ciclo_obse': 'TextEdit', 'tooltip_bi': 'TextEdit', 'red_jerarq': 'TextEdit', 'red_tp': 'TextEdit', 'ffcc': 'TextEdit', 'tipo_ffcc': 'TextEdit', 'COMUNA': 'Range', 'COM_PAR': 'Range', 'COM_IMPAR': 'Range', 'BARRIO': 'TextEdit', 'BARRIO_PAR': 'TextEdit', 'BARRIO_IMP': 'TextEdit', });
lyr_autopistas_9.set('fieldImages', {'fid': '', 'NOMBRE': 'TextEdit', });
lyr_caba_siluetacopiar_10.set('fieldImages', {'fid': '', 'ID': 'Range', 'OBJETO': 'TextEdit', 'COMUNAS': 'TextEdit', 'BARRIOS': 'TextEdit', 'PERIMETRO': 'TextEdit', 'AREA': 'TextEdit', });
lyr_PBA_CURSOS_AGUA_11.set('fieldImages', {'fid': '', 'gid': '', 'entidad': '', 'objeto': '', 'fna': '', 'gna': '', 'nam': '', 'hyp': '', 'fdc': '', 'sag': '', });
lyr_CURSOS_AGUA_12.set('fieldImages', {'fid': '', 'UNION': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGIMEN': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'PROVINCIA': 'TextEdit', 'PAIS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'HOJA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_RIOS_3CUENCAS_13.set('fieldImages', {'fid': '', 'UNION': 'TextEdit', 'TIPO': 'TextEdit', 'NOMBRE': 'TextEdit', 'REGIMEN': 'TextEdit', 'NAVEGABILI': 'TextEdit', 'PROVINCIA': 'TextEdit', 'PAIS': 'TextEdit', 'OBSERVACIO': 'TextEdit', 'HOJA': 'TextEdit', 'FUENTE': 'TextEdit', });
lyr_ConductosLongitudes_14.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparen': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'thickness': '', 'ext': '', 'width': '', 'path': '', 'fid_2': '', 'handle_2': '', 'block_2': '', 'etype_2': '', 'space_2': '', 'layer_2': '', 'olinetype_2': '', 'linetype_2': '', 'color_2': '', 'ocolor_2': '', 'color24_2': '', 'transparen_2': '', 'lweight_2': '', 'linewidth_2': '', 'ltscale_2': '', 'visible_2': '', 'thickness_2': '', 'ext_2': '', 'height': '', 'text': '', 'angle': '', 'widthscale': '', 'oblique': '', 'style': '', 'textgen': '', 'alignh': '', 'alignv': '', 'interlin': '', 'n': '', 'distance': '', 'feature_x': '', 'feature_y': '', 'nearest_x': '', 'nearest_y': '', 'Longitud': '', });
lyr_Z5_RP_5_JUN_15.set('fieldImages', {'fid': 'TextEdit', 'layer': 'TextEdit', 'path': 'TextEdit', 'Nro. RP': 'TextEdit', 'Datos RP_f': '', 'Datos RP_1': '', 'Datos RP_2': '', 'Datos RP_3': '', 'Datos RP_4': '', 'Datos RP_5': '', 'Datos RP_6': '', 'Datos RP_7': '', 'Datos RP_8': '', 'Datos RP_9': '', 'Datos RP10': '', 'Datos RP11': '', 'Datos RP12': '', 'Datos RP13': '', 'Datos RP14': '', 'Datos RP15': '', 'Datos RP_N': '', 'Datos RP16': '', 'Datos RP17': '', 'Datos RP18': '', 'Datos RP19': '', 'Datos RP20': '', 'Datos RP21': '', 'Datos RP22': '', 'Datos RP23': '', 'Datos RP24': '', 'Datos RP25': '', 'Datos RP26': '', 'Datos RP_(': '', 'Datos RP_fid': 'TextEdit', 'Datos RP_field_2': 'TextEdit', 'Datos RP_field_3': 'TextEdit', 'Datos RP_field_4': 'TextEdit', 'Datos RP_field_5': 'TextEdit', 'Datos RP_field_6': 'TextEdit', 'Datos RP_field_7': 'TextEdit', 'Datos RP_field_8': 'TextEdit', 'Datos RP_field_9': 'TextEdit', 'Datos RP_field_10': 'TextEdit', 'Datos RP_field_11': 'TextEdit', 'Datos RP_field_12': 'TextEdit', 'Datos RP_field_13': 'TextEdit', 'Datos RP_field_14': 'TextEdit', 'Datos RP_field_15': 'TextEdit', 'Datos RP_field_16': 'TextEdit', 'Datos RP_Nexo': 'TextEdit', 'Datos RP_field_18': 'TextEdit', 'Datos RP_field_19': 'TextEdit', 'Datos RP_field_20': 'TextEdit', 'Datos RP_field_21': 'TextEdit', 'Datos RP_field_22': 'TextEdit', 'Datos RP_field_23': 'TextEdit', 'Datos RP_field_24': 'TextEdit', 'Datos RP_field_25': 'TextEdit', 'Datos RP_field_26': 'TextEdit', 'Datos RP_field_27': 'TextEdit', 'Datos RP_field_28': 'TextEdit', 'Datos RP_(2) Hormigon (H), PVC, PEAD; PRFV; HF (Hierro Fundido); Asbesto Cemento (AC)': 'TextEdit', });
lyr_Z5_ELEMENTOS_5_JUN_16.set('fieldImages', {'fid': 'TextEdit', 'Tipo Eleme': '', 'Nombre Ele': '', 'Fecha rele': '', 'Comuna': 'TextEdit', 'Sector': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Intersecci': '', 'Nombre E_1': '', 'Tipo Ele_1': '', 'Direcci�': '', 'Direcci�_1': '', 'dist_m': 'TextEdit', 'CONTROL': 'TextEdit', });
lyr_Z4_ELEMENTOS_5_JUN_17.set('fieldImages', {'fid': 'TextEdit', 'handle': 'Range', 'block': 'Range', 'etype': 'Range', 'space': 'Range', 'layer': 'TextEdit', 'olinetype': 'TextEdit', 'linetype': 'TextEdit', 'color': 'TextEdit', 'ocolor': 'Range', 'color24': 'Range', 'transparency': 'Range', 'lweight': 'Range', 'linewidth': 'TextEdit', 'ltscale': 'TextEdit', 'visible': 'Range', 'thickness': 'TextEdit', 'ext': 'TextEdit', 'name': 'TextEdit', 'solid': 'Range', 'associative': 'Range', 'hstyle': 'Range', 'hpattern': 'Range', 'doubleflag': 'Range', 'angle': 'TextEdit', 'scale': 'TextEdit', 'deflines': 'Range', 'path': 'TextEdit', 'fid_2': 'TextEdit', 'handle_2': 'Range', 'block_2': 'Range', 'etype_2': 'Range', 'space_2': 'Range', 'layer_2': 'TextEdit', 'olinetype_2': 'TextEdit', 'linetype_2': 'TextEdit', 'color_2': 'TextEdit', 'ocolor_2': 'Range', 'color24_2': 'Range', 'transparency_2': 'Range', 'lweight_2': 'Range', 'linewidth_2': 'TextEdit', 'ltscale_2': 'TextEdit', 'visible_2': 'Range', 'thickness_2': 'TextEdit', 'ext_2': 'TextEdit', 'height': 'TextEdit', 'text': 'TextEdit', 'angle_2': 'TextEdit', 'widthscale': 'TextEdit', 'oblique': 'TextEdit', 'style': 'TextEdit', 'textgen': 'Range', 'alignh': 'Range', 'alignv': 'Range', 'interlin': 'TextEdit', 'path_2': 'TextEdit', 'n': 'Range', 'distance': 'TextEdit', 'feature_x': 'TextEdit', 'feature_y': 'TextEdit', 'nearest_x': 'TextEdit', 'nearest_y': 'TextEdit', 'fid_3': 'TextEdit', 'Tipo Elemento': 'TextEdit', 'Nombre Elemento': 'TextEdit', 'Fecha relevamiento': 'TextEdit', 'Comuna': 'TextEdit', 'Sector': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Interseccion': 'TextEdit', 'Nexo/Conducto_Nombre Elemento descarga': 'TextEdit', 'Nexo/Conducto_Tipo Elemento Descarga': 'TextEdit', 'Direcci�n Normalizada': 'TextEdit', 'Direcci�n Normalizada (ArcGIS)': 'TextEdit', });
lyr_ConductosZ4_18.set('fieldImages', {'fid': '', 'layer': '', 'n': '', 'distance': '', 'Longitud': '', });
lyr_RPZ1_19.set('fieldImages', {'fid': '', 'N° Reja': '', 'begin': '', 'end': '', 'RP Z1 DATOS_Fecha relevamiento': '', 'RP Z1 DATOS_Comuna': '', 'RP Z1 DATOS_Sector': '', 'RP Z1 DATOS_Altura calle inicio': '', 'RP Z1 DATOS_Altura calle fin': '', 'RP Z1 DATOS_Calle': '', 'RP Z1 DATOS_Estado Reja': '', 'RP Z1 DATOS_Tipo Reja': '', 'RP Z1 DATOS_Tiene elemento antivandálico': '', 'RP Z1 DATOS_Altura canaleta inicio [m]': '', 'RP Z1 DATOS_Ancho canaleta [m]': '', 'RP Z1 DATOS_Distancia a LM inicio [m]': '', 'RP Z1 DATOS_Longitud [m]': '', 'RP Z1 DATOS_Altura canaleta fin [m]': '', 'RP Z1 DATOS_Distancia a LM fin [m]': '', 'RP Z1 DATOS_Diametro Nominal [mm]': '', 'RP Z1 DATOS_Material (2)': '', 'RP Z1 DATOS_"Tapada inicio': '', 'RP Z1 DATOS_field_20': '', 'RP Z1 DATOS_field_21': '', 'RP Z1 DATOS_field_22': '', 'RP Z1 DATOS_field_23': '', 'RP Z1 DATOS_field_24': '', 'RP Z1 DATOS_field_25': '', 'RP Z1 DATOS_field_26': '', 'RP Z1 DATOS_field_27': '', 'RP Z1 DATOS_field_28': '', });
lyr_Z1_ELEMENTOS_9_JUN_20.set('fieldImages', {'fid': 'TextEdit', 'Tipo Elemento': 'TextEdit', 'Nombre Elemento': 'TextEdit', 'Fecha relevamiento': 'TextEdit', 'Comuna': 'TextEdit', 'Sector': 'TextEdit', 'Calle': 'TextEdit', 'Altura': 'TextEdit', 'Interseccion': 'TextEdit', 'Nexo/Conducto_Tipo Elemento Descarga': 'TextEdit', });
lyr_ConductosZ1_21.set('fieldImages', {'fid': '', 'handle': '', 'block': '', 'etype': '', 'space': '', 'layer': '', 'olinetype': '', 'linetype': '', 'color': '', 'ocolor': '', 'color24': '', 'transparency': '', 'lweight': '', 'linewidth': '', 'ltscale': '', 'visible': '', 'thickness': '', 'ext': '', 'width': '', 'path': '', 'fid_2': '', 'handle_2': '', 'block_2': '', 'etype_2': '', 'space_2': '', 'layer_2': '', 'olinetype_2': '', 'linetype_2': '', 'color_2': '', 'ocolor_2': '', 'color24_2': '', 'transparency_2': '', 'lweight_2': '', 'linewidth_2': '', 'ltscale_2': '', 'visible_2': '', 'thickness_2': '', 'ext_2': '', 'height': '', 'text': '', 'angle': '', 'widthscale': '', 'oblique': '', 'style': '', 'textgen': '', 'alignh': '', 'alignv': '', 'interlin': '', 'path_2': '', 'n': '', 'distance': '', 'feature_x': '', 'feature_y': '', 'nearest_x': '', 'nearest_y': '', });
lyr_vias_circulacion_0.set('fieldLabels', {'fid': 'no label', 'nomencla': 'no label', 'codigo': 'no label', 'tipo': 'no label', 'nombre': 'no label', 'desdei': 'no label', 'desded': 'no label', 'hastai': 'no label', 'hastad': 'no label', 'codloc': 'no label', 'codaglo': 'no label', 'link': 'no label', });
lyr_Partidos_2022copiar_1.set('fieldLabels', {'fid': 'no label', 'COD_CEN': 'no label', 'PARTIDO': 'no label', 'CABECERA': 'no label', });
lyr_caba_manzanas_2.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'ZONA': 'no label', });
lyr_barrios_populares_3.set('fieldLabels', {'fid': 'no label', 'Id': 'no label', 'NOMBRE': 'no label', 'NOM_MAP': 'no label', 'TIPO_ASENT': 'no label', 'MANZANA': 'no label', 'OBSERV': 'no label', 'ALIAS': 'no label', 'NOM_y_MZA': 'no label', 'Superficie': 'no label', 'Brio_inter': 'no label', 'comuna': 'no label', });
lyr_espacio_verde_publicoespacio_verde_publicoshp_4.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'nombre': 'no label', 'nom_mapa': 'no label', 'barrio': 'no label', 'comuna': 'no label', 'ubicacion': 'no label', 'clasificac': 'no label', 'tiene_pati': 'no label', 'apadrinada': 'no label', 'decreto': 'no label', 'fecha_decr': 'no label', 'ordenanza_': 'no label', 'fecha_orde': 'no label', 'boletin_of': 'no label', 'fecha_bole': 'no label', 'area': 'no label', 'perimetro': 'no label', 'observacio': 'no label', });
lyr_espaciosverdescatastralesespaciosverdescatastro_espacios_verdes_08042020shp_5.set('fieldLabels', {'fid': 'no label', 'OBJECTID': 'no label', 'SECCION': 'no label', 'MANZANA': 'no label', 'PARCELA': 'no label', 'SMP': 'no label', 'TIPO_EV': 'no label', 'NOMBRE_EV': 'no label', 'UBICACION': 'no label', 'OBS': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'SUPERFICIE': 'no label', 'LEY': 'no label', 'FECHA_LEY': 'no label', 'ORDENANZA': 'no label', 'FECHA_ORD': 'no label', 'DECRETO': 'no label', 'FECHA_DEC': 'no label', 'BOLETIN_OF': 'no label', 'FECHA_BO': 'no label', 'FUENTE1': 'no label', 'FUENTE2': 'no label', 'FUENTE3': 'no label', 'FUENTE4': 'no label', 'NIVEL': 'no label', });
lyr_espacioverdeprivadoespacio_verde_privado_wgs84shp_6.set('fieldLabels', {'fid': 'no label', 'id_ev_priv': 'no label', 'nombre': 'no label', 'fuente': 'no label', 'ubicacion': 'no label', 'Decreto': 'no label', 'Ordenaza': 'no label', 'Boletin': 'no label', 'fecha_decr': 'no label', 'fecha_orde': 'no label', 'fecha_bole': 'no label', 'Nombre_ori': 'no label', 'Observacio': 'no label', 'BARRIO': 'no label', 'COMUNA': 'no label', 'area': 'no label', 'perimeter': 'no label', 'TIPO_ESPAC': 'no label', 'nom_mapa': 'no label', });
lyr_callejeroetiqueta_7.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nomanter': 'no label', 'nom_mapa': 'no label', 'tipo_c': 'no label', 'long': 'no label', 'sentido': 'no label', 'cod_sent': 'no label', 'observa': 'no label', 'bicisenda': 'no label', 'lado_ciclo': 'no label', 'recorrid_x': 'no label', 'ciclo_obse': 'no label', 'tooltip_bi': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', 'ffcc': 'no label', 'tipo_ffcc': 'no label', 'COMUNA': 'no label', 'COM_PAR': 'no label', 'COM_IMPAR': 'no label', 'BARRIO': 'no label', 'BARRIO_PAR': 'no label', 'BARRIO_IMP': 'no label', });
lyr_caba_callejerojerarquia_8.set('fieldLabels', {'fid': 'no label', 'id': 'no label', 'codigo': 'no label', 'nomoficial': 'no label', 'alt_izqini': 'no label', 'alt_izqfin': 'no label', 'alt_derini': 'no label', 'alt_derfin': 'no label', 'nomanter': 'no label', 'nom_mapa': 'no label', 'tipo_c': 'no label', 'long': 'no label', 'sentido': 'no label', 'cod_sent': 'no label', 'observa': 'no label', 'bicisenda': 'no label', 'lado_ciclo': 'no label', 'recorrid_x': 'no label', 'ciclo_obse': 'no label', 'tooltip_bi': 'no label', 'red_jerarq': 'no label', 'red_tp': 'no label', 'ffcc': 'no label', 'tipo_ffcc': 'no label', 'COMUNA': 'no label', 'COM_PAR': 'no label', 'COM_IMPAR': 'no label', 'BARRIO': 'no label', 'BARRIO_PAR': 'no label', 'BARRIO_IMP': 'no label', });
lyr_autopistas_9.set('fieldLabels', {'fid': 'no label', 'NOMBRE': 'no label', });
lyr_caba_siluetacopiar_10.set('fieldLabels', {'fid': 'no label', 'ID': 'no label', 'OBJETO': 'no label', 'COMUNAS': 'no label', 'BARRIOS': 'no label', 'PERIMETRO': 'no label', 'AREA': 'no label', });
lyr_PBA_CURSOS_AGUA_11.set('fieldLabels', {'fid': 'no label', 'gid': 'no label', 'entidad': 'no label', 'objeto': 'no label', 'fna': 'no label', 'gna': 'no label', 'nam': 'no label', 'hyp': 'no label', 'fdc': 'no label', 'sag': 'no label', });
lyr_CURSOS_AGUA_12.set('fieldLabels', {'fid': 'no label', 'UNION': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'REGIMEN': 'no label', 'NAVEGABILI': 'no label', 'PROVINCIA': 'no label', 'PAIS': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', });
lyr_RIOS_3CUENCAS_13.set('fieldLabels', {'fid': 'no label', 'UNION': 'no label', 'TIPO': 'no label', 'NOMBRE': 'no label', 'REGIMEN': 'no label', 'NAVEGABILI': 'no label', 'PROVINCIA': 'no label', 'PAIS': 'no label', 'OBSERVACIO': 'no label', 'HOJA': 'no label', 'FUENTE': 'no label', });
lyr_ConductosLongitudes_14.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparen': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', 'path': 'no label', 'fid_2': 'no label', 'handle_2': 'no label', 'block_2': 'no label', 'etype_2': 'no label', 'space_2': 'no label', 'layer_2': 'no label', 'olinetype_2': 'no label', 'linetype_2': 'no label', 'color_2': 'no label', 'ocolor_2': 'no label', 'color24_2': 'no label', 'transparen_2': 'no label', 'lweight_2': 'no label', 'linewidth_2': 'no label', 'ltscale_2': 'no label', 'visible_2': 'no label', 'thickness_2': 'no label', 'ext_2': 'no label', 'height': 'no label', 'text': 'no label', 'angle': 'no label', 'widthscale': 'no label', 'oblique': 'no label', 'style': 'no label', 'textgen': 'no label', 'alignh': 'no label', 'alignv': 'no label', 'interlin': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', 'Longitud': 'no label', });
lyr_Z5_RP_5_JUN_15.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'path': 'no label', 'Nro. RP': 'no label', 'Datos RP_f': 'no label', 'Datos RP_1': 'no label', 'Datos RP_2': 'no label', 'Datos RP_3': 'no label', 'Datos RP_4': 'no label', 'Datos RP_5': 'no label', 'Datos RP_6': 'no label', 'Datos RP_7': 'no label', 'Datos RP_8': 'no label', 'Datos RP_9': 'no label', 'Datos RP10': 'no label', 'Datos RP11': 'no label', 'Datos RP12': 'no label', 'Datos RP13': 'no label', 'Datos RP14': 'no label', 'Datos RP15': 'no label', 'Datos RP_N': 'no label', 'Datos RP16': 'no label', 'Datos RP17': 'no label', 'Datos RP18': 'no label', 'Datos RP19': 'no label', 'Datos RP20': 'no label', 'Datos RP21': 'no label', 'Datos RP22': 'no label', 'Datos RP23': 'no label', 'Datos RP24': 'no label', 'Datos RP25': 'no label', 'Datos RP26': 'no label', 'Datos RP_(': 'no label', 'Datos RP_fid': 'no label', 'Datos RP_field_2': 'no label', 'Datos RP_field_3': 'no label', 'Datos RP_field_4': 'no label', 'Datos RP_field_5': 'no label', 'Datos RP_field_6': 'no label', 'Datos RP_field_7': 'no label', 'Datos RP_field_8': 'no label', 'Datos RP_field_9': 'no label', 'Datos RP_field_10': 'no label', 'Datos RP_field_11': 'no label', 'Datos RP_field_12': 'no label', 'Datos RP_field_13': 'no label', 'Datos RP_field_14': 'no label', 'Datos RP_field_15': 'no label', 'Datos RP_field_16': 'no label', 'Datos RP_Nexo': 'no label', 'Datos RP_field_18': 'no label', 'Datos RP_field_19': 'no label', 'Datos RP_field_20': 'no label', 'Datos RP_field_21': 'no label', 'Datos RP_field_22': 'no label', 'Datos RP_field_23': 'no label', 'Datos RP_field_24': 'no label', 'Datos RP_field_25': 'no label', 'Datos RP_field_26': 'no label', 'Datos RP_field_27': 'no label', 'Datos RP_field_28': 'no label', 'Datos RP_(2) Hormigon (H), PVC, PEAD; PRFV; HF (Hierro Fundido); Asbesto Cemento (AC)': 'no label', });
lyr_Z5_ELEMENTOS_5_JUN_16.set('fieldLabels', {'fid': 'no label', 'Tipo Eleme': 'no label', 'Nombre Ele': 'no label', 'Fecha rele': 'no label', 'Comuna': 'no label', 'Sector': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Intersecci': 'no label', 'Nombre E_1': 'no label', 'Tipo Ele_1': 'no label', 'Direcci�': 'no label', 'Direcci�_1': 'no label', 'dist_m': 'no label', 'CONTROL': 'no label', });
lyr_Z4_ELEMENTOS_5_JUN_17.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'name': 'no label', 'solid': 'no label', 'associative': 'no label', 'hstyle': 'no label', 'hpattern': 'no label', 'doubleflag': 'no label', 'angle': 'no label', 'scale': 'no label', 'deflines': 'no label', 'path': 'no label', 'fid_2': 'no label', 'handle_2': 'no label', 'block_2': 'no label', 'etype_2': 'no label', 'space_2': 'no label', 'layer_2': 'no label', 'olinetype_2': 'no label', 'linetype_2': 'no label', 'color_2': 'no label', 'ocolor_2': 'no label', 'color24_2': 'no label', 'transparency_2': 'no label', 'lweight_2': 'no label', 'linewidth_2': 'no label', 'ltscale_2': 'no label', 'visible_2': 'no label', 'thickness_2': 'no label', 'ext_2': 'no label', 'height': 'no label', 'text': 'no label', 'angle_2': 'no label', 'widthscale': 'no label', 'oblique': 'no label', 'style': 'no label', 'textgen': 'no label', 'alignh': 'no label', 'alignv': 'no label', 'interlin': 'no label', 'path_2': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', 'fid_3': 'no label', 'Tipo Elemento': 'no label', 'Nombre Elemento': 'no label', 'Fecha relevamiento': 'no label', 'Comuna': 'no label', 'Sector': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Interseccion': 'no label', 'Nexo/Conducto_Nombre Elemento descarga': 'no label', 'Nexo/Conducto_Tipo Elemento Descarga': 'no label', 'Direcci�n Normalizada': 'no label', 'Direcci�n Normalizada (ArcGIS)': 'no label', });
lyr_ConductosZ4_18.set('fieldLabels', {'fid': 'no label', 'layer': 'no label', 'n': 'no label', 'distance': 'no label', 'Longitud': 'no label', });
lyr_RPZ1_19.set('fieldLabels', {'fid': 'no label', 'N° Reja': 'no label', 'begin': 'no label', 'end': 'no label', 'RP Z1 DATOS_Fecha relevamiento': 'no label', 'RP Z1 DATOS_Comuna': 'no label', 'RP Z1 DATOS_Sector': 'no label', 'RP Z1 DATOS_Altura calle inicio': 'no label', 'RP Z1 DATOS_Altura calle fin': 'no label', 'RP Z1 DATOS_Calle': 'no label', 'RP Z1 DATOS_Estado Reja': 'no label', 'RP Z1 DATOS_Tipo Reja': 'no label', 'RP Z1 DATOS_Tiene elemento antivandálico': 'no label', 'RP Z1 DATOS_Altura canaleta inicio [m]': 'no label', 'RP Z1 DATOS_Ancho canaleta [m]': 'no label', 'RP Z1 DATOS_Distancia a LM inicio [m]': 'no label', 'RP Z1 DATOS_Longitud [m]': 'no label', 'RP Z1 DATOS_Altura canaleta fin [m]': 'no label', 'RP Z1 DATOS_Distancia a LM fin [m]': 'no label', 'RP Z1 DATOS_Diametro Nominal [mm]': 'no label', 'RP Z1 DATOS_Material (2)': 'no label', 'RP Z1 DATOS_"Tapada inicio': 'no label', 'RP Z1 DATOS_field_20': 'no label', 'RP Z1 DATOS_field_21': 'no label', 'RP Z1 DATOS_field_22': 'no label', 'RP Z1 DATOS_field_23': 'no label', 'RP Z1 DATOS_field_24': 'no label', 'RP Z1 DATOS_field_25': 'no label', 'RP Z1 DATOS_field_26': 'no label', 'RP Z1 DATOS_field_27': 'no label', 'RP Z1 DATOS_field_28': 'no label', });
lyr_Z1_ELEMENTOS_9_JUN_20.set('fieldLabels', {'fid': 'no label', 'Tipo Elemento': 'no label', 'Nombre Elemento': 'no label', 'Fecha relevamiento': 'no label', 'Comuna': 'no label', 'Sector': 'no label', 'Calle': 'no label', 'Altura': 'no label', 'Interseccion': 'no label', 'Nexo/Conducto_Tipo Elemento Descarga': 'no label', });
lyr_ConductosZ1_21.set('fieldLabels', {'fid': 'no label', 'handle': 'no label', 'block': 'no label', 'etype': 'no label', 'space': 'no label', 'layer': 'no label', 'olinetype': 'no label', 'linetype': 'no label', 'color': 'no label', 'ocolor': 'no label', 'color24': 'no label', 'transparency': 'no label', 'lweight': 'no label', 'linewidth': 'no label', 'ltscale': 'no label', 'visible': 'no label', 'thickness': 'no label', 'ext': 'no label', 'width': 'no label', 'path': 'no label', 'fid_2': 'no label', 'handle_2': 'no label', 'block_2': 'no label', 'etype_2': 'no label', 'space_2': 'no label', 'layer_2': 'no label', 'olinetype_2': 'no label', 'linetype_2': 'no label', 'color_2': 'no label', 'ocolor_2': 'no label', 'color24_2': 'no label', 'transparency_2': 'no label', 'lweight_2': 'no label', 'linewidth_2': 'no label', 'ltscale_2': 'no label', 'visible_2': 'no label', 'thickness_2': 'no label', 'ext_2': 'no label', 'height': 'no label', 'text': 'no label', 'angle': 'no label', 'widthscale': 'no label', 'oblique': 'no label', 'style': 'no label', 'textgen': 'no label', 'alignh': 'no label', 'alignv': 'no label', 'interlin': 'no label', 'path_2': 'no label', 'n': 'no label', 'distance': 'no label', 'feature_x': 'no label', 'feature_y': 'no label', 'nearest_x': 'no label', 'nearest_y': 'no label', });
lyr_ConductosZ1_21.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});