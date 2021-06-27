package com.adobe.cq.wcm.core.examples.react.components.models.impl;

import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.wrappers.SlingHttpServletRequestWrapper;

public class SlingRequestWithResourceWrapper extends SlingHttpServletRequestWrapper {
    private final Resource resource;

    public SlingRequestWithResourceWrapper(SlingHttpServletRequest wrappedRequest, Resource resource) {
        super(wrappedRequest);
        this.resource = resource;
    }

    @Override
    public Resource getResource() {
        return resource;
    }

    @Override
    public RequestParameter getRequestParameter(String name) {

        if(name.equals("errorPagePath")){
            return null;
        }

        return super.getRequestParameter(name);
    }
}
