package com.adobe.cq.wcm.core.examples.react.components.models.impl.demo;

import com.adobe.cq.wcm.core.examples.react.components.models.NormalComponentTest;
import org.apache.sling.api.SlingHttpServletRequest;
import org.apache.sling.models.annotations.Model;
import org.apache.sling.models.annotations.injectorspecific.ValueMapValue;

@Model(adaptables = SlingHttpServletRequest.class, adapters = NormalComponentTest.class)
public class NormalComponentTestImpl implements NormalComponentTest {

    @ValueMapValue
    private String someProperty;

    public String getSomeProperty() {
        return someProperty;
    }
}
