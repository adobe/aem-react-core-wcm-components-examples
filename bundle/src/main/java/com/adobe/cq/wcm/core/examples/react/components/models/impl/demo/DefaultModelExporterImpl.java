package com.adobe.cq.wcm.core.examples.react.components.models.impl.demo;


import com.adobe.acs.commons.synth.Synthesizer;
import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.wcm.core.examples.react.components.models.DefaultModelExporter;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.SlingHttpServletResponse;
import org.apache.sling.api.resource.ValueMap;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.injectorspecific.SlingObject;

import javax.annotation.PostConstruct;
import java.util.Map;
import java.util.stream.Collectors;

@Model(adaptables = SlingHttpServletRequest.class, adapters = {DefaultModelExporter.class, ComponentExporter.class}, resourceType = DefaultModelExporterImpl.RESOURCE_TYPE)
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class DefaultModelExporterImpl implements DefaultModelExporter {

    public static final String RESOURCE_TYPE = "core-components-examples/wcm-react/components/default";

    @Self
    private SlingHttpServletRequest request;

    @SlingObject
    private SlingHttpServletResponse response;

    @ScriptVariable
    private ValueMap properties;


    String html;

    @PostConstruct
    void init(){

        try {
            html = Synthesizer.render(request.getResource(), request, response);
        } catch (Exception e) {
            html = "Could not render html";
        }

    }

    @Override
    public String getHtml() {
        return html;
    }

    @Override
    public Map<String,Object> getProperties(){
        return properties
                .entrySet()
                .stream()
                .filter( entry -> !entry.getKey().startsWith("jcr"))
                .collect(Collectors.toMap( Map.Entry::getKey, Map.Entry::getValue));
    }

    @Override
    public String getExportedType() {
        return request.getResource().getResourceType();
    }
}
