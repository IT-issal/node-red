/**
 * Copyright 2013 IBM Corp.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/
module.exports = {
    uiHost: process.env.OPENSHIFT_NODEJS_IP || "127.0.0.1",
    uiPort: parseInt(process.env.OPENSHIFT_NODEJS_PORT || '1880'),

    mqttReconnectTime: 15000,
    serialReconnectTime: 15000,
    socketReconnectTime: 10000,
    socketTimeout: 120000,
    debugMaxLength: 1000,

    flowFile: 'flows.json',
    flowFilePretty: true,

    userDir: process.env.OPENSHIFT_DATA_DIR+'/',
    nodesDir: process.env.OPENSHIFT_DATA_DIR+'/nodes',

    //https: {
    //    key: fs.readFileSync('privatekey.pem'),
    //    cert: fs.readFileSync('certificate.pem')
    //},
    //httpRoot: '/red',
    //httpAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},
    //httpAdminRoot: '/admin',
    httpAdminAuth: { user:"jevad", pass:"5f4dcc3b5aa765d61d8327deb882cf99" },
    //httpNodeRoot: '/nodes',
    //httpNodeAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},
    //httpStatic: '/home/nol/node-red-dashboard/',
    //httpStaticAuth: {user:"user",pass:"5f4dcc3b5aa765d61d8327deb882cf99"},

    // The following property can be used to disable the editor. The admin API
    // is not affected by this option. To disable both the editor and the admin
    // API, use either the httpRoot or httpAdminRoot properties
    //disableEditor: false,

    httpNodeCors: {
        origin: "*",
        methods: "GET,PUT,POST,DELETE"
    },

    // Anything in this hash is globally available to all functions.
    // It is accessed as context.global.
    // eg:
    //    functionGlobalContext: { os:require('os') }
    // can be accessed in a function block as:
    //    context.global.os

    functionGlobalContext: {
        // os:require('os'),
        // bonescript:require('bonescript'),
        // arduino:require('duino')
    }

}
