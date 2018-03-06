/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        document.addEventListener('deviceready', this.onDeviceReady.bind(this), false);
    },

    // deviceready Event Handler
    //
    // Bind any cordova events here. Common events are:
    // 'pause', 'resume', etc.
    onDeviceReady: function() {
      
	   var callbackFn = function(location) {
    alert('[js] Posición en background:  ' + location.latitude + ',' + location.longitude);
    // Aquí incluímos lo que queramos hacer con la información, incluso enviarla
    // a un servidor si queremos.
    // jQuery.post(url, JSON.stringify(location));
 
    // Debemos informar que hemos terminado para que el sistema operativo
    // cierre ordenadamente nuestra aplicación
   // backgroundGeolocation.finish();
  };
 
  var failureFn = function(error) {
    alert('Error');
  };
 
  // Configuramos el plugin, indicando nuestra función callback y algunas opciones
  backgroundGeolocation.configure(callbackFn, failureFn, {
      desiredAccuracy: 10,
      stationaryRadius: 20,
      distanceFilter: 30,
      interval: 3000
  });
 
  // Activamos la geolocalización en segundo plano
  backgroundGeolocation.start();
  
		
		
		
    },

  
};

app.initialize();