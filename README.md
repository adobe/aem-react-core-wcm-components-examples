[![semantic-release](https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg)](https://github.com/semantic-release/semantic-release)


# AEM WCM Core Components - React implementation - Examples

The React implementation for [AEM core components](https://github.com/adobe/aem-core-wcm-components). 
Provides either ready to use / extend components, or if you choose to write your own, a good reference to get started.

Uses the following NPM modules:
#### [React core components - base](https://github.com/adobe/aem-react-core-wcm-components-base)
#### [React core components - spa](https://github.com/adobe/aem-react-core-wcm-components-spa)

## Welcome

* **Contributions** are welcome, read our [contributing guide](CONTRIBUTING.md) for more information.
* **Ideas and questions** are discussed on our [public mailing list](https://groups.google.com/forum/#!forum/aem-core-components-dev); you can also [subscribe via email](mailto:aem-core-components-dev+subscribe@googlegroups.com).

### Usability Study 2020

We're conducting a usability study by using the [System Usability Scale](https://measuringu.com/sus/), a reliable tool to measure the perceived usability.  
Please help us making the Core Components better by responding to our **[short usability questionnaire](https://s2.userzoom.com/m/MSBDNTc1MlMxMDk1)**. Thank you!

## Documentation

TBD

## Features

TBD

### Template Components

1. [Navigation](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/navigation/v1/navigation)
2. [Language Navigation](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/languagenavigation/v1/languagenavigation)
3. [Breadcrumb](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/breadcrumb/v2/breadcrumb)

### Page Authoring Components

4. [Title](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/title/v2/title)
5. [Text](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/text/v2/text)
6. [Image](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/image/v2/image)
7. [Button](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/button/v1/button)
8. [Teaser](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/teaser/v1/teaser)
9. [Download](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/download/v1/download)
10. [List](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/list/v2/list)
11. [Separator](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/separator/v1/separator)
12. [Progress Bar](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/progressbar/v1/progressbar)
13. [Experience Fragment (demo)](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/experiencefragment/v1/experiencefragment)
### Container Components

14. [Container](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/container/v1/container)
15. [Carousel](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/carousel/v1/carousel)
16. [Tabs](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/tabs/v1/tabs)
17. [Accordion](https://github.com/adobe/aem-core-wcm-components/blob/master/content/src/content/jcr_root/apps/core/wcm/components/accordion/v1/accordion)

### Form Components

Not suported

### Roadmap

TBD

## Usage

To include the Core Components in a new project, we strongly advise to use the [AEM Project Archetype](https://github.com/adobe/aem-project-archetype); this guarantees a starting point that complies to all recommended practices from Adobe.

For existing projects, take example from the [AEM Project Archetype](https://github.com/adobe/aem-project-archetype) by looking at the `core.wcm.components` references in the main [`pom.xml`](https://github.com/adobe/aem-project-archetype/blob/master/src/main/archetype/pom.xml), in [`all/pom.xml`](https://github.com/adobe/aem-project-archetype/blob/master/src/main/archetype/all/pom.xml), and in [`ui.apps/pom.xml`](https://github.com/adobe/aem-project-archetype/blob/master/src/main/archetype/ui.apps/pom.xml). For the rest, make sure to create Proxy Components, to load the client libraries and to allow the components on the template, as instructed in [Using Core Components](https://docs.adobe.com/content/help/en/experience-manager-core-components/using/get-started/using.html).

### System Requirements

Core Components | AEM as a Cloud Service | AEM 6.5 | AEM 6.4 | Java SE | Maven
----------------|------------------------|---------|---------|---------|---------
[2.11.1](https://github.com/adobe/aem-core-wcm-components/releases/tag/core.wcm.components.reactor-2.11.1) | Continual | 6.5.5.0+ | 6.4.8.1+ | 8, 11 | 3.3.9+

For the requirements from previous Core Component releases, see [Historical System Requirements](VERSIONS.md).

The Core Components require the use of [editable templates](https://docs.adobe.com/content/help/en/experience-manager-learn/sites/page-authoring/template-editor-feature-video-use.html) and do not support Classic UI nor static templates. If needed, check out the [AEM Modernization Tools](https://opensource.adobe.com/aem-modernize-tools/pages/tools.html).

Setup your local development environment for [AEM as a Cloud Service SDK](https://docs.adobe.com/content/help/en/experience-manager-learn/cloud-service/local-development-environment-set-up/overview.html) or for [older versions of AEM](https://docs.adobe.com/content/help/en/experience-manager-learn/foundation/development/set-up-a-local-aem-development-environment.html).

### Building

To compile your own version of the React Core Components, you can build and install everything on your running AEM instance by issuing the following command in the top level folder of the project:

Cloud:

    mvn clean install -Pcloud
    
6.5.8+:

    mvn clean install -Pclassic

Note: 
There is currently a known bug that requires you to manually activate the bundle after first installation.
After installation go to http://localhost:4502/system/console/bundles

And search for "Adobe Experience Manager Core WCM Components - React Examples - Bundle" - and activate it.
    
    
You can also install individual packages/bundles by issuing the following command in the top-level folder of the project:

    mvn clean install -PautoInstallPackage -pl <project_name(s)> -am

Note that:
* `-pl/-projects` option specifies the list of projects that you want to install
* `-am/-also-make` options specifies that dependencies should also be built

For convenience, the following deployment profiles are provided when running the Maven install goal with `mvn install`:
* `autoInstallSinglePackage`: Install everything to the AEM author instance.
* `autoInstallSinglePackagePublish`: Install everything to the AEM publish instance.
* `autoInstallPackage`: Install the `ui.content` and `ui.apps` content packages to the AEM author instance.
* `autoInstallPackagePublish`: Install the `ui.content` and `ui.apps` content packages to the  AEM publish instance.

The hostname and port of the instance can be changed with the following user defined properties:
* `aem.host` and `aem.port` for the author instance.
* `aem.publish.host` and `aem.publish.port` for the publish instance.

### Server Side Rendering demo

To enable server side rendering demo on the SPA demo site, simply:

* Make sure you executed the full production build at least 1 time (`npm run build:production`)
* Go to the module react-spacomponents-example-project-directory in your CMD
* Make sure port 3233 is free.
* Execute either "npm run express" (simple express server) "npm run aemsync-ssr" (code sync to AEM with SSR restart)
* Your react pages should now render with server side rendering.


### Server Side Rendering demo - runtime

* Make sure docker is installed
* For local runs: make sure the following images are installed as well: 
    * `docker pull openwhisk/action-nodejs-v10:latest`
    * `docker pull adobeapiplatform/adobe-action-nodejs-v10:3.0.21`
* For deployments to your runtime instance, make sure the following environment variables are set:
    * `AIO_RUNTIME_NAMESPACE` your namespace
    * `AIO_RUNTIME_AUTH` the authentication token
    
* For local deployment: `cd react-spa-components && npm run build-adobeio && npm run start-ssr-ioruntime`
* For remote deployment: 
  * 1: `cd react-spa-components && npm run build-adobeio && npm run deploy-to-runtime`
  * 2: change the com.adobe.cq.wcm.core.examples.react.components.ssr.impl.SSRRenderingServiceImpl to add in the authentication header and use the adjusted URL.

You can deploy the files from dist/serverBuild to your nodeJS, adobeIO or AWS lambda instance and change your rendering endpoint in OSGI to render from the cloud.
See: com.adobe.cq.wcm.core.examples.react.components.ssr.impl.SSRRenderingServiceImpl.Configuration

### Contributing

Contributions are welcomed! Read the [Contributing Guide](CONTRIBUTING.md) for more information.

### Licensing

This project is licensed under the Apache V2 License. See [LICENSE](LICENSE) for more information.
