ol.proj.proj4.register(proj4);
//ol.proj.get("EPSG:4326").setExtent([-118.261314, 8.282155, -79.364685, 37.663299]);
var wms_layers = [];


        var lyr_F4Map2D_0 = new ol.layer.Tile({
            'title': 'F4 Map - 2D',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://tile1.f4map.com/tiles/f4_2d/{z}/{x}/{y}.png'
            })
        });

        var lyr_EsriImagery_1 = new ol.layer.Tile({
            'title': 'Esri Imagery',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}'
            })
        });

        var lyr_CartoLight_2 = new ol.layer.Tile({
            'title': 'Carto Light',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://a.basemaps.cartocdn.com/light_all/{z}/{x}/{y}.pn'
            })
        });
var format_POR_Nacimiento_2020por_nacimientos_2020_3 = new ol.format.GeoJSON();
var features_POR_Nacimiento_2020por_nacimientos_2020_3 = format_POR_Nacimiento_2020por_nacimientos_2020_3.readFeatures(json_POR_Nacimiento_2020por_nacimientos_2020_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_POR_Nacimiento_2020por_nacimientos_2020_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_POR_Nacimiento_2020por_nacimientos_2020_3.addFeatures(features_POR_Nacimiento_2020por_nacimientos_2020_3);
var lyr_POR_Nacimiento_2020por_nacimientos_2020_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_POR_Nacimiento_2020por_nacimientos_2020_3, 
                style: style_POR_Nacimiento_2020por_nacimientos_2020_3,
                popuplayertitle: 'POR_Nacimiento_2020 — por_nacimientos_2020',
                interactive: true,
    title: 'POR_Nacimiento_2020 — por_nacimientos_2020<br />\
    <img src="styles/legend/POR_Nacimiento_2020por_nacimientos_2020_3_0.png" /> 0 - 10<br />\
    <img src="styles/legend/POR_Nacimiento_2020por_nacimientos_2020_3_1.png" /> 10 - 15<br />\
    <img src="styles/legend/POR_Nacimiento_2020por_nacimientos_2020_3_2.png" /> 15 - 20<br />\
    <img src="styles/legend/POR_Nacimiento_2020por_nacimientos_2020_3_3.png" /> 20 - 25<br />\
    <img src="styles/legend/POR_Nacimiento_2020por_nacimientos_2020_3_4.png" /> 25 - 47.1<br />' });
var format_Hospitales_RURALEShospitales_rurales_4 = new ol.format.GeoJSON();
var features_Hospitales_RURALEShospitales_rurales_4 = format_Hospitales_RURALEShospitales_rurales_4.readFeatures(json_Hospitales_RURALEShospitales_rurales_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hospitales_RURALEShospitales_rurales_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_RURALEShospitales_rurales_4.addFeatures(features_Hospitales_RURALEShospitales_rurales_4);
cluster_Hospitales_RURALEShospitales_rurales_4 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hospitales_RURALEShospitales_rurales_4
});
var lyr_Hospitales_RURALEShospitales_rurales_4 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hospitales_RURALEShospitales_rurales_4, 
                style: style_Hospitales_RURALEShospitales_rurales_4,
                popuplayertitle: 'Hospitales_RURALES — hospitales_rurales',
                interactive: true,
                title: '<img src="styles/legend/Hospitales_RURALEShospitales_rurales_4.png" /> Hospitales_RURALES — hospitales_rurales'
            });
var format_Hospitales_URBANOShospitales_urbanos_5 = new ol.format.GeoJSON();
var features_Hospitales_URBANOShospitales_urbanos_5 = format_Hospitales_URBANOShospitales_urbanos_5.readFeatures(json_Hospitales_URBANOShospitales_urbanos_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Hospitales_URBANOShospitales_urbanos_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hospitales_URBANOShospitales_urbanos_5.addFeatures(features_Hospitales_URBANOShospitales_urbanos_5);
cluster_Hospitales_URBANOShospitales_urbanos_5 = new ol.source.Cluster({
  distance: 30,
  source: jsonSource_Hospitales_URBANOShospitales_urbanos_5
});
var lyr_Hospitales_URBANOShospitales_urbanos_5 = new ol.layer.Vector({
                declutter: false,
                source:cluster_Hospitales_URBANOShospitales_urbanos_5, 
                style: style_Hospitales_URBANOShospitales_urbanos_5,
                popuplayertitle: 'Hospitales_URBANOS — hospitales_urbanos',
                interactive: true,
                title: '<img src="styles/legend/Hospitales_URBANOShospitales_urbanos_5.png" /> Hospitales_URBANOS — hospitales_urbanos'
            });
var format_Estados_MXestados_mx_6 = new ol.format.GeoJSON();
var features_Estados_MXestados_mx_6 = format_Estados_MXestados_mx_6.readFeatures(json_Estados_MXestados_mx_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:4326'});
var jsonSource_Estados_MXestados_mx_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Estados_MXestados_mx_6.addFeatures(features_Estados_MXestados_mx_6);
var lyr_Estados_MXestados_mx_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Estados_MXestados_mx_6, 
                style: style_Estados_MXestados_mx_6,
                popuplayertitle: 'Estados_MX — estados_mx',
                interactive: true,
                title: '<img src="styles/legend/Estados_MXestados_mx_6.png" /> Estados_MX — estados_mx'
            });

