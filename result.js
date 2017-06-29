var textures = new Textures()

//changed /graph/ to number corresponding to correct category, the int will change with toggle
var sd = new ScatterData({
	url: 'result/0/' + result_id
})

var sdv = new Scatter3dView({
	model: sd,
	textures: textures,
	// pointSize: 0.1, 
	pointSize: 12,
	is3d: false,
	colorKey: 'scores',
	shapeKey: 'library',
	labelKey: ['sig_id', 'geneset'],
})

var legend = new Legend({scatterPlot: sdv, h: window.innerHeight})

var controler = new Controler({scatterPlot: sdv, h: window.innerHeight-200, w: 200})

//var search = new SearchSelectize({scatterPlot: sdv, container: "#controls"})

var sigSimSearch = new SigSimSearchForm({scatterPlot: sdv, container: "#controls1", result_id: result_id})

//var resultModalBtn = new ResultModalBtn({scatterPlot: sdv, container: document.body, result_id: result_id})

//var resultModal = new ResultModal({scatterPlot: sdv});

var overlay = new Overlay({scatterPlot: sdv})
