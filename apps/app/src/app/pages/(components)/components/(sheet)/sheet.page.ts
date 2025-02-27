import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { hlmH4 } from '@spartan-ng/ui-typography-helm';
import { CodePreviewDirective } from '../../../../shared/code/code-preview.directive';
import { CodeComponent } from '../../../../shared/code/code.component';
import { MainSectionDirective } from '../../../../shared/layout/main-section.directive';
import { PageBottomNavLinkComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav-link.component';
import { PageBottomNavComponent } from '../../../../shared/layout/page-bottom-nav/page-bottom-nav.component';
import { PageNavLinkComponent } from '../../../../shared/layout/page-nav/page-nav-link.component';
import { PageNavComponent } from '../../../../shared/layout/page-nav/page-nav.component';
import { SectionIntroComponent } from '../../../../shared/layout/section-intro.component';
import { SectionSubHeadingComponent } from '../../../../shared/layout/section-sub-heading.component';
import { TabsComponent } from '../../../../shared/layout/tabs.component';
import { metaWith } from '../../../../shared/meta/meta.util';
import { SheetSidePreviewComponent, sideCode } from './sheet--side.preview';
import { SheetPreviewComponent, defaultCode, defaultImports, defaultSkeleton } from './sheet.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Sheet' },
	meta: metaWith(
		'spartan/ui - Sheet',
		'Extends the Dialog component to display content that complements the main content of the screen.',
	),
	title: 'spartan/ui - Sheet',
};
@Component({
	selector: 'spartan-sheet',
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
		SheetPreviewComponent,
		SheetSidePreviewComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Sheet"
				lead="Extends the Dialog component to display content that complements the main content of the screen."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-sheet-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-tabs class="mt-4" firstTab="Nx Plugin" secondTab="Angular CLI">
				<spartan-code firstTab language="sh" code="npx nx g @spartan-ng/cli:ui sheet" />
				<spartan-code secondTab language="sh" code="ng g @spartan-ng/cli:ui sheet" />
			</spartan-tabs>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-section-sub-heading id="examples">Examples</spartan-section-sub-heading>
			<h3 class="${hlmH4} mb-2 mt-6">Sides</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-sheet-side />
				</div>
				<spartan-code secondTab [code]="sideCode" />
			</spartan-tabs>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="skeleton" label="Skeleton" />
				<spartan-page-bottom-nav-link direction="previous" href="separator" label="Separator" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav>
			<spartan-page-nav-link fragment="installation" label="Installation" />
			<spartan-page-nav-link fragment="usage" label="Usage" />
			<spartan-page-nav-link fragment="examples" label="Examples" />
		</spartan-page-nav>
	`,
})
export default class LabelPageComponent {
	protected readonly defaultCode = defaultCode;
	protected readonly defaultSkeleton = defaultSkeleton;
	protected readonly defaultImports = defaultImports;
	protected readonly sideCode = sideCode;
}
