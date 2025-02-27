import { RouteMeta } from '@analogjs/router';
import { Component } from '@angular/core';
import { hlmH4 } from '@spartan-ng/ui-typography-helm';
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
import { BadgeDestructiveComponent, destructiveCode } from './badge--destructive.example';
import { BadgeOutlineExampleComponent, outlineCode } from './badge--outline.example';
import { BadgeSecondaryExampleComponent, secondaryCode } from './badge--secondary.example';
import { BadgePreviewComponent, defaultCode, defaultImports, defaultSkeleton } from './badge.preview';

export const routeMeta: RouteMeta = {
	data: { breadcrumb: 'Badge' },
	meta: metaWith('spartan/ui - Badge', 'Makes a component look like a badge.'),
	title: 'spartan/ui - Badge',
};

@Component({
	selector: 'spartan-badge',
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
		BadgePreviewComponent,
		BadgeDestructiveComponent,
		BadgeOutlineExampleComponent,
		BadgeSecondaryExampleComponent,
	],
	template: `
		<section spartanMainSection>
			<spartan-section-intro name="Badge" lead="Makes a component look like a badge." />

			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-badge-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>

			<spartan-section-sub-heading id="installation">Installation</spartan-section-sub-heading>
			<spartan-tabs class="mt-4" firstTab="Nx Plugin" secondTab="Angular CLI">
				<spartan-code firstTab language="sh" code="npx nx g @spartan-ng/cli:ui badge" />
				<spartan-code secondTab language="sh" code="ng g @spartan-ng/cli:ui badge" />
			</spartan-tabs>

			<spartan-section-sub-heading id="usage">Usage</spartan-section-sub-heading>
			<div class="space-y-4">
				<spartan-code [code]="defaultImports" />
				<spartan-code [code]="defaultSkeleton" />
			</div>

			<spartan-section-sub-heading id="examples">Examples</spartan-section-sub-heading>
			<h3 class="${hlmH4} mb-2 mt-6">Default</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-badge-preview />
				</div>
				<spartan-code secondTab [code]="defaultCode" />
			</spartan-tabs>
			<h3 class="${hlmH4} mb-2 mt-6">Secondary</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-badge-secondary />
				</div>
				<spartan-code secondTab [code]="secondaryCode" />
			</spartan-tabs>
			<h3 class="${hlmH4} mb-2 mt-6">Outline</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-badge-outline />
				</div>
				<spartan-code secondTab [code]="outlineCode" />
			</spartan-tabs>
			<h3 class="${hlmH4} mb-2 mt-6">Destructive</h3>
			<spartan-tabs firstTab="Preview" secondTab="Code">
				<div spartanCodePreview firstTab>
					<spartan-badge-destructive />
				</div>
				<spartan-code secondTab [code]="destructiveCode" />
			</spartan-tabs>

			<spartan-page-bottom-nav>
				<spartan-page-bottom-nav-link href="button" label="Button" />
				<spartan-page-bottom-nav-link direction="previous" href="avatar" label="Avatar" />
			</spartan-page-bottom-nav>
		</section>
		<spartan-page-nav>
			<spartan-page-nav-link fragment="installation" label="Installation" />
			<spartan-page-nav-link fragment="usage" label="Usage" />
			<spartan-page-nav-link fragment="examples" label="Examples" />
		</spartan-page-nav>
	`,
})
export default class BadgePageComponent {
	readonly defaultCode = defaultCode;
	readonly defaultSkeleton = defaultSkeleton;
	readonly defaultImports = defaultImports;

	readonly secondaryCode = secondaryCode;
	readonly outlineCode = outlineCode;
	readonly destructiveCode = destructiveCode;
}
