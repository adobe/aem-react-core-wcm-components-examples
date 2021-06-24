package com.adobe.cq.wcm.core.examples.react.components.models;

import com.adobe.cq.export.json.ComponentExporter;
import com.fasterxml.jackson.annotation.JsonProperty;

import java.util.Map;

public interface DefaultModelExporter extends ComponentExporter {
    @JsonProperty("html")
    String getHtml();

    @JsonProperty("properties")
    Map<String,Object> getProperties();
}
