/*
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *     http://www.apache.org/licenses/LICENSE-2.0
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

const dotenv = require('dotenv');
const HttpsProxyAgent = require('https-proxy-agent');
dotenv.config();

const proxyConfig = [
  {
    context: '/proxy-angular',
    target: 'http://localhost:4200',
    changeOrigin: true,
    pathRewrite: { '^/proxy-angular': '' }
  },
];

function httpUrlToWSUrl(url) {
  return url.replace(/(http)(s)?\:\/\//, 'ws$2://');
}

function setupForCorporateProxy(proxyConfig) {
  const proxyServer = process.env.SERVER_PROXY;
  const httpProxy = process.env.HTTP_PROXY;
  if (proxyServer) {
    let agent = null;
    if (httpProxy) {
      agent = new HttpsProxyAgent(httpProxy);
    }
    proxyConfig.forEach(function(entry) {
      if (entry.context === '/ws') {
        entry.target = httpUrlToWSUrl(proxyServer);
      } else {
        entry.target = proxyServer;
      }
      if (agent) {
        entry.agent = agent;
      }
    });
  }
  return proxyConfig;
}

module.exports = setupForCorporateProxy(proxyConfig);
