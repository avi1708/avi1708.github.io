window.cxs && window.cxs.setOptions({ prefix: "c2-" });
window.wsb=window.wsb||{};window.wsb["Theme13"]=window.wsb["Theme13"]||window.radpack("@widget/LAYOUT/bs-layout13-Theme-publish-Theme").then(function(t){return new t.default();});
window.wsb["FreemiumAd"]=function(e){let{adEndpoint:t,isPublish:a,containerId:o}=e;const r=1e4,l=/<script[^>]*>([\s\S]*)<\/script>/;let n,i,s;function c(e){e.preventDefault(),e.stopPropagation();const t=new CustomEvent("editor",{detail:{type:"showModal",modal:"plans",source:"freemiumAd"}});window.dispatchEvent(t)}function g(e){if(s=document.getElementById(o),!s)return;n=document.createElement("div"),n.style.cssText="width:100%;",s.prepend(n),i=document.createElement("div"),i.setAttribute("data-freemium-ad",!0),i.style.cssText=`overflow:hidden;width:100%;z-index:${r};position:fixed;left:0;`,i.innerHTML=(e||"").replace(l,""),s.prepend(i);const t=`${i.offsetHeight}px`;if(n.style.minHeight=t,window.requestAnimationFrame((()=>{const e=document.querySelector("[data-stickynav]");e&&"fixed"===e.style.position&&(e.style.top=t)})),a){const t=l.exec(e);if(t){const e=document.createElement("script");e.appendChild(document.createTextNode(t[1])),document.head.appendChild(e)}}else i.addEventListener("click",c,{useCapture:!0})}return function(){const e=a&&sessionStorage.getItem(t)||"";e?g(e):window.fetch(t).then((e=>e.ok&&e.text())).then((e=>{e&&(sessionStorage.setItem(t,e),g(e))})).catch((()=>{}))}(),function(){!a&&i.removeEventListener("click",c,{useCapture:!0}),s&&(s.removeChild(n),s.removeChild(i))}};
window.wsb["FreemiumAd"](JSON.parse("{\"adEndpoint\":\"/markup/ad\",\"isPublish\":true,\"containerId\":\"freemium-ad-64044\"}"));
window.wsb['context-bs-1']=JSON.parse("{\"env\":\"production\",\"renderMode\":\"PUBLISH\",\"fonts\":[\"fredoka-one\",\"josefin-sans\",\"\"],\"colors\":[\"#f6ffd4\"],\"fontScale\":\"medium\",\"locale\":\"en-IN\",\"language\":\"en\",\"resellerId\":1,\"internalLinks\":{\"382bb8fa-f422-42fd-837e-835617833cf0\":{\"pageId\":\"46c55332-b65e-46ac-9b9d-d65bf582bd72\",\"routePath\":\"/about\"},\"411bfdbd-fa1b-4577-8ad5-34a8f73c7ed6\":{\"pageId\":\"51d24f41-2cd2-49ae-86da-be10695975a8\",\"widgetId\":null,\"routePath\":\"/shift\"},\"243150c4-3ec6-4107-ba75-ea8851975784\":{\"pageId\":\"3a746816-ba3b-46ac-9c03-d65013ab1b0f\",\"routePath\":\"/home\"},\"72c16adf-78ff-4c4a-b1f6-c47ce69cdb82\":{\"pageId\":\"0f723220-6e57-4bdc-99ab-6bdce5db28a3\",\"widgetId\":null,\"routePath\":\"/toyota\"},\"3db8e1f0-b465-4bbf-baf8-949c4f9e597f\":{\"pageId\":\"684b0e07-285b-44c1-9a1d-2183dd2e5429\",\"widgetId\":null,\"routePath\":\"/atman\"},\"12b4c93b-af21-4663-be54-f5d15b632917\":{\"pageId\":\"d60b4be8-dc75-40ec-a388-302f0aefd964\",\"widgetId\":null,\"routePath\":\"/voxels\"},\"4daa0586-f100-45fb-8648-f06c0cb37dfa\":{\"pageId\":\"ab50c2e1-7cc5-466f-a372-daf3f302d997\",\"widgetId\":null,\"routePath\":\"/illustrations\"},\"7ec7e882-6b9e-4e84-a47b-89f84e509fa6\":{\"pageId\":\"e874b57f-1f2e-4ce3-b896-bddf1213337d\",\"widgetId\":null,\"routePath\":\"/the-picture-element\"},\"6229c690-24ca-4b45-a364-29bb2c51997f\":{\"pageId\":\"51ee5de8-a595-42b4-b266-1cdd33c1f79c\",\"widgetId\":null,\"routePath\":\"/doodles\"},\"e9782328-f72a-4483-88d7-03ea5504a099\":{\"pageId\":\"8d9abd8e-fdef-4dda-a6a8-0d156db45c31\",\"widgetId\":null,\"routePath\":\"/l73xskfjkd\"},\"ea91ca36-df15-42d9-9568-4283ed5f1109\":{\"pageId\":\"0678eed1-b153-4aed-8baf-df1bf69a12af\",\"widgetId\":null,\"routePath\":\"/timeless\"},\"a750ae33-762c-462c-b21c-53f48f6df5d2\":{\"pageId\":\"8b7b2632-1455-48a8-a2be-8394d8dec183\",\"widgetId\":null,\"routePath\":\"/deadly-pac-man-1\"},\"37002816-07cf-4dc2-ab15-8e6a8929f4b1\":{\"pageId\":\"9a2a249f-3c02-4ee1-906e-c6ce01964394\",\"routePath\":\"/portfolio\"},\"5a6cdcc8-c2de-4e30-b036-dd3df19f4032\":{\"pageId\":\"c8bd6300-8555-4eeb-b0b2-5f2eba7f941e\",\"widgetId\":null,\"routePath\":\"/a-sunday-mirage\"},\"444d04e6-1fe6-4ca3-88cd-611a38be6e74\":{\"pageId\":\"8caf46fa-7900-40c2-b860-d8b676f66bf6\",\"widgetId\":null,\"routePath\":\"/printmaking\"}},\"isInternalPage\":true,\"navigationMap\":{\"46c55332-b65e-46ac-9b9d-d65bf582bd72\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"46c55332-b65e-46ac-9b9d-d65bf582bd72\",\"name\":\"About\",\"href\":\"/about\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"35287a0c-8e93-4ddb-af64-c02d60e9f3aa\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"35287a0c-8e93-4ddb-af64-c02d60e9f3aa\",\"name\":\"Sixt\",\"href\":\"/sixt\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"165a8a7c-3324-4ccd-a213-999bff0fb3c5\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"165a8a7c-3324-4ccd-a213-999bff0fb3c5\",\"name\":\"link\",\"href\":\"https://www.com/\",\"target\":\"_blank\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"noopener\",\"type\":\"page\",\"showInFooter\":false},\"e6845ad6-6b2b-47c2-95ca-a21789c8841e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e6845ad6-6b2b-47c2-95ca-a21789c8841e\",\"name\":\"wmfh70zjq0\",\"href\":\"/wmfh70zjq0\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"78c776d7-32c5-480b-bcb7-5cfaee8d2b7a\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"78c776d7-32c5-480b-bcb7-5cfaee8d2b7a\",\"name\":\"Secret\",\"href\":\"/secret\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"51d24f41-2cd2-49ae-86da-be10695975a8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"51d24f41-2cd2-49ae-86da-be10695975a8\",\"name\":\"Shift\",\"href\":\"/shift\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"d60b4be8-dc75-40ec-a388-302f0aefd964\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"d60b4be8-dc75-40ec-a388-302f0aefd964\",\"name\":\"Voxels\",\"href\":\"/voxels\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"c8bd6300-8555-4eeb-b0b2-5f2eba7f941e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"c8bd6300-8555-4eeb-b0b2-5f2eba7f941e\",\"name\":\"A Sunday Mirage\",\"href\":\"/a-sunday-mirage\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"e874b57f-1f2e-4ce3-b896-bddf1213337d\":{\"isFlyoutMenu\":false,\"active\":true,\"pageId\":\"e874b57f-1f2e-4ce3-b896-bddf1213337d\",\"name\":\"The Picture Element\",\"href\":\"/the-picture-element\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"8d9abd8e-fdef-4dda-a6a8-0d156db45c31\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8d9abd8e-fdef-4dda-a6a8-0d156db45c31\",\"name\":\"l73xskfjkd\",\"href\":\"/l73xskfjkd\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"51ee5de8-a595-42b4-b266-1cdd33c1f79c\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"51ee5de8-a595-42b4-b266-1cdd33c1f79c\",\"name\":\"Doodles\",\"href\":\"/doodles\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"ab50c2e1-7cc5-466f-a372-daf3f302d997\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"ab50c2e1-7cc5-466f-a372-daf3f302d997\",\"name\":\"Illustrations\",\"href\":\"/illustrations\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"5672cfc3-152b-478c-b9fa-e78aaf3597f9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"5672cfc3-152b-478c-b9fa-e78aaf3597f9\",\"name\":\"hefxktbxm7\",\"href\":\"/hefxktbxm7\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a1ea7684-6482-444d-be59-fa1d84a533d8\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a1ea7684-6482-444d-be59-fa1d84a533d8\",\"name\":\"62g5amznkv\",\"href\":\"/62g5amznkv\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"a94b19d6-1c07-4a30-9449-a8fcaedbb23f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"a94b19d6-1c07-4a30-9449-a8fcaedbb23f\",\"name\":\"t788j***DUMP***4e5g5\",\"href\":\"/t788j-dump-4e5g5\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9e32e29d-4c16-40b8-81f2-39ff4f29863e\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9e32e29d-4c16-40b8-81f2-39ff4f29863e\",\"name\":\"qcl3f*** DUMP ***ttg5f\",\"href\":\"/qcl3f-dump-ttg5f\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"99d5b108-96db-4411-8215-4f4f2e7d4ad0\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"99d5b108-96db-4411-8215-4f4f2e7d4ad0\",\"name\":\"a0zyqsudqz\",\"href\":\"/a0zyqsudqz\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"1026a4d1-8316-49c0-8a58-1a2a04dfab31\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"1026a4d1-8316-49c0-8a58-1a2a04dfab31\",\"name\":\"Logos\",\"href\":\"/logos\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"8b7b2632-1455-48a8-a2be-8394d8dec183\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8b7b2632-1455-48a8-a2be-8394d8dec183\",\"name\":\"Deadly Pac-Man\",\"href\":\"/deadly-pac-man-1\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"3a746816-ba3b-46ac-9c03-d65013ab1b0f\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"3a746816-ba3b-46ac-9c03-d65013ab1b0f\",\"name\":\"Home\",\"href\":\"/home\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"0678eed1-b153-4aed-8baf-df1bf69a12af\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0678eed1-b153-4aed-8baf-df1bf69a12af\",\"name\":\"Timeless\",\"href\":\"/timeless\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"9a2a249f-3c02-4ee1-906e-c6ce01964394\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"9a2a249f-3c02-4ee1-906e-c6ce01964394\",\"name\":\"Portfolio\",\"href\":\"/portfolio\",\"target\":\"\",\"visible\":true,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"8caf46fa-7900-40c2-b860-d8b676f66bf6\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"8caf46fa-7900-40c2-b860-d8b676f66bf6\",\"name\":\"Printmaking\",\"href\":\"/printmaking\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"e94622a1-5030-43ac-a03d-6316cce2afb9\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"e94622a1-5030-43ac-a03d-6316cce2afb9\",\"name\":\"txcmxk0syy\",\"href\":\"/txcmxk0syy\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"0f723220-6e57-4bdc-99ab-6bdce5db28a3\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"0f723220-6e57-4bdc-99ab-6bdce5db28a3\",\"name\":\"Toyota\",\"href\":\"/toyota\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"193c1664-62ce-40fa-8075-9a9b23e27eb6\":{\"isFlyoutMenu\":true,\"active\":false,\"pageId\":\"193c1664-62ce-40fa-8075-9a9b23e27eb6\",\"name\":\"Menu\",\"href\":\"/menu\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false},\"684b0e07-285b-44c1-9a1d-2183dd2e5429\":{\"isFlyoutMenu\":false,\"active\":false,\"pageId\":\"684b0e07-285b-44c1-9a1d-2183dd2e5429\",\"name\":\"Atman\",\"href\":\"/atman\",\"target\":\"\",\"visible\":false,\"requiresAuth\":false,\"tags\":[],\"rel\":\"\",\"type\":\"page\",\"showInFooter\":false}},\"dials\":{\"colors\":[{\"id\":\"#f6ffd4\",\"meta\":{\"primary\":\"rgb(246, 255, 212)\",\"accent\":\"rgb(17, 17, 17)\",\"neutral\":\"rgb(255, 255, 255)\"}}],\"fonts\":{\"primary\":{\"id\":\"fredoka-one\",\"description\":\"\",\"tags\":[\"sans-serif\",\"modern\",\"clean\",\"bold\"],\"meta\":{\"order\":13,\"primary\":{\"id\":\"fredoka-one\",\"name\":\"Fredoka One\",\"url\":\"//fonts.googleapis.com/css?family=Fredoka+One:400&display=swap\",\"family\":\"'Fredoka One', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,700]},\"alternate\":{\"id\":\"poppins\",\"name\":\"Poppins\",\"url\":\"//fonts.googleapis.com/css?family=Poppins:300,400,600,700&display=swap\",\"family\":\"'Poppins', arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[300,400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesPrimary\":[{\"locales\":[\"tr-TR\",\"vi-VN\",\"pl-PL\"],\"meta\":{\"primary\":{\"family\":\"Arial, sans-serif\"}}}]},\"alternate\":{\"id\":\"josefin-sans\",\"description\":\"\",\"tags\":[],\"meta\":{\"order\":7,\"alternate\":{\"id\":\"josefin-sans\",\"name\":\"Josefin Sans\",\"url\":\"//fonts.googleapis.com/css?family=Josefin+Sans:400,600,700&display=swap\",\"family\":\"'Josefin Sans', Arial, sans-serif\",\"size\":16,\"weight\":400,\"weights\":[400,600,700],\"styles\":{\"letterSpacing\":\"normal\",\"textTransform\":\"none\"}}},\"overridesAlternate\":[{\"locales\":[\"vi-VN\"],\"meta\":{\"alternate\":{\"family\":\"Arial, sans-serif\"}}},{\"locales\":[\"ja-JP\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, Meiryo, '\u30E1\u30A4\u30EA\u30AA', sans-serif\"}}},{\"locales\":[\"ko-KR\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, '\uAD74\uB9BC', Gulim, '\uAD74\uB9BC\uCCB4', GulimChe, sans-serif\"}}},{\"locales\":[\"th-TH\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, BrowalliaUPC, Tahoma, sans-serif\"}}},{\"locales\":[\"zh-CN\",\"zh-SG\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Sans, '\u4E2D\u6613\u9ED1\u4F53', SimHei, sans-serif\"}}},{\"locales\":[\"zh-HK\",\"zh-TW\"],\"meta\":{\"alternate\":{\"family\":\"Josefin Slab, '\u5FAE\u8EDF\u6B63\u9ED1\u9AD4', Microsoft JhengHei, sans-serif\"}}}]}}},\"theme\":\"Theme13\",\"paintJob\":\"COLORFUL\"}");
Core.utils.deferBootstrap({elId:'bs-1',componentName:'@widget/LAYOUT/bs-Hamburger-Component',props:JSON.parse("{\"toggleId\":\"n-64043-navId-mobile\",\"uniqueId\":\"n-64043\",\"style\":{\"color\":\"highContrast\",\":hover\":{\"color\":\"highlight\"},\"@md\":{\"display\":\"none\"}},\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingDelta\":{\"byType\":{\"MenuHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"ContentHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"FeaturedHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.2}}}},\"HeadingAlpha\":{\"byType\":{\"HeroTagline\":{\"value\":{\"style\":{\"fontSize\":\"xxxlarge\"}}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-Hamburger-Component"},false);
Core.utils.deferBootstrap({elId:'bs-2',componentName:'@widget/LAYOUT/bs-LinkAwareComponent',props:JSON.parse("{\"toggleId\":\"more-64054\",\"label\":\"More\",\"dataAid\":\"NAV_MORE\",\"navBarId\":\"navBarId-64051\",\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"widgetId\":\"3a3fee22-009d-41e1-bbfa-11ebef64b470\",\"widgetType\":\"HEADER\",\"widgetPreset\":\"header9\",\"group\":\"Nav\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingDelta\":{\"byType\":{\"MenuHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"ContentHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"FeaturedHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{\"LogoAlpha\":{\"byType\":{\"LogoHeading\":{\"value\":{\"fontScaleMultiplier\":0.2}}}},\"HeadingAlpha\":{\"byType\":{\"HeroTagline\":{\"value\":{\"style\":{\"fontSize\":\"xxxlarge\"}}}}}}}"),contextKey:'context-bs-1',radpack:"@widget/LAYOUT/bs-LinkAwareComponent"},false);
window.wsb["CalculateNavSpacing"]=function(e){let{containerId:a,navId:n,logoImageId:l,inlineUtilitiesMenu:i,forceBreakpoint:o}=e;let r,c,s,g,p,d,u;const y=document.getElementById(n);function m(){if(c||!y||!R(y))return;s=Array.from(y.children),s.forEach(f),i&&(g=s.pop(),I(g)),p=s.pop();const e=p.querySelector("ul");d=e?Array.from(e.children):[],y.style.whiteSpace="normal",u=R(y.parentElement,"floor"),y.style.whiteSpace="nowrap",window.requestAnimationFrame(b)}function b(){const e=s.map((e=>R(e)));const t=g?R(g):0,a=u-t;if(E(e)>a){const t=R(p);for(let n=E(e);n+t>a;n-=e.pop());const n=e.length;h(s,0,n,I),h(d,0,n,w),h(s,n,s.length,w),h(d,n,s.length,I),I(p)}else s.forEach(I),w(p);window.dispatchEvent(new Event("NavItemsResized"))}function v(){window.innerWidth<1024&&o&&o!==t.Q||(window.clearTimeout(r),r=window.setTimeout(m,50))}function h(e,t,a,n){e=e.slice(t,a).map(n).concat(e.slice(a))}function f(e){e.style.visibility="hidden",e.style.display="",e.classList.remove("visible")}function w(e){e.style.display="none",e.classList.remove("visible")}function I(e){e.style.visibility="visible",e.style.display="",e.classList.add("visible")}function E(e){return e.reduce(((e,t)=>e+t),0)}function R(e){let t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"ceil";return"ceil"===t?Math.ceil(e.getBoundingClientRect().width):Math.floor(e.getBoundingClientRect().width)}if(v(),window.ResizeObserver){const e=new window.ResizeObserver(v);return[document.getElementById(a),document.getElementById(l)].forEach((t=>t&&e.observe(t))),()=>{c=!0,e.disconnect()}}return window.addEventListener("resize",v,{passive:!0}),()=>{c=!0,window.removeEventListener("resize",v,{passive:!0})}};
window.wsb["CalculateNavSpacing"](JSON.parse("{\"navId\":\"nav-64053\",\"logoImageId\":\"logo-64050\",\"containerId\":\"navBarId-64051\"}"));
window.wsb["StickyNav"]=function(e){let{uniqueId:t,logoHeight:o,hasAnimation:a,anchorId:n}=e;const r=o>104?120:80;let i,c,s,l,g=window.innerWidth<768,d=0;const u=()=>{const e=Array.from(document.querySelectorAll('[data-aid="HEADER_LOGO_IMAGE_RENDERED"]')).find((e=>e.offsetHeight));if(!e)return null;const t=window.getComputedStyle(e);return s=t.getPropertyValue("box-shadow"),l=t.getPropertyValue("margin-top"),e},p={i18nBar:document.querySelector('[data-aid="i18n_BAR_RENDERED"]'),stickyNav:document.getElementById(t),stickyNavParent:document.querySelector("[data-stickynav-wrapper]"),logo:u(),freemiumAd:document.querySelector("[data-freemium-ad]"),anchor:document.getElementById(n)},y=()=>{const{stickyNav:e,stickyNavParent:t}=p;let a=e.offsetHeight;g&&e.offsetHeight<o&&o<=104&&(a=o),t.style.height=`${a}px`};new IntersectionObserver((e=>e.forEach((e=>{let{isIntersecting:t}=e;return window.requestAnimationFrame((()=>(e=>{if(c===e)return;const{stickyNav:t,logo:n,i18nBar:i,freemiumAd:u,stickyNavParent:h}=p;p.freemiumAd=u||document.querySelector("[data-freemium-ad]"),d=d||p.freemiumAd?.offsetHeight,e&&h&&!h.style.height&&y(),i&&(i.style.display=e?"none":"flex"),n&&(n.style.cssText=e?`max-height:${g?50:64}px;box-shadow:none;margin-top:0px;`:`max-height:${g?r:o}px;box-shadow:${s};margin-top:${l};`,"HEADER_LOGO_OVERHANG_CONTAINER"===n.parentNode.getAttribute("data-aid")&&(n.parentNode.style.height=e?"auto":"1em")),t.style.cssText=e?`position:fixed;z-index:10000;left:0px;right:0px;top:${d||0}px;`:"",a&&(e?t.classList.add("sticky-animate","x-c-bg"):t.classList.remove("sticky-animate","x-c-bg")),c=e})(!t)))})))).observe(p.anchor);const h=/#[^\\?]*/;function m(e){const t=(e.target.href.match(h)[0]||[]).slice(1),o=document.getElementById(t);o&&f(o)}function f(e){const t=p.stickyNav.clientHeight;let o=e.offsetTop;const a=setInterval((()=>{e.offsetTop===o?(clearInterval(a),scrollTo({top:e.offsetTop-t})):o=e.offsetTop}),300)}if(Array.from(document.querySelectorAll("a")).filter((e=>h.test(e.href))).forEach((e=>e.addEventListener("click",m))),window.location.hash){const e=document.getElementById(window.location.hash.slice(1));e&&f(e)}window.addEventListener("resize",(()=>{clearTimeout(i),i=setTimeout((()=>{g=window.innerWidth<768,p.logo=u(),y()}),250)}),{passive:!0})};
window.wsb["StickyNav"](JSON.parse("{\"uniqueId\":\"header_stickynav64045\",\"anchorId\":\"header_stickynav-anchor64046\",\"logoHeight\":25,\"hasAnimation\":true}"));
Core.utils.deferBootstrap({elId:'bs-3',componentName:'@widget/GALLERY/bs-gallery1-Gallery',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery1\",\"id\":\"8b7ebcae-8455-49c9-bd64-7ef1efb951d8\",\"galleryImages\":[],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"\",\"autoplay\":false,\"showthumbnails\":true,\"autoplayDelay\":\"3.5\",\"showArrows\":true,\"fullBleed\":true,\"enableImageDimension\":true,\"images\":[],\"renderAsThumbnail\":false,\"hasCaption\":false,\"data-test-radpack\":\"publish\",\"widgetId\":\"8b7ebcae-8455-49c9-bd64-7ef1efb951d8\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":1,\"widgetId\":\"8b7ebcae-8455-49c9-bd64-7ef1efb951d8\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery1\",\"group\":\"Section\",\"groupType\":\"Banner\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingDelta\":{\"byType\":{\"MenuHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"ContentHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"FeaturedHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/GALLERY/bs-gallery1-Gallery"},false);
Core.utils.deferBootstrap({elId:'bs-4',componentName:'@widget/GALLERY/bs-gallery1-Gallery',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery1\",\"id\":\"79d1ea0a-f473-401d-b920-f484ceba4979\",\"galleryImages\":[],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"\",\"autoplay\":false,\"showthumbnails\":true,\"autoplayDelay\":\"3.5\",\"showArrows\":true,\"fullBleed\":true,\"enableImageDimension\":true,\"images\":[],\"renderAsThumbnail\":false,\"hasCaption\":false,\"data-test-radpack\":\"publish\",\"widgetId\":\"79d1ea0a-f473-401d-b920-f484ceba4979\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":2,\"widgetId\":\"79d1ea0a-f473-401d-b920-f484ceba4979\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery1\",\"group\":\"Section\",\"groupType\":\"Banner\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingDelta\":{\"byType\":{\"MenuHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"ContentHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"FeaturedHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/GALLERY/bs-gallery1-Gallery"},false);
Core.utils.deferBootstrap({elId:'bs-5',componentName:'@widget/GALLERY/bs-gallery1-Gallery',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery1\",\"id\":\"9b87f6f4-6ef9-4a87-81cc-a71a4531aacf\",\"galleryImages\":[],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"\",\"autoplay\":false,\"showthumbnails\":true,\"autoplayDelay\":\"3.5\",\"showArrows\":true,\"fullBleed\":true,\"enableImageDimension\":true,\"images\":[],\"renderAsThumbnail\":false,\"hasCaption\":false,\"data-test-radpack\":\"publish\",\"widgetId\":\"9b87f6f4-6ef9-4a87-81cc-a71a4531aacf\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":3,\"widgetId\":\"9b87f6f4-6ef9-4a87-81cc-a71a4531aacf\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery1\",\"group\":\"Section\",\"groupType\":\"Banner\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingDelta\":{\"byType\":{\"MenuHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"ContentHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"FeaturedHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/GALLERY/bs-gallery1-Gallery"},false);
Core.utils.deferBootstrap({elId:'bs-6',componentName:'@widget/GALLERY/bs-gallery1-Gallery',props:JSON.parse("{\"upgradeable\":false,\"preset\":\"gallery1\",\"id\":\"3a3e71c8-4505-411b-b48b-1cb0a96d9a0a\",\"galleryImages\":[{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide6-0003.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide4-0003.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide8-0003.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide15-0003.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide16-0003.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide24-0002.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide20-0004.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide22-0003.PNG\"}},{\"image\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide27-0003.PNG\"}},{\"image\":{\"oHeight\":1080,\"oWidth\":1920,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00001.png\"}},{\"image\":{\"oHeight\":1080,\"oWidth\":1920,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00003.png\"}}],\"viewDevice\":null,\"staticContent\":{\"showMore\":\"Show More\",\"demoCaption1\":\"Use captions to provide more information about your photos\",\"demoCaption2\":\"Captions can prompt viewers to act. You can even insert a link\",\"demoCaption3\":\"Use the caption to call out things the viewer may not notice\",\"showLess\":\"Show Less\"},\"title\":\"\",\"autoplay\":false,\"showthumbnails\":true,\"autoplayDelay\":\"3.5\",\"showArrows\":true,\"fullBleed\":false,\"enableImageDimension\":true,\"images\":[{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide6-0003.PNG/:/\",\"index\":0,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide6-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide6-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide4-0003.PNG/:/\",\"index\":1,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide4-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide4-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide8-0003.PNG/:/\",\"index\":2,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide8-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide8-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide15-0003.PNG/:/\",\"index\":3,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide15-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide15-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide16-0003.PNG/:/\",\"index\":4,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide16-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide16-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide24-0002.PNG/:/\",\"index\":5,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide24-0002.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide24-0002.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide20-0004.PNG/:/\",\"index\":6,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide20-0004.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide20-0004.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide22-0003.PNG/:/\",\"index\":7,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide22-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide22-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide27-0003.PNG/:/\",\"index\":8,\"position\":\"center\",\"imageData\":{\"oHeight\":540,\"oWidth\":960,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide27-0003.PNG\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/Slide27-0003.PNG\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00001.png/:/\",\"index\":9,\"position\":\"center\",\"imageData\":{\"oHeight\":1080,\"oWidth\":1920,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00001.png\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00001.png\"}},{\"lightboxUrl\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00003.png/:/\",\"index\":10,\"position\":\"center\",\"imageData\":{\"oHeight\":1080,\"oWidth\":1920,\"image\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00003.png\",\"src\":\"//img1.wsimg.com/isteam/ip/418d1a46-be94-4191-8ba8-9cc346a1f32b/vlcsnap-00003.png\"}}],\"renderAsThumbnail\":false,\"hasCaption\":false,\"data-test-radpack\":\"publish\",\"widgetId\":\"3a3e71c8-4505-411b-b48b-1cb0a96d9a0a\",\"section\":\"default\",\"category\":\"primary\",\"locale\":\"en-IN\",\"env\":\"production\",\"renderMode\":\"PUBLISH\"}"),context:JSON.parse("{\"order\":5,\"widgetId\":\"3a3e71c8-4505-411b-b48b-1cb0a96d9a0a\",\"widgetType\":\"GALLERY\",\"widgetPreset\":\"gallery1\",\"group\":\"Section\",\"groupType\":\"Default\",\"section\":\"default\",\"category\":\"primary\",\"fontSize\":\"medium\",\"fontFamily\":\"alternate\",\"websiteThemeOverrides\":{\"ButtonPrimary\":{\"value\":{\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonSpotlight\":{\"value\":{\"color\":\"PRIMARY\",\"shape\":\"PILL\",\"decoration\":\"NONE\",\"shadow\":\"NONE\"}},\"ButtonSecondary\":{\"value\":{\"shape\":\"PILL\",\"color\":\"PRIMARY\",\"fill\":\"GHOST\",\"decoration\":\"NONE\",\"shadow\":\"NONE\",\"size\":\"default\"}},\"ButtonExternal\":{\"value\":{\"shape\":\"PILL\"}},\"HeadingBeta\":{\"byType\":{\"SectionHeading\":{\"value\":{\"typography\":\"HeadingAlpha\",\"featured\":false,\"style\":{\"fontSize\":\"xlarge\"}}}}},\"HeadingDelta\":{\"byType\":{\"MenuHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"ContentHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}},\"FeaturedHeading\":{\"value\":{\"typography\":\"HeadingBeta\",\"featured\":false,\"style\":{\"fontSize\":\"large\"}}}}}},\"widgetThemeOverrides\":{}}"),contextKey:'context-bs-1',radpack:"@widget/GALLERY/bs-gallery1-Gallery"},false);
document.getElementById('page-64042').addEventListener('click', function() {}, false);