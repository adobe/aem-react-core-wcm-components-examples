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
package com.adobe.cq.wcm.core.examples.react.components.models.impl;

import com.adobe.cq.export.json.ComponentExporter;
import com.adobe.cq.export.json.ContainerExporter;
import com.adobe.cq.export.json.ExporterConstants;
import com.adobe.cq.export.json.SlingModelFilter;
import com.adobe.cq.export.json.hierarchy.HierarchyNodeExporter;
import com.adobe.cq.export.json.hierarchy.type.HierarchyTypes;
import com.adobe.cq.wcm.core.components.internal.jackson.ComponentDataModelSerializer;
import com.adobe.cq.wcm.core.components.models.HtmlPageItem;
import com.adobe.cq.wcm.core.components.models.NavigationItem;
import com.adobe.cq.wcm.core.components.models.datalayer.ComponentData;
import com.adobe.cq.wcm.core.examples.react.components.models.HierarchyPage;
import com.day.cq.wcm.api.PageManager;
import com.day.cq.wcm.api.TemplatedResource;
import com.day.cq.wcm.api.components.ComponentContext;
import com.day.cq.wcm.api.designer.Style;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonInclude;
import com.fasterxml.jackson.annotation.JsonProperty;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.apache.commons.lang3.ArrayUtils;
import org.apache.commons.lang3.StringUtils;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.api.request.RequestParameter;
import org.apache.sling.api.resource.Resource;
import org.apache.sling.api.resource.ResourceResolver;
import org.apache.sling.api.wrappers.SlingHttpServletRequestWrapper;
import org.apache.sling.models.annotations.DefaultInjectionStrategy;
import org.apache.sling.models.annotations.Exporter;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.Via;
import org.apache.sling.models.annotations.injectorspecific.ScriptVariable;
import org.apache.sling.models.annotations.injectorspecific.Self;
import org.apache.sling.models.annotations.via.ForcedResourceType;
import org.apache.sling.models.factory.ModelFactory;

import com.adobe.aem.spa.project.core.models.Page;
import org.jetbrains.annotations.NotNull;
import org.jetbrains.annotations.Nullable;

import java.util.*;

/**
 * Only here to make XFs possible.
 * Pending https://github.com/adobe/aem-spa-project-core/pull/26.
 */
@Model(adaptables = SlingHttpServletRequest.class, adapters = {HierarchyPage.class, ContainerExporter.class}, defaultInjectionStrategy = DefaultInjectionStrategy.OPTIONAL, resourceType = {
        HierarchyPageImpl.RESOURCE_TYPE,
        HierarchyPageImpl.XF_RESOURCE_TYPE
})
@Exporter(name = ExporterConstants.SLING_MODEL_EXPORTER_NAME, extensions = ExporterConstants.SLING_MODEL_EXTENSION)
public class HierarchyPageImpl implements Page {

    /**
     * Resource type of associated with the current implementation
     */
    public static final String RESOURCE_TYPE = "core-components-examples/wcm-react/components/page/react-spacomponents-page";

    /**
     * Resource type of associated with the current implementation
     */
    public static final String XF_RESOURCE_TYPE = "core-components-examples/wcm-react/components/page/react-spacomponents-page/xf-page";

    @Self
    @Via(type = ForcedResourceType.class, value = "spa-project-core/components/page")
    private com.adobe.aem.spa.project.core.models.Page delegate;


    @JsonIgnore
    @Nullable
    public String getHierarchyRootJsonExportUrl() {
        return delegate.getHierarchyRootJsonExportUrl();
    }

    @JsonIgnore
    public com.adobe.aem.spa.project.core.models.@Nullable Page getHierarchyRootModel() {
        return delegate.getHierarchyRootModel();
    }

    @NotNull
    public String[] getExportedItemsOrder() {
        return delegate.getExportedItemsOrder();
    }

    @NotNull
    public Map<String, ? extends ComponentExporter> getExportedItems() {
        return delegate.getExportedItems();
    }

    @NotNull
    public String getExportedType() {
        return delegate.getExportedType();
    }

    public String getExportedHierarchyType() {
        return delegate.getExportedHierarchyType();
    }

    public String getExportedPath() {
        return delegate.getExportedPath();
    }

    public Map<String, ? extends HierarchyNodeExporter> getExportedChildren() {
        return delegate.getExportedChildren();
    }

    public Calendar getLastModifiedDate() {
        return delegate.getLastModifiedDate();
    }

    @JsonIgnore
    public String[] getKeywords() {
        return delegate.getKeywords();
    }

    public String getDesignPath() {
        return delegate.getDesignPath();
    }

    public String getStaticDesignPath() {
        return delegate.getStaticDesignPath();
    }

    @JsonIgnore
    @Deprecated
    public Map<String, String> getFavicons() {
        return delegate.getFavicons();
    }

    public String getBrandSlug() {
        return delegate.getBrandSlug();
    }

    @JsonIgnore
    public String[] getClientLibCategories() {
        return delegate.getClientLibCategories();
    }

    @JsonIgnore
    public String[] getClientLibCategoriesJsBody() {
        return delegate.getClientLibCategoriesJsBody();
    }

    @JsonIgnore
    public String[] getClientLibCategoriesJsHead() {
        return delegate.getClientLibCategoriesJsHead();
    }

    public String getTemplateName() {
        return delegate.getTemplateName();
    }

    @Nullable
    public String getAppResourcesPath() {
        return delegate.getAppResourcesPath();
    }

    public String getCssClassNames() {
        return delegate.getCssClassNames();
    }

    public @Nullable NavigationItem getRedirectTarget() {
        return delegate.getRedirectTarget();
    }

    public boolean hasCloudconfigSupport() {
        return delegate.hasCloudconfigSupport();
    }

    public @NotNull Set<String> getComponentsResourceTypes() {
        return delegate.getComponentsResourceTypes();
    }

    @Nullable
    public String getMainContentSelector() {
        return delegate.getMainContentSelector();
    }

    @Nullable
    public List<HtmlPageItem> getHtmlPageItems() {
        return delegate.getHtmlPageItems();
    }

    @Nullable
    public String getId() {
        return delegate.getId();
    }

    @JsonSerialize(using = ComponentDataModelSerializer.class)
    @JsonProperty("dataLayer")
    public @Nullable ComponentData getData() {
        return delegate.getData();
    }
}
