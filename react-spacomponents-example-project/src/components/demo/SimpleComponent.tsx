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