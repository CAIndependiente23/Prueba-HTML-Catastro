var size = 0;
var placement = 'point';
function categories_caba_callejerojerarquia_4(feature, value, size, resolution, labelText,
                       labelFont, labelFill, bufferColor, bufferWidth,
                       placement) {
                var valueStr = (value !== null && value !== undefined) ? value.toString() : 'default';
                switch(valueStr) {case 'AUTOPISTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(77,77,77,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.76}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'AVENIDA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(162,157,157,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BAJADA AUTOPISTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,165,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'BOULEVARD':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CALLE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,165,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CALLE PASAJE PARTICULAR':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'CALLE PEATONAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'ENLACE AUTOPISTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,165,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PASAJE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PASAJE PARTICULAR':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PASAJE PÃšBLICO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(165,165,165,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 1.52}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PASAJE PEATONAL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'PUENTE':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SENDERO':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'SUBIDA AUTOPISTA':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.19}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
case 'TÃšNEL':
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(84,84,84,0.9019607843137255)', lineDash: [1.52,0.76], lineCap: 'square', lineJoin: 'bevel', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;
default:
                    return [ new ol.style.Style({
        stroke: new ol.style.Stroke({color: 'rgba(87,223,50,1.0)', lineDash: null, lineCap: 'square', lineJoin: 'bevel', width: 0.38}),
        text: createTextStyle(feature, resolution, labelText, labelFont,
                              labelFill, placement, bufferColor,
                              bufferWidth)
    })];
                    break;}};

var style_caba_callejerojerarquia_4 = function(feature, resolution){
    var context = {
        feature: feature,
        variables: {}
    };
    
    var labelText = ""; 
    var value = feature.get("tipo_c");
    var labelFont = "13.0px \'Open Sans\', sans-serif";
    var labelFill = "#323232";
    var bufferColor = "";
    var bufferWidth = 0;
    var textAlign = "left";
    var offsetX = 0;
    var offsetY = 0;
    var placement = 'line';
    if ("" !== null) {
        labelText = String("");
    }
    
    var style = categories_caba_callejerojerarquia_4(feature, value, size, resolution, labelText,
                            labelFont, labelFill, bufferColor,
                            bufferWidth, placement);

    return style;
};
