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