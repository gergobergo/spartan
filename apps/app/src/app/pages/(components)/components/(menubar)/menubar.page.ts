import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
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
import { defaultCode, defaultImports, defaultSkeleton, MenubarPreviewComponent } from './menubar.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Menubar' },
	meta: metaWith(
		'spartan/ui - Menubar',
		'A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands.',
	),
	title: 'spartan/ui - Menubar',
};
@Component({
	selector: 'spartan-menubar',
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
		MenubarPreviewComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro
				name="Menubar"
				lead="A visually persistent menu common in desktop applications that provides quick access to a consistent set of commands."
			/>

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-menubar-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-tabs class="mt-4" firstTab="Nx Plugin" secondTab="Angular CLI">
				<spartan-code firstTab language="sh" code="npx nx g @spartan-ng/cli:ui menubar" />
				<spartan-code firstTab language="sh" code="ng g @spartan-ng/cli:ui menubar" />
			</spartan-tabs>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="popover" label="Popover" />
				<spartan-page-bottom-nav-link direction="previous" href="label" label="Label" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav>
			<spartan-page-nav-link fragment="installation" label="Installation" />
			<spartan-page-nav-link fragment="usage" label="Usage" />
		</spartan-page-nav>
	`,
})
export default class LabelPageComponent {
	protected readonly defaultCode = defaultCode;
	protected readonly defaultSkeleton = defaultSkeleton;
	protected readonly defaultImports = defaultImports;
}
