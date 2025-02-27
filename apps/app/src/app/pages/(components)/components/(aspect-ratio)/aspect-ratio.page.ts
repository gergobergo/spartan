import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { CodePreviewDirective } from '../../../../shared/code/code-preview.directive';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';
import { PageBottomNavPlaceholderComponent } from '../../../../shared/layout/page-bottom-nav-placeholder.component';
import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavLinkComponent } from '../../../../shared/layout/page-nav/page-nav-link.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { metaWith } from '../../../../shared/meta/meta.util';
import { AspectRatioPreviewComponent, defaultCode, defaultImports, defaultSkeleton } from './aspect-ratio.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Aspect Ratio' },
	meta: metaWith('spartan/ui - Aspect Ratio', 'Displays content within a desired ratio.'),
	title: 'spartan/ui - Aspect Ratio',
};

@Component({
	selector: 'spartan-aspect-ratio',
	standalone: true,
	imports: [
		MainSectionDirective,
		CodeComponent,
		SectionIntroComponent,
		SectionSubHeadingComponent,
		TabsComponent,
		CodePreviewDirective,
		PageNavLinkComponent,
		PageNavComponent,
		PageBottomNavComponent,
		PageBottomNavLinkComponent,
		PageBottomNavPlaceholderComponent,
		AspectRatioPreviewComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro name="Aspect Ratio" lead="Displays content within a desired ratio." />

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-aspect-ratio-preview class="h-full w-full" />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-tabs class="mt-4" firstTab="Nx Plugin" secondTab="Angular CLI">
				<spartan-code firstTab language="sh" code="npx nx g @spartan-ng/cli:ui aspectratio" />
				<spartan-code secondTab language="sh" code="ng g @spartan-ng/cli:ui aspectratio" />
			</spartan-tabs>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="avatar" label="Avatar" />
				<spartan-page-bottom-nav-link direction="previous" href="alert-dialog" label="Alert Dialog" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav>
			<spartan-page-nav-link fragment="installation" label="Installation" />
			<spartan-page-nav-link fragment="usage" label="Usage" />
		</spartan-page-nav>
	`,
})
export default class AlertPageComponent {
	readonly defaultCode = defaultCode;
	readonly defaultSkeleton = defaultSkeleton;
	readonly defaultImports = defaultImports;
}
