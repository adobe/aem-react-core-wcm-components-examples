/*~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
 ~ Copyright 2020 Adobe
 ~
 ~ Licensed under the Apache License, Version 2.0 (the "License");
 ~ you may not use this file except in compliance with the License.
 ~ You may obtain a copy of the License at
 ~
 ~     http://www.apache.org/licenses/LICENSE-2.0
 ~
 ~ Unless required by applicable law or agreed to in writing, software
 ~ distributed under the License is distributed on an "AS IS" BASIS,
 ~ WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 ~ See the License for the specific language governing permissions and
 ~ limitations under the License.
 ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~*/

import {MappedComponentProperties} from "@adobe/aem-react-editable-components";
import React from "react";

export  interface SimpleComponentProperties {
    otherProperty:string
    someProperty:string
}
export interface SimpleComponentModel extends MappedComponentProperties{
    properties: SimpleComponentProperties
}

const SimpleComponent = (props:SimpleComponentModel) => {
    return (
        <div><h3>This is done without developing java at all! Just XML & React!</h3>
            <p>  Some property: {props.properties.someProperty}</p>
            <p>  Other property: {props.properties.otherProperty}</p>
        </div>
    )
};

export default SimpleComponent;