/**
 * Retrieves the translation of text.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-i18n/
 */
import { __ } from '@wordpress/i18n';

/**
 * React hook that is used to mark the block wrapper element.
 * It provides all the necessary props like the class name.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/packages/packages-block-editor/#useblockprops
 */
import { InspectorControls, useBlockProps } from '@wordpress/block-editor';

/**
 * Lets webpack process CSS, SASS or SCSS files referenced in JavaScript files.
 * Those files can contain any CSS code that gets applied to the editor.
 *
 * @see https://www.npmjs.com/package/@wordpress/scripts#using-css
 */
import './editor.scss';
import { PanelBody, TextControl, TextareaControl } from '@wordpress/components';

/**
 * The edit function describes the structure of your block in the context of the
 * editor. This represents what the editor will render when the block is used.
 *
 * @see https://developer.wordpress.org/block-editor/reference-guides/block-api/block-edit-save/#edit
 *
 * @return {Element} Element to render.
 */
export default function Edit({ attributes: { title, subTitle, slides }, setAttributes: innerSetAttributes }) {
	function setAttributes(...args) {
		console.info("setAttributes(", ...args, ")")
		return innerSetAttributes(...args)
	}
	const { addGroup, currentGroups, setGroupProperty, removeGroup } = useGroupedFields({
		currentData: slides, group: {
			"title": "Title",
			"subTitle": "Sub Title",
			"link": "",
			"linkText": "This is a link"
		}
	})
	return (
		<>
			<InspectorControls>
				<PanelBody title={'Settings'}>
					{currentGroups.map((group, index) => (<>
						<TextControl
							label={'Title'}
							value={group.title}
							onChange={value => { setAttributes({ slides: setGroupProperty({ index, key: 'title', value }) }) }}
						/>
						<TextControl
							label={'Sub Title'}
							value={group.subTitle}
							onChange={value => { setAttributes({ slides: setGroupProperty({ index, key: 'subTitle', value }) }) }}
						/>
						<TextControl
							label={'Link Text'}
							value={group.linkText}
							onChange={value => { setAttributes({ slides: setGroupProperty({ index, key: 'linkText', value }) }) }}
						/>
						<button onClick={() => setAttributes({ slides: removeGroup(index) })}>- Remove slide</button>
						<hr />
					</>))}
					<button onClick={() => setAttributes({ slides: addGroup() })}>+ Add slide</button>
				</PanelBody >
			</InspectorControls >
			<p {...useBlockProps()}>
				<pre style={{whiteSpace: 'break-spaces'}}>
					{JSON.stringify(JSON.parse(slides), null, 2)}
				</pre>
			</p>
		</>
	);
}

function useGroupedFields({ group = {}, currentData }) {
	const currentGroups = JSON.parse(currentData)
	function addGroup() {
		return JSON.stringify([...currentGroups, group])
	}

	function removeGroup(index) {
		return JSON.stringify(currentGroups.filter((group, i) => i !== index))
	}

	function setGroupProperty({ index, key, value }) {
		return JSON.stringify(currentGroups.map((group, i) => {
			if (i === index) {
				group[key] = value
			}
			return group
		}))
	}

	return { addGroup, currentGroups, setGroupProperty, removeGroup }
}