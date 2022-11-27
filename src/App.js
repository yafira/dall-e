import React from 'react'
import { useState } from 'react'
import { Configuration, OpenAIApi } from 'openai'
import './style.css'

function App() {
	const [userPrompt, setPrompt] = useState('')
	const [result, setResult] = useState('')
	const [loading, setLoading] = useState(false)
	const api_key =
		process.env.REACT_APP_OPENAI_API_KEY || process.env.OPENAI_API_KEY
	const configuration = new Configuration({
		apiKey: api_key,
	})
	const openai = new OpenAIApi(configuration)
	console.log(api_key)

	const generateImage = async () => {
		setLoading(true)
		const response = await openai.createImage({
			prompt: userPrompt,
			n: 1,
			size: '512x512',
		})
		setLoading(false)
		setResult(response.data.data[0].url)
	}

	return (
		<div className='app-main'>
			{loading ? (
				<>
					<h2>Generating in effect...</h2>
					<div class='spinner'>
						<div></div>
						<div></div>
					</div>
				</>
			) : (
				<>
					<h2>Generate an Image using Dall-E API</h2>
					<textarea
						className='app-input'
						placeholder='bears with cotton candy in starry night'
						onChange={(e) => setPrompt(e.target.value)}
						rows='10'
						cols='40'
					/>
					<button className='clay' onClick={generateImage}>
						generate an image
						<span type='img' alt='aria-label'>
							{' 🎨'}
						</span>
					</button>
					{result.length > 0 ? (
						<img className='result-image' src={result} alt='result' />
					) : (
						<></>
					)}
				</>
			)}
		</div>
	)
}

export default App
