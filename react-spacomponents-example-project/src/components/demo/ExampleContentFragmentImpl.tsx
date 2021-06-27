/*
 *  Copyright 2020 Adobe
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

import React from "react";
import {
    ContentFragmentV1Element,
    ContentFragmentV1Properties,
    DefaultContentFragmentV1Renderer, withStandardBaseCssClass
} from "@adobe/aem-core-components-react-spa";
import {ContainerState} from "@adobe/aem-react-editable-components";

class ExampleContentFragmentImpl extends DefaultContentFragmentV1Renderer<ContentFragmentV1Properties, ContainerState> {

    protected renderElement(element:ContentFragmentV1Element, name:string, index:number):JSX.Element{
        return (
            <div key={"index-" + index}>{element.value}</div>
        )
    }

    render() {
        return (
            <div id={this.props.id} className={this.props.baseCssClass}>

                <h3>Hi! This is my custom Animal component! I am a {this.props.elements["type"].value}, and my breed is: {this.props.elements["breed"].value}</h3>

            </div>
        )
    }
}

export default withStandardBaseCssClass(ExampleContentFragmentImpl, "cmp-custom-contentfragment");