'use strict';


customElements.define('compodoc-menu', class extends HTMLElement {
    constructor() {
        super();
        this.isNormalMode = this.getAttribute('mode') === 'normal';
    }

    connectedCallback() {
        this.render(this.isNormalMode);
    }

    render(isNormalMode) {
        let tp = lithtml.html(`
        <nav>
            <ul class="list">
                <li class="title">
                    <a href="index.html" data-type="index-link">angular.wijmo documentation</a>
                </li>

                <li class="divider"></li>
                ${ isNormalMode ? `<div id="book-search-input" role="search"><input type="text" placeholder="Type to search"></div>` : '' }
                <li class="chapter">
                    <a data-type="chapter-link" href="index.html"><span class="icon ion-ios-home"></span>Getting started</a>
                    <ul class="links">
                        <li class="link">
                            <a href="overview.html" data-type="chapter-link">
                                <span class="icon ion-ios-keypad"></span>Overview
                            </a>
                        </li>
                        <li class="link">
                            <a href="index.html" data-type="chapter-link">
                                <span class="icon ion-ios-paper"></span>README
                            </a>
                        </li>
                                <li class="link">
                                    <a href="dependencies.html" data-type="chapter-link">
                                        <span class="icon ion-ios-list"></span>Dependencies
                                    </a>
                                </li>
                    </ul>
                </li>
                    <li class="chapter modules">
                        <a data-type="chapter-link" href="modules.html">
                            <div class="menu-toggler linked" data-toggle="collapse" ${ isNormalMode ?
                                'data-target="#modules-links"' : 'data-target="#xs-modules-links"' }>
                                <span class="icon ion-ios-archive"></span>
                                <span class="link-name">Modules</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                        </a>
                        <ul class="links collapse " ${ isNormalMode ? 'id="modules-links"' : 'id="xs-modules-links"' }>
                            <li class="link">
                                <a href="modules/AppModule.html" data-type="entity-link">AppModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-AppModule-a0e0c6a604362086b5b8b93b5342cec6"' : 'data-target="#xs-components-links-module-AppModule-a0e0c6a604362086b5b8b93b5342cec6"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-AppModule-a0e0c6a604362086b5b8b93b5342cec6"' :
                                            'id="xs-components-links-module-AppModule-a0e0c6a604362086b5b8b93b5342cec6"' }>
                                            <li class="link">
                                                <a href="components/AppComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">AppComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupingModule.html" data-type="entity-link">GroupingModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' : 'data-target="#xs-components-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' :
                                            'id="xs-components-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' }>
                                            <li class="link">
                                                <a href="components/GroupingComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupingComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' : 'data-target="#xs-injectables-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' :
                                        'id="xs-injectables-links-module-GroupingModule-d60b7995535a1889fa4fcba13389b582"' }>
                                        <li class="link">
                                            <a href="injectables/DataService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>DataService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/GroupModule.html" data-type="entity-link">GroupModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-GroupModule-35358679185c70504ea402e4d524f436"' : 'data-target="#xs-components-links-module-GroupModule-35358679185c70504ea402e4d524f436"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-GroupModule-35358679185c70504ea402e4d524f436"' :
                                            'id="xs-components-links-module-GroupModule-35358679185c70504ea402e4d524f436"' }>
                                            <li class="link">
                                                <a href="components/GroupComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">GroupComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/LayoutModule.html" data-type="entity-link">LayoutModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' : 'data-target="#xs-components-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' :
                                            'id="xs-components-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' }>
                                            <li class="link">
                                                <a href="components/LayoutComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">LayoutComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' : 'data-target="#xs-injectables-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' :
                                        'id="xs-injectables-links-module-LayoutModule-27778c040635166372e16a61b17917f3"' }>
                                        <li class="link">
                                            <a href="injectables/WorksheetService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>WorksheetService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaletteModule.html" data-type="entity-link">PaletteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaletteModule-6d1118db14165716135a824773500e1f"' : 'data-target="#xs-components-links-module-PaletteModule-6d1118db14165716135a824773500e1f"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaletteModule-6d1118db14165716135a824773500e1f"' :
                                            'id="xs-components-links-module-PaletteModule-6d1118db14165716135a824773500e1f"' }>
                                            <li class="link">
                                                <a href="components/PaletteComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaletteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PaletteModule.html" data-type="entity-link">PaletteModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PaletteModule-fa1445ecd2aa9a5ac7d1796e7ff2476b-1"' : 'data-target="#xs-components-links-module-PaletteModule-fa1445ecd2aa9a5ac7d1796e7ff2476b-1"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PaletteModule-fa1445ecd2aa9a5ac7d1796e7ff2476b-1"' :
                                            'id="xs-components-links-module-PaletteModule-fa1445ecd2aa9a5ac7d1796e7ff2476b-1"' }>
                                            <li class="link">
                                                <a href="components/PaletteComponent-1.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PaletteComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PivotpanelModule.html" data-type="entity-link">PivotpanelModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PivotpanelModule-e9d7745d165984047c715cf234a99c74"' : 'data-target="#xs-components-links-module-PivotpanelModule-e9d7745d165984047c715cf234a99c74"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PivotpanelModule-e9d7745d165984047c715cf234a99c74"' :
                                            'id="xs-components-links-module-PivotpanelModule-e9d7745d165984047c715cf234a99c74"' }>
                                            <li class="link">
                                                <a href="components/PivotpanelComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PivotpanelComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/PlanningModule.html" data-type="entity-link">PlanningModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-PlanningModule-3c3cb8497ba349812fe63bc6de0f42f2"' : 'data-target="#xs-components-links-module-PlanningModule-3c3cb8497ba349812fe63bc6de0f42f2"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-PlanningModule-3c3cb8497ba349812fe63bc6de0f42f2"' :
                                            'id="xs-components-links-module-PlanningModule-3c3cb8497ba349812fe63bc6de0f42f2"' }>
                                            <li class="link">
                                                <a href="components/PlanningComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">PlanningComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/RibbonModule.html" data-type="entity-link">RibbonModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-RibbonModule-00e98388dabe5a99cfba3b0b5d7332c4"' : 'data-target="#xs-components-links-module-RibbonModule-00e98388dabe5a99cfba3b0b5d7332c4"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-RibbonModule-00e98388dabe5a99cfba3b0b5d7332c4"' :
                                            'id="xs-components-links-module-RibbonModule-00e98388dabe5a99cfba3b0b5d7332c4"' }>
                                            <li class="link">
                                                <a href="components/RibbonComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">RibbonComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                            </li>
                            <li class="link">
                                <a href="modules/WorksheetModule.html" data-type="entity-link">WorksheetModule</a>
                                    <li class="chapter inner">
                                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                            'data-target="#components-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' : 'data-target="#xs-components-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' }>
                                            <span class="icon ion-md-cog"></span>
                                            <span>Components</span>
                                            <span class="icon ion-ios-arrow-down"></span>
                                        </div>
                                        <ul class="links collapse" ${ isNormalMode ? 'id="components-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' :
                                            'id="xs-components-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' }>
                                            <li class="link">
                                                <a href="components/WorksheetComponent.html"
                                                    data-type="entity-link" data-context="sub-entity" data-context-id="modules">WorksheetComponent</a>
                                            </li>
                                        </ul>
                                    </li>
                                <li class="chapter inner">
                                    <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ?
                                        'data-target="#injectables-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' : 'data-target="#xs-injectables-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' }>
                                        <span class="icon ion-md-arrow-round-down"></span>
                                        <span>Injectables</span>
                                        <span class="icon ion-ios-arrow-down"></span>
                                    </div>
                                    <ul class="links collapse" ${ isNormalMode ? 'id="injectables-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' :
                                        'id="xs-injectables-links-module-WorksheetModule-a8fecb37cc7451b5f96e6a5520af57c5"' }>
                                        <li class="link">
                                            <a href="injectables/CountryService.html"
                                                data-type="entity-link" data-context="sub-entity" data-context-id="modules" }>CountryService</a>
                                        </li>
                                    </ul>
                                </li>
                            </li>
                </ul>
                </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#classes-links"' :
                            'data-target="#xs-classes-links"' }>
                            <span class="icon ion-ios-paper"></span>
                            <span>Classes</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="classes-links"' : 'id="xs-classes-links"' }>
                            <li class="link">
                                <a href="classes/Logger.html" data-type="entity-link">Logger</a>
                            </li>
                        </ul>
                    </li>
                        <li class="chapter">
                            <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#injectables-links"' :
                                'data-target="#xs-injectables-links"' }>
                                <span class="icon ion-md-arrow-round-down"></span>
                                <span>Injectables</span>
                                <span class="icon ion-ios-arrow-down"></span>
                            </div>
                            <ul class="links collapse " ${ isNormalMode ? 'id="injectables-links"' : 'id="xs-injectables-links"' }>
                                <li class="link">
                                    <a href="injectables/ConsoleLoggerService.html" data-type="entity-link">ConsoleLoggerService</a>
                                </li>
                                <li class="link">
                                    <a href="injectables/LoggerService.html" data-type="entity-link">LoggerService</a>
                                </li>
                            </ul>
                        </li>
                    <li class="chapter">
                        <div class="simple menu-toggler" data-toggle="collapse" ${ isNormalMode ? 'data-target="#miscellaneous-links"'
                            : 'data-target="#xs-miscellaneous-links"' }>
                            <span class="icon ion-ios-cube"></span>
                            <span>Miscellaneous</span>
                            <span class="icon ion-ios-arrow-down"></span>
                        </div>
                        <ul class="links collapse " ${ isNormalMode ? 'id="miscellaneous-links"' : 'id="xs-miscellaneous-links"' }>
                            <li class="link">
                                <a href="miscellaneous/functions.html" data-type="entity-link">Functions</a>
                            </li>
                            <li class="link">
                                <a href="miscellaneous/variables.html" data-type="entity-link">Variables</a>
                            </li>
                        </ul>
                    </li>
                    <li class="chapter">
                        <a data-type="chapter-link" href="coverage.html"><span class="icon ion-ios-stats"></span>Documentation coverage</a>
                    </li>
                    <li class="divider"></li>
                    <li class="copyright">
                        Documentation generated using <a href="https://compodoc.app/" target="_blank">
                            <img data-src="images/compodoc-vectorise-inverted.png" class="img-responsive" data-type="compodoc-logo">
                        </a>
                    </li>
            </ul>
        </nav>
        `);
        this.innerHTML = tp.strings;
    }
});