lyr_F4Map2D_0.setVisible(true);lyr_EsriImagery_1.setVisible(true);lyr_CartoLight_2.setVisible(true);lyr_POR_Nacimiento_2020por_nacimientos_2020_3.setVisible(true);lyr_Hospitales_RURALEShospitales_rurales_4.setVisible(false);lyr_Hospitales_URBANOShospitales_urbanos_5.setVisible(false);lyr_Estados_MXestados_mx_6.setVisible(false);
var layersList = [lyr_F4Map2D_0,lyr_EsriImagery_1,lyr_CartoLight_2,lyr_POR_Nacimiento_2020por_nacimientos_2020_3,lyr_Hospitales_RURALEShospitales_rurales_4,lyr_Hospitales_URBANOShospitales_urbanos_5,lyr_Estados_MXestados_mx_6];
lyr_POR_Nacimiento_2020por_nacimientos_2020_3.set('fieldAliases', {'fid': 'fid', 'NOM_MUN': 'Municipio', 'idmun90': 'idmun90', 'pnm20_a20': 'Núm. nacimientos (%)', });
lyr_Hospitales_RURALEShospitales_rurales_4.set('fieldAliases', {'fid': 'fid', 'CLUES': 'CLUES', 'NOMBRE DE': 'Institución', 'NOMBRE TIP': 'Tipo', 'NOMBRE COM': 'Nombre', });
lyr_Hospitales_URBANOShospitales_urbanos_5.set('fieldAliases', {'fid': 'fid', 'CLUES': 'CLUES', 'NOMBRE DE': 'Institución', 'NOMBRE TIP': 'Tipo', 'NOMBRE COM': 'Nombre', });
lyr_Estados_MXestados_mx_6.set('fieldAliases', {'fid': 'fid', 'CVEGEO': 'CVEGEO', 'NOMGEO': 'Estado', 'POB1': 'Población total', 'POB42': 'Población mujeres', 'POB42_R': 'Población mujeres (%)', });
lyr_POR_Nacimiento_2020por_nacimientos_2020_3.set('fieldImages', {'fid': '', 'NOM_MUN': 'TextEdit', 'idmun90': 'TextEdit', 'pnm20_a20': 'TextEdit', });
lyr_Hospitales_RURALEShospitales_rurales_4.set('fieldImages', {'fid': '', 'CLUES': '', 'NOMBRE DE': '', 'NOMBRE TIP': '', 'NOMBRE COM': '', });
lyr_Hospitales_URBANOShospitales_urbanos_5.set('fieldImages', {'fid': '', 'CLUES': '', 'NOMBRE DE': '', 'NOMBRE TIP': '', 'NOMBRE COM': '', });
lyr_Estados_MXestados_mx_6.set('fieldImages', {'fid': 'TextEdit', 'CVEGEO': 'TextEdit', 'NOMGEO': 'TextEdit', 'POB1': 'TextEdit', 'POB42': 'TextEdit', 'POB42_R': 'TextEdit', });
lyr_POR_Nacimiento_2020por_nacimientos_2020_3.set('fieldLabels', {'fid': 'hidden field', 'NOM_MUN': 'inline label - always visible', 'idmun90': 'hidden field', 'pnm20_a20': 'inline label - always visible', });
lyr_Hospitales_RURALEShospitales_rurales_4.set('fieldLabels', {'fid': 'hidden field', 'CLUES': 'hidden field', 'NOMBRE DE': 'inline label - always visible', 'NOMBRE TIP': 'inline label - always visible', 'NOMBRE COM': 'inline label - always visible', });
lyr_Hospitales_URBANOShospitales_urbanos_5.set('fieldLabels', {'fid': 'hidden field', 'CLUES': 'hidden field', 'NOMBRE DE': 'inline label - always visible', 'NOMBRE TIP': 'inline label - always visible', 'NOMBRE COM': 'inline label - always visible', });
lyr_Estados_MXestados_mx_6.set('fieldLabels', {'fid': 'hidden field', 'CVEGEO': 'hidden field', 'NOMGEO': 'inline label - always visible', 'POB1': 'inline label - always visible', 'POB42': 'inline label - always visible', 'POB42_R': 'inline label - always visible', });
lyr_Estados_MXestados_mx_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});