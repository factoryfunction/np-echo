import * as React from 'react'

import {
	Alignment,
	Button,
	Classes,
	Navbar,
	NavbarDivider,
	NavbarGroup,
	NavbarHeading,
	Switch as _Switch
} from '@blueprintjs/core'

import HelpingHands from '#assets/svgs/helping-hands-0.svg'
import './styles.css'

export const Home = props => {
	return (
		<div styleName="Home">
			<main>
				<div styleName="intro">
					<HelpingHands styleName="hands" />
					<div>
						<h1>People Helping People.</h1>
						<h2>
							Lorem Ipsum is simply dummy text of the printing and typesetting
							industry.
						</h2>
						<p>
							Lorem Ipsum has been the industry's standard dummy text ever since
							the 1500s, when an unknown printer took a galley of type and
							scrambled it to make a type specimen book. It has survived not
							only five centuries, but also the leap into electronic
							typesetting, remaining essentially unchanged. It was popularised
							in the 1960s with the release of Letraset sheets containing Lorem
							Ipsum passages, and more recently with desktop publishing software
							like Aldus PageMaker including versions of Lorem Ipsum.
						</p>
						<Button icon="document" text="Join Us" intent="success" large />
						<Button icon="document" text="Get Help" intent="danger" large />
					</div>
					{/* <div data-hidden>
						<h1>People</h1>
						<h1>Helping</h1>
						<h1>People.</h1>
					</div> */}
				</div>
			</main>
		</div>
	)
}
