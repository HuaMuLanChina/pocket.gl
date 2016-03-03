/**
 * pocket.gl http://pocketgl.aclockworkberry.com
 *
 * Copyright 2016 Giuseppe Portelli <info@aclockworkberry.com>
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 * 
 *  http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
 
require.onError = function (err) {
    console.log("Error [" + err.requireType + "]" + ' modules: ' + err.requireModules);
    throw err;
};

require.config({
    baseUrl: '..',

    paths: {
        app: 				'js/app',
        three_examples: 	'bower_components/three.js/examples/js',
        three_builds: 		'bower_components/three.js/build',
        text: 				'bower_components/text/text',
        ace_builds: 		'bower_components/ace-builds/src-noconflict',
        dat_gui:  			'bower_components/dat-gui/build'
    },

    shim: {
    	"three_examples/Detector": 							['three_builds/three'],
		"three_examples/controls/OrbitControls": 			['three_builds/three'],
		"three_examples/loaders/DDSLoader": 				['three_builds/three'],
		"three_examples/loaders/OBJLoader": 				['three_builds/three'],
		"three_examples/loaders/MTLLoader": 				['three_builds/three'],
		"three_examples/loaders/ColladaLoader": 			['three_builds/three'],
		"three_examples/geometries/TeapotBufferGeometry": 	['three_builds/three'],
    }
});

var examples = [
	"empty",
	"gui-meshes",
	"earth",

	"animation",
	"mesh-viewer",
	"derivatives",
	"flat-shader",
	"flat-bump",
	"procedural-meshes",
	"random-colors",
	"redout-shader"
];

var index = parseInt(window.location.hash.substring(1));

require([
	"app/pocket.gl",
	"examples/data/" + examples[index] + "/params"
	],

	function(widget, params) {
		var menu = document.createElement("div");
		for(i=0; i<examples.length; i++) {
			var a = document.createElement("a");
			a.innerHTML = (i+1) + ". " + examples[i];
			a.href = "#" + i;
			a.style = "padding-right: 10px";
			a.onclick = function() { 
				window.location = "#" + i; 
				window.location.reload(); 
			}
			menu.appendChild(a);			
		}
		document.getElementById("container").appendChild(menu);


	    new widget("container", params, "data/" + examples[index]); 
	}
);